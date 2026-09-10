import Link from "next/link";
import { Wordmark } from "./Wordmark";

const colHeading: React.CSSProperties = {
  fontSize: "11.5px",
  letterSpacing: ".22em",
  textTransform: "uppercase",
  color: "#BFA163",
  marginBottom: 6,
};

const linkStyle: React.CSSProperties = { color: "#C9CFDA" };
const crossLink: React.CSSProperties = { color: "#D9C48F" };

export function SiteFooter() {
  return (
    <footer
      style={{
        background: "#071528",
        color: "#C9CFDA",
        fontFamily: "var(--font-lato)",
        padding: "64px 24px 32px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: 40,
        }}
      >
        {/* Brand */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Wordmark onDark />
          </div>
          <div style={{ fontSize: 14, lineHeight: 1.7 }}>
            12 Proclamation Way
            <br />
            Irvine, CA 92602
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 14 }}>
            <a href="tel:9495221103" style={{ color: "#fff", fontWeight: 700 }}>
              (949) 522-1103
            </a>
            <a href="mailto:butchi@yalarealty.com" style={{ color: "#D9C48F" }}>
              butchi@yalarealty.com
            </a>
          </div>
          <div style={{ fontSize: "12.5px", color: "#8F99AB" }}>
            Mon–Fri 8:30am–6pm · Sat by appointment
          </div>
        </div>

        {/* Owners */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12, fontSize: 14 }}>
          <div style={colHeading}>Owners</div>
          <Link href="/services" style={linkStyle}>Services</Link>
          <Link href="/pricing" style={linkStyle}>Pricing</Link>
          <Link href="/contact#analysis" style={linkStyle}>Free Rental Analysis</Link>
          <Link href="/resources#guide" style={linkStyle}>Owner Guide</Link>
          <Link href="/owner-login" style={linkStyle}>Owner Login</Link>
        </div>

        {/* Tenants */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12, fontSize: 14 }}>
          <div style={colHeading}>Tenants</div>
          <Link href="/properties" style={linkStyle}>Available Rentals</Link>
          <Link href="/tenant-login" style={linkStyle}>Pay Rent</Link>
          <Link href="/tenant-login#maintenance" style={linkStyle}>Maintenance Request</Link>
          <Link href="/tenant-login" style={linkStyle}>Tenant Login</Link>
        </div>

        {/* Company */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12, fontSize: 14 }}>
          <div style={colHeading}>Company</div>
          <Link href="/about" style={linkStyle}>About YALA</Link>
          <Link href="/properties" style={linkStyle}>Managed Properties</Link>
          <Link href="/resources#faq" style={linkStyle}>FAQ</Link>
          <Link href="/contact" style={linkStyle}>Contact</Link>
          <div style={{ height: 1, background: "#1C2E4A", margin: "6px 0" }} />
          <a href="#yala-realty" style={crossLink}>YALA Realty &amp; Associates →</a>
          <a href="#yala-mortgage" style={crossLink}>YALA Mortgage →</a>
        </div>
      </div>

      {/* Bottom row */}
      <div
        style={{
          maxWidth: 1200,
          margin: "48px auto 0",
          borderTop: "1px solid #1C2E4A",
          paddingTop: 24,
          display: "flex",
          flexWrap: "wrap",
          gap: "16px 32px",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 12,
          color: "#8F99AB",
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 24px", alignItems: "center" }}>
          <span>© 2026 YALA Property Management. All rights reserved.</span>
          <span>
            CA DRE Broker License #0000000 <span style={{ color: "#BFA163" }}>(placeholder)</span>
          </span>
        </div>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <div
            style={{
              width: 22,
              height: 22,
              border: "1.5px solid #8F99AB",
              display: "grid",
              placeItems: "center",
              fontSize: 11,
              fontWeight: 700,
              color: "#8F99AB",
            }}
          >
            =
          </div>
          <span>Equal Housing Opportunity · ADA Accessibility Statement · Privacy · Terms</span>
        </div>
      </div>
    </footer>
  );
}
