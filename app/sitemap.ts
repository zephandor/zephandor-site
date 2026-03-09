import type { MetadataRoute } from "next";

import { products } from "@/data/products";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/products",
    "/about",
    "/faq",
    "/contact",
    "/privacy-policy",
    "/terms-of-service",
    "/shipping-returns"
  ].map((route) => ({
    url: `${siteConfig.domain}${route}`,
    lastModified: new Date()
  }));

  const productRoutes = products.map((product) => ({
    url: `${siteConfig.domain}/products/${product.slug}`,
    lastModified: new Date()
  }));

  return [...staticRoutes, ...productRoutes];
}
