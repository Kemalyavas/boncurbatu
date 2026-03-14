"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Show after a short delay so it doesn't flash on load
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="max-w-2xl mx-auto bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-5 sm:p-6 shadow-2xl shadow-black/50">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              Bu site, deneyiminizi iyileştirmek için çerezler kullanmaktadır.{" "}
              <a
                href="/cerez-politikasi"
                className="text-[var(--accent)] hover:underline"
              >
                Çerez Politikası
              </a>
              &apos;mızı inceleyebilirsiniz.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <button
                onClick={accept}
                className="px-5 py-2 text-sm font-medium rounded-lg bg-[var(--accent)] text-white hover:bg-[var(--accent-dark)] transition-colors duration-200 cursor-pointer"
              >
                Kabul Et
              </button>
              <button
                onClick={decline}
                className="px-5 py-2 text-sm font-medium rounded-lg border border-[var(--border-hover)] text-[var(--text-muted)] hover:text-[var(--text)] hover:border-[var(--text-dim)] transition-colors duration-200 cursor-pointer"
              >
                Reddet
              </button>
            </div>
          </div>
          <button
            onClick={decline}
            className="text-[var(--text-dim)] hover:text-[var(--text-muted)] transition-colors cursor-pointer"
            aria-label="Kapat"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
