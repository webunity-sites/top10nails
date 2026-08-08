import { NextResponse } from 'next/server';

const DEFAULT_BUSINESS = 'top-ten-nails-spa';
const UPSTREAM_CANDIDATES = [
  'https://bookguru.io/api/business/details',
  'https://bookguru.io/business/details',
];

function getCatalogueFromPayload(payload) {
  const business = payload?.business && typeof payload.business === 'object' ? payload.business : null;
  const sourceCatalogue = business?.businessCatalogue || business?.catalogue || payload?.businessCatalogue || payload?.catalogue || [];
  return {
    business,
    sourceCatalogue,
  };
}

function setCatalogueOnPayload(payload, business, catalogue) {
  const nextPayload = { ...payload };

  if (business) {
    const nextBusiness = { ...business };
    if (Array.isArray(nextBusiness.businessCatalogue)) {
      nextBusiness.businessCatalogue = catalogue;
    }
    if (Array.isArray(nextBusiness.catalogue)) {
      nextBusiness.catalogue = catalogue;
    }
    nextPayload.business = nextBusiness;
    return nextPayload;
  }

  if (Array.isArray(nextPayload.businessCatalogue)) {
    nextPayload.businessCatalogue = catalogue;
  }
  if (Array.isArray(nextPayload.catalogue)) {
    nextPayload.catalogue = catalogue;
  }

  return nextPayload;
}

function filterCatalogueByCategory(payload, categoryFilter) {
  if (!categoryFilter) return payload;

  const normalizedFilter = categoryFilter.trim().toLowerCase();
  if (!normalizedFilter) return payload;

  const { business, sourceCatalogue } = getCatalogueFromPayload(payload);
  if (!Array.isArray(sourceCatalogue)) return payload;

  const filteredCatalogue = sourceCatalogue.filter((category) =>
    String(category?.categoryName || '').toLowerCase().includes(normalizedFilter)
  );

  return setCatalogueOnPayload(payload, business, filteredCatalogue);
}

function filterCatalogueByDuration(payload, durationMinutes) {
  if (!Number.isFinite(durationMinutes)) return payload;

  const { business, sourceCatalogue } = getCatalogueFromPayload(payload);
  if (!Array.isArray(sourceCatalogue)) return payload;

  const filteredCatalogue = sourceCatalogue
    .map((category) => {
      const services = Array.isArray(category?.categoryServices) ? category.categoryServices : [];
      const categoryServices = services.filter((service) => Number(service?.duration) === durationMinutes);
      return {
        ...category,
        categoryServices,
      };
    })
    .filter((category) => Array.isArray(category.categoryServices) && category.categoryServices.length > 0);

  return setCatalogueOnPayload(payload, business, filteredCatalogue);
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const businessURL =
      searchParams.get('businessURL') ||
      searchParams.get('businessUrl') ||
      searchParams.get('url') ||
      searchParams.get('slug') ||
      DEFAULT_BUSINESS;
    const category = searchParams.get('category') || searchParams.get('catalogueCategory') || '';
    const durationParam =
      searchParams.get('duration') ||
      searchParams.get('durationMinutes') ||
      searchParams.get('minutes') ||
      '';
    const durationMinutes = Number.parseInt(durationParam, 10);

    let lastStatus = 502;
    let lastError = 'Unable to fetch business details';

    for (const baseUrl of UPSTREAM_CANDIDATES) {
      const upstreamUrl = `${baseUrl}?businessURL=${encodeURIComponent(businessURL)}`;
      const upstream = await fetch(upstreamUrl, {
        method: 'GET',
        cache: 'no-store',
        headers: {
          Accept: 'application/json',
        },
      });

      const data = await upstream.json().catch(() => ({}));

      if (upstream.ok) {
        const categoryFiltered = filterCatalogueByCategory(data, category);
        const filteredData = filterCatalogueByDuration(categoryFiltered, durationMinutes);
        return NextResponse.json(filteredData, { status: 200 });
      }

      lastStatus = upstream.status || 502;
      lastError = data?.error || `Upstream error from ${baseUrl}`;
    }

    return NextResponse.json(
      {
        success: false,
        error: lastError,
      },
      { status: lastStatus }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error?.message || 'Unexpected server error',
      },
      { status: 500 }
    );
  }
}
