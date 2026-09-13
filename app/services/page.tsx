import type { Metadata } from "next";
import Link from "next/link";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-service Orange County property management: leasing, rent collection, maintenance, inspections, financial reporting, and evictions & compliance — scope in writing.",
};

type Block = {
  id: string;
  n: string;
  title: string;
  intro: string;
  fee?: React.ReactNode;
  items: string[];
};

const blocks: Block[] = [
  {
    id: "leasing",
    n: "01",
    title: "Leasing & Marketing",
    intro:
      "Vacancy is the largest cost in rental ownership. We price to the market, not above it, and fill units in a median of 14 days.",
    fee: (
      <>
        <strong style={{ color: "#0B1F3A" }}>Fee:</strong> 50% of first month&apos;s rent (Essential) · included on Premier
      </>
    ),
    items: [
      "Rental analysis with three comparable leases and a recommended list price",
      "Professional photography, floor plan and 3D tour",
      "Syndication to Zillow, Apartments.com, MLS and 30+ sites",
      "Showings 7 days a week with licensed agents",
      "Screening: credit, income (3× rent), eviction history, landlord references, ID verification",
      "CAA lease documents, move-in inspection and deposit collection",
    ],
  },
  {
    id: "rent",
    n: "02",
    title: "Rent Collection",
    intro:
      "Rent is due on the 1st, late on the 4th, and in your account by the 10th. 99.2% of rent across the portfolio was collected on time in 2025.",
    items: [
      "Online payment portal: ACH, debit and credit",
      "Automated reminders and late-fee enforcement per the lease",
      "Three-day notices served when required, without a call to you",
      "Owner disbursement by direct deposit on the 10th",
      "Security deposits held in a California trust account",
    ],
  },
  {
    id: "maintenance",
    n: "03",
    title: "Maintenance Coordination",
    intro:
      "Residents call us, not you. Work is dispatched to licensed, insured vendors at their invoice price. We add nothing.",
    fee: (
      <>
        <strong style={{ color: "#0B1F3A" }}>Markup on vendor invoices:</strong> 0%
      </>
    ),
    items: [
      "24/7 emergency line for residents",
      "Owner approval required above your set limit (default $500)",
      "Before/after photos on every completed work order",
      "Preventive schedule: HVAC service, water heater flush, gutter clearing",
      "Turnover coordination between residents: cleaning, paint, repairs, re-key",
    ],
  },
  {
    id: "inspections",
    n: "04",
    title: "Inspections",
    intro: "Documented condition at every stage protects both the asset and the deposit.",
    items: [
      "Move-in and move-out inspections with time-stamped photo reports",
      "Semi-annual interior and exterior inspections",
      "Drive-by exterior checks between visits",
      "Reports filed to your owner record and available on request",
    ],
  },
  {
    id: "reporting",
    n: "05",
    title: "Financial Reporting",
    intro:
      "Every dollar in and out, itemized. Your CPA gets a clean ledger, and you get a statement you can read in two minutes.",
    items: [
      "Monthly owner statement with income, expenses and reserve balance",
      "Year-end summary and IRS Form 1099-MISC",
      "Vendor invoices attached to every expense line",
      "Owner dashboard with income reporting, maintenance history and occupancy (Phase 2)",
    ],
  },
  {
    id: "compliance",
    n: "06",
    title: "Evictions & Compliance",
    intro:
      "California landlord-tenant law changes every year. Staying current is part of the fee, not an add-on.",
    items: [
      "AB 1482 rent-cap and just-cause tracking per property",
      "Legally compliant notices: 3-day, 30/60-day, rent increase",
      "Security-deposit itemization within the 21-day statutory window",
      "Eviction coordination with landlord-tenant counsel; court appearances on your behalf",
      "Fair housing compliant advertising and screening criteria",
    ],
  },
];

const subnav = [
  ["Leasing", "#leasing"],
  ["Rent collection", "#rent"],
  ["Maintenance", "#maintenance"],
  ["Inspections", "#inspections"],
  ["Financial reporting", "#reporting"],
  ["Evictions & compliance", "#compliance"],
];

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="section" style={{ background: "#0B1F3A" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 48, alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ fontSize: 12, letterSpacing: ".24em", textTransform: "uppercase", color: "#BFA163" }}>Services</div>
            <h1 style={{ fontFamily: "var(--font-playfair)", fontWeight: 400, fontSize: "clamp(36px,4.6vw,60px)", lineHeight: 1.05, color: "#fff", textWrap: "pretty" }}>
              Full-service management, with the scope in writing.
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: "#C9CFDA", maxWidth: 520 }}>
              Six areas of responsibility. Each one below lists exactly what is included, so there is no ambiguity about who does what once you sign.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 6 }}>
              <Link href="/contact#analysis" className="h-gold" style={{ background: "#BFA163", color: "#0B1F3A", fontWeight: 700, fontSize: "13.5px", padding: "15px 24px", borderRadius: 999 }}>
                Free Rental Analysis
              </Link>
              <Link href="/pricing" className="h-outline-white" style={{ border: "1.5px solid #fff", color: "#fff", fontWeight: 700, fontSize: "13.5px", padding: "14px 24px", borderRadius: 999 }}>
                See pricing
              </Link>
            </div>
          </div>
          <div style={{ padding: 10, border: "1px solid rgba(191,161,99,.5)" }}>
            <div style={{ position: "relative", aspectRatio: "4 / 3", color: "#C9CFDA" }}>
              <ImagePlaceholder src="/images/service_inspection.jpg" onDark caption="Photo: property manager walking a unit with clipboard" />
            </div>
          </div>
        </div>
      </section>

      {/* Sticky sub-nav */}
      <section style={{ borderBottom: "1px solid #E6E2D9", padding: "16px 24px", position: "sticky", top: 0, background: "#fff", zIndex: 5 }}>
        <nav aria-label="Services" style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "8px 24px", fontSize: "13.5px" }}>
          {subnav.map(([label, href]) => (
            <a key={href} href={href} style={{ color: "#0B1F3A", padding: "6px 0" }}>{label}</a>
          ))}
        </nav>
      </section>

      {/* Article blocks */}
      <section style={{ padding: "clamp(40px,6vw,72px) 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column" }}>
          {blocks.map((b, i) => (
            <article
              key={b.id}
              id={b.id}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
                gap: "32px 64px",
                padding: "clamp(36px,5vw,64px) 0",
                borderBottom: i === blocks.length - 1 ? undefined : "1px solid #E6E2D9",
                scrollMarginTop: 70,
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ fontSize: 12, color: "#7A6230", fontVariantNumeric: "tabular-nums", letterSpacing: ".2em" }}>{b.n}</div>
                <h2 style={{ fontFamily: "var(--font-playfair)", fontWeight: 400, fontSize: "clamp(28px,3vw,38px)", lineHeight: 1.1, color: "#0B1F3A" }}>{b.title}</h2>
                <p style={{ fontSize: 16, lineHeight: 1.65, color: "#3F4A5E" }}>{b.intro}</p>
                {b.fee && <div style={{ fontSize: "13.5px", color: "#7A6230" }}>{b.fee}</div>}
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gap: 12, fontSize: 15, lineHeight: 1.5, color: "#3F4A5E" }}>
                {b.items.map((item, j) => (
                  <li key={j} style={{ display: "flex", gap: 12, paddingBottom: j === b.items.length - 1 ? 0 : 12, borderBottom: j === b.items.length - 1 ? undefined : "1px solid #EFEBE3" }}>
                    <span style={{ color: "#BFA163", flex: "none" }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className="section-cta" style={{ background: "#F8F5EF" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 24 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, maxWidth: 600 }}>
            <h2 className="h2-cta">See what your property should rent for.</h2>
            <p style={{ fontSize: 16, color: "#3F4A5E" }}>Free written analysis within one business day. No obligation.</p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            <Link href="/contact#analysis" className="h-gold" style={{ background: "#BFA163", color: "#0B1F3A", fontWeight: 700, fontSize: "13.5px", padding: "15px 24px", borderRadius: 999 }}>Free Rental Analysis</Link>
            <a href="tel:9495221103" className="h-outline" style={{ border: "1.5px solid #0B1F3A", color: "#0B1F3A", fontWeight: 700, fontSize: "13.5px", padding: "14px 24px", borderRadius: 999 }}>(949) 522-1103</a>
          </div>
        </div>
      </section>
    </main>
  );
}
