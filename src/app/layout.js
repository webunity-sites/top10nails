import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-display", weight: ["400", "500", "600"] });
const sans = Manrope({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  metadataBase: new URL("https://toptennailsspa.ca"),
  title: { default: "Top Ten Nails Spa | Montréal & Rive-Sud", template: "%s | Top Ten Nails Spa" },
  description: "Refined manicures, gel nails, nail art and spa pedicures in a warm, modern salon serving Montréal and the South Shore.",
  keywords: ["nail salon Montreal", "manicure Montreal", "nail salon Rive-Sud", "gel nails Montreal", "spa pedicure"],
  openGraph: { title: "Top Ten Nails Spa", description: "Beauty, considered down to the last detail.", type: "website", locale: "en_CA", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Top Ten Nails Spa — beauty, considered down to the last detail" }] },
  twitter: { card: "summary_large_image", title: "Top Ten Nails Spa", description: "Beauty, considered down to the last detail.", images: ["/og.png"] },
};

export default function RootLayout({ children }) {
  return <html lang="en" className={`${display.variable} ${sans.variable}`}><body>{children}</body></html>;
}
