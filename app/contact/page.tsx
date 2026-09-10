import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "./ContactForm";
import { ScheduleWidget } from "./ScheduleWidget";

export const metadata: Metadata = {
  title: "Contact & Free Rental Analysis",
  description:
    "Tell us about your Orange County rental property and receive a free written rental analysis within one business day, or schedule a call with a broker.",
};

const infoLabel: React.CSSProperties = {
  fontSize: "11.5px",
  letterSpacing: ".18em",
  textTransform: "uppercase",
  color: "#7A6230",
  marginBottom: 6,
};

export default function ContactPage() {
  return (
    <main>
      {/* #analysis */}
      <section id="analysis" className="section" style={{ background: "#0B1F3A" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 48, alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ fontSize: 12, letterSpacing: ".24em", textTransform: "uppercase", color: "#BFA163" }}>Free rental analysis</div>
            <h1 style={{ fontFamily: "var(--font-playfair)", fontWeight: 400, fontSize: "clamp(36px,4.6vw,60px)", lineHeight: 1.05, color: "#fff", textWrap: "pretty" }}>
              Tell us about the property. We&apos;ll tell you what it should rent for.
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: "#C9CFDA", maxWidth: 520 }}>
              Within one business day you will receive a written estimate with three comparable leases, our recommended list price and a year-one net projection on each plan.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, borderTop: "1px solid rgba(191,161,99,.3)", paddingTop: 24, fontSize: 15, color: "#C9CFDA" }}>
              <div style={{ display: "flex", gap: 16 }}>
                <span style={{ color: "#BFA163", width: 64, flex: "none" }}>Call</span>
                <a href="tel:9495221103" style={{ color: "#fff", fontWeight: 700 }}>(949) 522-1103</a>
              </div>
              <div style={{ display: "flex", gap: 16 }}>
                <span style={{ color: "#BFA163", width: 64, flex: "none" }}>Email</span>
                <a href="mailto:butchi@yalarealty.com" style={{ color: "#fff" }}>butchi@yalarealty.com</a>
              </div>
              <div style={{ display: "flex", gap: 16 }}>
                <span style={{ color: "#BFA163", width: 64, flex: "none" }}>Office</span>
                <span>
                  12 Proclamation Way, Irvine, CA 92602
                  <br />
                  <span style={{ color: "#8F99AB", fontSize: "13.5px" }}>Mon–Fri 8:30am–6pm · Sat by appointment</span>
                </span>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* #schedule */}
      <section id="schedule" className="section">
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 48, alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div className="kicker">Schedule a consultation</div>
            <h2 className="h2">Twenty minutes with a broker, at your convenience.</h2>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: "#3F4A5E", maxWidth: 460 }}>
              Phone or video. We will review your property, the current rent, and what changes under management. Times shown in Pacific.
            </p>
          </div>
          <ScheduleWidget />
        </div>
      </section>

      {/* Office */}
      <section className="section" style={{ background: "#F8F5EF" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 48, alignItems: "center" }}>
          <div
            style={{
              position: "relative",
              aspectRatio: "16 / 10",
              border: "1px solid #D6CFC1",
              background: "repeating-linear-gradient(135deg,#F1EDE4 0 14px,#E9E3D6 14px 28px)",
              display: "grid",
              placeItems: "center",
            }}
          >
            <div style={{ background: "#fff", border: "1px solid #D6CFC1", padding: "14px 18px", fontFamily: "ui-monospace,SFMono-Regular,Menlo,monospace", fontSize: 12, color: "#5B6577", textAlign: "center", lineHeight: 1.6 }}>
              map embed
              <br />
              12 Proclamation Way, Irvine, CA 92602
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div className="kicker">Visit the office</div>
            <h2 className="h2">12 Proclamation Way, Irvine.</h2>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: "#3F4A5E", maxWidth: 460 }}>
              Shared with YALA Realty &amp; Associates and YALA Mortgage. Free parking; walk-ins welcome during office hours, appointments preferred for owner consultations.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 16, fontSize: "14.5px", color: "#3F4A5E" }}>
              <div>
                <div style={infoLabel}>Phone</div>
                <a href="tel:9495221103" style={{ color: "#0B1F3A", fontWeight: 700 }}>(949) 522-1103</a>
              </div>
              <div>
                <div style={infoLabel}>Email</div>
                <a href="mailto:butchi@yalarealty.com" style={{ color: "#0B1F3A" }}>butchi@yalarealty.com</a>
              </div>
              <div>
                <div style={infoLabel}>Hours</div>
                Mon–Fri 8:30am–6pm
                <br />
                Sat by appointment
              </div>
              <div>
                <div style={infoLabel}>Residents</div>
                24/7 maintenance line via{" "}
                <Link href="/tenant-login" className="h-link-gold" style={{ color: "#7A6230", borderBottom: "1px solid #BFA163" }}>Tenant Portal</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
