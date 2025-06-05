import { NextRequest, NextResponse } from "next/server";
import { getAuthUser } from "../../../../lib/getAuthUser";

export async function POST(req: NextRequest) {
  const user = await getAuthUser();
  if (!user)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  // Placeholder: deduct tokens based on usage
  return NextResponse.json({ ok: true });
}
