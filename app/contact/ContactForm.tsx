"use client";

import { useState } from "react";

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

type Mode = "analysis" | "general";

export function ContactForm() {
  const [mode, setMode] = useState<Mode>("analysis");
  const [sent, setSent] = useState(false);
  const [firstName, setFirstName] = useState("");

  const tabBase =
    "flex-1 font-sans text-[13px] font-bold px-3 py-[10px] rounded-full border-0 cursor-pointer";
  const on = "bg-navy text-white";
  const off = "bg-transparent text-muted";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload: Record<string, string> = { source: mode === "analysis" ? "analysis" : "inquiry" };
    data.forEach((v, k) => (payload[k] = String(v)));
    const name = (payload.name || "").split(" ")[0];
    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch {}
    setFirstName(name || "there");
    setSent(true);
  };

  if (sent) {
    return (
      <div className="form-card" style={{ padding: "clamp(24px,3vw,36px)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 14, padding: "8px 0" }}>
          <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#BFA163", color: "#0B1F3A", display: "grid", placeItems: "center", fontWeight: 700 }}>✓</div>
          <div style={{ fontFamily: "var(--font-playfair)", fontSize: 26, color: "#0B1F3A" }}>Thank you, {firstName}.</div>
          <p style={{ fontSize: 15, lineHeight: 1.65, color: "#3F4A5E" }}>
            Butchi or Elena will be in touch within one business day with your written analysis. If you would like to talk sooner, pick a time below or call{" "}
            <a href="tel:9495221103" style={{ color: "#0B1F3A", fontWeight: 700 }}>(949) 522-1103</a>.
          </p>
          <a href="#schedule" className="h-navy" style={{ alignSelf: "flex-start", background: "#0B1F3A", color: "#fff", fontWeight: 700, fontSize: "13.5px", padding: "14px 22px", borderRadius: 999 }}>
            Schedule a call
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="form-card" style={{ padding: "clamp(24px,3vw,36px)" }}>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <div role="tablist" aria-label="Inquiry type" style={{ display: "flex", gap: 6, background: "#F1EDE4", borderRadius: 999, padding: 4 }}>
          <button type="button" role="tab" aria-selected={mode === "analysis"} onClick={() => setMode("analysis")} className={`${tabBase} ${mode === "analysis" ? on : off}`}>
            Free rental analysis
          </button>
          <button type="button" role="tab" aria-selected={mode === "general"} onClick={() => setMode("general")} className={`${tabBase} ${mode === "general" ? on : off}`}>
            General owner inquiry
          </button>
        </div>

        {mode === "analysis" && (
          <>
            <label className="field-label">
              Property address
              <input name="address" required placeholder="Street, city, ZIP" style={inputStyle} />
            </label>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))", gap: 12 }}>
              <label className="field-label">
                Property type
                <select name="type" style={inputStyle}>
                  <option>Single-family</option>
                  <option>Condo / townhome</option>
                  <option>Duplex–fourplex</option>
                  <option>5+ units</option>
                </select>
              </label>
              <label className="field-label">
                Bedrooms
                <select name="beds" defaultValue="3" style={inputStyle}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5+</option>
                </select>
              </label>
              <label className="field-label">
                Status
                <select name="status" style={inputStyle}>
                  <option>Currently rented</option>
                  <option>Vacant</option>
                  <option>Vacant soon</option>
                  <option>Under contract to buy</option>
                </select>
              </label>
            </div>
          </>
        )}

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: 12 }}>
          <label className="field-label">
            Your name
            <input name="name" required placeholder="Full name" style={inputStyle} />
          </label>
          <label className="field-label">
            Phone
            <input name="phone" type="tel" placeholder="(949) 000-0000" style={inputStyle} />
          </label>
        </div>
        <label className="field-label">
          Email
          <input name="email" type="email" required placeholder="you@example.com" style={inputStyle} />
        </label>
        <label className="field-label">
          Anything we should know? <span style={{ fontWeight: 400, color: "#5B6577" }}>(optional)</span>
          <textarea name="notes" rows={3} placeholder="Current rent, lease end date, HOA, questions…" className="field-textarea" />
        </label>
        <button type="submit" className="h-gold" style={{ height: 52, background: "#BFA163", color: "#0B1F3A", border: 0, borderRadius: 999, font: "inherit", fontWeight: 700, fontSize: 14, cursor: "pointer", marginTop: 4 }}>
          {mode === "analysis" ? "Get my free rental analysis" : "Send inquiry"}
        </button>
        <div style={{ fontSize: 12, color: "#5B6577", textAlign: "center" }}>
          Response within one business day. We never share your information.
        </div>
      </form>
    </div>
  );
}
