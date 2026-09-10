import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent property management pricing: 6–8% of rent collected, no markups, no surprises. Every fee listed, with a worked year-one example.",
};

const rows: [string, string, string, string][] = [
  ["Leasing & marketing", "50% of 1st month", "40% of 1st month", "Included"],
  ["Resident screening", "Included", "Included", "Included"],
  ["Rent collection & disbursement", "By the 10th", "By the 10th", "By the 8th"],
  ["Maintenance coordination", "Business hours", "24/7 line", "24/7 line"],
  ["Vendor invoice markup", "0%", "0%", "0%"],
  ["Inspections", "Move-in / out", "+ Semi-annual", "+ Quarterly"],
  ["Monthly statements & 1099", "Included", "Included", "Included"],
  ["Lease renewals", "$295", "$295", "Included"],
  ["Eviction coordination", "$450 + costs", "$450 + costs", "Included"],
  ["Dedicated portfolio manager", "—", "—", "Included"],
  ["Minimum term", "12 months", "12 months", "None"],
];

const neverPay = [
  "Markup on maintenance or vendor invoices",
  "Management fee on a vacant unit",
  "Account setup or onboarding fee",
  "Inspection fees (move-in, move-out, semi-annual)",
  "Statement, 1099 or document fees",
  "Cancellation fee: 30 days' notice, no penalty",
];

const occasional: [string, string][] = [
  ["Leasing fee (new resident)", "50% / 40% of first month · included on Premier"],
  ["Lease renewal", "$295 flat · included on Premier"],
  ["Eviction coordination", "$450 + attorney and court costs at cost"],
  ["Maintenance reserve (held, not a fee)", "$500 per unit"],
  ["Renovation / capital project oversight", "8% of project cost, projects over $5,000 only"],
];

const ledger: [string, string, boolean?][] = [
  ["Annual rent collected", "$51,000"],
  ["Management fee (8%)", "−$4,080"],
  ["Leasing fee (40% of first month)", "−$1,700"],
  ["Maintenance (actual invoices, 0% markup, est.)", "−$1,850"],
];

const rowCell: React.CSSProperties = {
  padding: "16px 24px",
  borderBottom: "1px solid #EFEBE3",
  fontSize: 14,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  borderLeft: "1px solid #E6E2D9",
};

export default function PricingPage() {
  return (
    <main>
      {/* Intro */}
      <section style={{ padding: "clamp(56px,8vw,96px) 24px 40px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", flexDirection: "column", gap: 18, textAlign: "center", alignItems: "center" }}>
          <div className="kicker">Pricing</div>
          <h1 className="h1">One percentage. No markups. No surprises.</h1>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: "#3F4A5E", maxWidth: 600 }}>
            Fees are a percentage of rent actually collected. If the unit is vacant, you pay nothing. Every fee we charge is on this page.
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section style={{ padding: "0 24px clamp(56px,8vw,96px)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", overflowX: "auto" }}>
          <div style={{ minWidth: 760, display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", border: "1px solid #E6E2D9" }}>
            {/* Header row */}
            <div style={{ padding: "28px 24px", borderBottom: "1px solid #E6E2D9", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
              <div style={{ fontSize: 12, letterSpacing: ".2em", textTransform: "uppercase", color: "#7A6230" }}>Compare plans</div>
            </div>
            <div style={{ padding: "28px 24px", borderBottom: "1px solid #E6E2D9", borderLeft: "1px solid #E6E2D9", display: "flex", flexDirection: "column", gap: 6 }}>
              <div style={{ fontFamily: "var(--font-playfair)", fontSize: 24, color: "#0B1F3A" }}>Essential</div>
              <div style={{ fontSize: 13, color: "#5B6577" }}>Single-family &amp; condos</div>
              <div style={{ fontFamily: "var(--font-playfair)", fontSize: 40, color: "#0B1F3A", marginTop: 8, fontVariantNumeric: "tabular-nums" }}>7%</div>
              <div style={{ fontSize: "12.5px", color: "#5B6577" }}>of monthly rent collected</div>
            </div>
            <div style={{ padding: "28px 24px", borderBottom: "1px solid #E6E2D9", borderLeft: "1px solid #E6E2D9", background: "#0B1F3A", display: "flex", flexDirection: "column", gap: 6 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
                <div style={{ fontFamily: "var(--font-playfair)", fontSize: 24, color: "#fff" }}>Full-Service</div>
                <span style={{ fontSize: "10.5px", letterSpacing: ".14em", textTransform: "uppercase", color: "#0B1F3A", background: "#BFA163", padding: "4px 8px", borderRadius: 999, fontWeight: 700 }}>Most owners</span>
              </div>
              <div style={{ fontSize: 13, color: "#C9CFDA" }}>Hands-off ownership</div>
              <div style={{ fontFamily: "var(--font-playfair)", fontSize: 40, color: "#fff", marginTop: 8, fontVariantNumeric: "tabular-nums" }}>8%</div>
              <div style={{ fontSize: "12.5px", color: "#C9CFDA" }}>of monthly rent collected</div>
            </div>
            <div style={{ padding: "28px 24px", borderBottom: "1px solid #E6E2D9", borderLeft: "1px solid #E6E2D9", display: "flex", flexDirection: "column", gap: 6 }}>
              <div style={{ fontFamily: "var(--font-playfair)", fontSize: 24, color: "#0B1F3A" }}>Premier</div>
              <div style={{ fontSize: 13, color: "#5B6577" }}>Multi-unit &amp; portfolios (4+)</div>
              <div style={{ fontFamily: "var(--font-playfair)", fontSize: 40, color: "#0B1F3A", marginTop: 8, fontVariantNumeric: "tabular-nums" }}>6%</div>
              <div style={{ fontSize: "12.5px", color: "#5B6577" }}>of monthly rent collected</div>
            </div>

            {/* Feature rows */}
            {rows.map(([label, a, b, c]) => (
              <div key={label} style={{ display: "contents" }}>
                <div style={{ padding: "16px 24px", borderBottom: "1px solid #EFEBE3", fontSize: "14.5px", color: "#0B1F3A", display: "flex", alignItems: "center" }}>{label}</div>
                <div style={{ ...rowCell, color: "#3F4A5E" }}>{a}</div>
                <div style={{ ...rowCell, color: "#0B1F3A", background: "#F8F5EF", fontWeight: 700 }}>{b}</div>
                <div style={{ ...rowCell, color: "#3F4A5E" }}>{c}</div>
              </div>
            ))}

            {/* Buttons row */}
            <div style={{ padding: 24 }} />
            <div style={{ padding: 24, borderLeft: "1px solid #E6E2D9" }}>
              <Link href="/contact#analysis" className="h-outline" style={{ display: "block", textAlign: "center", border: "1.5px solid #0B1F3A", color: "#0B1F3A", fontWeight: 700, fontSize: "13.5px", padding: "13px 16px", borderRadius: 999 }}>Get started</Link>
            </div>
            <div style={{ padding: 24, borderLeft: "1px solid #E6E2D9", background: "#F8F5EF" }}>
              <Link href="/contact#analysis" className="h-gold" style={{ display: "block", textAlign: "center", background: "#BFA163", color: "#0B1F3A", fontWeight: 700, fontSize: "13.5px", padding: "14px 16px", borderRadius: 999 }}>Get started</Link>
            </div>
            <div style={{ padding: 24, borderLeft: "1px solid #E6E2D9" }}>
              <Link href="/contact" className="h-outline" style={{ display: "block", textAlign: "center", border: "1.5px solid #0B1F3A", color: "#0B1F3A", fontWeight: 700, fontSize: "13.5px", padding: "13px 16px", borderRadius: 999 }}>Talk to us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Never pay + occasional fees */}
      <section className="section" style={{ background: "#F8F5EF" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 48 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div className="kicker">Every fee, listed</div>
            <h2 className="h2">What you will never pay us for.</h2>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gap: 10, fontSize: 15, color: "#3F4A5E", lineHeight: 1.5 }}>
              {neverPay.map((item) => (
                <li key={item} style={{ display: "flex", gap: 12 }}>
                  <span style={{ color: "#BFA163" }}>—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ background: "#fff", border: "1px solid #E6E2D9", display: "flex", flexDirection: "column" }}>
            <div style={{ padding: "20px 24px", borderBottom: "1px solid #E6E2D9", fontSize: 12, letterSpacing: ".2em", textTransform: "uppercase", color: "#7A6230" }}>Occasional fees</div>
            {occasional.map(([label, val], i) => (
              <div key={label} style={{ display: "flex", justifyContent: "space-between", gap: 16, padding: "16px 24px", borderBottom: i === occasional.length - 1 ? undefined : "1px solid #EFEBE3", fontSize: "14.5px" }}>
                <span style={{ color: "#0B1F3A" }}>{label}</span>
                <span style={{ color: "#3F4A5E", textAlign: "right" }}>{val}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Worked example */}
      <section className="section">
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 48, alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div className="kicker">Example</div>
            <h2 className="h2">A $4,250 Irvine rental on Full-Service.</h2>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: "#3F4A5E", maxWidth: 480 }}>
              Figures for a 3-bedroom single-family home in Woodbury, first year, one leasing cycle. Your numbers will vary; the free analysis gives you the exact projection.
            </p>
          </div>
          <div style={{ border: "1px solid #E6E2D9", fontVariantNumeric: "tabular-nums" }}>
            {ledger.map(([label, val], i) => (
              <div key={label} style={{ display: "flex", justifyContent: "space-between", padding: "16px 24px", borderBottom: i === ledger.length - 1 ? "1px solid #E6E2D9" : "1px solid #EFEBE3", fontSize: "14.5px" }}>
                <span style={{ color: "#3F4A5E" }}>{label}</span>
                <span style={{ color: "#0B1F3A" }}>{val}</span>
              </div>
            ))}
            <div style={{ display: "flex", justifyContent: "space-between", padding: "20px 24px", background: "#F8F5EF", fontSize: 16, fontWeight: 700 }}>
              <span style={{ color: "#0B1F3A" }}>Net to owner, year one</span>
              <span style={{ color: "#0B1F3A" }}>$43,370</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="section-cta" style={{ background: "#0B1F3A" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 24 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, maxWidth: 600 }}>
            <h2 style={{ fontFamily: "var(--font-playfair)", fontWeight: 400, fontSize: "clamp(28px,3vw,38px)", lineHeight: 1.1, color: "#fff" }}>Get your exact projection.</h2>
            <p style={{ fontSize: 16, color: "#C9CFDA" }}>Free rental analysis with a year-one net estimate for your property.</p>
          </div>
          <Link href="/contact#analysis" className="h-gold" style={{ background: "#BFA163", color: "#0B1F3A", fontWeight: 700, fontSize: "13.5px", padding: "15px 24px", borderRadius: 999 }}>Free Rental Analysis</Link>
        </div>
      </section>
    </main>
  );
}
