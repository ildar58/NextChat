import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  // Placeholder: handle YooKassa webhook
  const body = await req.json();
  console.log("webhook", body);
  return NextResponse.json({ ok: true });
}
