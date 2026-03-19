import type { MetadataRoute } from "next";

import { productRoutes } from "@/data/products";
import { getLocalePath, locales } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/products",
    "/about",
    "/faq",
    "/contact",
    "/privacy-policy",
    "/terms-of-service",
    "/shipping-returns"
  ];

  const staticRoutes = locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${siteConfig.domain}${getLocalePath(locale, path)}`,
      lastModified: new Date()
    }))
  );

  const localizedProducts = locales.flatMap((locale) =>
    productRoutes.map((slug) => ({
      url: `${siteConfig.domain}${getLocalePath(locale, `/products/${slug}`)}`,
      lastModified: new Date()
    }))
  );

  return [...staticRoutes, ...localizedProducts];
}
