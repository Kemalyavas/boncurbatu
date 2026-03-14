"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

export default function GirisPage() {
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
            GİRİŞ YAP
          </h1>
          <p className="text-sm text-[var(--text-muted)] mb-8">
            Hesabına giriş yap ve programına devam et.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
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

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-[var(--text-muted)] mb-2">
                Şifre
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••"
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

            {/* Forgot password */}
            <div className="text-right">
              <a href="#" className="text-xs text-[var(--accent)] hover:underline">
                Şifreni mi unuttun?
              </a>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[var(--accent)] text-white font-semibold text-sm tracking-wide uppercase hover:bg-[var(--accent-dark)] transition-colors duration-200 cursor-pointer glow-button"
            >
              Giriş Yap
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-[var(--border)]" />
            <span className="text-xs text-[var(--text-dim)]">veya</span>
            <div className="flex-1 h-px bg-[var(--border)]" />
          </div>

          {/* Google login placeholder */}
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

        {/* Register link */}
        <p className="text-center mt-6 text-sm text-[var(--text-muted)]">
          Hesabın yok mu?{" "}
          <Link href="/kayit" className="text-[var(--accent)] hover:underline font-medium">
            Kayıt ol
          </Link>
        </p>
      </div>
    </div>
  );
}
