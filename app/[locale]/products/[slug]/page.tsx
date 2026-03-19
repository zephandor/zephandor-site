import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CtaButton } from "@/components/cta-button";
import { SiteImage } from "@/components/site-image";
import { getProducts, productRoutes } from "@/data/products";
import { buildMetadata } from "@/lib/metadata";
import { getMessages, isLocale } from "@/lib/i18n";

export function generateStaticParams() {
  return productRoutes.flatMap((slug) => ["en", "fr", "de", "es"].map((locale) => ({ locale, slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const messages = await getMessages(locale);
  const product = getProducts(messages).find((item) => item.slug === slug);

  if (!product) {
    return { title: messages.common.productNotFound };
  }

  return buildMetadata({ locale, title: product.name, description: product.description, path: `/products/${product.slug}` });
}

export default async function ProductDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const messages = await getMessages(locale);
  const product = getProducts(messages).find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <section className="container-shell py-16 sm:py-20">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <SiteImage src="/images/hero-steamer.jpg" alt="Zephandor 2 in 1 garment steamer iron portable" className="min-h-[520px] bg-[#f6f1ff]" contentClassName="p-5 sm:p-6" sizes="(min-width: 1024px) 48vw, 100vw" />
        <div className="card-surface p-8 sm:p-10">
          <p className="eyebrow">{product.category}</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-surface">{product.name}</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">{product.tagline}</p>
          <p className="mt-5 text-sm leading-7 text-slate-600">{product.description}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {product.highlights.map((item) => (
              <div key={item.label} className="rounded-2xl border border-black/5 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{item.label}</p>
                <p className="mt-2 text-lg font-semibold text-surface">{item.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <CtaButton href={product.etsyUrl} external>{messages.common.buyOnEtsy}</CtaButton>
            <CtaButton href={product.amazonUrl} variant="secondary" external disabled={!product.amazonUrl}>
              {product.amazonCtaLabel ?? messages.common.buyOnAmazon}
            </CtaButton>
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <article className="card-surface p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-surface">{messages.common.keyFeatures}</h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
            {product.features.map((feature) => (
              <li key={feature} className="flex gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-purple-400" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </article>
        <article className="card-surface p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-surface">{messages.common.whyCustomersChooseIt}</h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
            {product.benefits.map((benefit) => (
              <li key={benefit} className="flex gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-surface" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
