import Link from "next/link";

import { Logo } from "@/components/logo";
import { SocialLinks } from "@/components/social-links";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-surface text-white">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-[1.15fr_0.75fr_0.9fr_1fr]">
        <div className="space-y-4">
          <Logo inverse />
          <p className="max-w-md text-sm leading-6 text-white/70">
            Premium garment care for polished daily living. Zephandor designs refined tools that help clothing look intentional, fresh, and ready to wear.
          </p>
          <p className="text-sm text-white/70">{siteConfig.socialProof}</p>
          <div className="rounded-[28px] bg-white p-6 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Follow Zephandor</p>
            <div className="mt-4">
              <SocialLinks links={siteConfig.socialLinks} tone="light" showLabel={false} />
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">Navigate</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            {siteConfig.navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">Shop</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            {siteConfig.marketplaceLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">Support</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            {siteConfig.legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                {siteConfig.email}
              </a>
            </li>
            <li>{siteConfig.phone}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-shell flex flex-col gap-3 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 Zephandor. All rights reserved.</p>
          <p>Built for premium brand presentation, marketplace conversion, and scalable deployment.</p>
        </div>
      </div>
    </footer>
  );
}
