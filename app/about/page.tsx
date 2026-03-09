import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { SiteImage } from "@/components/site-image";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Zephandor's premium, modern approach to garment care and customer trust."
};

const principles = [
  {
    title: "Trust through clarity",
    copy: "We present products, policies, and marketplace links with straightforward language so customers know exactly what to expect."
  },
  {
    title: "Premium without excess",
    copy: "Our design language is minimal and controlled because quality should feel composed rather than overstated."
  },
  {
    title: "Utility with elegance",
    copy: "Zephandor products are built for real routines, where strong performance and visual refinement need to coexist."
  }
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Zephandor"
        title="A premium garment care brand shaped around composure, convenience, and modern trust"
        copy="Zephandor exists to make garment care feel lighter, cleaner, and more intentional. We build for customers who want polished results at home, in compact spaces, and while traveling."
        primaryHref="/products"
        primaryLabel="Explore Products"
      />
      <section className="container-shell grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <h2 className="section-title">Designed for the details people notice</h2>
          <p className="section-copy mt-6">
            From a wrinkle-free collar to the confidence of stepping out prepared, Zephandor focuses on the moments garment care quietly improves. Our products are chosen and presented to support that sense of readiness.
          </p>
          <p className="section-copy mt-5">
            We also understand where many purchases happen today. That is why this website is built to create a premium brand experience while guiding customers seamlessly toward our Amazon and Etsy listings.
          </p>
        </div>
        <SiteImage
          src="/images/lightweight-compact.jpg"
          alt="Lightweight compact garment steamer travel"
          className="min-h-[380px]"
          contentClassName="p-4"
          sizes="(min-width: 1024px) 42vw, 100vw"
        />
      </section>
      <section className="bg-haze/70 py-16 sm:py-20">
        <div className="container-shell grid gap-6 lg:grid-cols-3">
          {principles.map((item) => (
            <article key={item.title} className="card-surface p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-surface">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.copy}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
