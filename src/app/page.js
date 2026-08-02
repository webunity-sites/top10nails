import Image from "next/image";
import Link from "next/link";
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
    "@type": "NailSalon",
    name: "Top Ten Nails Spa",
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
  };

  return (
    <main id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="hero reopening-hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">New management · Fresh look</p>
          <h1>Vernon’s nail ritual, refreshed.</h1>
          <p className="lede">Top Ten Nails Spa is entering a new chapter with premium products, exacting sanitization standards and talented nail artists ready to bring your inspiration to life.</p>
          <div className="hero-actions">
            <a className="button" href={BOOKING_URL} target="_blank" rel="noreferrer">Book with BookGuru <span>↗</span></a>
            <Link className="text-link" href="#luxury-spa">Discover Luxury Spa <span>↓</span></Link>
          </div>
          <div className="trust-row"><span>Premium products</span><i>✦</i><span>Strict sanitization</span><i>✦</i><span>Top-tier artists</span></div>
        </div>
        <div className="hero-image">
          <Image src="/images/top-ten-salon-interior.webp" alt="The bright, newly refreshed interior at Top Ten Nails Spa in Vernon" fill priority sizes="(max-width: 800px) 100vw, 55vw" />
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
          <p>Celebrate our fresh start with savings on gel manicures, spa pedicures, acrylic sets and more.</p>
          <a className="button" href={BOOKING_URL} target="_blank" rel="noreferrer">Book &amp; save 10% <span>↗</span></a>
        </div>
      </section>

      <section className="management-story" aria-labelledby="fresh-start-title">
        <div className="management-intro">
          <p className="eyebrow">A fresh start downtown</p>
          <h2 id="fresh-start-title">New management.<br />A more polished experience.</h2>
          <p>We have refreshed Top Ten Nails Spa with premium products, exacting sanitization standards and a talented team ready to make every visit feel considered from start to finish.</p>
        </div>
        <div className="management-highlights">
          <article><h3>Friendly expertise</h3><p>Experienced nail technicians who listen, consult and create with care.</p></article>
          <article><h3>Colour, your way</h3><p>Hundreds of on-trend gel colours plus detailed custom nail art.</p></article>
          <article><h3>Book with ease</h3><p>Choose your service and time online through BookGuru.</p></article>
          <aside className="parking-guide">
            <div>
              <strong>Where to park</strong>
              <p>Metered street parking on 30th Ave is closest. For longer appointments, try the 29th St Lot by the Library or the downtown Parkade at 31st Ave &amp; 33rd St.</p>
              <span><b>$2 parking credit:</b> We deduct $2 from bills over $50 to help cover your parking.</span>
            </div>
            <a href="https://www.vernon.ca/roads-transportation/parking" target="_blank" rel="noreferrer">View City parking map <span>↗</span></a>
          </aside>
        </div>
      </section>

      <section className="section services">
        <div className="section-heading"><div><p className="eyebrow">Our services</p><h2>Care for every occasion.</h2></div><p>From polish refreshes to restorative nail rituals, every visit begins with a thoughtful consultation.</p></div>
        <div className="simple-service-grid">{services.map(([name, note, price], i) => <article key={name}><span>0{i + 1}</span><h3>{name}</h3><p>{note}</p><strong>{price}</strong></article>)}</div>
        <Link className="text-link centered" href="/services">View all services <span>↗</span></Link>
      </section>

      <section className="luxury-spa" id="luxury-spa" aria-labelledby="luxury-spa-title">
        <div className="luxury-spa-visual">
          <Image src="/images/luxury-spa-pedicure-ritual.webp" alt="A serene luxury pedicure ritual with a bubbling foot bath, warm candle and spa treatments" fill sizes="(max-width: 900px) 100vw, 42vw" />
          <div className="luxury-spa-price"><strong>$85</strong><span>75 minutes</span></div>
        </div>
        <div className="luxury-spa-copy">
          <p className="eyebrow">Luxury Spa Experience</p>
          <h2 id="luxury-spa-title">Six steps.<br />One unhurried reset.</h2>
          <p className="luxury-intro">A full-body exhale for tired feet. This premium pedicure layers a detoxifying soak, exfoliation, rich hydration and a warm oil finish into one restorative ritual.</p>
          <ol className="spa-steps">
            {spaSteps.map(([title, description], index) => <li key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{description}</p></div></li>)}
          </ol>
          <a className="button luxury-book" href={BOOKING_URL} target="_blank" rel="noreferrer">Book the Luxury Spa Experience <span>↗</span></a>
        </div>
      </section>

      <section className="brand-story">
        <p className="eyebrow">The Top Ten standard</p>
        <h2>Clean tools. Premium products.<br />Beautiful, lasting results.</h2>
        <p>Our refreshed salon pairs strict sanitization with careful technique and service that always feels personal.</p>
        <Link className="button" href="/about">Our new chapter <span>→</span></Link>
      </section>

      <section className="section gallery-preview">
        <div className="section-heading"><div><p className="eyebrow">Fresh from our table</p><h2>Bring us your nail inspo.</h2></div><Link className="text-link" href="/gallery">View gallery <span>→</span></Link></div>
        <div className="nail-preview nail-preview-three">
          <figure><Image src="/images/pink-floral-nails.webp" alt="Bright pink floral almond nails" fill sizes="(max-width: 700px) 100vw, 42vw" /></figure>
          <figure><Image src="/images/classic-french-manicure.webp" alt="Classic white French manicure" fill sizes="(max-width: 700px) 100vw, 29vw" /></figure>
          <figure><Image src="/images/colourful-floral-nail-art.webp" alt="Colourful floral nail art with bright French tips" fill sizes="(max-width: 700px) 100vw, 29vw" /></figure>
        </div>
      </section>

      <section className="reviews-section">
        <div className="reviews-heading"><p className="eyebrow">Why choose Top Ten?</p><h2>Feel-good nail care,<br />from hello to top coat.</h2><p>Our new management team is raising the standard for every visit with warmth, careful technique and a clean, comfortable setting.</p></div>
        <div className="review-grid">
          <article><div className="stars">OUR STANDARD · 01</div><h3>Thoughtful service</h3><p>Appointments designed around your preferences, comfort and personal style.</p></article>
          <article><div className="stars">OUR STANDARD · 02</div><h3>Meticulous hygiene</h3><p>Strict sanitization, clean preparation and premium products at every step.</p></article>
          <article><div className="stars">OUR STANDARD · 03</div><h3>Modern artistry</h3><p>Trend-led colours and detailed custom designs brought to life by skilled artists.</p></article>
        </div>
        <a className="button review-cta" href={BOOKING_URL} target="_blank" rel="noreferrer">Experience Top Ten <span>↗</span></a>
      </section>
    </main>
  );
}
