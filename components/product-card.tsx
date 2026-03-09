import Link from "next/link";

import { CtaButton } from "@/components/cta-button";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="card-surface overflow-hidden border border-black/5 bg-white/95">
      <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.08fr_0.92fr] lg:p-10">
        <div className="relative overflow-hidden rounded-[28px] bg-surface p-8 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,184,255,0.26),transparent_38%),linear-gradient(135deg,rgba(255,255,255,0.04),transparent_40%)]" />
          <div className="relative">
            <p className="eyebrow text-lilac">{product.category}</p>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{product.name}</h3>
            <p className="mt-4 max-w-xl text-base leading-7 text-white/72">{product.description}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {product.highlights.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/45">{item.label}</p>
                  <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-purple-700">Product Focus</p>
            <p className="mt-4 text-lg font-medium leading-8 text-surface">{product.tagline}</p>
            <ul className="mt-8 space-y-4 text-sm leading-7 text-slate-600">
              {product.features.slice(0, 6).map((feature) => (
                <li key={feature} className="flex gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-purple-400" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-10 rounded-[24px] border border-purple-100 bg-haze/70 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-purple-700">Where to buy</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <CtaButton href={product.etsyUrl} external>
                Buy on Etsy
              </CtaButton>
              <CtaButton href={product.amazonUrl} variant="secondary" external disabled={!product.amazonUrl}>
                {product.amazonCtaLabel ?? "Buy on Amazon"}
              </CtaButton>
              <CtaButton href={`/products/${product.slug}`} variant="secondary">
                View Details
              </CtaButton>
            </div>
          </div>
          <Link href={`/products/${product.slug}`} className="mt-5 text-sm font-semibold text-surface underline-offset-4 hover:underline">
            Explore the full product page
          </Link>
        </div>
      </div>
    </article>
  );
}
