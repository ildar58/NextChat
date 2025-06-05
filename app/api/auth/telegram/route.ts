import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  // Placeholder: validate telegram initData and return jwt
  const data = await req.json();
  return NextResponse.json({ token: "demo-jwt", data });
}
