import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "./site-chrome";

const display = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-display", weight: ["400", "500", "600"] });
const sans = Manrope({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  metadataBase: new URL("https://www.top10nailsspa.com"),
  title: {
    default: "Best Nail Salon in Vernon, BC | Top Ten Nails Spa",
    template: "%s | Top Ten Nails Spa - Best Nail Salon in Vernon, BC",
  },
  description: "Looking for the best nail salon in Vernon, BC? Top Ten Nails Spa offers luxury spa pedicures, glossy gel manicures, acrylic sets & custom nail art at 3208 30th Ave.",
  keywords: [
    "best nail salon Vernon BC",
    "nail salon Vernon BC",
    "best pedicure Vernon BC",
    "gel nails Vernon BC",
    "manicure Vernon BC",
    "acrylic nails Vernon",
    "nail salon downtown Vernon",
    "Top Ten Nails Spa",
  ],
  icons: {
    icon: "/logo-topten.svg",
    shortcut: "/logo-topten.svg",
    apple: "/logo-topten.svg",
  },
  openGraph: {
    title: "Best Nail Salon in Vernon, BC | Top Ten Nails Spa",
    description: "New management. Fresh look. Experience Vernon's best nail salon for luxury spa pedicures, gel manicures & custom nail art.",
    type: "website",
    locale: "en_CA",
    url: "https://www.top10nailsspa.com",
    siteName: "Top Ten Nails Spa",
    images: [{ url: "/images/top-ten-salon-interior-wide.webp", width: 1983, height: 793, alt: "Best nail salon in Vernon, BC - Top Ten Nails Spa interior" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Nail Salon in Vernon, BC | Top Ten Nails Spa",
    description: "Experience Vernon's best nail salon for luxury spa pedicures, gel manicures & custom nail art.",
    images: ["/images/top-ten-salon-interior-wide.webp"],
  },
};

import { ScrollReveal } from "./scroll-reveal";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <Header />
        <ScrollReveal>
          {children}
        </ScrollReveal>
        <Footer />
      </body>
    </html>
  );
}
