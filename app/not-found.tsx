import Link from "next/link";

import { CtaButton } from "@/components/cta-button";

export default function NotFound() {
  return (
    <section className="container-shell py-24 sm:py-32">
      <div className="card-surface max-w-2xl p-10">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-surface">This page could not be found.</h1>
        <p className="mt-5 text-base leading-7 text-slate-600">
          The link may have changed, or the page may no longer be available. You can head back to the homepage or continue browsing the product collection.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <CtaButton href="/">Go Home</CtaButton>
          <Link href="/products" className="button-secondary">
            View Products
          </Link>
        </div>
      </div>
    </section>
  );
}
