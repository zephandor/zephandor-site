import Link from "next/link";

import { cn } from "@/lib/utils";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link href="/" className="inline-flex items-center gap-3" aria-label="Zephandor home">
      <span
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-full border text-sm font-semibold",
          inverse
            ? "border-white/20 bg-white/10 text-white"
            : "border-purple-200 bg-haze text-purple-700"
        )}
      >
        Z
      </span>
      <span className={cn("text-lg font-semibold tracking-[0.18em]", inverse ? "text-white" : "text-surface")}>
        ZEPHANDOR
      </span>
    </Link>
  );
}
