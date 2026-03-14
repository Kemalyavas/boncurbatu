"use client";

export default function AnnouncementBar() {
  return (
    <div id="announcement-bar" className="bg-[#0a0a0a] border-b border-[var(--border)] py-2.5 px-6 text-center">
      <p className="text-xs sm:text-sm text-[var(--text-muted)]">
        <span className="font-semibold text-[var(--accent)]">&quot;BONCUR&quot;</span>{" "}
        koduyla Proteinocean&apos;da{" "}
        <span className="font-semibold text-[var(--text)]">%10 indirim</span>
      </p>
    </div>
  );
}
