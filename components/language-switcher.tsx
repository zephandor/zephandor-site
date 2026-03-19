"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

import { Locale, localeLabels, locales, removeLocalePrefix } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const localeAriaLabels: Record<Locale, string> = {
  en: "English (US)",
  fr: "Francais",
  de: "Deutsch",
  es: "Espanol"
};

const flagIcons: Record<Locale, ReactNode> = {
  en: (
    <svg viewBox="0 0 28 20" aria-hidden="true" className="h-3.5 w-[18px] rounded-[2px] shadow-sm">
      <rect width="28" height="20" rx="2" fill="#fff" />
      <path d="M0 0h28v1.54H0ZM0 3.08h28v1.54H0ZM0 6.16h28V7.7H0ZM0 9.24h28v1.54H0ZM0 12.32h28v1.54H0ZM0 15.4h28v1.54H0ZM0 18.48h28V20H0Z" fill="#B22234" />
      <rect width="12" height="10.78" fill="#3C3B6E" />
      <g fill="#fff">
        <circle cx="1.2" cy="1.1" r=".4" />
        <circle cx="3.6" cy="1.1" r=".4" />
        <circle cx="6" cy="1.1" r=".4" />
        <circle cx="8.4" cy="1.1" r=".4" />
        <circle cx="10.8" cy="1.1" r=".4" />
        <circle cx="2.4" cy="2.3" r=".4" />
        <circle cx="4.8" cy="2.3" r=".4" />
        <circle cx="7.2" cy="2.3" r=".4" />
        <circle cx="9.6" cy="2.3" r=".4" />
        <circle cx="1.2" cy="3.5" r=".4" />
        <circle cx="3.6" cy="3.5" r=".4" />
        <circle cx="6" cy="3.5" r=".4" />
        <circle cx="8.4" cy="3.5" r=".4" />
        <circle cx="10.8" cy="3.5" r=".4" />
        <circle cx="2.4" cy="4.7" r=".4" />
        <circle cx="4.8" cy="4.7" r=".4" />
        <circle cx="7.2" cy="4.7" r=".4" />
        <circle cx="9.6" cy="4.7" r=".4" />
        <circle cx="1.2" cy="5.9" r=".4" />
        <circle cx="3.6" cy="5.9" r=".4" />
        <circle cx="6" cy="5.9" r=".4" />
        <circle cx="8.4" cy="5.9" r=".4" />
        <circle cx="10.8" cy="5.9" r=".4" />
        <circle cx="2.4" cy="7.1" r=".4" />
        <circle cx="4.8" cy="7.1" r=".4" />
        <circle cx="7.2" cy="7.1" r=".4" />
        <circle cx="9.6" cy="7.1" r=".4" />
        <circle cx="1.2" cy="8.3" r=".4" />
        <circle cx="3.6" cy="8.3" r=".4" />
        <circle cx="6" cy="8.3" r=".4" />
        <circle cx="8.4" cy="8.3" r=".4" />
        <circle cx="10.8" cy="8.3" r=".4" />
        <circle cx="2.4" cy="9.5" r=".4" />
        <circle cx="4.8" cy="9.5" r=".4" />
        <circle cx="7.2" cy="9.5" r=".4" />
        <circle cx="9.6" cy="9.5" r=".4" />
      </g>
    </svg>
  ),
  fr: (
    <svg viewBox="0 0 28 20" aria-hidden="true" className="h-3.5 w-[18px] rounded-[2px] shadow-sm">
      <rect width="9.33" height="20" fill="#0055A4" />
      <rect x="9.33" width="9.34" height="20" fill="#fff" />
      <rect x="18.67" width="9.33" height="20" fill="#EF4135" />
    </svg>
  ),
  de: (
    <svg viewBox="0 0 28 20" aria-hidden="true" className="h-3.5 w-[18px] rounded-[2px] shadow-sm">
      <rect width="28" height="6.67" fill="#000" />
      <rect y="6.67" width="28" height="6.66" fill="#DD0000" />
      <rect y="13.33" width="28" height="6.67" fill="#FFCE00" />
    </svg>
  ),
  es: (
    <svg viewBox="0 0 28 20" aria-hidden="true" className="h-3.5 w-[18px] rounded-[2px] shadow-sm">
      <rect width="28" height="20" fill="#C60B1E" />
      <rect y="5" width="28" height="10" fill="#FFC400" />
    </svg>
  )
};

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const currentPath = removeLocalePrefix(pathname || "/");

  return (
    <div
      className="inline-flex items-center gap-1 rounded-full border border-black/5 bg-white px-2 py-1 shadow-soft"
      aria-label="Language switcher"
    >
      {locales.map((entry) => {
        const href = currentPath === "/" ? `/${entry}` : `/${entry}${currentPath}`;

        return (
          <Link
            key={entry}
            href={href}
            aria-label={localeAriaLabels[entry]}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors",
              entry === locale ? "bg-surface text-white" : "text-slate-500 hover:text-surface"
            )}
          >
            <span className="shrink-0">{flagIcons[entry]}</span>
            <span className="hidden sm:inline">{localeLabels[entry]}</span>
          </Link>
        );
      })}
    </div>
  );
}
