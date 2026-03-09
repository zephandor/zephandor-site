import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Review the Zephandor terms covering website use, product information, third-party marketplace purchases, and customer responsibilities."
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Terms of Service"
        title="The terms that govern use of the Zephandor website"
        copy="These terms outline how visitors may use the Zephandor website, how product information is presented, and how third-party marketplace purchases are handled."
      />
      <section className="container-shell py-16 sm:py-20">
        <article className="card-surface max-w-4xl space-y-8 p-8 sm:p-10">
          <section>
            <h2 className="text-2xl font-semibold text-surface">Website use</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              By using this website, you agree to use it lawfully and in a way that does not disrupt access, security, or the experience of other visitors.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-surface">Product information</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Zephandor aims to present accurate, current product information, but specifications, availability, prices, and listing details may change without notice. The marketplace listing in effect at the time of purchase controls the final transaction details.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-surface">Marketplace transactions</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Purchases completed through Amazon or Etsy are governed by those platforms&apos; checkout processes, terms, and buyer protections. Zephandor is not responsible for independent marketplace outages, policy changes, or account issues.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-surface">Intellectual property</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              All website copy, branding, layout, and original creative assets remain the property of Zephandor unless otherwise stated and may not be reused without permission.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-surface">Updates</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              These terms may be updated periodically. Continued use of the website after changes are posted indicates acceptance of the revised terms.
            </p>
          </section>
        </article>
      </section>
    </>
  );
}

