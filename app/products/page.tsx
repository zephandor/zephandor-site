import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { ProductCard } from "@/components/product-card";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore premium Zephandor garment care products, including the featured 2-in-1 Garment Steamer & Dry Iron."
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Professional garment care, edited down to the essentials"
        copy="Browse Zephandor products crafted to deliver elevated results, cleaner routines, and direct paths to purchase on trusted marketplaces."
        primaryHref="/contact"
        primaryLabel="Ask a Question"
      />
      <section className="container-shell py-16 sm:py-20">
        <div className="space-y-8">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}
