"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Wordmark } from "./Wordmark";

type Audience = "owner" | "tenant";
type NavLink = { label: string; href: string; navKey: string };

const OWNER_LINKS: NavLink[] = [
  { label: "Services", href: "/services", navKey: "services" },
  { label: "Pricing", href: "/pricing", navKey: "pricing" },
  { label: "Properties", href: "/properties", navKey: "properties" },
  { label: "About", href: "/about", navKey: "about" },
  { label: "Resources", href: "/resources", navKey: "resources" },
  { label: "Contact", href: "/contact", navKey: "contact" },
];

const TENANT_LINKS: NavLink[] = [
  { label: "Available Rentals", href: "/properties", navKey: "properties" },
  { label: "Pay Rent", href: "/tenant-login", navKey: "tenant-login" },
  { label: "Maintenance", href: "/tenant-login#maintenance", navKey: "tenant-login" },
  { label: "Resources", href: "/resources", navKey: "resources" },
  { label: "Contact", href: "/contact", navKey: "contact" },
];

function activeKey(pathname: string): string {
  if (pathname === "/") return "home";
  return pathname.replace(/^\//, "").split("/")[0];
}

export function SiteNav() {
  const pathname = usePathname() || "/";
  const active = activeKey(pathname);

  const [audience, setAudience] = useState<Audience>("owner");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("yala-pm-audience");
      if (stored === "owner" || stored === "tenant") setAudience(stored);
    } catch {}
  }, []);

  useEffect(() => {
    const onResize = () => {
      // Desktop nav takes over at 1200px (see .nav-desktop in globals.css)
      if (window.innerWidth >= 1200) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const setAud = (a: Audience) => {
    try {
      localStorage.setItem("yala-pm-audience", a);
    } catch {}
    setAudience(a);
  };

  const isOwner = audience === "owner";
  const links = isOwner ? OWNER_LINKS : TENANT_LINKS;
  const loginLabel = isOwner ? "Owner Login" : "Tenant Login";
  const loginHref = isOwner ? "/owner-login" : "/tenant-login";

  const segBase =
    "font-sans text-[12.5px] font-bold px-[14px] py-[8px] rounded-full border-0 cursor-pointer whitespace-nowrap transition-colors";
  const segMBase =
    "font-sans text-[13px] font-bold px-3 py-[11px] rounded-full border-0 cursor-pointer";
  const segOn = "bg-navy text-white";
  const segOff = "bg-transparent text-muted";

  return (
    <header style={{ position: "relative", zIndex: 50, background: "#fff", color: "#0B1F3A" }}>
      {/* Utility bar (>=1000px) */}
      <div
        className="nav-utility"
        style={{
          justifyContent: "flex-end",
          gap: 24,
          padding: "0 clamp(16px,3vw,32px)",
          height: 34,
          alignItems: "center",
          fontSize: "12.5px",
          color: "#5B6577",
          background: "#F8F5EF",
          borderBottom: "1px solid #E6E2D9",
          whiteSpace: "nowrap",
        }}
      >
        <span>Part of YALA Realty &amp; Associates · 12 Proclamation Way, Irvine, CA 92602</span>
        <a href="tel:9495221103" style={{ color: "#0B1F3A", fontWeight: 700 }}>
          (949) 522-1103
        </a>
      </div>

      {/* Main bar */}
      <nav
        aria-label="Main"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 24,
          padding: "0 clamp(16px,3vw,32px)",
          height: 72,
          borderBottom: "1px solid #E6E2D9",
          whiteSpace: "nowrap",
        }}
      >
        <Link
          href="/"
          aria-label="YALA Property Management home"
          style={{ display: "flex", alignItems: "center", gap: 12, flex: "none" }}
        >
          <Wordmark />
        </Link>

        {/* Desktop center cluster */}
        <div className="nav-desktop" style={{ alignItems: "center", gap: 20 }}>
          <div
            role="tablist"
            aria-label="Audience"
            style={{ display: "inline-flex", background: "#F1EDE4", borderRadius: 999, padding: 4, flex: "none" }}
          >
            <button
              role="tab"
              type="button"
              aria-selected={isOwner}
              onClick={() => setAud("owner")}
              className={`${segBase} ${isOwner ? segOn : segOff}`}
            >
              I&apos;m an Owner
            </button>
            <button
              role="tab"
              type="button"
              aria-selected={!isOwner}
              onClick={() => setAud("tenant")}
              className={`${segBase} ${!isOwner ? segOn : segOff}`}
            >
              I&apos;m a Tenant
            </button>
          </div>
          <div style={{ display: "flex", gap: 18, fontSize: "13.5px" }}>
            {links.map((link, i) => (
              <Link
                key={`${link.navKey}-${i}`}
                href={link.href}
                style={{
                  color: "#0B1F3A",
                  padding: "6px 0",
                  borderBottom: `2px solid ${link.navKey === active ? "#BFA163" : "transparent"}`,
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop right cluster */}
        <div
          className="nav-desktop"
          style={{ justifyContent: "flex-end", alignItems: "center", gap: 12, fontSize: 13, flex: "none" }}
        >
          <Link
            href={loginHref}
            style={{
              color: "#0B1F3A",
              border: "1.5px solid #0B1F3A",
              padding: "9px 14px",
              borderRadius: 999,
              fontWeight: 700,
              fontSize: "12.5px",
            }}
            className="login-pill"
          >
            {loginLabel}
          </Link>
          <Link
            href="/contact#analysis"
            style={{
              background: "#BFA163",
              color: "#0B1F3A",
              fontWeight: 700,
              fontSize: "12.5px",
              letterSpacing: ".02em",
              padding: "10px 16px",
              borderRadius: 999,
            }}
            className="gold-pill"
          >
            Free Rental Analysis
          </Link>
        </div>

        {/* Mobile cluster */}
        <div className="nav-mobile" style={{ alignItems: "center", gap: 6 }}>
          <a
            href="tel:9495221103"
            aria-label="Call (949) 522-1103"
            style={{
              width: 44,
              height: 44,
              display: "grid",
              placeItems: "center",
              color: "#0B1F3A",
              fontSize: 15,
              border: "1.5px solid #0B1F3A",
              borderRadius: "50%",
            }}
          >
            ☏
          </a>
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
            style={{
              width: 44,
              height: 44,
              background: "transparent",
              border: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 5,
              cursor: "pointer",
              padding: 0,
            }}
          >
            <span style={{ width: 22, height: 2, background: "#0B1F3A" }} />
            <span style={{ width: 22, height: 2, background: "#0B1F3A" }} />
            <span style={{ width: 22, height: 2, background: "#BFA163" }} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: "100%",
            background: "#fff",
            borderBottom: "1px solid #E6E2D9",
            boxShadow: "0 24px 48px rgba(11,31,58,.14)",
            padding: "16px 20px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 18,
            zIndex: 60,
          }}
        >
          <div
            role="tablist"
            aria-label="Audience"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              background: "#F1EDE4",
              borderRadius: 999,
              padding: 4,
            }}
          >
            <button
              role="tab"
              type="button"
              aria-selected={isOwner}
              onClick={() => setAud("owner")}
              className={`${segMBase} ${isOwner ? segOn : segOff}`}
            >
              I&apos;m an Owner
            </button>
            <button
              role="tab"
              type="button"
              aria-selected={!isOwner}
              onClick={() => setAud("tenant")}
              className={`${segMBase} ${!isOwner ? segOn : segOff}`}
            >
              I&apos;m a Tenant
            </button>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {links.map((link, i) => (
              <Link
                key={`m-${link.navKey}-${i}`}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: link.navKey === active ? "#7A6230" : "#0B1F3A",
                  fontSize: 17,
                  fontFamily: "var(--font-playfair)",
                  padding: "13px 4px",
                  borderBottom: "1px solid #EFEBE3",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <Link
              href="/contact#analysis"
              onClick={() => setMenuOpen(false)}
              style={{
                background: "#BFA163",
                color: "#0B1F3A",
                fontWeight: 700,
                fontSize: 14,
                padding: "15px 22px",
                borderRadius: 999,
                textAlign: "center",
              }}
            >
              Free Rental Analysis
            </Link>
            <Link
              href={loginHref}
              onClick={() => setMenuOpen(false)}
              style={{
                border: "1.5px solid #0B1F3A",
                color: "#0B1F3A",
                fontWeight: 700,
                fontSize: 14,
                padding: "14px 22px",
                borderRadius: 999,
                textAlign: "center",
              }}
            >
              {loginLabel}
            </Link>
            <a
              href="tel:9495221103"
              style={{ color: "#5B6577", fontSize: "13.5px", textAlign: "center", padding: 8 }}
            >
              (949) 522-1103 · butchi@yalarealty.com
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
