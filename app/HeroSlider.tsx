"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

type Cta = { label: string; href: string; variant: "gold" | "outline" };
type Slide = {
  kicker: string;
  title: string;
  text: string;
  photo: string;
  ctas: Cta[];
};

const SLIDES: Slide[] = [
  {
    kicker: "Irvine & Orange County property management",
    title: "Your investment, run like a business.",
    text: "Leasing, rent collection, maintenance coordination and monthly owner statements. Full-service management from 7% of collected rent.",
    photo: "Photo: managed Irvine single-family home at dusk",
    ctas: [
      { label: "Free Rental Analysis", href: "/contact#analysis", variant: "gold" },
      { label: "See our services", href: "/services", variant: "outline" },
    ],
  },
  {
    kicker: "For residents",
    title: "A home that's looked after.",
    text: "Browse available rentals across Irvine and Orange County, pay rent online, and submit maintenance requests that get answered.",
    photo: "Photo: resident at the door of an Irvine rental",
    ctas: [
      { label: "Browse Available Rentals", href: "/properties", variant: "gold" },
      { label: "Tenant Portal", href: "/tenant-login", variant: "outline" },
    ],
  },
  {
    kicker: "Why owners choose YALA",
    title: "412 homes, run to a written standard.",
    text: "98.6% portfolio occupancy, 14 days average to lease, and no markup on maintenance invoices.",
    photo: "Photo: the YALA team at the Irvine office",
    ctas: [
      { label: "Free Rental Analysis", href: "/contact#analysis", variant: "gold" },
      { label: "Talk to a broker", href: "/contact", variant: "outline" },
    ],
  },
];

const AUTO_MS = 6000;
const goldStyle: React.CSSProperties = {
  background: "#BFA163",
  color: "#0B1F3A",
  fontWeight: 700,
  fontSize: "13.5px",
  padding: "15px 26px",
  borderRadius: 999,
};
const outlineStyle: React.CSSProperties = {
  border: "1.5px solid #fff",
  color: "#fff",
  fontWeight: 700,
  fontSize: "13.5px",
  padding: "14px 26px",
  borderRadius: 999,
};

export function HeroSlider() {
  const n = SLIDES.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);

  const go = useCallback((i: number) => setIndex(((i % n) + n) % n), [n]);
  const next = useCallback(() => setIndex((p) => (p + 1) % n), [n]);
  const prev = useCallback(() => setIndex((p) => (p - 1 + n) % n), [n]);

  useEffect(() => {
    if (paused) return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = setInterval(() => setIndex((p) => (p + 1) % n), AUTO_MS);
    return () => clearInterval(id);
  }, [paused, n, index]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 45) (dx < 0 ? next : prev)();
    touchX.current = null;
  };

  return (
    <section
      className="hero-slider"
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onKeyDown={onKeyDown}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="hero-track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {SLIDES.map((s, i) => (
          <div
            className="hero-slide"
            key={i}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${n}`}
            aria-hidden={i !== index}
          >
            <div className="hero-slide-bg" style={{ color: "#C9CFDA" }}>
              <ImagePlaceholder onDark hideCaption caption={s.photo} priority={i === 0} />
            </div>
            <div className="hero-slide-overlay" />
            <div className="hero-slide-content">
              <div className="hero-slide-inner">
                <div
                  style={{
                    fontSize: 12,
                    letterSpacing: ".24em",
                    textTransform: "uppercase",
                    color: "#BFA163",
                  }}
                >
                  {s.kicker}
                </div>
                <h1
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontWeight: 400,
                    fontSize: "clamp(32px,5vw,54px)",
                    lineHeight: 1.05,
                    color: "#fff",
                    textWrap: "pretty",
                    margin: 0,
                  }}
                >
                  {s.title}
                </h1>
                <p
                  style={{
                    fontSize: "clamp(15px,1.4vw,18px)",
                    lineHeight: 1.6,
                    color: "#C9CFDA",
                    maxWidth: 560,
                    textWrap: "pretty",
                    margin: 0,
                  }}
                >
                  {s.text}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 6 }}>
                  {s.ctas.map((c, j) => (
                    <Link
                      key={j}
                      href={c.href}
                      className={c.variant === "gold" ? "h-gold" : "h-outline-white"}
                      tabIndex={i === index ? 0 : -1}
                      style={c.variant === "gold" ? goldStyle : outlineStyle}
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="hero-arrow hero-arrow-prev"
        aria-label="Previous slide"
        onClick={prev}
      >
        &#8249;
      </button>
      <button
        type="button"
        className="hero-arrow hero-arrow-next"
        aria-label="Next slide"
        onClick={next}
      >
        &#8250;
      </button>

      <div className="hero-dots" role="tablist" aria-label="Choose slide">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-label={`Go to slide ${i + 1}`}
            aria-selected={i === index}
            className={`hero-dot ${i === index ? "is-active" : ""}`}
            onClick={() => go(i)}
          />
        ))}
      </div>
    </section>
  );
}
