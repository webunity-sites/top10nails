"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollReveal({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const elements = document.querySelectorAll(
      ".section, .reopening-offer, .management-story, .luxury-spa, .brand-story, .gallery-preview, .reviews-section, .simple-service-grid article, .review-grid article, .management-highlights article, .spa-steps li, .booking-card, .map-card, .about-split article, .values article"
    );

    elements.forEach((el) => {
      el.classList.add("reveal-on-scroll");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return <>{children}</>;
}
