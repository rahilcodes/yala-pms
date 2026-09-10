import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tenant Login",
  description:
    "Sign in to the YALA resident portal. Launching in Phase 2 with online rent payment, maintenance requests and documents. 24/7 maintenance line available now.",
};

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

const features = [
  { n: "1", title: "Online rent payment", body: "ACH, debit or credit, with autopay and payment history." },
  { n: "2", title: "Maintenance requests", body: "Submit with photos, track status, and message the coordinator." },
  { n: "3", title: "Documents", body: "Lease, addenda, move-in inspection report and notices in one place." },
];

export default function TenantLoginPage() {
  return (
    <main style={{ background: "#EFE6D3", padding: "clamp(48px,7vw,96px) 24px" }}>
      <div style={{ maxWidth: 1040, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 40, alignItems: "start" }}>
        {/* Card */}
        <div style={{ background: "#fff", borderTop: "3px solid #0B1F3A", padding: "clamp(28px,4vw,44px)", display: "flex", flexDirection: "column", gap: 18 }}>
          <div className="kicker">Tenant Portal</div>
          <h1 style={{ fontFamily: "var(--font-playfair)", fontWeight: 400, fontSize: "clamp(30px,3.4vw,40px)", lineHeight: 1.1, color: "#0B1F3A" }}>
            Sign in to your resident account.
          </h1>
          <form style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <label className="field-label">
              Email
              <input type="email" placeholder="you@example.com" style={inputStyle} />
            </label>
            <label className="field-label">
              Password
              <input type="password" placeholder="••••••••" style={inputStyle} />
            </label>
            <button type="button" className="h-navy" style={{ height: 52, background: "#0B1F3A", color: "#fff", border: 0, borderRadius: 999, font: "inherit", fontWeight: 700, fontSize: 14, cursor: "pointer", marginTop: 6 }}>
              Sign in
            </button>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "#5B6577" }}>
              <a href="#reset" style={{ color: "#5B6577" }}>Forgot password?</a>
              <a href="#apply" className="h-link-gold" style={{ color: "#7A6230", borderBottom: "1px solid #BFA163" }}>New applicant? Apply</a>
            </div>
          </form>
          <div id="maintenance" style={{ background: "#F8F5EF", border: "1px solid #E6E2D9", padding: "14px 16px", fontSize: "13.5px", lineHeight: 1.6, color: "#3F4A5E", scrollMarginTop: 90 }}>
            <strong style={{ color: "#0B1F3A" }}>Portal launching in Phase 2.</strong> Until then: rent by ACH as arranged at move-in, and maintenance requests to{" "}
            <a href="tel:9495221103" style={{ color: "#0B1F3A", fontWeight: 700 }}>(949) 522-1103</a>, 24 hours a day for emergencies.
          </div>
        </div>

        {/* Feature list */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20, paddingTop: 8 }}>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontWeight: 400, fontSize: "clamp(24px,2.6vw,30px)", lineHeight: 1.15, color: "#0B1F3A" }}>
            What the resident portal will include
          </h2>
          <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", borderTop: "1px solid #D6C9A8" }}>
            {features.map((f) => (
              <li key={f.n} style={{ padding: "16px 0", borderBottom: "1px solid #D6C9A8", display: "grid", gridTemplateColumns: "32px 1fr", gap: 12 }}>
                <span style={{ fontFamily: "var(--font-playfair)", fontSize: 20, color: "#7A6230" }}>{f.n}</span>
                <div>
                  <div style={{ fontWeight: 700, color: "#0B1F3A" }}>{f.title}</div>
                  <div style={{ fontSize: 14, color: "#3F4A5E", marginTop: 4 }}>{f.body}</div>
                </div>
              </li>
            ))}
          </ul>
          <div style={{ fontSize: 14, color: "#5B6577" }}>
            Looking for a home?{" "}
            <Link href="/properties" className="h-link-gold" style={{ color: "#7A6230", borderBottom: "1px solid #BFA163" }}>See available rentals →</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
