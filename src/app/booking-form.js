"use client";

import { useState } from "react";

export default function BookingForm() {
  const [status, setStatus] = useState("");

  function submit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("name");
    const subject = encodeURIComponent(`Appointment request from ${name}`);
    const body = encodeURIComponent(
      `Hello Top Ten Nails Spa,\n\nI'd like to request an appointment.\n\nName: ${name}\nEmail or phone: ${data.get("contact")}\nService: ${data.get("service")}\nPreferred date: ${data.get("date")}\nPreferred time: ${data.get("time")}\n\nThank you!`
    );
    setStatus("Your appointment request is ready—please send it from your email app.");
    window.location.href = `mailto:hello@toptennailsspa.ca?subject=${subject}&body=${body}`;
  }

  return (
    <form className="booking-form" onSubmit={submit}>
      <label>Full name<input name="name" required autoComplete="name" placeholder="Your name" /></label>
      <label>Email or phone<input name="contact" required autoComplete="email" placeholder="How we can reach you" /></label>
      <label>Service<select name="service" defaultValue=""><option value="" disabled>Choose a service</option><option>Signature Manicure</option><option>Gel Manicure</option><option>Spa Pedicure</option><option>Nail Art</option></select></label>
      <div className="form-row"><label>Preferred date<input name="date" type="date" required /></label><label>Time<select name="time" defaultValue="Any time"><option>Any time</option><option>Morning</option><option>Afternoon</option><option>Evening</option></select></label></div>
      <button className="button" type="submit">Prepare appointment request <span>↗</span></button>
      <p className="form-status" aria-live="polite">{status}</p>
    </form>
  );
}
