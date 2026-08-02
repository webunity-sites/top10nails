import Link from "next/link";
import { Sparkles } from "lucide-react";
import { MobileNav } from "./mobile-nav";
import { BOOKING_URL, SALON_NAME } from "./site-config";

function Wordmark({ footer = false }) {
  return (
    <Link className={`brand logo-link${footer ? " footer-logo" : ""}`} href="/" aria-label={`${SALON_NAME}, home`}>
      <span className="brand-wordmark">Top Ten</span>
      <small>Nails Spa</small>
    </Link>
  );
}

export function Header() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="announcement">
        Grand re-opening · 10% off all services through August 31
        <Sparkles aria-hidden="true" />
      </div>
      <header className="site-header">
        <Wordmark />
        <nav className="desktop-navigation" aria-label="Main navigation">
          <Link href="/services">Services</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <a className="button button-small" href={BOOKING_URL} target="_blank" rel="noreferrer">Book online</a>
        <MobileNav />
      </header>
    </>
  );
}

export function Footer() {
  return (
    <>
      <footer id="contact">
        <div className="footer-brand"><Wordmark footer /><p>Vernon’s downtown destination for polished nails and restorative spa care.</p></div>
        <div><h3>Visit</h3><p>3208 30th Ave<br />Vernon, BC V1T 2C5</p><a href="https://maps.google.com/?q=3208+30th+Ave+Vernon+BC+V1T+2C5" target="_blank" rel="noreferrer">Get directions ↗</a></div>
        <div><h3>Hours</h3><p>Every day<br />9:00 AM–7:00 PM</p></div>
        <div><h3>Contact</h3><a href="tel:+18773304318">877-330-4318</a><a href={BOOKING_URL} target="_blank" rel="noreferrer">Book with BookGuru ↗</a></div>
        <small className="copyright">© {new Date().getFullYear()} {SALON_NAME}. All rights reserved.</small>
      </footer>
      <a className="mobile-book" href={BOOKING_URL} target="_blank" rel="noreferrer">Book online <span>↗</span></a>
    </>
  );
}
