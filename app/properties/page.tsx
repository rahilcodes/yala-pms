import type { Metadata } from "next";
import Link from "next/link";
import { PropertiesExplorer } from "./PropertiesExplorer";

export const metadata: Metadata = {
  title: "Managed Properties",
  description:
    "A selection of the 412 homes YALA Property Management operates across Irvine, Tustin, Newport Beach and Costa Mesa. Filter by city; apply to available rentals.",
};

export default function PropertiesPage() {
  return (
    <main>
      <PropertiesExplorer />

      {/* CTA band */}
      <section className="section-cta" style={{ background: "#0B1F3A" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 24 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, maxWidth: 600 }}>
            <h2 style={{ fontFamily: "var(--font-playfair)", fontWeight: 400, fontSize: "clamp(28px,3vw,38px)", lineHeight: 1.1, color: "#fff", textWrap: "pretty" }}>
              Own a rental in Orange County? See where it would sit on this list.
            </h2>
            <p style={{ fontSize: 16, color: "#C9CFDA" }}>Free rental analysis with three comparable leases, within one business day.</p>
          </div>
          <Link href="/contact#analysis" className="h-gold" style={{ background: "#BFA163", color: "#0B1F3A", fontWeight: 700, fontSize: "13.5px", padding: "15px 24px", borderRadius: 999 }}>Free Rental Analysis</Link>
        </div>
      </section>
    </main>
  );
}
