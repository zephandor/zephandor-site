import type { Metadata } from "next";

import { FaqList } from "@/components/faq-list";
import { PageHero } from "@/components/page-hero";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Read common questions about Zephandor products, ordering channels, fabrics, travel use, and support."
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Frequently Asked Questions"
        title="Clear answers for a more confident purchase"
        copy="Find details about product performance, supported fabrics, travel use, and how Zephandor orders are handled across Amazon and Etsy."
        primaryHref="/contact"
        primaryLabel="Contact Support"
      />
      <section className="container-shell py-16 sm:py-20">
        <FaqList items={faqs} />
      </section>
    </>
  );
}
