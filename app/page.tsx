import type { Metadata } from "next";
import Script from "next/script";

import { CtaButton } from "@/components/cta-button";
import { FaqList } from "@/components/faq-list";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { SiteImage } from "@/components/site-image";
import { faqs } from "@/data/faqs";
import { featuredProduct } from "@/data/products";
import { defaultKeywords, siteConfig } from "@/lib/site";

const socialImage = "/images/hero-steamer.jpg";

export const metadata: Metadata = {
  title: "Zephandor 2-in-1 Garment Steamer & Dry Iron | Portable 1200W Travel Fabric Care",
  description:
    "Discover the Zephandor 2-in-1 Garment Steamer & Dry Iron with 1200W power, 15-second heat-up, 65ml water tank, adjustable steam, and travel-friendly performance for modern garment care.",
  keywords: defaultKeywords,
  openGraph: {
    title: "Zephandor 2-in-1 Garment Steamer & Dry Iron",
    description:
      "Premium garment care in a compact design. Fast heat-up, adjustable steam, dry iron mode, and modern travel-ready convenience.",
    url: siteConfig.domain,
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

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.domain,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  description:
    "Premium garment care brand focused on elevated tools for modern, polished living.",
  sameAs: [featuredProduct.amazonUrl, featuredProduct.etsyUrl]
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "2-in-1 Garment Steamer & Dry Iron",
  brand: {
    "@type": "Brand",
    name: siteConfig.name
  },
  description: featuredProduct.description,
  image: [`${siteConfig.domain}${socialImage}`],
  url: `${siteConfig.domain}/products/${featuredProduct.slug}`,
  category: "Garment steamer and dry iron",
  additionalProperty: [
    {
      "@type": "PropertyValue",
      name: "Power",
      value: "1200W"
    },
    {
      "@type": "PropertyValue",
      name: "Heat-up time",
      value: "15 seconds"
    },
    {
      "@type": "PropertyValue",
      name: "Water tank",
      value: "65ml"
    },
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
      seller: {
        "@type": "Organization",
        name: siteConfig.name
      },
      availability: "https://schema.org/InStock"
    },
    {
      "@type": "Offer",
      url: featuredProduct.etsyUrl,
      seller: {
        "@type": "Organization",
        name: siteConfig.name
      },
      availability: "https://schema.org/InStock"
    }
  ]
};

const featureHighlights = [
  { label: "1200W power", detail: "Strong, steady output for fast wrinkle release." },
  { label: "15s heat-up", detail: "Ready quickly when time is short and presentation matters." },
  { label: "65ml water tank", detail: "Sized for easy handling and compact travel packing." },
  { label: "Drip-free ceramic panel", detail: "Smoother contact with fabrics and a cleaner finish." },
  { label: "Adjustable steam", detail: "More control across delicate and everyday garments." },
  { label: "Auto shut-off", detail: "Added confidence for daily use and travel routines." },
  { label: "Travel-friendly design", detail: "Built to move easily between closet, suitcase, and hotel room." }
];

const whyItems = [
  {
    title: "Premium practicality",
    copy: "Zephandor focuses on the details that elevate daily use: clean form, fast readiness, and strong performance without the bulk of a traditional iron setup."
  },
  {
    title: "Designed for real routines",
    copy: "From vertical steaming at home to horizontal touch-ups in a hotel room, the 2-in-1 format adapts to the way modern wardrobes are actually maintained."
  },
  {
    title: "A brand built for trust",
    copy: "Clear product facts, direct purchase intent, and a restrained premium aesthetic help customers feel confident from first impression to checkout."
  }
];

const useCases = [
  {
    title: "Home",
    copy: "Refresh workwear, occasion pieces, curtains, and everyday garments with a compact tool that feels easy to reach for."
  },
  {
    title: "Business travel",
    copy: "Arrive with a sharper wardrobe and avoid relying on inconsistent hotel irons before meetings or events."
  },
  {
    title: "Vacation packing",
    copy: "Travel lighter with one compact 2-in-1 device that handles steam and dry-iron touch-ups in limited space."
  },
  {
    title: "Quick daily touch-ups",
    copy: "Use the 15-second heat-up to smooth collars, hems, and last-minute wrinkles before heading out."
  }
];

export default function HomePage() {
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
            <p className="eyebrow text-lilac">Zephandor 2-in-1 Garment Steamer & Dry Iron</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl xl:text-7xl">
              Premium garment care for polished mornings, packed schedules, and better travel.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">
              A refined 1200W 2-in-1 tool that heats in 15 seconds, supports vertical and horizontal steaming, and helps garments look crisp without the weight of a full ironing setup.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <CtaButton href={featuredProduct.etsyUrl} variant="light" external>
                Buy on Etsy
              </CtaButton>
              <CtaButton href={featuredProduct.amazonUrl} variant="ghost" external disabled={!featuredProduct.amazonUrl}>
                Buy on Amazon
              </CtaButton>
              <CtaButton href={`/products/${featuredProduct.slug}`} variant="ghost">
                View Product Details
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
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-lilac">2-in-1 function</p>
              <p className="mt-2 text-sm leading-6 text-white/72">Vertical steaming and dry ironing in one compact premium tool.</p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-lilac">Fast readiness</p>
              <p className="mt-2 text-sm leading-6 text-white/72">15-second heat-up for the moments when you need to leave looking composed.</p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-lilac">Fabric care</p>
              <p className="mt-2 text-sm leading-6 text-white/72">Drip-free ceramic contact and adjustable steam help protect the finish of your garments.</p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-lilac">Purchase intent</p>
              <p className="mt-2 text-sm leading-6 text-white/72">Shop the live Etsy listing now and buy directly on Amazon through the official Zephandor product page.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell py-24 sm:py-28">
        <SectionHeading
          eyebrow="Feature Highlights"
          title="Everything important, distilled into a sleek daily-use format"
          copy="Zephandor is not just compact. It is purposefully specified to deliver fast performance, cleaner handling, and more elegant versatility across home and travel routines."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-[1fr_1fr_1.1fr]">
          <SiteImage
            src="/images/lightweight-compact.jpg"
            alt="Lightweight compact garment steamer travel"
            className="aspect-square min-h-[320px]"
            contentClassName="p-3"
            sizes="(min-width: 1024px) 28vw, 100vw"
          />
          <SiteImage
            src="/images/vertical-horizontal.jpg"
            alt="Vertical horizontal garment steaming"
            className="aspect-square min-h-[320px]"
            contentClassName="p-3"
            sizes="(min-width: 1024px) 28vw, 100vw"
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {featureHighlights.map((item) => (
              <article key={item.label} className="card-surface p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-purple-700">Zephandor Detail</p>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-surface">{item.label}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell py-8 sm:py-10">
        <SectionHeading
          eyebrow="Technology"
          title="Engineered visual proof for how Zephandor performs"
          copy="The technology story is now supported by real product imagery, showing both the steam delivery system and the LED control interface without changing the premium structure of the page."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <SiteImage
            src="/images/advanced-steam.jpg"
            alt="Advanced steam delivery system garment steamer"
            className="aspect-square min-h-[420px]"
            contentClassName="p-3"
            sizes="(min-width: 1024px) 48vw, 100vw"
          />
          <SiteImage
            src="/images/led-display.jpg"
            alt="LED display garment steamer control"
            className="aspect-square min-h-[420px]"
            contentClassName="p-3"
            sizes="(min-width: 1024px) 48vw, 100vw"
          />
        </div>
      </section>

      <section className="container-shell py-24 sm:py-28">
        <SectionHeading
          eyebrow="Featured Product"
          title="The product page should feel like the product itself: confident, refined, and ready to convert"
          copy="This flagship section puts the Zephandor 2-in-1 Garment Steamer & Dry Iron at the center of the brand experience, with clearer purchase pathways and a more premium product story."
        />
        <div className="mt-12">
          <ProductCard product={featuredProduct} />
        </div>
      </section>

      <section className="bg-haze/60 py-24 sm:py-28">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Why Zephandor"
            title="A cleaner, more elevated standard for everyday garment care"
            copy="Zephandor is designed for customers who want their essentials to feel considered. We bring premium visual restraint, practical performance, and direct purchase clarity into one focused brand experience."
            align="center"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {whyItems.map((item) => (
              <article key={item.title} className="card-surface p-8">
                <h2 className="text-2xl font-semibold tracking-tight text-surface">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell grid gap-10 py-24 sm:py-28 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <SiteImage
          src="/images/wrinkle-reduction.jpg"
          alt="1200W garment steamer wrinkle reduction"
          className="min-h-[420px] lg:aspect-[5/4]"
          contentClassName="p-3"
          sizes="(min-width: 1024px) 42vw, 100vw"
          positionClassName="object-top"
        />
        <div>
          <p className="eyebrow">Performance</p>
          <h2 className="section-title mt-3">Visible wrinkle reduction powered by compact 1200W performance</h2>
          <p className="section-copy mt-5">
            The Zephandor 2-in-1 is built for real context, not just product specs. It fits the morning routine at home, the short turnaround before a meeting, and the suitcase where space matters.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {useCases.map((item) => (
              <article key={item.title} className="rounded-[24px] border border-black/5 bg-white p-5 shadow-soft">
                <h3 className="text-xl font-semibold tracking-tight text-surface">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell py-8 sm:py-10">
        <SectionHeading
          eyebrow="Fabric Compatibility"
          title="Safe across the common fabric types customers care about most"
          copy="The compatibility section now uses the product imagery directly so fabric support is presented visually, while still reinforcing the premium clarity of the Zephandor experience."
        />
        <div className="mt-12">
          <SiteImage
            src="/images/fabric-types.jpg"
            alt="Garment steamer safe fabric types cotton silk wool"
            className="min-h-[420px] lg:min-h-[460px]"
            contentClassName="p-4 sm:p-5"
            sizes="100vw"
          />
        </div>
      </section>

      <section className="bg-slate-50 py-24 sm:py-28">
        <div className="container-shell">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="FAQ Preview"
              title="A few quick answers before you choose your purchase channel"
              copy="The goal is a more confident decision: clear product facts, clear expectations, and quick access to the information customers usually want before buying."
            />
            <CtaButton href="/faq" variant="secondary">
              View All FAQs
            </CtaButton>
          </div>
          <div className="mt-10">
            <FaqList items={faqs.slice(0, 4)} />
          </div>
        </div>
      </section>

      <section id="shop-now" className="container-shell py-24 sm:py-28">
        <div className="overflow-hidden rounded-[36px] bg-surface px-6 py-14 text-white sm:px-10 lg:px-14 lg:py-16">
          <p className="eyebrow text-lilac">Shop Zephandor</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Choose the live listing that fits how you prefer to buy, and keep Amazon ready as the next expansion point.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/75">
            The Etsy listing is active now for direct purchase. Amazon is now live as a direct purchase path as well, giving customers two trusted ways to buy without changing the Zephandor brand experience.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CtaButton href={featuredProduct.etsyUrl} variant="light" external>
              Buy Zephandor on Etsy
            </CtaButton>
            <CtaButton href={featuredProduct.amazonUrl} variant="ghost" external disabled={!featuredProduct.amazonUrl}>
              Buy on Amazon
            </CtaButton>
            <CtaButton href="/contact" variant="ghost">
              Contact Zephandor
            </CtaButton>
          </div>
        </div>
      </section>
    </>
  );
}
