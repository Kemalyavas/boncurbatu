"use client";

import SectionBadge from "@/components/ui/SectionBadge";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { PROCESS_STEPS } from "@/lib/constants";

export default function Process() {
  return (
    <section id="surec" className="relative py-24 sm:py-32 section-glow-alt">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll className="text-center mb-16">
          <SectionBadge text="SÜREÇ" />
          <h2
            className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            4 ADIMDA{" "}
            <span className="text-[var(--accent)]">DÖNÜŞÜM</span>
          </h2>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROCESS_STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <AnimateOnScroll key={step.number} delay={i * 0.1}>
                <div className="card-gradient p-7 h-full flex flex-col group">
                  {/* Step number */}
                  <span
                    className="text-5xl font-bold text-[var(--accent)] opacity-30 group-hover:opacity-60 transition-opacity duration-300"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {step.number}
                  </span>

                  {/* Icon */}
                  <div className="mt-4 mb-4 w-10 h-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)]">
                    <Icon size={20} />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-xl font-bold tracking-wide"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
