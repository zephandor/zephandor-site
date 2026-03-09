import type { ReactNode } from "react";
import Link from "next/link";

type CtaButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "light";
  external?: boolean;
  disabled?: boolean;
};

export function CtaButton({ href, children, variant = "primary", external = false, disabled = false }: CtaButtonProps) {
  const className =
    disabled
      ? "button-disabled"
      : variant === "secondary"
        ? "button-secondary"
        : variant === "ghost"
          ? "button-ghost"
          : variant === "light"
            ? "button-light"
            : "button-primary";

  if (disabled || !href) {
    return (
      <span className={className} aria-disabled="true">
        {children}
      </span>
    );
  }

  if (external) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

