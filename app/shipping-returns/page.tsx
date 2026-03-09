import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Shipping & Returns",
  description:
    "Review Zephandor shipping expectations, return guidance, and how marketplace orders are handled through Amazon and Etsy."
};

export default function ShippingReturnsPage() {
  return (
    <>
      <PageHero
        eyebrow="Shipping & Returns"
        title="Straightforward guidance for delivery timelines and post-purchase support"
        copy="Zephandor is committed to clear expectations before checkout. Because purchases are completed on Amazon or Etsy, some shipping and return details are finalized by the marketplace where the order is placed."
      />
      <section className="container-shell py-16 sm:py-20">
        <article className="card-surface max-w-4xl space-y-8 p-8 sm:p-10">
          <section>
            <h2 className="text-2xl font-semibold text-surface">Order processing</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Processing times vary by listing and marketplace. Customers should review the delivery estimate shown on the relevant Amazon or Etsy product page before placing an order.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-surface">Shipping timelines</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Shipping windows depend on destination, inventory availability, and carrier conditions. Marketplace tracking information is the most reliable source for live shipping updates after purchase.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-surface">Returns</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              If your order was placed on Amazon or Etsy, return eligibility and the return workflow are governed by that platform&apos;s policy and the specific listing terms. Please start the request within your order account for the fastest resolution.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-surface">Damaged or incorrect orders</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              If an item arrives damaged or does not match the listing, contact the marketplace support channel tied to your order and keep all packaging, photos, and order details available.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-surface">Need extra help?</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              For general product questions before ordering, please visit the <Link href="/contact" className="font-semibold text-surface underline-offset-4 hover:underline">Contact page</Link>. For active orders, always begin with the marketplace where the purchase was completed.
            </p>
          </section>
        </article>
      </section>
    </>
  );
}

