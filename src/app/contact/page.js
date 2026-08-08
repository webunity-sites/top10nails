import { ArrowUpRight, CalendarDays, Clock, MapPin, Phone } from "lucide-react";
import { Eyebrow } from "../eyebrow";
import { BOOKING_URL } from "../site-config";

export const metadata = { title: "Contact & Book", description: "Contact Top Ten Nails Spa at 3208 30th Ave, Vernon, BC or book a nail appointment online." };

export default function Contact() {
  return (
    <main id="main">
      <section className="page-hero">
        <Eyebrow>Contact Top Ten Nails Spa</Eyebrow>
        <h1>Let’s plan your visit.</h1>
        <p>Book online anytime, call us directly, or find us on 30th Avenue in downtown Vernon.</p>
      </section>
      <section className="contact-layout" id="booking">
        <div className="contact-details">
          <div>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
              <MapPin aria-hidden="true" style={{ width: 16, height: 16 }} />
              01
            </span>
            <h3>Visit</h3>
            <p>3208 30th Ave<br />Vernon, BC V1T 2C5</p>
            <a href="https://maps.google.com/?q=3208+30th+Ave+Vernon+BC+V1T+2C5" target="_blank" rel="noreferrer">Get directions <ArrowUpRight aria-hidden="true" /></a>
          </div>
          <div>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
              <Phone aria-hidden="true" style={{ width: 16, height: 16 }} />
              02
            </span>
            <h3>Call</h3>
            <a href="tel:+18773304318">877-330-4318</a>
          </div>
          <div>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
              <Clock aria-hidden="true" style={{ width: 16, height: 16 }} />
              03
            </span>
            <h3>Hours</h3>
            <p>Mon–Fri: 9:00 AM–7:00 PM<br />Sat–Sun: 10:00 AM–5:00 PM</p>
          </div>
        </div>
        <div className="booking-card">
          <Eyebrow>Book your appointment</Eyebrow>
          <h2>Your next nail day is a click away.</h2>
          <p>Choose your service and preferred time online, then receive confirmation through BookGuru.</p>
          <a className="button" href={BOOKING_URL} target="_blank" rel="noreferrer">
            <CalendarDays aria-hidden="true" style={{ width: 16, height: 16 }} />
            Book with BookGuru <ArrowUpRight aria-hidden="true" />
          </a>
          <small>Online booking opens in a new tab.</small>
        </div>
      </section>
      <section className="map-card">
        <a href="https://maps.google.com/?q=3208+30th+Ave+Vernon+BC+V1T+2C5" target="_blank" rel="noreferrer">
          <span>Top Ten Nails Spa</span>
          <strong style={{ display: "inline-flex", alignItems: "center", gap: 6, justifyContent: "center" }}>
            <MapPin aria-hidden="true" style={{ width: 14, height: 14 }} />
            3208 30th Ave · Vernon, BC
          </strong>
          <small>Open in Google Maps <ArrowUpRight aria-hidden="true" /></small>
        </a>
      </section>
    </main>
  );
}
