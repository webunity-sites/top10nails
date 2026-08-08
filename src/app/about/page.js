import Image from "next/image";
import { ArrowUpRight, Heart, ShieldCheck, Sparkles, UserCheck } from "lucide-react";
import { Eyebrow } from "../eyebrow";
import { BOOKING_URL } from "../site-config";

export const metadata = { title: "About Us", description: "Learn about the new management, cleanliness and thoughtful service behind Top Ten Nails Spa in Vernon, BC." };

const valuesList = [
  { icon: UserCheck, title: "Personal", text: "We listen first and tailor the experience to you.", num: "01" },
  { icon: ShieldCheck, title: "Sanitized", text: "Strict hygiene practices and clean preparation at every step.", num: "02" },
  { icon: Heart, title: "Welcoming", text: "Kind, relaxed service that makes time for you.", num: "03" },
  { icon: Sparkles, title: "Modern", text: "Current colours and custom designs brought to life with care.", num: "04" },
];

export default function About() {
  return (
    <main id="main">
      <section className="page-hero"><Eyebrow>New management · A fresh chapter</Eyebrow><h1>Beauty with intention.</h1><p>Top Ten Nails Spa is moving forward with a refreshed salon, premium products and one simple belief: every guest deserves time, care and beautiful work.</p></section>
      <section className="about-split"><div><Image src="/images/top-ten-salon-interior.webp" alt="The refreshed interior and pedicure chairs at Top Ten Nails Spa" fill sizes="(max-width: 700px) 100vw, 50vw" /></div><article><Eyebrow>Our new chapter</Eyebrow><h2>Fresh energy. Higher standards.</h2><p>Under new management, we are pairing modern nail artistry with strict sanitization, premium products and warm, attentive service. Every appointment is personal, every tool is handled with care, and every finish is created to feel distinctly yours.</p><p>Regulars will find the familiar downtown welcome they love—with a refreshed space, new products and a team ready for what comes next.</p></article></section>
      <section className="section values">
        <Eyebrow>What guides us</Eyebrow>
        <div>
          {valuesList.map(({ icon: Icon, title, text, num }) => (
            <article key={title}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
                <Icon aria-hidden="true" style={{ width: 16, height: 16 }} />
                {num}
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="page-cta"><h2>Come see what’s new.</h2><a className="button" href={BOOKING_URL} target="_blank" rel="noreferrer">Book online <ArrowUpRight aria-hidden="true" /></a></section>
    </main>
  );
}
