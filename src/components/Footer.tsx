"use client";

import { Instagram } from "lucide-react";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";

function TikTokIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.87a8.16 8.16 0 004.76 1.52V6.94a4.85 4.85 0 01-1-.25z" />
    </svg>
  );
}

function YouTubeIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const iconMap: Record<string, React.FC<{ size?: number }>> = {
  instagram: ({ size }) => <Instagram size={size} />,
  tiktok: TikTokIcon,
  youtube: YouTubeIcon,
};

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <a
            href="/"
            className="text-xl font-bold tracking-wider text-[var(--text)]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            BONCUR<span className="text-[var(--accent)]">.</span>
          </a>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--text-dim)] hover:text-[var(--text-muted)] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((social) => {
              const IconComp = iconMap[social.icon];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-dim)] hover:text-[var(--text)] transition-colors duration-200"
                  aria-label={social.label}
                >
                  <IconComp size={16} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Legal Links */}
        <div className="mt-8 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--text-dim)]">
            &copy; {new Date().getFullYear()} Boncur Batu Koçluk. Tüm hakları
            saklıdır.
          </p>
          <div className="flex items-center gap-5">
            <a href="/gizlilik" className="text-xs text-[var(--text-dim)] hover:text-[var(--text-muted)] transition-colors duration-200">
              Gizlilik Politikası
            </a>
            <a href="/kullanim-kosullari" className="text-xs text-[var(--text-dim)] hover:text-[var(--text-muted)] transition-colors duration-200">
              Kullanım Koşulları
            </a>
            <a href="/cerez-politikasi" className="text-xs text-[var(--text-dim)] hover:text-[var(--text-muted)] transition-colors duration-200">
              Çerez Politikası
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
