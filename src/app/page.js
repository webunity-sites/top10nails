import Image from "next/image";
import Link from "next/link";

const services = [
  ["Signature Manicure", "Detailed cuticle care, shaping, polish and a nourishing finish.", "from $42"],
  ["Gel Manicure", "Long-wear colour with a glossy, chip-resistant finish.", "from $55"],
  ["Spa Pedicure", "A restorative soak, meticulous care, massage and polish.", "from $65"],
];

export default function Home() {
  const schema = {"@context":"https://schema.org","@type":"NailSalon",name:"Top Ten Nails Spa",telephone:"+1-877-330-4318",priceRange:"$$",address:{"@type":"PostalAddress",streetAddress:"3208 30th Ave",addressLocality:"Vernon",addressRegion:"BC",postalCode:"V1T 2C5",addressCountry:"CA"}};
  return (
    <main id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} />
      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Vernon, British Columbia</p>
          <h1>Beauty, considered down to the last detail.</h1>
          <p className="lede">Elevated nail care with thoughtful service—designed for you to slow down, feel cared for and leave polished.</p>
          <div className="hero-actions"><a className="button" href="https://www.bookguru.io/v1/top-ten-nails-spa" target="_blank" rel="noreferrer">Book your appointment <span>↗</span></a><Link className="text-link" href="/services">Explore services <span>→</span></Link></div>
          <div className="trust-row"><span>Meticulous care</span><i>✦</i><span>Impeccable hygiene</span><i>✦</i><span>Personal service</span></div>
        </div>
        <div className="hero-image"><Image src="/images/hero-manicure.png" alt="A coral manicure being carefully applied at Top Ten Nails Spa" fill priority unoptimized sizes="(max-width: 800px) 100vw, 55vw" /><div className="hero-badge"><strong>Every detail</strong><span>thoughtfully yours</span></div></div>
      </section>

      <section className="section services">
        <div className="section-heading"><div><p className="eyebrow">Our services</p><h2>Care for every occasion.</h2></div><p>From polish refreshes to restorative nail rituals, every visit begins with a thoughtful consultation.</p></div>
        <div className="simple-service-grid">{services.map(([name,note,price],i)=><article key={name}><span>0{i+1}</span><h3>{name}</h3><p>{note}</p><strong>{price}</strong></article>)}</div>
        <Link className="text-link centered" href="/services">View all services <span>↗</span></Link>
      </section>

      <section className="brand-story">
        <p className="eyebrow">The Top Ten promise</p>
        <h2>Warm, attentive care.<br />Beautiful, lasting results.</h2>
        <p>Clean tools, careful technique, premium products and service that always feels personal.</p>
        <Link className="button" href="/about">Our story <span>→</span></Link>
      </section>

      <section className="section gallery-preview">
        <div className="section-heading"><div><p className="eyebrow">Fresh from our table</p><h2>Details worth showing off.</h2></div><Link className="text-link" href="/gallery">View gallery <span>→</span></Link></div>
        <div className="nail-preview"><figure><Image src="/images/nails-detail.png" alt="Coral micro-French manicure with gold detail" fill unoptimized sizes="50vw" /></figure><figure><Image src="/images/hero-manicure.png" alt="Coral manicure in progress" fill unoptimized sizes="50vw" /></figure></div>
      </section>
      <section className="reviews-section">
        <div className="reviews-heading"><p className="eyebrow">Reviews &amp; client experience</p><h2>Feel-good nail care,<br />from hello to top coat.</h2><p>Our review section is ready for verified client feedback. Until then, here’s the standard we bring to every appointment.</p></div>
        <div className="review-grid">
          <article><div className="stars">OUR STANDARD · 01</div><h3>Thoughtful service</h3><p>Appointments designed around your preferences, comfort and personal style.</p></article>
          <article><div className="stars">OUR STANDARD · 02</div><h3>Meticulous detail</h3><p>Careful preparation, clean shaping and a finish made to last beautifully.</p></article>
          <article><div className="stars">OUR STANDARD · 03</div><h3>A warm welcome</h3><p>Friendly, unhurried care that makes every visit feel like time well spent.</p></article>
        </div>
        <a className="button review-cta" href="https://www.bookguru.io/v1/top-ten-nails-spa" target="_blank" rel="noreferrer">Experience Top Ten <span>↗</span></a>
      </section>
    </main>
  );
}
