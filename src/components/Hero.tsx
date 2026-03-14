"use client";

import Image from "next/image";
import { motion } from "motion/react";
import GlowButton from "@/components/ui/GlowButton";
import { HERO } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-batu.jpg"
          alt="Batuhan Balkır"
          fill
          className="object-cover"
              style={{ objectPosition: "center 55%" }}
          priority
          quality={90}
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/70 via-[#050505]/60 to-[#050505]/90" />
        {/* Bottom fade to bg */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {HERO.title1}
          <br />
          <span className="text-[var(--text-muted)]">{HERO.title2} </span>
          <span className="text-[var(--accent)]">{HERO.titleAccent}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-6 text-base sm:text-lg text-[var(--text-muted)] max-w-xl mx-auto leading-relaxed"
        >
          {HERO.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-10"
        >
          <GlowButton href="#paketler">{HERO.cta}</GlowButton>
        </motion.div>
      </div>
    </section>
  );
}
