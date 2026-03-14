"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

export default function KayitPage() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Backend entegrasyonu sonra eklenecek
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-16">
      {/* Background glow */}
      <div className="fixed inset-0 bg-radial-[ellipse_at_center] from-[var(--accent)]/3 via-transparent to-transparent pointer-events-none" />

      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <div className="text-center mb-10">
          <Link
            href="/"
            className="text-3xl font-bold tracking-wider text-[var(--text)]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            BONCUR<span className="text-[var(--accent)]">.</span>
          </Link>
        </div>

        {/* Card */}
        <div className="card-gradient p-8 sm:p-10">
          <h1
            className="text-2xl font-bold tracking-tight mb-2"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            KAYIT OL
          </h1>
          <p className="text-sm text-[var(--text-muted)] mb-8">
            Hesap oluştur ve dönüşüm yolculuğuna başla.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-[var(--text-muted)] mb-2">
                Ad Soyad
              </label>
              <input
                type="text"
                required
                placeholder="Ad Soyad"
                className="w-full px-4 py-3 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] placeholder-[var(--text-dim)] focus:outline-none focus:border-[var(--accent)] transition-colors duration-200 text-sm"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-[var(--text-muted)] mb-2">
                E-posta
              </label>
              <input
                type="email"
                required
                placeholder="ornek@email.com"
                className="w-full px-4 py-3 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] placeholder-[var(--text-dim)] focus:outline-none focus:border-[var(--accent)] transition-colors duration-200 text-sm"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-[var(--text-muted)] mb-2">
                Telefon
              </label>
              <input
                type="tel"
                required
                placeholder="+90 5XX XXX XX XX"
                className="w-full px-4 py-3 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] placeholder-[var(--text-dim)] focus:outline-none focus:border-[var(--accent)] transition-colors duration-200 text-sm"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-[var(--text-muted)] mb-2">
                Şifre
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="En az 8 karakter"
                  className="w-full px-4 py-3 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] placeholder-[var(--text-dim)] focus:outline-none focus:border-[var(--accent)] transition-colors duration-200 text-sm pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-dim)] hover:text-[var(--text-muted)] transition-colors cursor-pointer"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Terms */}
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                required
                className="mt-1 w-4 h-4 rounded border-[var(--border)] accent-[var(--accent)]"
              />
              <span className="text-xs text-[var(--text-dim)] leading-relaxed">
                <Link href="/kullanim-kosullari" className="text-[var(--accent)] hover:underline">
                  Kullanım Koşulları
                </Link>
                &apos;nı ve{" "}
                <Link href="/gizlilik" className="text-[var(--accent)] hover:underline">
                  Gizlilik Politikası
                </Link>
                &apos;nı okudum ve kabul ediyorum.
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[var(--accent)] text-white font-semibold text-sm tracking-wide uppercase hover:bg-[var(--accent-dark)] transition-colors duration-200 cursor-pointer glow-button"
            >
              Kayıt Ol
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-[var(--border)]" />
            <span className="text-xs text-[var(--text-dim)]">veya</span>
            <div className="flex-1 h-px bg-[var(--border)]" />
          </div>

          {/* Google signup placeholder */}
          <button
            type="button"
            className="w-full py-3.5 rounded-xl border border-[var(--border-hover)] text-[var(--text-muted)] font-medium text-sm hover:bg-[var(--bg-card)] hover:text-[var(--text)] transition-colors duration-200 cursor-pointer flex items-center justify-center gap-3"
          >
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Google ile devam et
          </button>
        </div>

        {/* Login link */}
        <p className="text-center mt-6 text-sm text-[var(--text-muted)]">
          Zaten hesabın var mı?{" "}
          <Link href="/giris" className="text-[var(--accent)] hover:underline font-medium">
            Giriş yap
          </Link>
        </p>
      </div>
    </div>
  );
}
