import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "../eyebrow";
import { BOOKING_URL } from "../site-config";

export const metadata = { title: "Nail Gallery", description: "Browse manicure, gel nail and nail art inspiration from Top Ten Nails Spa in Vernon." };

const shots = [
  ["/images/pink-floral-nails.webp", "Bright pink floral almond nails"],
  ["/images/classic-french-manicure.webp", "Classic white French manicure"],
  ["/images/chrome-french-nails.webp", "Modern chrome French manicure"],
  ["/images/colourful-floral-nail-art.webp", "Colourful floral nail art with bright tips"],
  ["/images/soft-pink-manicure.webp", "Soft pink square manicure"],
  ["/images/red-bow-french-nails.webp", "Red French manicure with delicate gold bows"],
  ["/images/rainbow-french-nail-art.webp", "Rainbow French tips with ladybug art"],
  ["/images/pink-bow-3d-nail-art.webp", "Pink and black nails with pearl and bow details"],
  ["/images/montreal-hockey-nail-art.webp", "Red and blue hockey-inspired nail art"],
];

export default function Gallery() {
  return (
    <main id="main">
      <section className="page-hero"><Eyebrow>Nail inspiration in Vernon</Eyebrow><h1>Your next set starts here.</h1><p>Explore clean classics, joyful colour, chrome finishes and detailed custom art from our nail tables.</p></section>
      <section className="section"><div className="filter-labels"><span>All looks</span><span>Gel</span><span>French</span><span>Nail art</span></div><div className="full-gallery">{shots.map(([src, alt], i) => <figure className={i === 0 || i === 5 ? "tall" : ""} key={src}><Image src={src} alt={alt} fill sizes="(max-width: 700px) 100vw, 33vw" /></figure>)}</div></section>
      <section className="page-cta"><h2>See something you love?</h2><p>Save the look and bring it to your appointment.</p><a className="button" href={BOOKING_URL} target="_blank" rel="noreferrer">Book your set <ArrowUpRight aria-hidden="true" /></a></section>
    </main>
  );
}
