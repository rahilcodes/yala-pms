"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

type Cta = { label: string; href: string; variant: "gold" | "outline" };
type Slide = {
  kicker: string;
  /** [before, italic accent, after] */
  title: [string, string, string];
  text: string;
  photo: string;
  src: string;
  ctas: Cta[];
};

const SLIDES: Slide[] = [
  {
    kicker: "Irvine & Orange County property management",
    title: ["Your investment, run like a ", "business", "."],
    text: "Leasing, rent collection, maintenance coordination and monthly owner statements. Full-service management from 7% of collected rent.",
    photo: "Photo: managed Irvine single-family home at dusk",
    src: "/images/hero_home_dusk.jpg",
    ctas: [
      { label: "Free Rental Analysis", href: "/contact#analysis", variant: "gold" },
      { label: "See our services", href: "/services", variant: "outline" },
    ],
  },
  {
    kicker: "For residents",
    title: ["A home that's ", "looked after", "."],
    text: "Browse available rentals across Irvine and Orange County, pay rent online, and submit maintenance requests that get answered.",
    photo: "Photo: resident at the door of an Irvine rental",
    src: "/images/hero_tenant_door.jpg",
    ctas: [
      { label: "Browse Available Rentals", href: "/properties", variant: "gold" },
      { label: "Tenant Portal", href: "/tenant-login", variant: "outline" },
    ],
  },
  {
    kicker: "Why owners choose YALA",
    title: ["412 homes, run to a ", "written standard", "."],
    text: "98.6% portfolio occupancy, 14 days average to lease, and no markup on maintenance invoices.",
    photo: "Photo: the YALA team at the Irvine office",
    src: "/images/yala_team_office.jpg",
    ctas: [
      { label: "Free Rental Analysis", href: "/contact#analysis", variant: "gold" },
      { label: "Talk to a broker", href: "/contact", variant: "outline" },
    ],
  },
];

const AUTO_MS = 7000;

const goldStyle: React.CSSProperties = {
  background: "#BFA163",
  color: "#0B1F3A",
  fontWeight: 700,
  fontSize: "13.5px",
  padding: "15px 26px",
  borderRadius: 999,
};
const outlineStyle: React.CSSProperties = {
  border: "1.5px solid rgba(255,255,255,.7)",
  color: "#fff",
  fontWeight: 700,
  fontSize: "13.5px",
  padding: "14px 26px",
  borderRadius: 999,
};

/** stagger delay as a CSS custom property */
const delay = (s: string) => ({ ["--d" as string]: s }) as React.CSSProperties;
const pad = (i: number) => String(i).padStart(2, "0");

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {dir === "left" ? <path d="M15 5l-7 7 7 7" /> : <path d="M9 5l7 7-7 7" />}
    </svg>
  );
}

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

  const active = SLIDES[index];

  return (
    <div
      className="hero-wrap"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onKeyDown={onKeyDown}
    >
      <section
        className={`hero-slider${paused ? " is-paused" : ""}`}
        role="region"
        aria-roledescription="carousel"
        aria-label="Featured"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {SLIDES.map((s, i) => {
          const isActive = i === index;
          return (
            <div
              key={i}
              className={`hero-slide${isActive ? " is-active" : ""}`}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${n}`}
              aria-hidden={!isActive}
            >
              <div className="hero-slide-bg">
                <ImagePlaceholder src={s.src} onDark hideCaption caption={s.photo} priority={i === 0} />
              </div>
              <div className="hero-slide-overlay" />
              <div className="hero-slide-num" aria-hidden="true">
                {pad(i + 1)}
              </div>

              <div className="hero-slide-content">
                <div className="hero-slide-inner">
                  <div className="hero-stagger hero-kicker" style={delay(".05s")}>
                    <span className="hero-kicker-line" />
                    {s.kicker}
                  </div>
                  <h1 className="hero-stagger hero-title" style={delay(".16s")}>
                    {s.title[0]}
                    <em>{s.title[1]}</em>
                    {s.title[2]}
                  </h1>
                  <p className="hero-stagger hero-text" style={delay(".3s")}>
                    {s.text}
                  </p>
                  <div className="hero-stagger hero-ctas" style={delay(".42s")}>
                    {s.ctas.map((c, j) => (
                      <Link
                        key={j}
                        href={c.href}
                        className={c.variant === "gold" ? "h-gold" : "h-outline-white"}
                        tabIndex={isActive ? 0 : -1}
                        style={c.variant === "gold" ? goldStyle : outlineStyle}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                  <div className="hero-stagger hero-trust" style={delay(".54s")}>
                    <span>Licensed California brokerage</span>
                    <i />
                    <span>412 units under management</span>
                    <i />
                    <span>0% vendor markup</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Controls: arrows · progress dots · counter */}
        <div className="hero-controls">
          <div className="hero-controls-inner">
            <button type="button" className="hero-arrow" aria-label="Previous slide" onClick={prev}>
              <Chevron dir="left" />
            </button>
            <button type="button" className="hero-arrow" aria-label="Next slide" onClick={next}>
              <Chevron dir="right" />
            </button>
            <div className="hero-dots" role="tablist" aria-label="Choose slide">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-label={`Go to slide ${i + 1}`}
                  aria-selected={i === index}
                  className={`hero-dot${i === index ? " is-active" : ""}`}
                  onClick={() => go(i)}
                >
                  {i === index && <span key={index} className="hero-dot-fill" />}
                </button>
              ))}
            </div>
            <div className="hero-counter" aria-hidden="true">
              <span>{pad(index + 1)}</span> / {pad(n)}
            </div>
          </div>
        </div>

        <div className="sr-only" aria-live="polite">
          Slide {index + 1} of {n}: {active.title.join("")}
        </div>
      </section>

      {/* Free rental analysis card: floats over the hero on wide screens, stacks below otherwise */}
      <form className="hero-card" action="/contact#analysis" method="get">
        <div className="hero-card-kicker">Free rental analysis</div>
        <div className="hero-card-title">What should your property rent for?</div>
        <p className="hero-card-text">
          A written estimate with three comparable leases, within one business day.
        </p>
        <div className="hero-card-row">
          <input
            name="address"
            aria-label="Property address"
            placeholder="Street, city, ZIP"
            className="hero-card-input"
          />
          <button type="submit" className="hero-card-btn h-gold">
            Get my analysis
          </button>
        </div>
        <div className="hero-card-note">No obligation. We never share your information.</div>
      </form>
    </div>
  );
}
