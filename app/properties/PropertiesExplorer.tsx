"use client";

import { useState } from "react";
import Link from "next/link";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

type Property = {
  address: string;
  city: string;
  type: string;
  beds: number;
  baths: number;
  sqft: string;
  rent: string;
  status: "Available" | "Leased";
  note: string;
  src: string;
};

const DATA: Property[] = [
  { address: "24 Cabrillo Terrace", city: "Irvine", type: "Single-family", beds: 3, baths: 2.5, sqft: "1,980", rent: "$4,250/mo", status: "Leased", note: "Leased in 9 days · Woodbury", src: "/images/prop_cabrillo.jpg" },
  { address: "118 Rockview", city: "Irvine", type: "Condo", beds: 2, baths: 2, sqft: "1,240", rent: "$3,150/mo", status: "Leased", note: "Leased in 12 days · Quail Hill", src: "/images/prop_rockview.jpg" },
  { address: "2810 Peppertree Lane", city: "Tustin", type: "Single-family", beds: 4, baths: 3, sqft: "2,610", rent: "$5,400/mo", status: "Leased", note: "Leased in 16 days · Tustin Ranch", src: "/images/prop_peppertree.jpg" },
  { address: "77 Waterspout", city: "Irvine", type: "Townhome", beds: 3, baths: 2.5, sqft: "1,720", rent: "$4,050/mo", status: "Available", note: "Available Oct 1 · Portola Springs", src: "/images/prop_waterspout.jpg" },
  { address: "1406 W. Balboa Blvd, Unit B", city: "Newport Beach", type: "Duplex unit", beds: 2, baths: 1, sqft: "950", rent: "$3,900/mo", status: "Leased", note: "Leased in 11 days · Balboa Peninsula", src: "/images/prop_balboa.jpg" },
  { address: "3141 Sumatra Place", city: "Costa Mesa", type: "Fourplex (4 units)", beds: 2, baths: 1, sqft: "4 × 880", rent: "$2,650–2,795/mo", status: "Leased", note: "100% occupied since 2021", src: "/images/prop_cabrillo.jpg" },
  { address: "52 Silverleaf", city: "Irvine", type: "Detached condo", beds: 3, baths: 2.5, sqft: "1,850", rent: "$4,395/mo", status: "Available", note: "Available Sept 20 · Cypress Village", src: "/images/prop_waterspout.jpg" },
  { address: "13802 Red Hill Ave", city: "Tustin", type: "Single-family", beds: 3, baths: 2, sqft: "1,540", rent: "$3,800/mo", status: "Leased", note: "Leased in 14 days · Old Town Tustin", src: "/images/hero_home_dusk.jpg" },
  { address: "2200 Newport Blvd, Unit 4", city: "Costa Mesa", type: "Condo", beds: 1, baths: 1, sqft: "720", rent: "$2,450/mo", status: "Leased", note: "Leased in 8 days · Eastside", src: "/images/prop_rockview.jpg" },
];

const CITIES = ["All", "Irvine", "Tustin", "Newport Beach", "Costa Mesa"];

function tagStyle(status: Property["status"]): React.CSSProperties {
  return {
    fontSize: 11,
    letterSpacing: ".14em",
    textTransform: "uppercase",
    fontWeight: 700,
    padding: "6px 10px",
    borderRadius: 999,
    ...(status === "Available"
      ? { background: "#BFA163", color: "#0B1F3A" }
      : { background: "#0B1F3A", color: "#fff" }),
  };
}

export function PropertiesExplorer() {
  const [city, setCity] = useState("All");
  const shown = city === "All" ? DATA : DATA.filter((p) => p.city === city);
  const availableCount = DATA.filter((p) => p.status === "Available").length;

  return (
    <>
      {/* Header */}
      <section style={{ padding: "clamp(56px,8vw,96px) 24px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: 24 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 640 }}>
              <div className="kicker">Under management</div>
              <h1 className="h1">412 homes across Orange County.</h1>
              <p style={{ fontSize: 17, lineHeight: 1.65, color: "#3F4A5E" }}>
                A selection of properties we currently manage. Available units accept applications through the tenant portal; leased units show the rent achieved and days on market.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: "13.5px", color: "#5B6577", textAlign: "right" }}>
              <span>
                <strong style={{ color: "#0B1F3A", fontWeight: 700 }}>{shown.length}</strong> shown ·{" "}
                <strong style={{ color: "#0B1F3A", fontWeight: 700 }}>{availableCount}</strong> available now
              </span>
            </div>
          </div>
          <div role="tablist" aria-label="Filter by city" style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {CITIES.map((c) => {
              const activeState = city === c;
              return (
                <button
                  key={c}
                  type="button"
                  role="tab"
                  aria-selected={activeState}
                  onClick={() => setCity(c)}
                  style={{
                    font: "inherit",
                    fontSize: 13,
                    fontWeight: 700,
                    padding: "9px 16px",
                    borderRadius: 999,
                    cursor: "pointer",
                    background: activeState ? "#0B1F3A" : "#fff",
                    color: activeState ? "#fff" : "#0B1F3A",
                    border: `1.5px solid ${activeState ? "#0B1F3A" : "#D6CFC1"}`,
                  }}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section style={{ padding: "0 24px clamp(56px,8vw,96px)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 24 }}>
          {shown.map((p) => (
            <article key={p.address} style={{ border: "1px solid #E6E2D9", display: "flex", flexDirection: "column", background: "#fff" }}>
              <div style={{ position: "relative", aspectRatio: "3 / 2" }}>
                <ImagePlaceholder src={p.src} caption={`Photo: ${p.address}, ${p.city}`} />
                <div style={{ position: "absolute", top: 12, right: 12, pointerEvents: "none" }}>
                  <span style={tagStyle(p.status)}>{p.status}</span>
                </div>
              </div>
              <div style={{ padding: "20px 22px 22px", display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "baseline" }}>
                  <div style={{ fontFamily: "var(--font-playfair)", fontSize: 21, color: "#0B1F3A" }}>{p.address}</div>
                  <div style={{ fontWeight: 700, color: "#0B1F3A", whiteSpace: "nowrap", fontVariantNumeric: "tabular-nums" }}>{p.rent}</div>
                </div>
                <div style={{ fontSize: "13.5px", color: "#5B6577" }}>
                  {p.city} · {p.type} · {p.beds} bd · {p.baths} ba · {p.sqft} sq ft
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, borderTop: "1px solid #EFEBE3", paddingTop: 12, marginTop: 2, fontSize: 13, color: "#7A6230" }}>
                  <span>{p.note}</span>
                  {p.status === "Available" && (
                    <Link href="/tenant-login" style={{ color: "#0B1F3A", fontWeight: 700, borderBottom: "1.5px solid #BFA163", whiteSpace: "nowrap" }}>
                      Apply →
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
