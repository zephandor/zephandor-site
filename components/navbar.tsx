import Link from "next/link";

import { LanguageSwitcher } from "@/components/language-switcher";
import { Logo } from "@/components/logo";
import type { Locale, Messages } from "@/lib/i18n";
import { getLocalePath } from "@/lib/i18n";

export function Navbar({ locale, messages }: { locale: Locale; messages: Messages }) {
  const navLinks = [
    { href: getLocalePath(locale), label: messages.nav.home },
    { href: getLocalePath(locale, "/products"), label: messages.nav.products },
    { href: getLocalePath(locale, "/about"), label: messages.nav.about },
    { href: getLocalePath(locale, "/faq"), label: messages.nav.faq },
    { href: getLocalePath(locale, "/contact"), label: messages.nav.contact }
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/85 backdrop-blur-xl">
      <div className="container-shell flex min-h-[76px] items-center justify-between gap-6">
        <Logo locale={locale} />
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-700 hover:text-surface">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <LanguageSwitcher locale={locale} />
          </div>
          <Link href={getLocalePath(locale, "/products")} className="hidden text-sm font-medium text-slate-700 hover:text-surface sm:inline-flex">
            {messages.nav.exploreProducts}
          </Link>
          <Link href={getLocalePath(locale, "/#shop-now")} className="button-primary px-5 py-2.5">
            {messages.nav.shopNow}
          </Link>
        </div>
      </div>
      <nav aria-label="Mobile" className="border-t border-black/5 md:hidden">
        <div className="container-shell flex flex-col gap-3 py-3">
          <div className="flex min-w-max items-center gap-5 overflow-x-auto pr-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-700 hover:text-surface">
                {link.label}
              </Link>
            ))}
          </div>
          <div>
            <LanguageSwitcher locale={locale} />
          </div>
        </div>
      </nav>
    </header>
  );
}
