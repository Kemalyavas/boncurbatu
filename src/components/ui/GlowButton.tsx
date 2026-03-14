"use client";

import { ArrowRight } from "lucide-react";

interface GlowButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
  showArrow?: boolean;
}

export default function GlowButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  showArrow = true,
}: GlowButtonProps) {
  const baseClasses =
    "inline-flex items-center gap-2.5 px-8 py-4 font-semibold text-sm tracking-wide uppercase rounded-xl transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "glow-button bg-[var(--accent)] text-white hover:bg-[var(--accent-dark)] hover:scale-[1.02]",
    secondary:
      "bg-transparent text-[var(--text)] border border-[var(--border-hover)] hover:border-[var(--text-dim)] hover:bg-[var(--bg-card)]",
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
        {showArrow && <ArrowRight size={16} />}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
      {showArrow && <ArrowRight size={16} />}
    </button>
  );
}
