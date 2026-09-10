"use client";

import { useState } from "react";

const FAQS: [string, string][] = [
  ["How quickly can you take over management of an occupied property?", "Usually within 7 to 10 days. We collect the current lease, deposit records and vendor history, notify the resident in writing, and move rent payments to the portal for the next cycle. There is no gap in collection."],
  ["What does the 7–8% management fee include?", "Everything in the Services scope: rent collection and disbursement, maintenance coordination with no invoice markup, inspections, monthly statements and 1099s, and compliance tracking. Leasing and renewals are separate flat fees, listed on the Pricing page."],
  ["Do I pay anything while the unit is vacant?", "No. The management fee is a percentage of rent collected. During a vacancy you pay only the leasing fee once a resident signs, and any turnover repairs you approve."],
  ["How do you screen residents?", "Credit report, verified income of at least three times rent, nationwide eviction search, two prior landlord references and identity verification. The same written criteria apply to every applicant, in line with fair housing law."],
  ["Who approves repairs?", "You set an approval limit (the default is $500). Below it, we dispatch a vendor and report back with photos and the invoice. Above it, we send you a quote and wait for your approval unless it is a habitability emergency."],
  ["How and when do I get paid?", "By direct deposit on the 10th of each month, with an itemized statement showing rent received, expenses paid and your reserve balance. Premier owners are paid on the 8th."],
  ["Can I use my own vendors or handle some maintenance myself?", "Yes, provided they are licensed and insured where the work requires it. Many owners keep a preferred HVAC or landscaping vendor. We coordinate them the same way we coordinate ours."],
  ["How do I cancel?", "Thirty days' written notice, no termination fee. We hand over all leases, deposits, records and keys, and introduce the resident to whoever comes next."],
];

export function FaqAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div style={{ display: "flex", flexDirection: "column", borderTop: "1px solid #DDD5C5" }}>
      {FAQS.map(([q, a], i) => {
        const isOpen = open === i;
        return (
          <div key={q} style={{ borderBottom: "1px solid #DDD5C5" }}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 20,
                textAlign: "left",
                background: "transparent",
                border: 0,
                padding: "20px 4px",
                font: "inherit",
                fontFamily: "var(--font-playfair)",
                fontSize: 20,
                color: "#0B1F3A",
                cursor: "pointer",
              }}
            >
              <span>{q}</span>
              <span
                style={{
                  flex: "none",
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  border: "1.5px solid #BFA163",
                  display: "grid",
                  placeItems: "center",
                  fontFamily: "var(--font-lato)",
                  fontSize: 18,
                  color: "#7A6230",
                  transition: "transform .2s",
                  transform: isOpen ? "rotate(45deg)" : "none",
                }}
              >
                +
              </span>
            </button>
            {isOpen && (
              <p style={{ margin: 0, padding: "0 4px 22px", fontSize: 15, lineHeight: 1.7, color: "#3F4A5E", maxWidth: 620 }}>{a}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
