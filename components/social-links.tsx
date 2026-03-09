import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SocialLink = {
  href: string;
  label: string;
  icon: string;
};

const icons: Record<string, ReactNode> = {
  instagram: (
    <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm8.75 2a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" />
  ),
  x: (
    <path d="M18.24 3H21l-6.02 6.88L22 21h-5.49l-4.3-5.62L7.29 21H4.53l6.44-7.37L2 3h5.63l3.88 5.1L18.24 3Zm-1.92 14.71h1.53L6.79 6.17H5.15l11.17 11.54Z" />
  ),
  facebook: (
    <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.87.24-1.47 1.5-1.47H16.7V4.9c-.29-.04-1.28-.12-2.42-.12-2.4 0-4.03 1.46-4.03 4.14V11H7.5v3h2.75v8h3.25Z" />
  ),
  youtube: (
    <path d="M21.6 7.2a2.75 2.75 0 0 0-1.94-1.94C17.95 4.8 12 4.8 12 4.8s-5.95 0-7.66.46A2.75 2.75 0 0 0 2.4 7.2 28.6 28.6 0 0 0 2 12a28.6 28.6 0 0 0 .4 4.8 2.75 2.75 0 0 0 1.94 1.94c1.71.46 7.66.46 7.66.46s5.95 0 7.66-.46a2.75 2.75 0 0 0 1.94-1.94A28.6 28.6 0 0 0 22 12a28.6 28.6 0 0 0-.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z" />
  ),
  pinterest: (
    <path d="M12 2.25c-5.39 0-8.12 3.86-8.12 7.08 0 1.95.74 3.68 2.32 4.33.26.11.49 0 .57-.28.05-.19.17-.67.23-.87.08-.27.05-.36-.16-.6-.44-.52-.72-1.19-.72-2.13 0-2.75 2.06-5.21 5.36-5.21 2.92 0 4.52 1.78 4.52 4.16 0 3.12-1.38 5.76-3.45 5.76-1.14 0-1.99-.94-1.71-2.09.33-1.38.97-2.86.97-3.85 0-.89-.48-1.62-1.46-1.62-1.16 0-2.1 1.2-2.1 2.81 0 1.02.35 1.71.35 1.71l-1.42 6.02c-.25 1.07-.04 2.43-.02 2.57.01.09.13.11.18.04.08-.09 1.12-1.39 1.48-2.57.1-.35.56-2.18.56-2.18.28.53 1.08 1 1.95 1 2.57 0 4.31-2.34 4.31-5.47 0-2.98-2.52-5.75-6.36-5.75Z" />
  ),
  tiktok: (
    <path d="M14.5 2h3.02a4.5 4.5 0 0 0 3.23 3.23V8.3a7.37 7.37 0 0 1-3.25-.77v6.2A6.73 6.73 0 1 1 10.77 7v3.12a3.6 3.6 0 1 0 2.73 3.49V2Z" />
  ),
  linkedin: (
    <path d="M5.5 8.5A1.75 1.75 0 1 0 5.5 5a1.75 1.75 0 0 0 0 3.5ZM4 10h3v10H4V10Zm5 0h2.88v1.37h.04c.4-.76 1.38-1.56 2.83-1.56 3.03 0 3.59 1.99 3.59 4.58V20h-3v-4.95c0-1.18-.02-2.7-1.64-2.7-1.64 0-1.89 1.28-1.89 2.61V20H9V10Z" />
  ),
  medium: (
    <path d="M4 7.5c0-.2-.08-.39-.22-.53L2 5.1V4.75h5.57l4.31 9.45 3.79-9.45H21V5.1l-1.52 1.45a.45.45 0 0 0-.17.44v10.02c0 .17.06.34.18.45L21 18.9v.35h-7.64v-.35l1.57-1.53c.15-.15.15-.19.15-.45V8.81l-4.37 10.41h-.59L5.03 8.81v6.83c-.04.34.07.67.3.91l2.04 2.49v.35H1.6v-.35l2.04-2.49c.22-.24.31-.58.25-.91V7.5H4Z" />
  ),
  reddit: (
    <path d="M14.46 15.12c-.64.64-1.87.87-2.46.87-.59 0-1.82-.23-2.46-.87a.45.45 0 0 1 .64-.64c.38.38 1.24.61 1.82.61.58 0 1.44-.23 1.82-.61a.45.45 0 0 1 .64.64ZM9.45 12.9a1.05 1.05 0 1 1 0-2.1 1.05 1.05 0 0 1 0 2.1Zm4.05-2.1a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1Zm6.5.8c0-.98-.79-1.77-1.77-1.77-.48 0-.91.2-1.23.51-1.2-.82-2.82-1.34-4.62-1.4l.98-3.08 2.65.62a1.42 1.42 0 1 0 .2-.86l-3.04-.71a.45.45 0 0 0-.54.3l-1.12 3.5c-1.88.03-3.57.56-4.81 1.4a1.76 1.76 0 0 0-2.98 1.26c0 .72.43 1.34 1.04 1.62a3.74 3.74 0 0 0-.05.57c0 3.01 3.18 5.46 7.1 5.46 3.92 0 7.1-2.45 7.1-5.46 0-.19-.02-.38-.05-.57A1.77 1.77 0 0 0 20 11.6Z" />
  ),
  tumblr: (
    <path d="M14.22 19.5c-1.92 0-3.52-1.2-3.52-3.84V10.2H8.86v-2c1.99-.72 2.78-2.45 2.97-4.2h1.93v3.72h3v2.48h-3v5.04c0 1.2.6 1.8 1.62 1.8.55 0 .88-.08 1.33-.22l.52 2.3c-.63.25-1.54.38-2.99.38Z" />
  )
};

const brandColors: Record<string, string> = {
  instagram: "text-[#E4405F]",
  x: "text-[#000000]",
  facebook: "text-[#1877F2]",
  youtube: "text-[#FF0000]",
  pinterest: "text-[#E60023]",
  tiktok: "text-[#000000]",
  linkedin: "text-[#0A66C2]",
  medium: "text-[#000000]",
  reddit: "text-[#FF4500]",
  tumblr: "text-[#35465C]"
};

type SocialLinksProps = {
  links: SocialLink[];
  tone?: "dark" | "light";
  showLabel?: boolean;
};

export function SocialLinks({ links, tone = "dark", showLabel = true }: SocialLinksProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className={cn(
            "group inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90",
            tone === "dark"
              ? "border-white/10 bg-white/5 text-white/80 hover:border-white/20 hover:bg-white/10 hover:text-white"
              : "border-black/5 bg-white text-surface hover:border-purple-200 hover:bg-haze"
          )}
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className={cn(
              "h-4 w-4 fill-current transition-all duration-200 group-hover:scale-105 group-hover:brightness-110",
              brandColors[link.icon]
            )}
          >
            {icons[link.icon]}
          </svg>
          {showLabel ? <span>{link.label}</span> : null}
        </a>
      ))}
    </div>
  );
}
