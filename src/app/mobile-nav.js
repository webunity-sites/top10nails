"use client";

import Link from "next/link";
import { CalendarDays, Menu, X } from "lucide-react";
import { useState } from "react";
import { BOOKING_URL } from "./site-config";

const navigation = [
  { href: "/services", label: "Services" },
  { href: "/services/featured", label: "Featured Pedicures" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      <nav
        id="mobile-navigation"
        className={`mobile-navigation${isOpen ? " is-open" : ""}`}
        aria-label="Mobile navigation"
      >
        {navigation.map((item) => (
          <Link key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </Link>
        ))}
        <a
          className="mobile-navigation-book"
          href={BOOKING_URL}
          target="_blank"
          rel="noreferrer"
          onClick={closeMenu}
        >
          <CalendarDays aria-hidden="true" />
          Book online
        </a>
      </nav>
    </>
  );
}
