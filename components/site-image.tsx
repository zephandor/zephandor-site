import Image from "next/image";

import { cn } from "@/lib/utils";

type SiteImageProps = {
  src: string;
  alt: string;
  className?: string;
  contentClassName?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
  fit?: "contain" | "cover";
  positionClassName?: string;
};

export function SiteImage({
  src,
  alt,
  className,
  contentClassName,
  imageClassName,
  sizes = "100vw",
  priority = false,
  fit = "contain",
  positionClassName = "object-center"
}: SiteImageProps) {
  return (
    <div className={cn("relative overflow-hidden rounded-[28px] border border-purple-100 bg-gradient-to-br from-haze via-white to-slate-100", className)}>
      <div className={cn("absolute inset-0", contentClassName)}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={cn(fit === "cover" ? "object-cover" : "object-contain", positionClassName, imageClassName)}
        />
      </div>
    </div>
  );
}
