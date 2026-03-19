import type { Messages } from "@/lib/i18n";

export type Product = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  features: string[];
  highlights: { label: string; value: string }[];
  benefits: string[];
  amazonUrl?: string;
  amazonCtaLabel?: string;
  etsyUrl: string;
};

const baseProduct = {
  slug: "zephandor-2-in-1-garment-steamer-dry-iron",
  amazonUrl: "https://www.amazon.com/dp/B0FYYFBJ9Q",
  etsyUrl: "https://www.etsy.com/listing/4411812017/garment-steamer-dry-iron-2-in-1-compact"
};

export function getProducts(messages: Messages): Product[] {
  return [
    {
      ...baseProduct,
      ...messages.product
    }
  ];
}

export function getFeaturedProduct(messages: Messages): Product {
  return getProducts(messages)[0];
}

export const productSlug = baseProduct.slug;
export const productRoutes = [baseProduct.slug];
export const marketplaceUrls = {
  amazon: baseProduct.amazonUrl,
  etsy: baseProduct.etsyUrl
};
