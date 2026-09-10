import { NextResponse } from "next/server";

type LeadSource = "analysis" | "inquiry" | "guide" | "schedule";

export async function POST(request: Request) {
  let payload: Record<string, unknown> = {};
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body" }, { status: 400 });
  }

  const source = payload.source as LeadSource | undefined;

  // Phase 1: log the lead. Phase 2 will forward to CRM / email.
  console.log("[lead]", JSON.stringify({ source: source ?? "unknown", ...payload }));

  return NextResponse.json({ ok: true, source: source ?? "unknown" });
}
