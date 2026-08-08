import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, CalendarCheck, Car, HeartHandshake, Palette, ShieldCheck, Sparkles, Star } from "lucide-react";
import { Eyebrow } from "./eyebrow";
import { BOOKING_URL } from "./site-config";

const services = [
  ["Luxury Spa Experience", "A restorative six-step pedicure ritual for softer, renewed feet.", "$85"],
  ["Gel Manicure", "Long-wear gel colour with a glossy, chip-resistant finish.", "$50"],
  ["Acrylic Full Set", "Custom length and shape, finished with colour made for you.", "$65"],
];

const spaSteps = [
  ["Detox Crystals", "A warm aromatic soak awakens the senses and prepares skin for renewal."],
  ["Bubbling Activator", "Therapeutic bubbles soften and deeply hydrate before towel drying."],
  ["Sugar Scrub", "A generous exfoliating massage revives dull skin for a smooth finish."],
  ["Cream Mask", "A rich mask purifies, refreshes and tightens the appearance of skin."],
  ["Massage Lotion", "Velvety lotion delivers lasting moisture and a soft, silky feel."],
  ["Massage Oil Candle", "Warm, silky oil nourishes and soothes dry, tired or stressed feet."],
];

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["NailSalon", "HealthAndBeautyBusiness"],
    name: "Top Ten Nails Spa",
    alternateName: "Best Nail Salon in Vernon BC - Top Ten Nails",
    description: "Top Ten Nails Spa is the premier nail salon in Vernon, BC, offering luxury spa pedicures, gel manicures, acrylic full sets, and custom nail art under new management.",
    url: "https://www.top10nailsspa.com",
    image: "https://www.top10nailsspa.com/images/top-ten-salon-interior-wide.webp",
    logo: "https://www.top10nailsspa.com/logo-topten.svg",
    telephone: "+1-877-330-4318",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3208 30th Ave",
      addressLocality: "Vernon",
      addressRegion: "BC",
      postalCode: "V1T 2C5",
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 50.2673,
      longitude: -119.2720,
    },
    areaServed: {
      "@type": "City",
      name: "Vernon, BC",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "10:00",
        closes: "17:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Nail Salon & Spa Services in Vernon, BC",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Luxury Spa Experience Pedicure",
            description: "A restorative six-step pedicure ritual for softer, renewed feet in Vernon, BC.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Gel Manicure",
            description: "Long-wear gel colour with a glossy, chip-resistant finish.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Acrylic Full Set",
            description: "Custom length and shape acrylic nail enhancements.",
          },
        },
      ],
    },
  };

  return (
    <main id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="hero reopening-hero" id="top">
        <div className="hero-copy">
          <Eyebrow>Best Nail Salon in Vernon, BC · New Management</Eyebrow>
          <h1>Vernon’s premier<br />nail salon &amp; spa.</h1>
          <p className="lede">Top Ten Nails Spa is proud to be recognized as the best nail salon in Vernon, BC. Experience luxury spa pedicures, glossy gel manicures, durable acrylic sets, and meticulous sanitization in a beautiful downtown setting.</p>
          <div className="hero-actions">
            <a className="button" href={BOOKING_URL} target="_blank" rel="noreferrer">Book with BookGuru <ArrowUpRight aria-hidden="true" /></a>
            <Link className="text-link" href="#luxury-spa">Discover Luxury Spa <ArrowDown aria-hidden="true" /></Link>
          </div>
          <div className="trust-row">
            <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
              <Sparkles aria-hidden="true" style={{ width: 13, height: 13, color: "var(--gold)" }} />
              Premium products
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
              <ShieldCheck aria-hidden="true" style={{ width: 13, height: 13, color: "var(--gold)" }} />
              Strict sanitization
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
              <Star aria-hidden="true" style={{ width: 13, height: 13, color: "var(--gold)" }} />
              Top-tier artists
            </span>
          </div>
        </div>
        <div className="hero-image">
          <Image src="/images/top-ten-salon-interior.webp" alt="Interior view of Top Ten Nails Spa, the best nail salon in Vernon, BC" fill priority sizes="(max-width: 800px) 100vw, 55vw" />
          <div className="offer-badge"><span>Grand re-opening</span><strong>10% off</strong><small>All services · Aug 1–31</small></div>
        </div>
      </section>

      <section className="reopening-offer" aria-labelledby="reopening-offer-title">
        <div className="reopening-offer-meta">
          <span>Grand re-opening</span>
          <small>August 1–31</small>
        </div>
        <div className="reopening-offer-value">
          <strong id="reopening-offer-title">10%</strong>
          <span>off all<br />services</span>
        </div>
        <div className="reopening-offer-action">
          <p>Celebrate our fresh start with savings on gel manicures, spa pedicures, acrylic sets and more at Vernon's best nail salon.</p>
          <a className="button" href={BOOKING_URL} target="_blank" rel="noreferrer">Book &amp; save 10% <ArrowUpRight aria-hidden="true" /></a>
        </div>
      </section>

      <section className="management-story" aria-labelledby="fresh-start-title">
        <div className="management-intro">
          <Eyebrow>The Best Nail Salon Experience in Downtown Vernon</Eyebrow>
          <h2 id="fresh-start-title">New management.<br />A higher standard for nail care.</h2>
          <p>We have refreshed Top Ten Nails Spa with premium products, exacting sanitization standards and a talented team ready to make every visit feel considered from start to finish.</p>
        </div>
        <div className="management-highlights">
          <article>
            <HeartHandshake aria-hidden="true" style={{ width: 24, height: 24, color: "var(--coral-dark)", marginBottom: 8 }} />
            <h3>Friendly expertise</h3>
            <p>Experienced nail technicians who listen, consult and create with care.</p>
          </article>
          <article>
            <Palette aria-hidden="true" style={{ width: 24, height: 24, color: "var(--coral-dark)", marginBottom: 8 }} />
            <h3>Colour, your way</h3>
            <p>Hundreds of on-trend gel colours plus detailed custom nail art.</p>
          </article>
          <article>
            <CalendarCheck aria-hidden="true" style={{ width: 24, height: 24, color: "var(--coral-dark)", marginBottom: 8 }} />
            <h3>Book with ease</h3>
            <p>Choose your service and time online through BookGuru.</p>
          </article>
          <aside className="parking-guide">
            <div>
              <strong style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                <Car aria-hidden="true" style={{ width: 18, height: 18, color: "var(--gold)" }} />
                Where to park
              </strong>
              <p>Metered street parking on 30th Ave is closest. For longer appointments, try the 29th St Lot by the Library or the downtown Parkade at 31st Ave &amp; 33rd St.</p>
              <span><b>$2 parking credit:</b> We deduct $2 from bills over $50 to help cover your parking.</span>
            </div>
            <a href="https://www.vernon.ca/roads-transportation/parking" target="_blank" rel="noreferrer">View City parking map <ArrowUpRight aria-hidden="true" /></a>
          </aside>
        </div>
      </section>

      <section className="section services">
        <div className="section-heading"><div><Eyebrow>Nail Salon Services in Vernon, BC</Eyebrow><h2>Care for every occasion.</h2></div><p>From polish refreshes to restorative nail rituals, every visit at Vernon's best nail salon begins with a thoughtful consultation.</p></div>
        <div className="simple-service-grid">{services.map(([name, note, price], i) => <article key={name}><span>0{i + 1}</span><h3>{name}</h3><p>{note}</p><strong>{price}</strong></article>)}</div>
        <Link className="text-link centered" href="/services">View all services <ArrowUpRight aria-hidden="true" /></Link>
      </section>

      <section className="luxury-spa" id="luxury-spa" aria-labelledby="luxury-spa-title">
        <div className="luxury-spa-visual">
          <Image src="/images/luxury-spa-pedicure-ritual.webp" alt="Luxury spa pedicure bath at Top Ten Nails Spa, the best nail salon in Vernon, BC" fill sizes="(max-width: 900px) 100vw, 42vw" />
          <div className="luxury-spa-price"><strong>$85</strong><span>75 minutes</span></div>
        </div>
        <div className="luxury-spa-copy">
          <Eyebrow>Luxury Spa Experience in Vernon</Eyebrow>
          <h2 id="luxury-spa-title">Six steps.<br />One unhurried reset.</h2>
          <p className="luxury-intro">A full-body exhale for tired feet. This premium pedicure layers a detoxifying soak, exfoliation, rich hydration and a warm oil finish into one restorative ritual.</p>
          <ol className="spa-steps">
            {spaSteps.map(([title, description], index) => <li key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{description}</p></div></li>)}
          </ol>
          <a className="button luxury-book" href={BOOKING_URL} target="_blank" rel="noreferrer">Book the Luxury Spa Experience <ArrowUpRight aria-hidden="true" /></a>
        </div>
      </section>

      <section className="brand-story">
        <Eyebrow>The Top Ten standard</Eyebrow>
        <h2>Clean tools. Premium products.<br />Beautiful, lasting results.</h2>
        <p>Our refreshed salon pairs strict sanitization with careful technique and service that always feels personal.</p>
        <Link className="button" href="/about">Our new chapter <ArrowRight aria-hidden="true" /></Link>
      </section>

      <section className="section gallery-preview">
        <div className="section-heading"><div><Eyebrow>Fresh from our table</Eyebrow><h2>Bring us your nail inspo.</h2></div><Link className="text-link" href="/gallery">View gallery <ArrowRight aria-hidden="true" /></Link></div>
        <div className="nail-preview nail-preview-three">
          <figure><Image src="/images/pink-floral-nails.webp" alt="Pink floral almond nail art created at Top Ten Nails Spa in Vernon, BC" fill sizes="(max-width: 700px) 100vw, 42vw" /></figure>
          <figure><Image src="/images/classic-french-manicure.webp" alt="Classic white French manicure gel nails in Vernon, BC" fill sizes="(max-width: 700px) 100vw, 29vw" /></figure>
          <figure><Image src="/images/colourful-floral-nail-art.webp" alt="Colourful floral nail art design by Vernon's top nail technicians" fill sizes="(max-width: 700px) 100vw, 29vw" /></figure>
        </div>
      </section>

      <section className="reviews-section">
        <div className="reviews-heading"><Eyebrow>Why we are Vernon's best nail salon</Eyebrow><h2>Feel-good nail care,<br />from hello to top coat.</h2><p>Our new management team is raising the standard for every visit with warmth, careful technique and a clean, comfortable setting.</p></div>
        <div className="review-grid">
          <article>
            <div className="stars" style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
              <HeartHandshake aria-hidden="true" style={{ width: 14, height: 14 }} />
              OUR STANDARD · 01
            </div>
            <h3>Thoughtful service</h3>
            <p>Appointments designed around your preferences, comfort and personal style.</p>
          </article>
          <article>
            <div className="stars" style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
              <ShieldCheck aria-hidden="true" style={{ width: 14, height: 14 }} />
              OUR STANDARD · 02
            </div>
            <h3>Meticulous hygiene</h3>
            <p>Strict sanitization, clean preparation and premium products at every step.</p>
          </article>
          <article>
            <div className="stars" style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
              <Palette aria-hidden="true" style={{ width: 14, height: 14 }} />
              OUR STANDARD · 03
            </div>
            <h3>Modern artistry</h3>
            <p>Trend-led colours and detailed custom designs brought to life by skilled artists.</p>
          </article>
        </div>
        <a className="button review-cta" href={BOOKING_URL} target="_blank" rel="noreferrer">Experience Top Ten <ArrowUpRight aria-hidden="true" /></a>
      </section>
    </main>
  );
}
