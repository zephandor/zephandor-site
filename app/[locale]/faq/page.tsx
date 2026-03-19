import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { FaqList } from "@/components/faq-list";
import { PageHero } from "@/components/page-hero";
import { getFaqs } from "@/data/faqs";
import { getLocalePath, getMessages, isLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const messages = await getMessages(locale);
  return buildMetadata({ locale, title: messages.faqPage.meta.title, description: messages.faqPage.meta.description, path: "/faq" });
}

export default async function FaqPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const messages = await getMessages(locale);
  const faqs = getFaqs(messages);

  return (
    <>
      <PageHero
        eyebrow={messages.faqPage.hero.eyebrow}
        title={messages.faqPage.hero.title}
        copy={messages.faqPage.hero.copy}
        primaryHref={getLocalePath(locale, "/contact")}
        primaryLabel={messages.common.contactSupport}
      />
      <section className="container-shell py-16 sm:py-20">
        <FaqList items={faqs} />
      </section>
    </>
  );
}
