import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { buildAlternates } from "@/lib/metadata";
import { getMessages, isLocale, locales, openGraphLocales, type Locale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

type LocaleParams = {
  params?: {
    locale?: string;
  };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = params?.locale;

  if (!locale || !isLocale(locale)) {
    return {};
  }

  const messages = await getMessages(locale);

  return {
    title: {
      default: messages.meta.defaultTitle,
      template: messages.meta.titleTemplate
    },
    description: messages.meta.defaultDescription,
    alternates: buildAlternates(locale, "/"),
    openGraph: {
      title: messages.meta.ogTitle,
      description: messages.meta.ogDescription,
      url: `${siteConfig.domain}/${locale}`,
      siteName: siteConfig.name,
      locale: openGraphLocales[locale],
      type: "website",
      images: [
        {
          url: "/images/hero-steamer.jpg",
          width: 1500,
          height: 1500,
          alt: "Zephandor 2 in 1 garment steamer iron portable"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: messages.meta.ogTitle,
      description: messages.meta.ogDescription,
      images: ["/images/hero-steamer.jpg"]
    }
  };
}

export default async function LocaleLayout({
  children,
  params
}: Readonly<{ children: ReactNode; params?: { locale?: string } }>) {
  const locale = params?.locale;

  if (!locale || !isLocale(locale)) {
    notFound();
  }

  const messages = await getMessages(locale as Locale);

  return (
    <>
      <Navbar locale={locale as Locale} messages={messages} />
      <main>{children}</main>
      <Footer locale={locale as Locale} messages={messages} />
    </>
  );
}
