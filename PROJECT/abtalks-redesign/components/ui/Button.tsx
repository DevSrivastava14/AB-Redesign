import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { ButtonSize, ButtonVariant } from "@/lib/types";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  children: ReactNode;
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-bg-base hover:bg-accent-hover font-semibold border border-transparent",
  secondary:
    "bg-bg-elevated text-text-primary hover:bg-bg-hover border border-border",
  ghost:
    "bg-transparent text-text-secondary hover:text-text-primary hover:bg-bg-elevated border border-transparent",
};

const sizeStyles: Record<ButtonSize, string> = {
  default: "min-h-12 px-5 text-sm",
  sm: "min-h-10 px-4 text-sm",
};

export function Button({
  variant = "primary",
  size = "default",
  href,
  children,
  fullWidth = false,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-md transition-colors duration-200",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
    "disabled:opacity-50 disabled:pointer-events-none",
    variantStyles[variant],
    sizeStyles[size],
    fullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
