"use client";

import Image from "next/image";
import SectionBadge from "@/components/ui/SectionBadge";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { ABOUT } from "@/lib/constants";

export default function About() {
  return (
    <section id="hakkimda" className="relative py-24 sm:py-32 section-glow">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll className="text-center mb-16">
          <SectionBadge text={ABOUT.badge} />
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Text Card */}
          <AnimateOnScroll direction="left" className="flex flex-col justify-between py-4 lg:pr-8">
            <div>
              <h2
                className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.05]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {ABOUT.name}
                <br />
                <span className="text-[var(--accent)]">{ABOUT.nickname}</span>
              </h2>

              <p className="mt-6 text-[#bbb] leading-relaxed">
                {ABOUT.bio}
              </p>
              <p className="mt-4 text-[#bbb] leading-relaxed">
                {ABOUT.bio2}
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-8 sm:gap-12 mt-10 pt-8 border-t border-[var(--border-hover)]">
              {ABOUT.stats.map((stat) => (
                <div key={stat.label}>
                  <div
                    className="text-3xl sm:text-4xl font-bold text-[var(--text)]"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-[var(--text-dim)] mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          {/* Photo Card */}
          <AnimateOnScroll direction="right" delay={0.15} className="card-gradient overflow-hidden relative aspect-[3/4] lg:aspect-auto">
            <Image
              src="/images/about-batu.jpg"
              alt="Batuhan Balkır"
              fill
              className="object-cover"
              style={{ objectPosition: "center 30%" }}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Subtle gradient overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--bg-card)] to-transparent" />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
