import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, Clock, MapPin, Phone, Sparkles, Tag } from "lucide-react";
import { MobileNav } from "./mobile-nav";
import { BOOKING_URL, SALON_NAME } from "./site-config";

function Wordmark({ footer = false }) {
  return (
    <Link className={`brand logo-link${footer ? " footer-logo" : ""}`} href="/" aria-label={`${SALON_NAME}, home`}>
      <Image
        src="/logo-topten.svg"
        alt={SALON_NAME}
        width={footer ? 150 : 140}
        height={footer ? 55 : 50}
        className="logo-image"
        priority={!footer}
      />
    </Link>
  );
}

export function Header() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="announcement">
        <Tag aria-hidden="true" style={{ width: 14, height: 14 }} />
        <span>Grand re-opening · 10% off all services through August 31</span>
        <Sparkles aria-hidden="true" style={{ width: 14, height: 14 }} />
      </div>
      <header className="site-header">
        <Wordmark />
        <nav className="desktop-navigation" aria-label="Main navigation">
          <Link href="/services">Services</Link>
          <Link href="/services/featured">Featured Pedicures</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <a className="button button-small" href={BOOKING_URL} target="_blank" rel="noreferrer">
          <CalendarDays aria-hidden="true" style={{ width: 14, height: 14 }} />
          Book online
        </a>
        <MobileNav />
      </header>
    </>
  );
}

export function Footer() {
  return (
    <>
      <footer id="contact">
        <div className="footer-brand">
          <Wordmark footer />
          <p>Vernon’s downtown destination for polished nails and restorative spa care.</p>
        </div>
        <div>
          <h3><MapPin aria-hidden="true" style={{ width: 14, height: 14, display: "inline", marginRight: 6, verticalAlign: "middle" }} />Visit</h3>
          <p>3208 30th Ave<br />Vernon, BC V1T 2C5</p>
          <a href="https://maps.google.com/?q=3208+30th+Ave+Vernon+BC+V1T+2C5" target="_blank" rel="noreferrer">Get directions <ArrowUpRight aria-hidden="true" /></a>
        </div>
        <div>
          <h3><Clock aria-hidden="true" style={{ width: 14, height: 14, display: "inline", marginRight: 6, verticalAlign: "middle" }} />Hours</h3>
          <p>Mon–Fri: 9:00 AM–7:00 PM<br />Sat–Sun: 10:00 AM–5:00 PM</p>
        </div>
        <div>
          <h3><Phone aria-hidden="true" style={{ width: 14, height: 14, display: "inline", marginRight: 6, verticalAlign: "middle" }} />Contact</h3>
          <a href="tel:+18773304318">877-330-4318</a>
          <a href={BOOKING_URL} target="_blank" rel="noreferrer">Book with BookGuru <ArrowUpRight aria-hidden="true" /></a>
        </div>
        <small className="copyright">© {new Date().getFullYear()} {SALON_NAME}. All rights reserved.</small>
      </footer>
      <a className="mobile-book" href={BOOKING_URL} target="_blank" rel="noreferrer" aria-label="Book appointment online">
        <CalendarDays aria-hidden="true" style={{ width: 24, height: 24 }} />
      </a>
    </>
  );
}
