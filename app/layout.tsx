import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import "@/app/globals.css";
import { siteConfig } from "@/lib/site";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Zephandor",
  url: "https://zephandor.com",
  logo: "https://zephandor.com/logo.png",
  sameAs: [
    "https://www.instagram.com/zephandorusa/",
    "https://x.com/Zephandorbrand",
    "https://www.facebook.com/profile.php?id=61587435596887",
    "https://www.youtube.com/@Zephandorbrand",
    "https://www.pinterest.com/zephandorofficial/",
    "https://www.tiktok.com/@zephandorbrand",
    "https://www.linkedin.com/in/zephandor-brand-a038b8393/",
    "https://medium.com/@zephandor.official",
    "https://www.tumblr.com/blog/zephandorbrand",
    "https://www.reddit.com/user/Busy_Song1810/"
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" }
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  },
  keywords: [
    "Zephandor",
    "garment care",
    "garment steamer",
    "dry iron",
    "travel steamer",
    "premium fabric care",
    "portable garment steamer",
    "1200W garment steamer",
    "travel fabric care"
  ]
};

export const viewport: Viewport = {
  themeColor: "#070709"
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
