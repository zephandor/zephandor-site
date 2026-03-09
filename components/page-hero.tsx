import { CtaButton } from "@/components/cta-button";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  copy: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function PageHero({
  eyebrow,
  title,
  copy,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-black/5 bg-hero-radial">
      <div className="container-shell py-20 sm:py-24">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-surface sm:text-5xl">
          {title}
        </h1>
        <p className="section-copy mt-6">{copy}</p>
        {(primaryHref && primaryLabel) || (secondaryHref && secondaryLabel) ? (
          <div className="mt-8 flex flex-wrap gap-3">
            {primaryHref && primaryLabel ? <CtaButton href={primaryHref}>{primaryLabel}</CtaButton> : null}
            {secondaryHref && secondaryLabel ? (
              <CtaButton href={secondaryHref} variant="secondary">
                {secondaryLabel}
              </CtaButton>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
