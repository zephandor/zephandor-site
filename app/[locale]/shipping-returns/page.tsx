import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageHero } from "@/components/page-hero";
import { getMessages, isLocale } from "@/lib/i18n";
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
  return buildMetadata({ locale, title: messages.shipping.meta.title, description: messages.shipping.meta.description, path: "/shipping-returns" });
}

export default async function ShippingReturnsPage({ params }: LocalePageProps) {
  const locale = params?.locale;
  if (!locale || !isLocale(locale)) notFound();
  const messages = await getMessages(locale);

  return (
    <>
      <PageHero eyebrow={messages.shipping.hero.eyebrow} title={messages.shipping.hero.title} copy={messages.shipping.hero.copy} />
      <section className="container-shell py-16 sm:py-20">
        <article className="card-surface max-w-4xl space-y-8 p-8 sm:p-10">
          {messages.shipping.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-semibold text-surface">{section.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{section.copy}</p>
            </section>
          ))}
        </article>
      </section>
    </>
  );
}
