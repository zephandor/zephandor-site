import en from "@/messages/en.json";
import fr from "@/messages/fr.json";
import de from "@/messages/de.json";
import es from "@/messages/es.json";

export const locales = ["en", "fr", "de", "es"] as const;
export const defaultLocale = "en" as const;

export type Locale = (typeof locales)[number];
export type Messages = typeof en;

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  fr: "FR",
  de: "DE",
  es: "ES"
};

export const openGraphLocales: Record<Locale, string> = {
  en: "en_US",
  fr: "fr_FR",
  de: "de_DE",
  es: "es_ES"
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export async function getMessages(locale: Locale): Promise<Messages> {
  switch (locale) {
    case "fr":
      return (await import("@/messages/fr.json")).default;
    case "de":
      return (await import("@/messages/de.json")).default;
    case "es":
      return (await import("@/messages/es.json")).default;
    case "en":
    default:
      return en;
  }
}

export function getMessagesSync(locale: Locale): Messages {
  switch (locale) {
    case "fr":
      return fr;
    case "de":
      return de;
    case "es":
      return es;
    case "en":
    default:
      return en;
  }
}

export function getLocalePath(locale: Locale, path = ""): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return normalized === "/" ? `/${locale}` : `/${locale}${normalized}`;
}

export function removeLocalePrefix(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    return "/";
  }

  if (isLocale(segments[0])) {
    const remainder = segments.slice(1).join("/");
    return remainder ? `/${remainder}` : "/";
  }

  return pathname;
}
