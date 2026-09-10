import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Owner Login",
  description:
    "Sign in to the YALA Property Management owner portal. Launching in Phase 2 with income reporting, maintenance tracking, occupancy and documents.",
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
  { n: "1", title: "Income reporting", body: "Monthly statements, year-to-date income and expense by property, 1099 download." },
  { n: "2", title: "Maintenance tracking", body: "Open and closed work orders with photos, invoices and approvals in one place." },
  { n: "3", title: "Occupancy and leasing", body: "Lease dates, renewal status, rent-cap tracking and vacancy marketing activity." },
  { n: "4", title: "Documents", body: "Management agreement, leases, inspection reports and insurance certificates." },
];

export default function OwnerLoginPage() {
  return (
    <main style={{ background: "#F8F5EF", padding: "clamp(48px,7vw,96px) 24px" }}>
      <div style={{ maxWidth: 1040, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 40, alignItems: "start" }}>
        {/* Card */}
        <div style={{ background: "#fff", borderTop: "3px solid #BFA163", padding: "clamp(28px,4vw,44px)", display: "flex", flexDirection: "column", gap: 18 }}>
          <div className="kicker">Owner Portal</div>
          <h1 style={{ fontFamily: "var(--font-playfair)", fontWeight: 400, fontSize: "clamp(30px,3.4vw,40px)", lineHeight: 1.1, color: "#0B1F3A" }}>
            Sign in to your owner account.
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
            <a href="#reset" style={{ fontSize: 13, color: "#5B6577", textAlign: "center" }}>Forgot password?</a>
          </form>
          <div style={{ background: "#F8F5EF", border: "1px solid #E6E2D9", padding: "14px 16px", fontSize: "13.5px", lineHeight: 1.6, color: "#3F4A5E" }}>
            <strong style={{ color: "#0B1F3A" }}>Portal launching in Phase 2.</strong> Current owners receive statements by email on the 10th. Questions in the meantime:{" "}
            <a href="tel:9495221103" style={{ color: "#0B1F3A", fontWeight: 700 }}>(949) 522-1103</a>.
          </div>
        </div>

        {/* Feature list */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20, paddingTop: 8 }}>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontWeight: 400, fontSize: "clamp(24px,2.6vw,30px)", lineHeight: 1.15, color: "#0B1F3A" }}>
            What the owner dashboard will include
          </h2>
          <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", borderTop: "1px solid #DDD5C5" }}>
            {features.map((f) => (
              <li key={f.n} style={{ padding: "16px 0", borderBottom: "1px solid #DDD5C5", display: "grid", gridTemplateColumns: "32px 1fr", gap: 12 }}>
                <span style={{ fontFamily: "var(--font-playfair)", fontSize: 20, color: "#BFA163" }}>{f.n}</span>
                <div>
                  <div style={{ fontWeight: 700, color: "#0B1F3A" }}>{f.title}</div>
                  <div style={{ fontSize: 14, color: "#3F4A5E", marginTop: 4 }}>{f.body}</div>
                </div>
              </li>
            ))}
          </ul>
          <div style={{ fontSize: 14, color: "#5B6577" }}>
            Not a client yet?{" "}
            <Link href="/contact#analysis" className="h-link-gold" style={{ color: "#7A6230", borderBottom: "1px solid #BFA163" }}>Start with a free rental analysis →</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
