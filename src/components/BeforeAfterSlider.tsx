"use client";

import { useState, useRef, useCallback } from "react";

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const handleRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percent);
  }, []);

  // Desktop: drag anywhere in container
  const handleMouseDown = () => { isDragging.current = true; };
  const handleMouseUp = () => { isDragging.current = false; };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) updatePosition(e.clientX);
  };

  // Mobile: only drag from handle
  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    e.stopPropagation();
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging.current) {
      e.preventDefault();
      updatePosition(e.touches[0].clientX);
    }
  };
  const handleTouchEnd = () => { isDragging.current = false; };

  return (
    <div
      ref={containerRef}
      className="card-gradient overflow-hidden relative aspect-[4/5] cursor-ew-resize select-none"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {/* "Before" side — placeholder gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-950">
        <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-md text-xs font-medium text-[var(--text-muted)]">
          Önce
        </div>
      </div>

      {/* "After" side — placeholder gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-900"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        {/* Subtle accent tint on "after" side */}
        <div className="absolute inset-0 bg-[var(--accent)]/5" />
        <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-md text-xs font-medium text-[var(--text)]">
          Sonra
        </div>
      </div>

      {/* Placeholder text overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-[var(--text-dim)] text-sm text-center px-8">
          Gerçek dönüşüm fotoğrafları yakında eklenecek
        </p>
      </div>

      {/* Slider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white/80 z-10 pointer-events-none"
        style={{ left: `${sliderPos}%` }}
      >
        {/* Drag handle — touch events only here on mobile */}
        <div
          ref={handleRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 flex items-center justify-center pointer-events-auto touch-none"
        >
          <div className="flex gap-0.5">
            <div className="w-0.5 h-4 bg-white/80 rounded-full" />
            <div className="w-0.5 h-4 bg-white/80 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
