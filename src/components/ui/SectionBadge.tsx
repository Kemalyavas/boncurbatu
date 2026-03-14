"use client";

interface SectionBadgeProps {
  text: string;
}

export default function SectionBadge({ text }: SectionBadgeProps) {
  return (
    <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-[0.2em] uppercase border rounded-full border-[var(--border-hover)] text-[var(--text-muted)] bg-[var(--bg-card)]">
      {text}
    </span>
  );
}
