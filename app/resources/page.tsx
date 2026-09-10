import type { Metadata } from "next";
import { GuideForm } from "./GuideForm";
import { FaqAccordion } from "./FaqAccordion";

export const metadata: Metadata = {
  title: "Owner Resources",
  description:
    "The Orange County Rental Owner's Guide, owner FAQs, and recent notes on rents, AB 1482 compliance and maintenance from YALA Property Management.",
};

const guideBullets = [
  "How to price a rental in Irvine, Tustin, Newport Beach and Costa Mesa",
  "AB 1482: what the rent cap and just-cause rules mean for your unit",
  "Security deposits under the 2024 one-month limit",
  "The 11 questions to ask any property manager, with the answers we give",
  "A year-one cash flow worksheet",
];

const articles = [
  { href: "#article-1", meta: "Aug 2026 · Market", title: "Irvine rents, Q3 2026: what 3-bedrooms are actually leasing for", body: "Median asking vs. achieved rent across Woodbury, Portola Springs and Great Park, from our own leases." },
  { href: "#article-2", meta: "Jul 2026 · Compliance", title: "Does AB 1482 apply to your single-family rental?", body: "The exemption most owners assume they have, and the notice you must include in the lease to keep it." },
  { href: "#article-3", meta: "Jun 2026 · Operations", title: "The $500 approval limit: how we decide what to fix without calling you", body: "Our maintenance triage, what counts as an emergency, and how to set a limit that fits your reserve." },
];

export default function ResourcesPage() {
  return (
    <main>
      {/* Intro */}
      <section style={{ padding: "clamp(56px,8vw,96px) 24px 40px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", flexDirection: "column", gap: 18 }}>
          <div className="kicker">Owner resources</div>
          <h1 className="h1">What every Orange County landlord should know before handing over the keys.</h1>
        </div>
      </section>

      {/* Gated guide */}
      <section id="guide" style={{ padding: "0 24px clamp(56px,8vw,96px)", scrollMarginTop: 90 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", background: "#0B1F3A", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 40, padding: "clamp(32px,5vw,64px)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ fontSize: 12, letterSpacing: ".24em", textTransform: "uppercase", color: "#BFA163" }}>Free download · 28 pages</div>
            <h2 style={{ fontFamily: "var(--font-playfair)", fontWeight: 400, fontSize: "clamp(28px,3.4vw,44px)", lineHeight: 1.1, color: "#fff", textWrap: "pretty" }}>
              The Orange County Rental Owner&apos;s Guide, 2026 edition.
            </h2>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gap: 10, fontSize: 15, lineHeight: 1.5, color: "#C9CFDA" }}>
              {guideBullets.map((b) => (
                <li key={b} style={{ display: "flex", gap: 12 }}>
                  <span style={{ color: "#BFA163" }}>—</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <GuideForm />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section" style={{ background: "#F8F5EF", scrollMarginTop: 0 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 48, alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div className="kicker">FAQ</div>
            <h2 className="h2">Questions owners ask before signing.</h2>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: "#3F4A5E", maxWidth: 420 }}>
              Something not covered? Call <a href="tel:9495221103" style={{ color: "#0B1F3A", fontWeight: 700 }}>(949) 522-1103</a> or email{" "}
              <a href="mailto:butchi@yalarealty.com" className="h-link-gold" style={{ color: "#7A6230", borderBottom: "1px solid #BFA163" }}>butchi@yalarealty.com</a>.
            </p>
          </div>
          <FaqAccordion />
        </div>
      </section>

      {/* Articles */}
      <section className="section">
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: 40 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 640 }}>
            <div className="kicker">Articles</div>
            <h2 className="h2">Recent notes for owners.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 1, background: "#E6E2D9", border: "1px solid #E6E2D9" }}>
            {articles.map((a) => (
              <a key={a.href} href={a.href} className="h-card" style={{ background: "#fff", padding: "32px 28px", display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ fontSize: 12, color: "#7A6230" }}>{a.meta}</div>
                <div style={{ fontFamily: "var(--font-playfair)", fontSize: 22, color: "#0B1F3A", lineHeight: 1.25 }}>{a.title}</div>
                <p style={{ fontSize: "14.5px", lineHeight: 1.6, color: "#3F4A5E" }}>{a.body}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
