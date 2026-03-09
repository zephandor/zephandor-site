import Link from "next/link";

import { siteConfig } from "@/lib/site";
import { Logo } from "@/components/logo";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/85 backdrop-blur-xl">
      <div className="container-shell flex min-h-[76px] items-center justify-between gap-6">
        <Logo />
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {siteConfig.navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-700 hover:text-surface">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/products" className="hidden text-sm font-medium text-slate-700 hover:text-surface sm:inline-flex">
            Explore Products
          </Link>
          <Link href="/contact" className="button-primary px-5 py-2.5">
            Contact Us
          </Link>
        </div>
      </div>
      <nav aria-label="Mobile" className="border-t border-black/5 md:hidden">
        <div className="container-shell flex overflow-x-auto py-3">
          <div className="flex min-w-max items-center gap-5 pr-4">
            {siteConfig.navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-700 hover:text-surface">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
