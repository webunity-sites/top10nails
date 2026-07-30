import Link from "next/link";

export function Header() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="announcement">Now welcoming new clients in downtown Vernon <span>✦</span></div>
      <header className="site-header">
        <Link className="brand logo-link" href="/" aria-label="Top Ten Nails Spa, home">
          <img className="logo-image" src="/logo-top10.svg" alt="Top Ten Nails Spa" />
        </Link>
        <nav aria-label="Main navigation">
          <Link href="/services">Services</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <a className="button button-small" href="https://www.bookguru.io/v1/top-ten-nails-spa" target="_blank" rel="noreferrer">Book online</a>
      </header>
    </>
  );
}

export function Footer() {
  return (
    <>
      <footer id="contact">
        <div className="footer-brand"><Link className="brand logo-link footer-logo" href="/"><img className="logo-image" src="/logo-top10.svg" alt="Top Ten Nails Spa" /></Link><p>The essence of beauty.</p></div>
        <div><h3>Visit</h3><p>3208 30th Ave<br />Vernon, BC V1T 2C5</p><a href="https://maps.google.com/?q=3208+30th+Ave+Vernon+BC+V1T+2C5" target="_blank" rel="noreferrer">Get directions ↗</a></div>
        <div><h3>Hours</h3><p>Mon–Fri · 9–7<br />Saturday · 9–5<br />Sunday · Closed</p></div>
        <div><h3>Contact</h3><a href="tel:+18773304318">877-330-4318</a><a href="https://www.bookguru.io/v1/top-ten-nails-spa" target="_blank" rel="noreferrer">Book online ↗</a></div>
        <small className="copyright">© {new Date().getFullYear()} Top Ten Nails Spa. All rights reserved.</small>
      </footer>
      <a className="mobile-book" href="https://www.bookguru.io/v1/top-ten-nails-spa" target="_blank" rel="noreferrer">Book online <span>↗</span></a>
    </>
  );
}
