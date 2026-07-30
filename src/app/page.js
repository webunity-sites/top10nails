import Image from "next/image";
import BookingForm from "./booking-form";

const services = [
  { name: "Signature Manicure", note: "Shape, detailed cuticle care, polish and a nourishing finish.", time: "45 min", price: "from $42", image: "/images/nails-detail.png" },
  { name: "Gel Manicure", note: "Long-wear colour with a glossy, chip-resistant finish.", time: "60 min", price: "from $55", image: "/images/hero-manicure.png" },
  { name: "Spa Pedicure", note: "A restorative soak, meticulous care, massage and polish.", time: "60 min", price: "from $65", image: "/images/salon-interior.png" },
  { name: "Nail Art", note: "Custom details, French finishes and refined seasonal designs.", time: "add 15 min", price: "from $10", image: "/images/nails-detail.png" },
];

const faqs = [
  ["How long does gel polish last?", "With proper care, a gel manicure typically stays glossy and chip-free for two to three weeks."],
  ["Do you sterilize your tools?", "Yes. Reusable metal tools are cleaned and disinfected between every guest, and single-use items are never shared."],
  ["Can I book nail art?", "Absolutely. Select Nail Art in your request and include a short description so we can reserve enough time."],
  ["What is your cancellation policy?", "Please give at least 24 hours’ notice when plans change. Late cancellations may require a deposit before rebooking."],
];

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "NailSalon",
    name: "Top Ten Nails Spa",
    description: "A refined nail salon experience serving Montréal and the South Shore.",
    areaServed: ["Montréal", "Rive-Sud"],
    priceRange: "$$",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="announcement">Now welcoming new clients in Montréal &amp; the South Shore <span>✦</span></div>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Top Ten Nails Spa, home">
          <span>Top Ten<sup>✦</sup></span>
          <small>— Nails Spa —</small>
        </a>
        <nav aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#experience">Our space</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="button button-small" href="#booking">Book a visit</a>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow">The essence of beauty</p>
            <h1>Beauty, considered down to the last detail.</h1>
            <p className="lede">Elevated nail care in a warm, modern space—thoughtfully designed for you to slow down, feel cared for and leave polished.</p>
            <div className="hero-actions">
              <a className="button" href="#booking">Book your appointment <span>↗</span></a>
              <a className="text-link" href="#services">Explore services <span>↓</span></a>
            </div>
            <div className="trust-row" aria-label="Salon qualities">
              <span>Meticulous care</span><i>✦</i><span>Impeccable hygiene</span><i>✦</i><span>Personal service</span>
            </div>
          </div>
          <div className="hero-image">
            <Image src="/images/hero-manicure.png" alt="A coral manicure being carefully applied at Top Ten Nails Spa" fill priority sizes="(max-width: 800px) 100vw, 55vw" />
            <div className="hero-badge"><strong>Every detail</strong><span>thoughtfully yours</span></div>
          </div>
        </section>

        <section className="section services" id="services">
          <div className="section-heading">
            <div><p className="eyebrow">Our services</p><h2>Care for every occasion.</h2></div>
            <p>From quick polish refreshes to unhurried spa rituals, every service begins with a thoughtful consultation.</p>
          </div>
          <div className="service-grid">
            {services.map((service, index) => (
              <article className="service-card" key={service.name}>
                <div className="service-image"><Image src={service.image} alt="" fill sizes="(max-width: 700px) 100vw, 25vw" /></div>
                <span className="service-number">0{index + 1}</span>
                <h3>{service.name}</h3><p>{service.note}</p>
                <footer><span>{service.time}</span><strong>{service.price}</strong></footer>
              </article>
            ))}
          </div>
          <a className="text-link centered" href="#booking">Find your perfect service <span>↗</span></a>
        </section>

        <section className="experience" id="experience">
          <div className="experience-image"><Image src="/images/salon-interior.png" alt="The warm ivory, coral and gold interior of Top Ten Nails Spa" fill sizes="(max-width: 800px) 100vw, 50vw" /></div>
          <div className="experience-copy">
            <p className="eyebrow">The Top Ten experience</p>
            <h2>A beauty house where every detail matters.</h2>
            <p>We believe nail care should feel as beautiful as the result. Our calm, welcoming space pairs exacting technique with warm, attentive service.</p>
            <ul>
              <li><span>01</span><div><strong>Made personal</strong><small>We listen first, then tailor every detail to you.</small></div></li>
              <li><span>02</span><div><strong>Clean by design</strong><small>Thoughtful protocols and a pristine station, every time.</small></div></li>
              <li><span>03</span><div><strong>Quality that lasts</strong><small>Careful prep, premium products and an impeccable finish.</small></div></li>
            </ul>
          </div>
        </section>

        <section className="section gallery" id="gallery">
          <div className="gallery-title"><p className="eyebrow">The finish</p><h2>Fresh from our table.</h2><p>Soft neutrals, joyful colour and details made just for you.</p></div>
          <div className="gallery-grid">
            <figure className="gallery-main"><Image src="/images/nails-detail.png" alt="Coral micro-French manicure with delicate gold foil detail" fill sizes="(max-width: 800px) 100vw, 48vw" /></figure>
            <figure><Image src="/images/hero-manicure.png" alt="Professional coral gel manicure in progress" fill sizes="(max-width: 800px) 50vw, 24vw" /></figure>
            <blockquote><span>“</span><p>Exactly the reset I needed. Beautiful work, thoughtful care, and such a lovely space.</p><cite>— A Top Ten guest</cite></blockquote>
            <figure><Image src="/images/salon-interior.png" alt="A quiet manicure station with warm gold accents" fill sizes="(max-width: 800px) 50vw, 24vw" /></figure>
          </div>
        </section>

        <section className="booking" id="booking">
          <div className="booking-intro">
            <p className="eyebrow">Your time, beautifully spent</p>
            <h2>Ready for a little you time?</h2>
            <p>Tell us what you’re looking for and your preferred time. Your email app will open with a ready-to-send appointment request.</p>
            <div className="mini-note"><span>✦</span> Please allow 1–2 business hours for confirmation.</div>
          </div>
          <BookingForm />
        </section>

        <section className="section faq">
          <div className="faq-heading"><p className="eyebrow">Good to know</p><h2>A few answers before you visit.</h2></div>
          <div className="faq-list">
            {faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}
          </div>
        </section>
      </main>

      <footer id="contact">
        <div className="footer-brand"><div className="brand inverse"><span>Top Ten<sup>✦</sup></span><small>— Nails Spa —</small></div><p>L’essence de la beauté.</p></div>
        <div><h3>Visit</h3><p>Montréal &amp; Rive-Sud<br />Québec, Canada</p><a href="#booking">Request an appointment</a></div>
        <div><h3>Hours</h3><p>Mon–Fri · 9–7<br />Saturday · 9–5<br />Sunday · Closed</p></div>
        <div><h3>Follow</h3><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram ↗</a><a href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook ↗</a></div>
        <small className="copyright">© {new Date().getFullYear()} Top Ten Nails Spa. All rights reserved.</small>
      </footer>
      <a className="mobile-book" href="#booking">Book a visit <span>↗</span></a>
    </>
  );
}
