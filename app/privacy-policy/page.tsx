import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Zephandor privacy policy covering website data, contact submissions, and marketplace-related customer communication."
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy Policy"
        title="How Zephandor handles information with care"
        copy="This policy explains the limited information collected through the Zephandor website and how it may be used to support customer communication and improve the browsing experience."
      />
      <section className="container-shell py-16 sm:py-20">
        <article className="card-surface max-w-4xl space-y-8 p-8 sm:p-10">
          <section>
            <h2 className="text-2xl font-semibold text-surface">Information we collect</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Zephandor may collect information you voluntarily provide, such as your name, email address, and message details when contacting us. Basic technical data such as browser type, device information, and page activity may also be collected for analytics and site performance.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-surface">How information is used</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Information is used to respond to support requests, improve website performance, maintain security, and better understand which pages and product details are most helpful to visitors.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-surface">Marketplace purchases</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Purchases completed on Amazon or Etsy are also subject to those platforms&apos; privacy practices. Zephandor does not control the independent policies of third-party marketplaces.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-surface">Data sharing</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Zephandor does not sell personal information. Limited data may be shared with service providers who help operate the website, support analytics, or process communication, but only when reasonably necessary.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-surface">Your choices</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              You may contact Zephandor to request updates or deletion of information previously shared through this website, subject to legal and operational requirements.
            </p>
          </section>
        </article>
      </section>
    </>
  );
}

