import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "./site-chrome";

const display = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-display", weight: ["400", "500", "600"] });
const sans = Manrope({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  metadataBase: new URL("https://toptennailsspa.ca"),
  title: { default: "Top Ten Nails Spa | Nail Salon in Vernon, BC", template: "%s | Top Ten Nails Spa" },
  description: "Premium manicures, gel nails, nail art and luxury spa pedicures at Top Ten Nails Spa, 3208 30th Ave in Vernon, BC.",
  keywords: ["nail salon Vernon BC", "manicure Vernon", "gel nails Vernon", "spa pedicure Vernon", "nail art Vernon"],
  openGraph: { title: "Top Ten Nails Spa", description: "New management. Fresh look. The same downtown Vernon welcome.", type: "website", locale: "en_CA", images: [{ url: "/images/top-ten-salon-interior-wide.webp", width: 1983, height: 793, alt: "The bright, refreshed interior at Top Ten Nails Spa" }] },
  twitter: { card: "summary_large_image", title: "Top Ten Nails Spa", description: "New management. Fresh look. The same downtown Vernon welcome.", images: ["/images/top-ten-salon-interior-wide.webp"] },
};

export default function RootLayout({ children }) {
  return <html lang="en" className={`${display.variable} ${sans.variable}`}><body><Header />{children}<Footer /></body></html>;
}
