import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageHero } from "@/components/page-hero";
import { SiteImage } from "@/components/site-image";
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
  return buildMetadata({ locale, title: messages.about.meta.title, description: messages.about.meta.description, path: "/about" });
}

export default async function AboutPage({ params }: LocalePageProps) {
  const locale = params?.locale;
  if (!locale || !isLocale(locale)) notFound();
  const messages = await getMessages(locale);

  return (
    <>
      <PageHero
        eyebrow={messages.about.hero.eyebrow}
        title={messages.about.hero.title}
        copy={messages.about.hero.copy}
        primaryHref={getLocalePath(locale, "/products")}
        primaryLabel={messages.nav.exploreProducts}
      />
      <section className="container-shell grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <h2 className="section-title">{messages.about.title}</h2>
          <p className="section-copy mt-6">{messages.about.paragraphs[0]}</p>
          <p className="section-copy mt-5">{messages.about.paragraphs[1]}</p>
        </div>
        <SiteImage src="/images/lightweight-compact.jpg" alt="Lightweight compact garment steamer travel" className="min-h-[380px]" contentClassName="p-4" sizes="(min-width: 1024px) 42vw, 100vw" />
      </section>
      <section className="bg-haze/70 py-16 sm:py-20">
        <div className="container-shell grid gap-6 lg:grid-cols-3">
          {messages.about.principles.map((item) => (
            <article key={item.title} className="card-surface p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-surface">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.copy}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
