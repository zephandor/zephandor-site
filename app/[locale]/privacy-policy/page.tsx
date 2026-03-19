import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageHero } from "@/components/page-hero";
import { getMessages, isLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const messages = await getMessages(locale);
  return buildMetadata({ locale, title: messages.privacy.meta.title, description: messages.privacy.meta.description, path: "/privacy-policy" });
}

export default async function PrivacyPolicyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const messages = await getMessages(locale);

  return (
    <>
      <PageHero eyebrow={messages.privacy.hero.eyebrow} title={messages.privacy.hero.title} copy={messages.privacy.hero.copy} />
      <section className="container-shell py-16 sm:py-20">
        <article className="card-surface max-w-4xl space-y-8 p-8 sm:p-10">
          {messages.privacy.sections.map((section) => (
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
