import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

/** Reusable frosted panel with border + shadow for glassmorphism sections */
export function GlassCard({ children, className = "" }: Props) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-surface/40 shadow-xl shadow-black/5 backdrop-blur-xl dark:border-white/5 dark:bg-surface/30 dark:shadow-black/40 ${className}`}
    >
      {children}
    </div>
  );
}
