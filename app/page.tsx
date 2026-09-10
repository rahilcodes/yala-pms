import Link from "next/link";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

const inputStyle: React.CSSProperties = {
  height: 48,
  padding: "0 14px",
  font: "inherit",
  fontWeight: 400,
  fontSize: 14,
  color: "#14213A",
  border: "1px solid #D6CFC1",
  borderRadius: 2,
  background: "#fff",
};

const services = [
  {
    n: "01",
    href: "/services#leasing",
    title: "Leasing & Marketing",
    body: "Professional photos, syndicated listings, showings and screening to a written standard. Average 14 days to a signed lease.",
  },
  {
    n: "02",
    href: "/services#rent",
    title: "Rent Collection",
    body: "Online payments due on the 1st, late-fee enforcement, and owner disbursement by the 10th of every month.",
  },
  {
    n: "03",
    href: "/services#maintenance",
    title: "Maintenance Coordination",
    body: "24/7 resident line, licensed and insured vendors, and no markup on invoices. You approve anything over your set limit.",
  },
  {
    n: "04",
    href: "/services#inspections",
    title: "Inspections",
    body: "Move-in, move-out and semi-annual inspections with photo reports delivered to your owner file.",
  },
  {
    n: "05",
    href: "/services#reporting",
    title: "Financial Reporting",
    body: "Monthly statements, year-end 1099s and a full ledger your CPA can work from.",
  },
  {
    n: "06",
    href: "/services#compliance",
    title: "Evictions & Compliance",
    body: "California-compliant notices, AB 1482 rent-cap tracking, security-deposit accounting and eviction coordination with counsel.",
  },
];

const steps = [
  {
    n: "1",
    title: "Free rental analysis",
    body: "A written rent estimate with comparable leases, within one business day.",
  },
  {
    n: "2",
    title: "Management agreement and onboarding",
    body: "Keys, leases, deposits and vendor history transferred. Existing residents introduced to the portal.",
  },
  {
    n: "3",
    title: "Rent on the 1st, statement by the 10th",
    body: "Direct deposit to your account with an itemized statement. Maintenance handled within your approval limit.",
  },
];

const testimonials = [
  {
    quote:
      "“We moved two condos over from a manager who took nine weeks to fill a vacancy. YALA had the first one leased in eleven days at $200 more a month.”",
    name: "Priya & Naveen Kandula",
    meta: "Two units · Woodbury, Irvine · Owners since 2023",
  },
  {
    quote:
      "“I live in Seattle. The statement lands on the 10th, the deposit lands the same day, and I have not had a single late-night call in two years.”",
    name: "Daniel Okafor",
    meta: "Single-family home · Tustin Ranch · Out-of-state owner",
  },
  {
    quote:
      "“Butchi sold us the property and then managed it. Having one team that understands the asset and the tenant is the whole point.”",
    name: "Margaret Liu",
    meta: "Fourplex · Costa Mesa · Owner since 2021",
  },
];

const leased = [
  { slot: "home-prop-1", address: "24 Cabrillo Terrace", rent: "$4,250/mo", meta: "Irvine · 3 bd · 2.5 ba · Leased in 9 days", photo: "Photo: 24 Cabrillo Terrace exterior" },
  { slot: "home-prop-2", address: "118 Rockview", rent: "$3,150/mo", meta: "Irvine · 2 bd · 2 ba · Leased in 12 days", photo: "Photo: 118 Rockview condo" },
  { slot: "home-prop-3", address: "2810 Peppertree Lane", rent: "$5,400/mo", meta: "Tustin Ranch · 4 bd · 3 ba · Leased in 16 days", photo: "Photo: 2810 Peppertree Lane" },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero: split gateway */}
      <section
        aria-label="Choose your path"
        style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))" }}
      >
        {/* Owner panel (navy) */}
        <div style={{ background: "#0B1F3A", display: "flex", flexDirection: "column" }}>
          <div style={{ position: "relative", height: "clamp(200px,26vw,300px)", color: "#C9CFDA" }}>
            <ImagePlaceholder onDark caption="Photo: managed Irvine single-family home at dusk" priority />
          </div>
          <div style={{ padding: "clamp(28px,4vw,44px)", display: "flex", flexDirection: "column", gap: 20, flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 12, letterSpacing: ".24em", textTransform: "uppercase", color: "#BFA163" }}>
              <span style={{ width: 8, height: 8, background: "#BFA163", borderRadius: "50%" }} />
              I&apos;m a Property Owner
            </div>
            <h1 style={{ fontFamily: "var(--font-playfair)", fontWeight: 400, fontSize: "clamp(34px,3.6vw,48px)", lineHeight: 1.08, color: "#fff", textWrap: "pretty" }}>
              Your investment, run like a business.
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "#C9CFDA", textWrap: "pretty", maxWidth: 520 }}>
              Leasing, rent collection, maintenance coordination and monthly owner statements across Irvine and Orange County. Full-service management from 7% of collected rent.
            </p>
            <form action="/contact#analysis" method="get" style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: "auto" }}>
              <input
                name="address"
                aria-label="Property address"
                placeholder="Your rental property address"
                style={{ flex: 1, minWidth: 200, height: 50, padding: "0 16px", font: "inherit", fontSize: 14, color: "#14213A", background: "#fff", border: "1px solid #fff", borderRadius: 999 }}
              />
              <button type="submit" className="h-gold" style={{ height: 50, padding: "0 20px", background: "#BFA163", color: "#0B1F3A", border: 0, borderRadius: 999, font: "inherit", fontWeight: 700, fontSize: "13.5px", cursor: "pointer", whiteSpace: "nowrap" }}>
                Free Rental Analysis
              </button>
            </form>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 18px", fontSize: "12.5px", color: "#8F99AB" }}>
              <span>412 units managed</span>
              <span>98.6% occupancy</span>
              <span>14 days to lease</span>
            </div>
          </div>
        </div>

        {/* Tenant panel (champagne) */}
        <div style={{ background: "#EFE6D3", display: "flex", flexDirection: "column" }}>
          <div style={{ position: "relative", height: "clamp(200px,26vw,300px)" }}>
            <ImagePlaceholder caption="Photo: resident at the door of an Irvine rental" />
          </div>
          <div style={{ padding: "clamp(28px,4vw,44px)", display: "flex", flexDirection: "column", gap: 20, flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 12, letterSpacing: ".24em", textTransform: "uppercase", color: "#7A6230" }}>
              <span style={{ width: 8, height: 8, background: "#0B1F3A", borderRadius: "50%" }} />
              I&apos;m a Tenant / Resident
            </div>
            <h2 style={{ fontFamily: "var(--font-playfair)", fontWeight: 400, fontSize: "clamp(34px,3.6vw,48px)", lineHeight: 1.08, color: "#0B1F3A", textWrap: "pretty" }}>
              A home that&apos;s looked after.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "#3F4A5E", textWrap: "pretty", maxWidth: 520 }}>
              Browse available rentals in Irvine and Orange County, pay rent online, and submit maintenance requests that get answered.
            </p>
            <div style={{ display: "flex", gap: 10, marginTop: "auto", flexWrap: "wrap" }}>
              <Link href="/properties" className="h-navy" style={{ background: "#0B1F3A", color: "#fff", fontWeight: 700, fontSize: "13.5px", padding: "15px 22px", borderRadius: 999 }}>
                Browse Available Rentals
              </Link>
              <Link href="/tenant-login" className="h-outline" style={{ border: "1.5px solid #0B1F3A", color: "#0B1F3A", fontWeight: 700, fontSize: "13.5px", padding: "14px 22px", borderRadius: 999 }}>
                Tenant Portal
              </Link>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 18px", fontSize: "12.5px" }}>
              <Link href="/tenant-login" className="h-link-gold" style={{ color: "#5B6577", borderBottom: "1px solid #C9B98F" }}>Pay rent</Link>
              <Link href="/tenant-login#maintenance" className="h-link-gold" style={{ color: "#5B6577", borderBottom: "1px solid #C9B98F" }}>Request maintenance</Link>
              <Link href="/tenant-login" className="h-link-gold" style={{ color: "#5B6577", borderBottom: "1px solid #C9B98F" }}>Documents</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics strip */}
      <section style={{ borderBottom: "1px solid #E6E2D9", padding: "40px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 28 }}>
          {[
            ["412", "Units under management"],
            ["98.6%", "Portfolio occupancy"],
            ["14", "Avg days to lease"],
            ["$18.4M", "Rent collected in 2025"],
          ].map(([num, label]) => (
            <div key={label}>
              <div style={{ fontFamily: "var(--font-playfair)", fontSize: 40, color: "#0B1F3A", fontVariantNumeric: "tabular-nums" }}>{num}</div>
              <div style={{ fontSize: 12, letterSpacing: ".14em", textTransform: "uppercase", color: "#7A6230", marginTop: 4 }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services snapshot */}
      <section className="section">
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: 40 }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: 20 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 640 }}>
              <div className="kicker">What we handle</div>
              <h2 className="h2">Everything between the lease signing and your monthly statement.</h2>
            </div>
            <Link href="/services" className="h-outline" style={{ border: "1.5px solid #0B1F3A", color: "#0B1F3A", fontWeight: 700, fontSize: "13.5px", padding: "13px 22px", borderRadius: 999, whiteSpace: "nowrap" }}>
              All services →
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 1, background: "#E6E2D9", border: "1px solid #E6E2D9" }}>
            {services.map((s) => (
              <Link key={s.n} href={s.href} className="h-card" style={{ background: "#fff", padding: "32px 28px", display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ fontSize: 12, color: "#7A6230", fontVariantNumeric: "tabular-nums" }}>{s.n}</div>
                <div style={{ fontFamily: "var(--font-playfair)", fontSize: 24, color: "#0B1F3A" }}>{s.title}</div>
                <p style={{ fontSize: "14.5px", lineHeight: 1.6, color: "#3F4A5E" }}>{s.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section" style={{ background: "#F8F5EF" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 48, alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div className="kicker">How it works</div>
            <h2 className="h2">From first call to first statement in about three weeks.</h2>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: "#3F4A5E", maxWidth: 460 }}>
              Most owners come to us with a property that is already rented or about to be vacant. Either way, the path is the same.
            </p>
            <Link href="/contact#analysis" className="h-navy" style={{ alignSelf: "flex-start", background: "#0B1F3A", color: "#fff", fontWeight: 700, fontSize: "13.5px", padding: "15px 24px", borderRadius: 999, marginTop: 8 }}>
              Start with a free analysis
            </Link>
          </div>
          <ol style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column" }}>
            {steps.map((step, i) => (
              <li
                key={step.n}
                style={{
                  display: "grid",
                  gridTemplateColumns: "56px 1fr",
                  gap: 16,
                  padding: "24px 0",
                  borderTop: "1px solid #DDD5C5",
                  borderBottom: i === steps.length - 1 ? "1px solid #DDD5C5" : undefined,
                }}
              >
                <div style={{ fontFamily: "var(--font-playfair)", fontSize: 30, color: "#BFA163" }}>{step.n}</div>
                <div>
                  <div style={{ fontFamily: "var(--font-playfair)", fontSize: 22, color: "#0B1F3A", marginBottom: 6 }}>{step.title}</div>
                  <div style={{ fontSize: "14.5px", lineHeight: 1.6, color: "#3F4A5E" }}>{step.body}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: 40 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 640 }}>
            <div className="kicker">Owner testimonials</div>
            <h2 className="h2">What owners tell us.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 24 }}>
            {testimonials.map((t) => (
              <figure key={t.name} style={{ margin: 0, border: "1px solid #E6E2D9", padding: "32px 28px", display: "flex", flexDirection: "column", gap: 20, borderTop: "3px solid #BFA163" }}>
                <blockquote style={{ margin: 0, fontFamily: "var(--font-playfair)", fontSize: 21, lineHeight: 1.4, color: "#0B1F3A", textWrap: "pretty" }}>{t.quote}</blockquote>
                <figcaption style={{ fontSize: "13.5px", color: "#5B6577" }}>
                  <strong style={{ color: "#0B1F3A", fontWeight: 700 }}>{t.name}</strong>
                  <br />
                  {t.meta}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Recently leased */}
      <section className="section" style={{ background: "#F8F5EF" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: 40 }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: 20 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div className="kicker">Under management</div>
              <h2 className="h2">Recently leased.</h2>
            </div>
            <Link href="/properties" className="h-outline" style={{ border: "1.5px solid #0B1F3A", color: "#0B1F3A", fontWeight: 700, fontSize: "13.5px", padding: "13px 22px", borderRadius: 999, whiteSpace: "nowrap" }}>
              View all properties →
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 24 }}>
            {leased.map((p) => (
              <Link key={p.slot} href="/properties" style={{ background: "#fff", border: "1px solid #E6E2D9", display: "flex", flexDirection: "column" }}>
                <div style={{ position: "relative", aspectRatio: "3 / 2" }}>
                  <ImagePlaceholder caption={p.photo} />
                </div>
                <div style={{ padding: "20px 22px", display: "flex", flexDirection: "column", gap: 6 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                    <div style={{ fontFamily: "var(--font-playfair)", fontSize: 20, color: "#0B1F3A" }}>{p.address}</div>
                    <div style={{ fontWeight: 700, color: "#0B1F3A", whiteSpace: "nowrap" }}>{p.rent}</div>
                  </div>
                  <div style={{ fontSize: "13.5px", color: "#5B6577" }}>{p.meta}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA: free rental analysis */}
      <section id="analysis" className="section" style={{ background: "#0B1F3A" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 48, alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ fontSize: 12, letterSpacing: ".24em", textTransform: "uppercase", color: "#BFA163" }}>Free rental analysis</div>
            <h2 style={{ fontFamily: "var(--font-playfair)", fontWeight: 400, fontSize: "clamp(30px,3.4vw,44px)", lineHeight: 1.1, color: "#fff", textWrap: "pretty" }}>
              Find out what your property should rent for.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: "#C9CFDA", maxWidth: 480 }}>
              A written estimate from a licensed California broker, with three comparable leases and our recommended list price. No obligation.
            </p>
            <div style={{ fontSize: 14, color: "#8F99AB" }}>
              Prefer to talk? <a href="tel:9495221103" style={{ color: "#D9C48F", fontWeight: 700 }}>(949) 522-1103</a>
            </div>
          </div>
          <form action="/contact#analysis" method="get" style={{ background: "#fff", padding: 32, display: "flex", flexDirection: "column", gap: 12, borderTop: "3px solid #BFA163" }}>
            <label className="field-label">
              Property address
              <input name="address" placeholder="Street, city, ZIP" style={inputStyle} />
            </label>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: 12 }}>
              <label className="field-label">
                Your name
                <input name="name" placeholder="Full name" style={inputStyle} />
              </label>
              <label className="field-label">
                Phone
                <input name="phone" type="tel" placeholder="(949) 000-0000" style={inputStyle} />
              </label>
            </div>
            <label className="field-label">
              Email
              <input name="email" type="email" placeholder="you@example.com" style={inputStyle} />
            </label>
            <button type="submit" className="h-gold" style={{ height: 52, background: "#BFA163", color: "#0B1F3A", border: 0, borderRadius: 999, font: "inherit", fontWeight: 700, fontSize: 14, letterSpacing: ".02em", cursor: "pointer", marginTop: 6 }}>
              Get my free rental analysis
            </button>
            <div style={{ fontSize: 12, color: "#5B6577", textAlign: "center" }}>
              Response within one business day. We never share your information.
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
