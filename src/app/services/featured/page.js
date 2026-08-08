import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "../../eyebrow";
import { BOOKING_URL } from "../../site-config";

export const metadata = {
  title: "Signature Treatments · Top Ten Nails Spa",
  description: "Discover our Luxury Spa Experience and Signature Herbal Pedicure — restorative pedicure rituals designed for relaxation and results.",
};

export default function FeaturedServices() {
  const treatments = [
    {
      number: "I",
      title: "Luxury Spa\nExperience",
      label: "Deep renewal · 75 minutes · $75",
      description: "A slow, six-stage reset for feet that need more than a quick polish. Mineral-rich water, restorative care and a warm oil finish leave skin noticeably softer and your whole body more at ease.",
        steps: [
          ["Detox Crystals", "A warm aromatic soak awakens the senses and prepares skin for renewal."],
          ["Bubbling Activator", "Therapeutic bubbles soften and deeply hydrate before towel drying."],
          ["Sugar Scrub", "A generous exfoliating massage revives dull skin for a smooth finish."],
          ["Cream Mask", "A rich mask purifies, refreshes and tightens the appearance of skin."],
          ["Lotion or Oil Candle", "Choose velvety lotion or warm, silky candle oil for lasting moisture."],
          ["Paraffin Application", "Warm paraffin deeply softens, conditions and comforts tired feet."],
        ],
      image: "/images/luxury-spa-pedicure-ritual.webp",
      alt: "A calming Luxury Spa Experience pedicure ritual with a foot bath and candle",
      action: "Book Luxury Spa",
    },
    {
      number: "II",
      title: "Signature Herbal\nPedicure",
      label: "Botanical restoration · 75 minutes · $85",
      description: "Let aromatic botanicals guide a restorative treatment made to soften, soothe and rebalance. This is a thoughtful ritual for feet that carry you through full, active days.",
        steps: [
        ["Detox Herbal · Ngâm thảo dược", "A warm herbal soak gently detoxifies and prepares skin for renewal."],
        ["Fresh Orange & Sugar Scrub", "Fresh orange and sugar exfoliate dull skin for a smooth, refreshed finish."],
        ["Cream Mask", "A rich mask purifies, refreshes and tightens the appearance of skin."],
        ["Lotion or Oil Candle", "Choose velvety lotion or warm, silky candle oil for lasting moisture."],
        ["Paraffin Application", "Warm paraffin deeply softens, conditions and comforts tired feet."],
        ],
      image: "/images/signature-herbal-pedicure-ritual.png",
      alt: "Relaxing Signature Herbal Pedicure treatment at Top Ten Nails Spa",
      action: "Book Herbal Pedicure",
    },
  ];

  return (
    <main id="main">
      <section className="treatment-hero">
        <div className="treatment-hero-copy">
          <Eyebrow>Top Ten Nails Spa · Vernon, BC</Eyebrow>
          <p className="treatment-kicker">Two rituals for your reset</p>
          <h1>Care that<br /><em>lingers.</em></h1>
          <p className="treatment-hero-intro">Choose a deeply restorative pedicure experience shaped around unhurried care, warm water and beautiful finishing touches.</p>
        </div>
        <div className="treatment-hero-image">
          <Image src="/images/luxury-pedicure-hero.png" alt="A serene luxury pedicure experience at Top Ten Nails Spa" fill priority sizes="(max-width: 800px) 100vw, 48vw" />
          <span>Signature treatment collection</span>
        </div>
      </section>

      <section className="treatment-list" aria-label="Signature treatments">
        {treatments.map((treatment, index) => (
          <article className={`treatment-story treatment-story-${index + 1}`} key={treatment.title}>
            <div className="treatment-photo"><Image src={treatment.image} alt={treatment.alt} fill sizes="(max-width: 800px) 100vw, 46vw" /></div>
            <div className="treatment-copy">
              <span className="treatment-number">{treatment.number}</span>
              <Eyebrow>{treatment.label}</Eyebrow>
              <h2>{treatment.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h2>
              <p>{treatment.description}</p>
              <ol className="treatment-ritual">
                {treatment.steps.map(([name, detail], stepIndex) => <li key={name}><span>0{stepIndex + 1}</span><div><strong>{name}</strong><p>{detail}</p></div></li>)}
              </ol>
              <a className="button treatment-book" href={BOOKING_URL} target="_blank" rel="noreferrer">{treatment.action} <ArrowUpRight aria-hidden="true" /></a>
            </div>
          </article>
        ))}
      </section>

      <section className="treatment-closing"><Eyebrow>Made for your moment</Eyebrow><h2>Take your time.<br />We’ll take care of the rest.</h2><a className="button" href={BOOKING_URL} target="_blank" rel="noreferrer">Book your treatment <ArrowUpRight aria-hidden="true" /></a><a className="treatment-menu-link" href="/services">Explore the full menu</a></section>
    </main>
  );
}
