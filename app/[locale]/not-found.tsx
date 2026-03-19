import Link from "next/link";
import { notFound } from "next/navigation";

import { CtaButton } from "@/components/cta-button";
import { getLocalePath, getMessages, isLocale } from "@/lib/i18n";

export default async function LocaleNotFound({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const messages = await getMessages(locale);

  return (
    <section className="container-shell py-24 sm:py-32">
      <div className="card-surface max-w-2xl p-10">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-surface">{messages.notFound.title}</h1>
        <p className="mt-5 text-base leading-7 text-slate-600">{messages.notFound.copy}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <CtaButton href={getLocalePath(locale)}>{messages.notFound.goHome}</CtaButton>
          <Link href={getLocalePath(locale, "/products")} className="button-secondary">
            {messages.notFound.viewProducts}
          </Link>
        </div>
      </div>
    </section>
  );
}
