import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageHero } from "@/components/page-hero";
import { ProductCard } from "@/components/product-card";
import { getProducts } from "@/data/products";
import { getLocalePath, getMessages, isLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

type LocalePageProps = {
  params?: {
    locale?: string;
  };
};

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const locale = params?.locale;
  if (!locale || !isLocale(locale)) return {};
  const messages = await getMessages(locale);
  return buildMetadata({ locale, title: messages.productsPage.meta.title, description: messages.productsPage.meta.description, path: "/products" });
}

export default async function ProductsPage({ params }: LocalePageProps) {
  const locale = params?.locale;
  if (!locale || !isLocale(locale)) notFound();
  const messages = await getMessages(locale);
  const products = getProducts(messages);

  return (
    <>
      <PageHero
        eyebrow={messages.productsPage.hero.eyebrow}
        title={messages.productsPage.hero.title}
        copy={messages.productsPage.hero.copy}
        primaryHref={getLocalePath(locale, "/contact")}
        primaryLabel={messages.common.askAQuestion}
      />
      <section className="container-shell py-16 sm:py-20">
        <div className="space-y-8">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} locale={locale} messages={messages} />
          ))}
        </div>
      </section>
    </>
  );
}
