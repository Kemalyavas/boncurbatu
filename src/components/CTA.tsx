"use client";

import Image from "next/image";
import { Instagram } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import GlowButton from "@/components/ui/GlowButton";
import { SOCIAL_LINKS, WHATSAPP_URL } from "@/lib/constants";

function TikTokIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.87a8.16 8.16 0 004.76 1.52V6.94a4.85 4.85 0 01-1-.25z" />
    </svg>
  );
}

function YouTubeIcon({ size = 20 }: { size?: number }) {
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

export default function CTA() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-radial-[ellipse_at_center] from-[var(--accent)]/5 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-8 items-center">
          {/* Text Content */}
          <div className="lg:col-span-3 text-center lg:text-left">
            <AnimateOnScroll>
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                DÖNÜŞÜMÜN
                <br />
                <span className="text-[var(--accent)]">BİR ADIM UZAĞINDA</span>
              </h2>

              <p className="mt-6 text-[var(--text-muted)] max-w-lg leading-relaxed">
                Binlerce kişi dönüşüm yolculuğuna başladı. Sıradaki sen ol.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center lg:items-start gap-4 relative z-10">
                <GlowButton href="#paketler">Hemen Başla</GlowButton>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-8 py-4 font-semibold text-sm tracking-wide uppercase rounded-xl border border-[var(--whatsapp)]/40 text-[var(--whatsapp)] hover:bg-[var(--whatsapp)]/10 transition-all duration-300 relative z-10"
                >
                  <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp'tan Sor
                </a>
              </div>

              {/* Social links */}
              <div className="mt-8 flex items-center gap-5 justify-center lg:justify-start">
                {SOCIAL_LINKS.map((social) => {
                  const IconComp = iconMap[social.icon];
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--text-dim)] hover:text-[var(--accent)] transition-colors duration-200"
                      aria-label={social.label}
                    >
                      <IconComp size={22} />
                    </a>
                  );
                })}
              </div>
            </AnimateOnScroll>
          </div>

          {/* Photo */}
          <AnimateOnScroll direction="right" delay={0.15} className="lg:col-span-2">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden card-gradient">
              <Image
                src="/images/cta-batu.jpg"
                alt="Batuhan Balkır"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--bg)] to-transparent" />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
