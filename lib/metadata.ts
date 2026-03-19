import type { Metadata } from "next";

import { Locale, defaultLocale, getLocalePath, locales, openGraphLocales } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

export function buildAlternates(locale: Locale, path = "/") {
  const normalizedPath = path === "/" ? "" : path;
  const languages = Object.fromEntries(
    locales.map((entry) => [entry, `${siteConfig.domain}${getLocalePath(entry, normalizedPath)}`])
  ) as Record<Locale, string>;

  return {
    canonical: `${siteConfig.domain}${getLocalePath(locale, normalizedPath)}`,
    languages: {
      ...languages,
      "x-default": `${siteConfig.domain}${getLocalePath(defaultLocale, normalizedPath)}`
    }
  } satisfies Metadata["alternates"];
}

export function buildMetadata({
  locale,
  title,
  description,
  path = "/"
}: {
  locale: Locale;
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = `${siteConfig.domain}${getLocalePath(locale, path === "/" ? "" : path)}`;

  return {
    title,
    description,
    alternates: buildAlternates(locale, path),
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: openGraphLocales[locale],
      type: "website",
      images: [
        {
          url: "/images/hero-steamer.jpg",
          width: 1500,
          height: 1500,
          alt: "Zephandor 2 in 1 garment steamer iron portable"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/hero-steamer.jpg"]
    }
  };
}
