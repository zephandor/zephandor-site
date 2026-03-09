import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Zephandor for product questions, support inquiries, or marketplace guidance before you purchase."
};

const contactItems = [
  {
    label: "Support email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`
  },
  {
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`
  },
  {
    label: "Response window",
    value: "Monday to Friday, within 1-2 business days"
  }
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Reach Zephandor with confidence"
        copy="Whether you need help choosing the right purchase channel or have questions about product fit, our team is here to support a smooth experience."
      />
      <section className="container-shell grid gap-8 py-16 sm:py-20 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="card-surface p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-surface">Support information</h2>
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
        </div>
        <div className="card-surface p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-surface">Before you reach out</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            For order-specific updates, returns, or shipping questions on an existing Amazon or Etsy purchase, the fastest path is usually the message center for the marketplace where the order was placed. If you are deciding where to buy or need general product guidance, email support is ideal.
          </p>
          <div className="mt-8 rounded-[24px] border border-purple-100 bg-haze p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-purple-700">Suggested email topics</p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
              <li>Product compatibility for specific fabrics</li>
              <li>Marketplace guidance between Amazon and Etsy</li>
              <li>General care, setup, or usage questions</li>
              <li>Wholesale or collaboration inquiries</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
