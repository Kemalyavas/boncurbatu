"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import SectionBadge from "@/components/ui/SectionBadge";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { TRANSFORMATIONS } from "@/lib/constants";

export default function Transformations() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = TRANSFORMATIONS[activeIdx];

  return (
    <section id="donusumler" className="relative py-24 sm:py-32 section-glow">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll className="text-center mb-12">
          <SectionBadge text="SONUÇLAR" />
          <h2
            className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            DÖNÜŞÜMLER KENDİ ADINA
            <br />
            <span className="text-[var(--accent)]">KONUŞUR</span>
          </h2>
          <p className="mt-4 text-[var(--text-muted)] max-w-lg mx-auto">
            Kişisel antrenman, beslenme ve düzenli takip ile elde edilen gerçek
            sonuçlar.
          </p>
        </AnimateOnScroll>

        {/* Name Tabs */}
        <AnimateOnScroll className="flex justify-center gap-3 mb-10">
          {TRANSFORMATIONS.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setActiveIdx(i)}
              className={`px-5 py-2 text-sm font-medium tracking-wider uppercase rounded-lg border transition-all duration-200 cursor-pointer ${
                activeIdx === i
                  ? "border-[var(--accent)] text-[var(--accent)] bg-[var(--accent)]/5"
                  : "border-[var(--border-hover)] text-[var(--text-muted)] hover:text-[var(--text)] hover:border-[var(--text-dim)]"
              }`}
            >
              {t.name}
            </button>
          ))}
        </AnimateOnScroll>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Testimonial Card */}
          <AnimateOnScroll direction="left">
            <div className="card-gradient p-8 sm:p-10 h-full flex flex-col justify-between">
              {/* Stars */}
              <div>
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: active.stars }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-lg sm:text-xl text-[var(--text)] leading-relaxed font-medium">
                  &ldquo;{active.quote}&rdquo;
                </p>
              </div>

              {/* Author */}
              <div className="mt-8 pt-6 border-t border-[var(--border)]">
                <span className="text-[var(--text)] font-semibold">
                  {active.name}
                </span>
                <span className="text-[var(--text-dim)] mx-2">&middot;</span>
                <span className="text-[var(--text-muted)] text-sm">
                  {active.duration}
                </span>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Before/After Slider */}
          <AnimateOnScroll direction="right" delay={0.15}>
            <BeforeAfterSlider />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
