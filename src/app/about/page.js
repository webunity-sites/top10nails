import Image from "next/image";
import { BOOKING_URL } from "../site-config";

export const metadata = { title: "About Us", description: "Learn about the new management, cleanliness and thoughtful service behind Top Ten Nails Spa in Vernon, BC." };

export default function About() {
  return (
    <main id="main">
      <section className="page-hero"><p className="eyebrow">New management · A fresh chapter</p><h1>Beauty with intention.</h1><p>Top Ten Nails Spa is moving forward with a refreshed salon, premium products and one simple belief: every guest deserves time, care and beautiful work.</p></section>
      <section className="about-split"><div><Image src="/images/top-ten-salon-interior.webp" alt="The refreshed interior and pedicure chairs at Top Ten Nails Spa" fill sizes="(max-width: 700px) 100vw, 50vw" /></div><article><p className="eyebrow">Our new chapter</p><h2>Fresh energy. Higher standards.</h2><p>Under new management, we are pairing modern nail artistry with strict sanitization, premium products and warm, attentive service. Every appointment is personal, every tool is handled with care, and every finish is created to feel distinctly yours.</p><p>Regulars will find the familiar downtown welcome they love—with a refreshed space, new products and a team ready for what comes next.</p></article></section>
      <section className="section values"><p className="eyebrow">What guides us</p><div>{[["Personal", "We listen first and tailor the experience to you."], ["Sanitized", "Strict hygiene practices and clean preparation at every step."], ["Welcoming", "Kind, relaxed service that makes time for you."], ["Modern", "Current colours and custom designs brought to life with care."]].map(([h, p], i) => <article key={h}><span>0{i + 1}</span><h3>{h}</h3><p>{p}</p></article>)}</div></section>
      <section className="page-cta"><h2>Come see what’s new.</h2><a className="button" href={BOOKING_URL} target="_blank" rel="noreferrer">Book online <span>↗</span></a></section>
    </main>
  );
}
