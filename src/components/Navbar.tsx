"use client";

import { useState, useEffect } from "react";
import { Menu, X, Instagram } from "lucide-react";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import { useScrollSpy } from "@/hooks/useScrollSpy";

// TikTok and YouTube SVG icons (Lucide doesn't have these)
function TikTokIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.87a8.16 8.16 0 004.76 1.52V6.94a4.85 4.85 0 01-1-.25z" />
    </svg>
  );
}

function YouTubeIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const socialIconMap: Record<string, React.FC<{ size?: number }>> = {
  instagram: ({ size }) => <Instagram size={size} />,
  tiktok: TikTokIcon,
  youtube: YouTubeIcon,
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useScrollSpy(
    NAV_LINKS.map((l) => l.href.replace("#", "")),
    100
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#050505]/80 backdrop-blur-xl border-b border-[var(--border)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
          {/* Logo + Promo */}
          <div className="flex items-center gap-4">
            <a
              href="/"
              className="font-[var(--font-heading)] text-2xl font-bold tracking-wider text-[var(--text)]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              BONCUR<span className="text-[var(--accent)]">.</span>
            </a>
            <a
              href="https://www.proteinocean.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-[var(--border-hover)] hover:border-[var(--text-dim)] transition-colors duration-200 text-xs text-[var(--text-muted)]"
            >
              <span className="font-semibold text-[var(--accent)]">BONCUR</span>
              <span>koduyla Proteinocean'da %10 indirim</span>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                  activeId === link.href.replace("/#", "")
                    ? "text-[var(--accent)]"
                    : "text-[var(--text-muted)] hover:text-[var(--text)]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Auth */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-3">
              <a
                href="/giris"
                className="text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text)] transition-colors duration-200"
              >
                Giriş Yap
              </a>
              <a
                href="/kayit"
                className="px-4 py-2 text-sm font-medium rounded-lg bg-[var(--accent)] text-white hover:bg-[var(--accent-dark)] transition-colors duration-200"
              >
                Kayıt Ol
              </a>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-[var(--text)] p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[var(--bg)]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 lg:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-2xl font-semibold text-[var(--text)] hover:text-[var(--accent)] transition-colors"
              style={{ fontFamily: "var(--font-heading)" }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-4 mt-8">
            <a
              href="/giris"
              className="px-6 py-3 text-sm font-medium rounded-lg border border-[var(--border-hover)] text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Giriş Yap
            </a>
            <a
              href="/kayit"
              className="px-6 py-3 text-sm font-medium rounded-lg bg-[var(--accent)] text-white hover:bg-[var(--accent-dark)] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Kayıt Ol
            </a>
          </div>
          <div className="flex items-center gap-6 mt-6">
            {SOCIAL_LINKS.map((social) => {
              const IconComp = socialIconMap[social.icon];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
                  aria-label={social.label}
                >
                  <IconComp size={22} />
                </a>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
