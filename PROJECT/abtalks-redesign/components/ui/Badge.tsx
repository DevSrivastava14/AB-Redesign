import type { ReactNode } from "react";
import type { BadgeVariant } from "@/lib/types";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-bg-elevated text-text-secondary border-border",
  accent: "bg-accent-muted text-accent border-accent/30",
  success: "bg-success-muted text-success border-success/30",
  warning: "bg-warning-muted text-warning border-warning/30",
  error: "bg-error-muted text-error border-error/30",
};

export function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-sm border px-2 py-0.5 text-xs font-medium ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
