import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageHero } from "@/components/page-hero";
import { SocialLinks } from "@/components/social-links";
import { getMessages, isLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const messages = await getMessages(locale);
  return buildMetadata({ locale, title: messages.contact.meta.title, description: messages.contact.meta.description, path: "/contact" });
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const messages = await getMessages(locale);

  const contactItems = [
    { label: messages.contact.contactItems.supportEmail, value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { label: messages.contact.contactItems.phone, value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}` },
    { label: messages.contact.contactItems.responseWindow, value: messages.contact.responseWindowValue }
  ];

  return (
    <>
      <PageHero eyebrow={messages.contact.hero.eyebrow} title={messages.contact.hero.title} copy={messages.contact.hero.copy} />
      <section className="container-shell grid gap-8 py-16 sm:py-20 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="card-surface p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-surface">{messages.contact.supportInformation}</h2>
          <div className="mt-6 space-y-5">
            {contactItems.map((item) => (
              <div key={item.label} className="border-b border-black/5 pb-5 last:border-none last:pb-0">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="mt-2 inline-flex text-lg font-medium text-surface hover:text-purple-700">
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-2 text-lg font-medium text-surface">{item.value}</p>
                )}
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-[24px] border border-purple-100 bg-haze p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-purple-700">{messages.contact.officialPurchaseChannels}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {siteConfig.marketplaceLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="button-secondary">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="card-surface p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-surface">{messages.contact.beforeReachOut}</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">{messages.contact.beforeReachOutCopy}</p>
          <div className="mt-8 rounded-[24px] border border-purple-100 bg-haze p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-purple-700">{messages.contact.suggestedTopics}</p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
              {messages.contact.topics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
          </div>
          <div className="mt-8 rounded-[28px] bg-white p-6 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">{messages.footer.follow}</p>
            <div className="mt-4">
              <SocialLinks links={siteConfig.socialLinks} tone="light" showLabel={false} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
