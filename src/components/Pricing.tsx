"use client";

import { Check } from "lucide-react";
import SectionBadge from "@/components/ui/SectionBadge";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import GlowButton from "@/components/ui/GlowButton";
import { PACKAGES } from "@/lib/constants";

export default function Pricing() {
  return (
    <section id="paketler" className="relative py-24 sm:py-32 section-glow-alt">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll className="text-center mb-16">
          <SectionBadge text="PAKETLER" />
          <h2
            className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            SANA UYGUN{" "}
            <span className="text-[var(--accent)]">PAKETİ SEÇ</span>
          </h2>
          <p className="mt-4 text-[var(--text-muted)] max-w-lg mx-auto">
            Hedefin ve bütçen ne olursa olsun, sana uygun bir plan var.
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-5">
          {PACKAGES.map((pkg, i) => (
            <AnimateOnScroll key={pkg.name} delay={i * 0.1}>
              <div
                className={`relative p-7 sm:p-8 h-full flex flex-col ${
                  pkg.featured ? "card-featured" : "card-gradient"
                }`}
              >
                {/* Featured badge */}
                {pkg.featured && pkg.badge && (
                  <span className="absolute -top-3 left-7 px-3 py-1 text-xs font-semibold tracking-wider uppercase bg-[var(--accent)] text-white rounded-full">
                    {pkg.badge}
                  </span>
                )}

                {/* Package badge */}
                <span
                  className={`inline-block self-start px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-md border ${
                    pkg.featured
                      ? "border-[var(--accent)]/40 text-[var(--accent)] bg-[var(--accent)]/5"
                      : "border-[var(--border-hover)] text-[var(--text-muted)]"
                  }`}
                >
                  {pkg.name}
                </span>

                {/* Duration */}
                <div className="mt-2 text-sm text-[var(--text-dim)]">
                  {pkg.duration}
                </div>

                {/* Price */}
                <div className="mt-4">
                  <span
                    className={`text-4xl sm:text-5xl font-bold ${
                      pkg.featured ? "text-[var(--accent)]" : "text-[var(--text)]"
                    }`}
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    ₺{pkg.price}
                  </span>
                  <span className="text-[var(--text-dim)] text-sm ml-1">
                    /ay
                  </span>
                </div>

                {/* Description */}
                <p className="mt-3 text-sm text-[var(--text-muted)] leading-relaxed">
                  {pkg.description}
                </p>

                {/* Features */}
                <ul className="mt-6 space-y-3 flex-1">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        size={16}
                        className={`mt-0.5 flex-shrink-0 ${
                          pkg.featured
                            ? "text-[var(--accent)]"
                            : "text-[var(--text-dim)]"
                        }`}
                      />
                      <span className="text-sm text-[var(--text-muted)]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-8 relative z-10">
                  <GlowButton
                    href="#"
                    variant={pkg.featured ? "primary" : "secondary"}
                    className="w-full justify-center"
                  >
                    Hemen Başla
                  </GlowButton>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
