"use client";

import { useEffect, useState } from "react";

const DOWS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const SLOTS = ["9:00 am", "10:30 am", "12:00 pm", "1:30 pm", "3:00 pm", "4:30 pm"];

function nextWeekdays(): Date[] {
  const out: Date[] = [];
  const d = new Date();
  d.setDate(d.getDate() + 1);
  while (out.length < 5) {
    const dow = d.getDay();
    if (dow !== 0 && dow !== 6) out.push(new Date(d));
    d.setDate(d.getDate() + 1);
  }
  return out;
}

type Kind = "phone" | "video";

export function ScheduleWidget() {
  const [days, setDays] = useState<Date[]>([]);
  const [dayIdx, setDayIdx] = useState(0);
  const [timeIdx, setTimeIdx] = useState(-1);
  const [kind, setKind] = useState<Kind>("phone");
  const [booked, setBooked] = useState(false);

  // Compute dates on the client only, to avoid SSR/CSR date mismatch.
  useEffect(() => {
    setDays(nextWeekdays());
  }, []);

  const sel = days[dayIdx];
  const dayLabel = sel ? `${DOWS[sel.getDay()]}, ${MONTHS[sel.getMonth()]} ${sel.getDate()}` : "";
  const ready = timeIdx >= 0;

  const segStyle = (activeState: boolean): React.CSSProperties => ({
    font: "inherit",
    fontSize: 13,
    fontWeight: 700,
    padding: "9px 18px",
    borderRadius: 999,
    border: 0,
    cursor: "pointer",
    background: activeState ? "#0B1F3A" : "transparent",
    color: activeState ? "#fff" : "#5B6577",
  });

  const book = async () => {
    if (!ready || !sel) return;
    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source: "schedule", day: dayLabel, time: SLOTS[timeIdx], kind }),
      });
    } catch {}
    setBooked(true);
  };

  if (booked) {
    const summary = `${dayLabel}, ${ready ? SLOTS[timeIdx] : ""} (${kind})`;
    return (
      <div style={{ border: "1px solid #E6E2D9", padding: "clamp(20px,3vw,32px)", display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#BFA163", color: "#0B1F3A", display: "grid", placeItems: "center", fontWeight: 700 }}>✓</div>
          <div style={{ fontFamily: "var(--font-playfair)", fontSize: 26, color: "#0B1F3A" }}>Booked: {summary}</div>
          <p style={{ fontSize: 15, lineHeight: 1.65, color: "#3F4A5E" }}>
            A calendar invitation is on its way to your email. Need to change it? Call{" "}
            <a href="tel:9495221103" style={{ color: "#0B1F3A", fontWeight: 700 }}>(949) 522-1103</a>.
          </p>
          <button
            type="button"
            onClick={() => {
              setBooked(false);
              setTimeIdx(-1);
            }}
            style={{ alignSelf: "flex-start", background: "transparent", border: "1.5px solid #0B1F3A", color: "#0B1F3A", font: "inherit", fontWeight: 700, fontSize: 13, padding: "11px 18px", borderRadius: 999, cursor: "pointer" }}
          >
            Pick a different time
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ border: "1px solid #E6E2D9", padding: "clamp(20px,3vw,32px)", display: "flex", flexDirection: "column", gap: 20 }}>
      {/* Day picker */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={{ fontSize: 12, letterSpacing: ".18em", textTransform: "uppercase", color: "#7A6230" }}>Choose a day</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 8 }}>
          {days.map((d, i) => {
            const activeState = dayIdx === i;
            return (
              <button
                key={i}
                type="button"
                aria-pressed={activeState}
                onClick={() => {
                  setDayIdx(i);
                  setTimeIdx(-1);
                }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 4,
                  padding: "12px 4px",
                  font: "inherit",
                  cursor: "pointer",
                  borderRadius: 8,
                  background: activeState ? "#0B1F3A" : "#fff",
                  color: activeState ? "#fff" : "#0B1F3A",
                  border: `1.5px solid ${activeState ? "#0B1F3A" : "#D6CFC1"}`,
                }}
              >
                <span style={{ fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase" }}>{DOWS[d.getDay()]}</span>
                <span style={{ fontFamily: "var(--font-playfair)", fontSize: 22 }}>{d.getDate()}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Time picker */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={{ fontSize: 12, letterSpacing: ".18em", textTransform: "uppercase", color: "#7A6230" }}>
          Choose a time · {dayLabel}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(110px,1fr))", gap: 8 }}>
          {SLOTS.map((t, i) => {
            const activeState = timeIdx === i;
            return (
              <button
                key={t}
                type="button"
                aria-pressed={activeState}
                onClick={() => setTimeIdx(i)}
                style={{
                  padding: "11px 8px",
                  font: "inherit",
                  fontSize: "13.5px",
                  fontWeight: 700,
                  cursor: "pointer",
                  borderRadius: 999,
                  background: activeState ? "#BFA163" : "#fff",
                  color: "#0B1F3A",
                  border: `1.5px solid ${activeState ? "#BFA163" : "#D6CFC1"}`,
                }}
              >
                {t}
              </button>
            );
          })}
        </div>
      </div>

      {/* Kind */}
      <div role="radiogroup" aria-label="Call type" style={{ display: "flex", gap: 6, background: "#F1EDE4", borderRadius: 999, padding: 4, alignSelf: "flex-start" }}>
        <button type="button" role="radio" aria-checked={kind === "phone"} onClick={() => setKind("phone")} style={segStyle(kind === "phone")}>
          Phone
        </button>
        <button type="button" role="radio" aria-checked={kind === "video"} onClick={() => setKind("video")} style={segStyle(kind === "video")}>
          Video
        </button>
      </div>

      {/* Confirm */}
      <button
        type="button"
        onClick={book}
        disabled={!ready}
        style={{
          height: 52,
          border: 0,
          borderRadius: 999,
          font: "inherit",
          fontWeight: 700,
          fontSize: 14,
          background: ready ? "#0B1F3A" : "#E6E2D9",
          color: ready ? "#fff" : "#7B8494",
          cursor: ready ? "pointer" : "not-allowed",
        }}
      >
        {ready ? `Confirm ${dayLabel} at ${SLOTS[timeIdx]}` : "Select a time to continue"}
      </button>
    </div>
  );
}
