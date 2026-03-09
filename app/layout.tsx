import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import "@/app/globals.css";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { defaultKeywords, siteConfig } from "@/lib/site";

const socialImage = "/images/hero-steamer.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: "Zephandor 2-in-1 Garment Steamer & Dry Iron | Portable 1200W Travel Fabric Care",
    template: "%s | Zephandor"
  },
  description:
    "Discover the Zephandor 2-in-1 Garment Steamer & Dry Iron with 1200W power, 15-second heat-up, 65ml water tank, adjustable steam, and travel-friendly performance for modern garment care.",
  keywords: defaultKeywords,
  openGraph: {
    title: "Zephandor 2-in-1 Garment Steamer & Dry Iron",
    description:
      "Premium garment care in a compact design. Fast heat-up, adjustable steam, dry iron mode, and modern travel-ready convenience.",
    url: siteConfig.domain,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: socialImage,
        width: 1500,
        height: 1500,
        alt: "Zephandor 2 in 1 garment steamer iron portable"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Zephandor 2-in-1 Garment Steamer & Dry Iron",
    description:
      "Premium garment care in a compact design. Fast heat-up, adjustable steam, dry iron mode, and modern travel-ready convenience.",
    images: [socialImage]
  },
  alternates: {
    canonical: siteConfig.domain
  }
};

export const viewport: Viewport = {
  themeColor: "#070709"
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
