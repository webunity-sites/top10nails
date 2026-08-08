import Image from "next/image";
import { ArrowUpRight, CalendarCheck, CheckCircle2, Sparkles } from "lucide-react";
import { Eyebrow } from "../eyebrow";
import { BOOKING_URL } from "../site-config";

export const metadata = {
  title: "Nail & Waxing Services in Vernon · Top Ten Nails Spa",
  description: "Browse all official manicure, pedicure, nail enhancement, kids and waxing services at Top Ten Nails Spa in Vernon, BC.",
};

const bookingUrl = BOOKING_URL;

const processSteps = [
  { title: "Choose your service online", icon: CalendarCheck, num: "01" },
  { title: "Receive instant confirmation", icon: CheckCircle2, num: "02" },
  { title: "Arrive ready to be cared for", icon: Sparkles, num: "03" },
];

const FALLBACK_CATALOGUE = [
  {
    categoryName: "Pedicure & Manicure",
    categoryServices: [
      { serviceName: "Pedicure Regular", duration: 45, price: "50", description: "A classic pedicure to refresh and beautify your feet, including nail shaping, cuticle care, a relaxing massage, and regular polish application." },
      { serviceName: "Manicure Regular", duration: 30, price: "40", description: "A traditional manicure to groom your hands and nails, featuring nail shaping, cuticle maintenance, a hand massage, and regular polish." },
      { serviceName: "Pedicure & Manicure Regular", duration: 90, price: "85", description: "Enjoy a complete pampering session for both your hands and feet, including a regular manicure and pedicure with polish." },
      { serviceName: "Pedicure & Manicure Gel", duration: 105, price: "105", description: "A combined gel manicure and pedicure service for long-lasting, chip-free color on both your hands and feet." },
      { serviceName: "Pedicure Gel", duration: 45, price: "60", description: "Experience a long-lasting gel pedicure for beautiful, chip-free toes, complete with nail shaping, cuticle work, and gel polish application." },
      { serviceName: "Manicure Gel", duration: 45, price: "50", description: "A durable gel manicure that provides a high-shine, chip-resistant finish for weeks, including nail shaping and cuticle care." },
      { serviceName: "Pedicure Men", duration: 45, price: "50", description: "A specialized pedicure service tailored for men, focusing on nail grooming, cuticle care, exfoliation, and a soothing foot massage." },
      { serviceName: "Luxury spa experience Pedicure", duration: 60, price: "75", description: "Indulge in an ultimate spa pedicure experience, featuring extended massage, premium products, and deep hydration for your feet." },
      { serviceName: "Signature Pedicure Herbal", duration: 75, price: "85", description: "Soak your feet in warm water with natural botanical herbs, fresh orange slices, and a sugar scrub finish." },
    ],
  },
  {
    categoryName: "Nails",
    categoryServices: [
      { serviceName: "Acrylic Full Set", duration: 60, price: "65", description: "Application of a full set of acrylic nail enhancements to add length and strength, customized to your desired shape and style." },
      { serviceName: "Acrylic Fill", duration: 60, price: "55", description: "Maintenance service for existing acrylic nails, involving filling in the growth area and rebalancing the nail structure." },
      { serviceName: "Biogel Full Set", duration: 60, price: "70", description: "Application of a full set of Biogel nail enhancements, offering a flexible and natural-looking finish for added strength and beauty." },
      { serviceName: "Biogel Fill", duration: 60, price: "60", description: "Maintenance service for existing Biogel nails, including filling the growth area and ensuring the integrity of the nail enhancement." },
    ],
  },
  {
    categoryName: "Add-ons",
    categoryServices: [
      { serviceName: "Gel Polish Change Hands", duration: 30, price: "35", description: "Quick refresh for your hands, removing old gel polish and applying a new color without a full manicure service." },
      { serviceName: "Gel Polish Change Feet", duration: 30, price: "45", description: "A quick service to remove existing gel polish from your feet and apply a fresh new gel color." },
      { serviceName: "French", duration: 15, price: "10", description: "Add a classic and elegant French tip design to your manicure or pedicure for a sophisticated look." },
      { serviceName: "Paraffin Wax", duration: 15, price: "10", description: "A warming paraffin wax treatment to deeply moisturize and soften your skin, perfect for hands or feet." },
      { serviceName: "Nail Art Design", duration: 15, price: "5", description: "Personalize your nails with unique and creative nail art designs, priced per nail or complexity." },
      { serviceName: "Nail Repair", duration: 15, price: "10", description: "Service to fix a broken, chipped, or damaged nail, restoring its appearance and strength." },
      { serviceName: "Toe Nail Cut", duration: 15, price: "20", description: "A standalone service for precise trimming and shaping of your toenails." },
      { serviceName: "Nail Removal", duration: 30, price: "30", description: "Professional and safe removal of artificial nail enhancements such as acrylic or gel, minimizing damage to natural nails." },
      { serviceName: "Shellac Removal", duration: 15, price: "10", description: "Gentle and safe removal of Shellac or similar gel polish from your nails." },
      { serviceName: "Cat Eye Gel", duration: 15, price: "10", description: "Add a mesmerizing magnetic 'cat eye' effect to your gel polish for a unique and trendy finish." },
      { serviceName: "Long Nails", duration: 15, price: "10", description: "An additional charge for services on extra long nails, accounting for the increased time and product required." },
    ],
  },
  {
    categoryName: "Kids Under 12",
    categoryServices: [
      { serviceName: "Kid Pedicure Regular", duration: 30, price: "30", description: "A fun and gentle pedicure service for children under 12, including nail shaping, light massage, and regular polish." },
      { serviceName: "Kid Pedicure Gel", duration: 30, price: "40", description: "A special gel pedicure for kids under 12, offering a durable and vibrant polish that lasts longer." },
      { serviceName: "Kid Regular Polish Change", duration: 15, price: "15", description: "A quick polish change for kids, removing old regular polish and applying a fresh new color." },
      { serviceName: "Kid Regular Polish Change Gel", duration: 15, price: "20", description: "A quick gel polish change for kids, removing old gel polish and applying a fresh new color." },
      { serviceName: "Kid Manicure Regular", duration: 15, price: "20", description: "A gentle manicure service for children under 12, including nail shaping, light cuticle care, and regular polish." },
      { serviceName: "Kid Manicure Gel", duration: 30, price: "30", description: "A special gel manicure for kids under 12, providing a long-lasting and chip-free polish for their little hands." },
    ],
  },
  {
    categoryName: "Waxing",
    categoryServices: [
      { serviceName: "Tinting Eyebrows", duration: 15, price: "20", description: "Enhance your eyebrows with a tinting service, adding definition and depth to your natural brow color." },
      { serviceName: "Eyebrows Wax & Tinting", duration: 30, price: "30", description: "Achieve perfectly shaped and defined eyebrows with a combination of waxing and tinting services." },
      { serviceName: "Eyebrows Wax", duration: 15, price: "15", description: "Professional eyebrow waxing to shape and clean up your brows, creating a polished and defined look." },
      { serviceName: "Upper Lip Wax", duration: 15, price: "10", description: "Quick and effective waxing service to remove unwanted hair from the upper lip area." },
      { serviceName: "Chin Wax", duration: 15, price: "10", description: "Targeted waxing service to remove unwanted hair from the chin area, leaving skin smooth." },
      { serviceName: "Cheek Wax", duration: 15, price: "15", description: "Gentle waxing service to remove fine hair from the cheek area, resulting in smoother skin." },
      { serviceName: "Full Face Wax", duration: 30, price: "40", description: "Comprehensive waxing service for the entire face, including forehead, cheeks, upper lip, and chin, for smooth results." },
      { serviceName: "Full Legs & Bikini Wax", duration: 45, price: "50", description: "Complete waxing service for both full legs and the bikini line, leaving you smooth and confident." },
      { serviceName: "Half Arms Wax", duration: 30, price: "25", description: "Waxing service for either the upper or lower half of your arms, removing unwanted hair for smooth skin." },
      { serviceName: "Full Arms Wax", duration: 30, price: "40", description: "Complete waxing service for both full arms, from shoulder to wrist, for smooth and hair-free skin." },
      { serviceName: "Half Legs Wax", duration: 30, price: "35", description: "Waxing service for either the upper or lower half of your legs, providing smooth and hair-free skin." },
      { serviceName: "Full Legs Wax", duration: 45, price: "50", description: "Comprehensive waxing service for both full legs, from thigh to ankle, for long-lasting smoothness." },
      { serviceName: "Bikini Line Wax", duration: 30, price: "30", description: "Classic bikini line waxing service to tidy up and remove hair from the areas visible outside a standard bikini." },
      { serviceName: "Brazilian Wax", duration: 45, price: "50", description: "Complete hair removal from the bikini area, leaving a small strip or triangle, or entirely bare, as per your preference." },
      { serviceName: "Back Wax", duration: 45, price: "45", description: "Professional waxing service to remove unwanted hair from the entire back area, leaving skin smooth." },
      { serviceName: "Neck Wax", duration: 15, price: "20", description: "Targeted waxing service to remove unwanted hair from the neck area, providing a clean and smooth finish." },
      { serviceName: "Shoulder Wax", duration: 30, price: "25", description: "Waxing service to remove unwanted hair from the shoulder area, creating a smooth and clean look." },
      { serviceName: "Under Arms Wax", duration: 30, price: "25", description: "Quick and effective waxing service to remove hair from the underarm area, leaving skin smooth." },
    ],
  },
];

async function getCatalogue() {
  try {
    const res = await fetch("https://bookguru.io/api/business/details?businessURL=top-ten-nails-spa", {
      next: { revalidate: 3600 },
    });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data?.business?.businessCatalogue) && data.business.businessCatalogue.length > 0) {
        return data.business.businessCatalogue;
      }
    }
  } catch (error) {
    console.warn("Using static catalogue fallback:", error?.message);
  }
  return FALLBACK_CATALOGUE;
}

export default async function Services() {
  const catalogue = await getCatalogue();
  const totalServices = catalogue.reduce((acc, cat) => acc + (cat.categoryServices?.length || 0), 0);

  return (
    <main id="main">
      <section className="page-hero">
        <Eyebrow>{totalServices} services · instant confirmation</Eyebrow>
        <h1>Made for your moment.</h1>
        <p>Explore our complete manicure, pedicure, nail enhancement, kids and waxing menu at Top Ten Nails Spa in Vernon, BC.</p>
      </section>

      <section className="section menu">
        <div className="service-jump" aria-label="Service categories">
          {catalogue.map((cat) => {
            const categoryName = cat.categoryName || "Services";
            const slug = categoryName.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and");
            return (
              <a href={`#${slug}`} key={categoryName}>
                {categoryName}
              </a>
            );
          })}
        </div>

        {catalogue.map((cat) => {
          const categoryName = cat.categoryName || "Services";
          const servicesList = Array.isArray(cat.categoryServices) ? cat.categoryServices : [];
          const slug = categoryName.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and");

          return (
            <div className="menu-group" id={slug} key={categoryName}>
              <div className="menu-title">
                <h2>{categoryName}</h2>
                <span>{servicesList.length} services</span>
              </div>
              {servicesList.map((service) => {
                const name = service.serviceName;
                const duration = service.duration ? `${service.duration} min` : "";
                const price = service.price ? `$${service.price}` : "";
                const description = service.description || "";

                return (
                  <article key={name}>
                    <div>
                      <h3>{name}</h3>
                      {description && <p>{description}</p>}
                    </div>
                    <span>{duration}</span>
                    <strong>{price}</strong>
                    <a href={bookingUrl} target="_blank" rel="noreferrer" aria-label={`Book ${name}`}>
                      Book <ArrowUpRight aria-hidden="true" />
                    </a>
                  </article>
                );
              })}
            </div>
          );
        })}
      </section>

      <section className="service-luxury-callout">
        <div className="service-luxury-image">
          <Image src="/images/luxury-spa-pedicure-ritual.webp" alt="A serene luxury pedicure ritual with a foot bath, warm candle and spa treatments" fill sizes="(max-width: 800px) 100vw, 38vw" />
        </div>
        <div>
          <Eyebrow>Our signature pedicure · $75 · 60 min</Eyebrow>
          <h2>Luxury Spa Experience</h2>
          <p>Give tired feet a complete reset with six restorative stages: Detox Crystals, Bubbling Activator, Sugar Scrub, Cream Mask, Massage Lotion and a warm Massage Oil Candle finish.</p>
          <div className="callout-actions">
            <a className="button" href={bookingUrl} target="_blank" rel="noreferrer">
              Book this experience <ArrowUpRight aria-hidden="true" />
            </a>
            <a className="button button-secondary" href="/services/featured">
              Learn more
            </a>
          </div>
        </div>
      </section>

      <section className="process">
        <Eyebrow>What to expect</Eyebrow>
        <div>
          {processSteps.map(({ title, icon: Icon, num }) => (
            <article key={title}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
                <Icon aria-hidden="true" style={{ width: 16, height: 16 }} />
                {num}
              </span>
              <h3>{title}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="page-cta">
        <h2>Ready to choose your time?</h2>
        <a className="button" href={bookingUrl} target="_blank" rel="noreferrer">
          Book online <ArrowUpRight aria-hidden="true" />
        </a>
      </section>
    </main>
  );
}
