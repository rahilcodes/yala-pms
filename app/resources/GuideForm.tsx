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

export function GuideForm() {
  const [sent, setSent] = useState(false);
  const [firstName, setFirstName] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const payload: Record<string, string> = { source: "guide" };
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
      <div style={{ background: "#fff", padding: 32, borderTop: "3px solid #BFA163", display: "flex", flexDirection: "column", gap: 12, alignSelf: "start" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 14, padding: "8px 0" }}>
          <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#BFA163", color: "#0B1F3A", display: "grid", placeItems: "center", fontWeight: 700 }}>✓</div>
          <div style={{ fontFamily: "var(--font-playfair)", fontSize: 24, color: "#0B1F3A" }}>On its way, {firstName}.</div>
          <p style={{ fontSize: "14.5px", lineHeight: 1.6, color: "#3F4A5E" }}>
            Check your inbox for the guide. If you would rather not wait, you can open it now.
          </p>
          <a href="#owner-guide-pdf" className="h-navy" style={{ alignSelf: "flex-start", background: "#0B1F3A", color: "#fff", fontWeight: 700, fontSize: "13.5px", padding: "14px 22px", borderRadius: 999 }}>
            Open the PDF
          </a>
          <a href="/contact#analysis" className="h-link-gold" style={{ fontSize: 14, color: "#7A6230", borderBottom: "1px solid #BFA163", alignSelf: "flex-start" }}>
            Next step: a free rental analysis for your property →
          </a>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: "#fff", padding: 32, borderTop: "3px solid #BFA163", display: "flex", flexDirection: "column", gap: 12, alignSelf: "start" }}>
      <div style={{ fontFamily: "var(--font-playfair)", fontSize: 22, color: "#0B1F3A" }}>Get the guide by email</div>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <label className="field-label">
          Your name
          <input name="name" required placeholder="Full name" style={inputStyle} />
        </label>
        <label className="field-label">
          Email
          <input name="email" type="email" required placeholder="you@example.com" style={inputStyle} />
        </label>
        <label className="field-label">
          How many rental units do you own?
          <select name="units" style={inputStyle}>
            <option>Not yet, considering a purchase</option>
            <option>1</option>
            <option>2–3</option>
            <option>4–10</option>
            <option>More than 10</option>
          </select>
        </label>
        <button type="submit" className="h-navy" style={{ height: 52, background: "#0B1F3A", color: "#fff", border: 0, borderRadius: 999, font: "inherit", fontWeight: 700, fontSize: 14, cursor: "pointer", marginTop: 6 }}>
          Email me the guide
        </button>
        <div style={{ fontSize: 12, color: "#5B6577", textAlign: "center" }}>One email with the PDF. Unsubscribe any time.</div>
      </form>
    </div>
  );
}
