import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";

import { CtaButton } from "@/components/cta-button";
import { FaqList } from "@/components/faq-list";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { SiteImage } from "@/components/site-image";
import { getFaqs } from "@/data/faqs";
import { getFeaturedProduct } from "@/data/products";
import { Locale, getLocalePath, getMessages, isLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const socialImage = "/images/hero-steamer.jpg";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const messages = await getMessages(locale);
  return buildMetadata({ locale, title: messages.home.meta.title, description: messages.home.meta.description });
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const messages = await getMessages(locale);
  const featuredProduct = getFeaturedProduct(messages);
  const faqs = getFaqs(messages);

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: `${siteConfig.domain}${getLocalePath(locale)}`,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    description: "Premium garment care brand focused on elevated tools for modern, polished living.",
    sameAs: [featuredProduct.amazonUrl, featuredProduct.etsyUrl]
  };

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: featuredProduct.name,
    brand: {
      "@type": "Brand",
      name: siteConfig.name
    },
    description: featuredProduct.description,
    image: [`${siteConfig.domain}${socialImage}`],
    url: `${siteConfig.domain}${getLocalePath(locale, `/products/${featuredProduct.slug}`)}`,
    category: "Garment steamer and dry iron",
    additionalProperty: [
      { "@type": "PropertyValue", name: "Power", value: "1200W" },
      { "@type": "PropertyValue", name: "Heat-up time", value: "15 seconds" },
      { "@type": "PropertyValue", name: "Water tank", value: "65ml" },
      {
        "@type": "PropertyValue",
        name: "Features",
        value: "Adjustable steam, dry iron mode, vertical and horizontal use, auto shut-off"
      }
    ],
    offers: [
      {
        "@type": "Offer",
        url: featuredProduct.amazonUrl,
        seller: { "@type": "Organization", name: siteConfig.name },
        availability: "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        url: featuredProduct.etsyUrl,
        seller: { "@type": "Organization", name: siteConfig.name },
        availability: "https://schema.org/InStock"
      }
    ]
  };

  return (
    <>
      <Script id="zephandor-organization" type="application/ld+json">
        {JSON.stringify(organizationJsonLd)}
      </Script>
      <Script id="zephandor-product" type="application/ld+json">
        {JSON.stringify(productJsonLd)}
      </Script>

      <section className="relative overflow-hidden bg-surface text-white">
        <div className="absolute inset-0 bg-hero-radial opacity-90" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-black/20" />
        <div className="container-shell relative grid gap-14 py-24 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-32">
          <div>
            <p className="eyebrow text-lilac">{messages.home.hero.eyebrow}</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl xl:text-7xl">
              {messages.home.hero.title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">{messages.home.hero.copy}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <CtaButton href={featuredProduct.etsyUrl} variant="light" external>
                {messages.common.buyOnEtsy}
              </CtaButton>
              <CtaButton href={featuredProduct.amazonUrl} variant="ghost" external disabled={!featuredProduct.amazonUrl}>
                {messages.common.buyOnAmazon}
              </CtaButton>
              <CtaButton href={getLocalePath(locale, `/products/${featuredProduct.slug}`)} variant="ghost">
                {messages.home.hero.viewProductDetails}
              </CtaButton>
            </div>
            <div className="mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
              {featuredProduct.highlights.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/45">{item.label}</p>
                  <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
          <SiteImage
            src="/images/hero-steamer.jpg"
            alt="Zephandor 2 in 1 garment steamer iron portable"
            className="min-h-[520px] bg-[#0f0f14]"
            contentClassName="p-6 sm:p-8 lg:p-10"
            sizes="(min-width: 1024px) 42vw, 100vw"
            priority
          />
        </div>
      </section>

      <section className="relative -mt-8 z-10">
        <div className="container-shell">
          <div className="grid gap-4 rounded-[30px] border border-white/10 bg-[#0e0e13]/95 p-5 text-white shadow-soft sm:grid-cols-2 lg:grid-cols-4 lg:p-6">
            {messages.home.trustStrip.map((item) => (
              <div key={item.label}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-lilac">{item.label}</p>
                <p className="mt-2 text-sm leading-6 text-white/72">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell py-24 sm:py-28">
        <SectionHeading
          eyebrow={messages.home.featureSection.eyebrow}
          title={messages.home.featureSection.title}
          copy={messages.home.featureSection.copy}
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-[1fr_1fr_1.1fr]">
          <SiteImage src="/images/lightweight-compact.jpg" alt="Lightweight compact garment steamer travel" className="aspect-square min-h-[320px]" contentClassName="p-3" sizes="(min-width: 1024px) 28vw, 100vw" />
          <SiteImage src="/images/vertical-horizontal.jpg" alt="Vertical horizontal garment steaming" className="aspect-square min-h-[320px]" contentClassName="p-3" sizes="(min-width: 1024px) 28vw, 100vw" />
          <div className="grid gap-5 sm:grid-cols-2">
            {messages.product.featureHighlights.map((item) => (
              <article key={item.label} className="card-surface p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-purple-700">{messages.home.featureSection.detailLabel}</p>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-surface">{item.label}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell py-8 sm:py-10">
        <SectionHeading eyebrow={messages.home.technology.eyebrow} title={messages.home.technology.title} copy={messages.home.technology.copy} />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <SiteImage src="/images/advanced-steam.jpg" alt="Advanced steam delivery system garment steamer" className="aspect-square min-h-[420px]" contentClassName="p-3" sizes="(min-width: 1024px) 48vw, 100vw" />
          <SiteImage src="/images/led-display.jpg" alt="LED display garment steamer control" className="aspect-square min-h-[420px]" contentClassName="p-3" sizes="(min-width: 1024px) 48vw, 100vw" />
        </div>
      </section>

      <section className="container-shell py-24 sm:py-28">
        <SectionHeading eyebrow={messages.home.featuredProduct.eyebrow} title={messages.home.featuredProduct.title} copy={messages.home.featuredProduct.copy} />
        <div className="mt-12">
          <ProductCard product={featuredProduct} locale={locale} messages={messages} />
        </div>
      </section>

      <section className="bg-haze/60 py-24 sm:py-28">
        <div className="container-shell">
          <SectionHeading eyebrow={messages.home.why.eyebrow} title={messages.home.why.title} copy={messages.home.why.copy} align="center" />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {messages.home.why.items.map((item) => (
              <article key={item.title} className="card-surface p-8">
                <h2 className="text-2xl font-semibold tracking-tight text-surface">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell grid gap-10 py-24 sm:py-28 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <SiteImage src="/images/wrinkle-reduction.jpg" alt="1200W garment steamer wrinkle reduction" className="min-h-[420px] lg:aspect-[5/4]" contentClassName="p-3" sizes="(min-width: 1024px) 42vw, 100vw" positionClassName="object-top" />
        <div>
          <p className="eyebrow">{messages.home.performance.eyebrow}</p>
          <h2 className="section-title mt-3">{messages.home.performance.title}</h2>
          <p className="section-copy mt-5">{messages.home.performance.copy}</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {messages.home.useCases.map((item) => (
              <article key={item.title} className="rounded-[24px] border border-black/5 bg-white p-5 shadow-soft">
                <h3 className="text-xl font-semibold tracking-tight text-surface">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell py-8 sm:py-10">
        <SectionHeading eyebrow={messages.home.fabricCompatibility.eyebrow} title={messages.home.fabricCompatibility.title} copy={messages.home.fabricCompatibility.copy} />
        <div className="mt-12">
          <SiteImage src="/images/fabric-types.jpg" alt="Garment steamer safe fabric types cotton silk wool" className="min-h-[420px] lg:min-h-[460px]" contentClassName="p-4 sm:p-5" sizes="100vw" />
        </div>
      </section>

      <section className="bg-slate-50 py-24 sm:py-28">
        <div className="container-shell">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading eyebrow={messages.home.faqPreview.eyebrow} title={messages.home.faqPreview.title} copy={messages.home.faqPreview.copy} />
            <CtaButton href={getLocalePath(locale, "/faq")} variant="secondary">
              {messages.common.viewAllFaqs}
            </CtaButton>
          </div>
          <div className="mt-10">
            <FaqList items={faqs.slice(0, 4)} />
          </div>
        </div>
      </section>

      <section id="shop-now" className="container-shell py-24 sm:py-28">
        <div className="overflow-hidden rounded-[36px] bg-surface px-6 py-14 text-white sm:px-10 lg:px-14 lg:py-16">
          <p className="eyebrow text-lilac">{messages.home.shop.eyebrow}</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">{messages.home.shop.title}</h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/75">{messages.home.shop.copy}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CtaButton href={featuredProduct.etsyUrl} variant="light" external>
              {messages.home.shop.buyOnEtsy}
            </CtaButton>
            <CtaButton href={featuredProduct.amazonUrl} variant="ghost" external disabled={!featuredProduct.amazonUrl}>
              {messages.common.buyOnAmazon}
            </CtaButton>
            <CtaButton href={getLocalePath(locale, "/contact")} variant="ghost">
              {messages.common.contactZephandor}
            </CtaButton>
          </div>
        </div>
      </section>
    </>
  );
}
