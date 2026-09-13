import type { Metadata } from "next";
import Link from "next/link";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "About",
  description:
    "YALA Property Management is the management arm of YALA Realty & Associates in Irvine. Meet the team, compare your options, and see our licenses and affiliations.",
};

const team = [
  { slot: "about-team-1", name: "Butchi Reddy Yalamuri", role: "Principal & Broker of Record", bio: "Licensed California broker. Leads acquisitions across the YALA companies and personally reviews every rental analysis.", photo: "Portrait: Butchi Reddy Yalamuri", src: "/images/team_butchi.jpg" },
  { slot: "about-team-2", name: "Elena Marquez", role: "Director of Property Management", bio: "Fourteen years managing Orange County residential portfolios. Oversees leasing, owner statements and compliance.", photo: "Portrait: Director of Property Management", src: "/images/team_elena.jpg" },
  { slot: "about-team-3", name: "Marcus Tran", role: "Maintenance Coordinator", bio: "Runs the 24/7 resident line and the vendor network. Former general contractor.", photo: "Portrait: Maintenance Coordinator", src: "/images/team_marcus.jpg" },
  { slot: "about-team-4", name: "Sarah Whitfield", role: "Leasing Agent", bio: "Handles showings and screening. Leased 96 units in 2025 at a median 13 days on market.", photo: "Portrait: Leasing Agent", src: "/images/team_sarah.jpg" },
];

const compare: [string, string, string, string][] = [
  ["Days to lease a vacancy", "35–50", "28", "14"],
  ["Your time per month", "8–12 hours", "1–2 hours", "Under 30 minutes"],
  ["Maintenance markup", "None (you coordinate)", "10–20%", "0%"],
  ["After-hours resident calls", "You", "Answering service", "Our coordinator, 24/7"],
  ["Legal notice compliance (AB 1482, deposits)", "Your risk", "Varies", "Reviewed per property"],
  ["Owner statement", "Spreadsheet", "Monthly, often late", "By the 10th, itemized"],
  ["Knows the asset from purchase", "Yes", "No", "Yes, via YALA Realty"],
];

const creds = [
  { tag: "License", title: "California DRE Broker", sub: "Lic. #0000000 (placeholder)" },
  { tag: "Member", title: "NARPM", sub: "National Association of Residential Property Managers" },
  { tag: "Member", title: "California Apartment Association", sub: "Orange County chapter" },
  { tag: "Member", title: "California Association of REALTORS®", sub: "Orange County REALTORS® · CRMLS" },
  { tag: "Insurance", title: "E&O and general liability", sub: "Certificates available on request" },
  { tag: "Commitment", title: "Equal Housing Opportunity", sub: "Fair housing compliant screening" },
];

const yalaTint = "rgba(191,161,99,.08)";

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="section">
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 48, alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div className="kicker">Why YALA</div>
            <h1 className="h1">We sell the property, finance it, and then look after it.</h1>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: "#3F4A5E", maxWidth: 540 }}>
              YALA Property Management grew out of YALA Realty &amp; Associates when our own investor clients kept asking the same question after closing: who should run this? The answer became a second company, with the same people and the same standard.
            </p>
          </div>
          <div style={{ padding: 10, border: "1px solid #D6CFC1" }}>
            <div style={{ position: "relative", aspectRatio: "4 / 3" }}>
              <ImagePlaceholder src="/images/yala_team_office.jpg" caption="Photo: YALA team at the Irvine office, 12 Proclamation Way" />
            </div>
          </div>
        </div>
      </section>

      {/* Our story */}
      <section className="section" style={{ background: "#F8F5EF" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 48 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div className="kicker">Our story</div>
            <h2 className="h2">Three companies, one client relationship.</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20, fontSize: 16, lineHeight: 1.7, color: "#3F4A5E" }}>
            <p>Butchi Reddy Yalamuri founded YALA Realty &amp; Associates in Irvine to serve buyers and investors across Orange County. As clients built rental portfolios, a pattern emerged: the properties were well chosen, but the management was inconsistent. Vacancies ran long, maintenance was marked up, and statements arrived late.</p>
            <p>YALA Property Management was formed to fix that for our own clients first. Today we manage 412 units for 286 owners, from single condos in Woodbury to fourplexes in Costa Mesa, with the same brokerage license, the same office and the same phone number.</p>
            <p>Alongside YALA Mortgage, the three companies let an owner buy, finance and operate a rental with one team that already knows the asset.</p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: 40 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 640 }}>
            <div className="kicker">Team</div>
            <h2 className="h2">The people who answer the phone.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 24 }}>
            {team.map((m) => (
              <div key={m.slot} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ position: "relative", aspectRatio: "4 / 5" }}>
                  <ImagePlaceholder src={m.src} caption={m.photo} />
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-playfair)", fontSize: 22, color: "#0B1F3A" }}>{m.name}</div>
                  <div style={{ fontSize: "13.5px", color: "#7A6230", marginTop: 4 }}>{m.role}</div>
                  <p style={{ margin: "10px 0 0", fontSize: 14, lineHeight: 1.6, color: "#3F4A5E" }}>{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compare (navy) */}
      <section className="section" style={{ background: "#0B1F3A" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: 40 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 640 }}>
            <div style={{ fontSize: 12, letterSpacing: ".24em", textTransform: "uppercase", color: "#BFA163" }}>Compare</div>
            <h2 style={{ fontFamily: "var(--font-playfair)", fontWeight: 400, fontSize: "clamp(28px,3.4vw,44px)", lineHeight: 1.1, color: "#fff" }}>Self-manage, a typical manager, or YALA.</h2>
          </div>
          <div style={{ overflowX: "auto" }}>
            <div style={{ minWidth: 680, display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", border: "1px solid #1C2E4A", fontSize: "14.5px" }}>
              <div style={{ padding: "16px 20px", borderBottom: "1px solid #1C2E4A", color: "#8F99AB", fontSize: 12, letterSpacing: ".18em", textTransform: "uppercase" }} />
              <div style={{ padding: "16px 20px", borderBottom: "1px solid #1C2E4A", borderLeft: "1px solid #1C2E4A", color: "#C9CFDA", fontFamily: "var(--font-playfair)", fontSize: 19 }}>Self-managing</div>
              <div style={{ padding: "16px 20px", borderBottom: "1px solid #1C2E4A", borderLeft: "1px solid #1C2E4A", color: "#C9CFDA", fontFamily: "var(--font-playfair)", fontSize: 19 }}>Typical manager</div>
              <div style={{ padding: "16px 20px", borderBottom: "1px solid #1C2E4A", borderLeft: "1px solid #1C2E4A", color: "#D9C48F", fontFamily: "var(--font-playfair)", fontSize: 19, background: yalaTint }}>YALA</div>

              {compare.map(([label, self, typical, yala]) => (
                <div key={label} style={{ display: "contents" }}>
                  <div style={{ padding: "14px 20px", borderBottom: "1px solid #1C2E4A", color: "#fff" }}>{label}</div>
                  <div style={{ padding: "14px 20px", borderBottom: "1px solid #1C2E4A", borderLeft: "1px solid #1C2E4A", color: "#8F99AB" }}>{self}</div>
                  <div style={{ padding: "14px 20px", borderBottom: "1px solid #1C2E4A", borderLeft: "1px solid #1C2E4A", color: "#8F99AB" }}>{typical}</div>
                  <div style={{ padding: "14px 20px", borderBottom: "1px solid #1C2E4A", borderLeft: "1px solid #1C2E4A", color: "#fff", background: yalaTint }}>{yala}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ fontSize: "12.5px", color: "#8F99AB" }}>
            Typical-manager figures reflect Orange County market averages from our 2025 owner onboarding interviews.
          </div>
        </div>
      </section>

      {/* Licenses & affiliations */}
      <section className="section">
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 48 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div className="kicker">Licenses &amp; affiliations</div>
            <h2 className="h2">Licensed, insured, and accountable.</h2>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: "#3F4A5E", maxWidth: 460 }}>
              Logos and license numbers below are placeholders to be replaced with the company&apos;s actual credentials.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 16 }}>
            {creds.map((c) => (
              <div key={c.title} style={{ border: "1px solid #E6E2D9", padding: 22, display: "flex", flexDirection: "column", gap: 6 }}>
                <div style={{ fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "#7A6230" }}>{c.tag}</div>
                <div style={{ fontFamily: "var(--font-playfair)", fontSize: 18, color: "#0B1F3A" }}>{c.title}</div>
                <div style={{ fontSize: 13, color: "#5B6577" }}>{c.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="section-cta" style={{ background: "#F8F5EF" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 24 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, maxWidth: 600 }}>
            <h2 className="h2-cta">Talk to Butchi about your property.</h2>
            <p style={{ fontSize: 16, color: "#3F4A5E" }}>A 20-minute call or a free written rental analysis, whichever you prefer.</p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            <Link href="/contact#analysis" className="h-gold" style={{ background: "#BFA163", color: "#0B1F3A", fontWeight: 700, fontSize: "13.5px", padding: "15px 24px", borderRadius: 999 }}>Free Rental Analysis</Link>
            <Link href="/contact#schedule" className="h-outline" style={{ border: "1.5px solid #0B1F3A", color: "#0B1F3A", fontWeight: 700, fontSize: "13.5px", padding: "14px 24px", borderRadius: 999 }}>Schedule a call</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
