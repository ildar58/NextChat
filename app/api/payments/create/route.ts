import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function POST() {
  // Placeholder: create payment with YooKassa
  const payment = await prisma.payment.create({
    data: {
      userId: 1,
      ykId: "demo",
      amountRub: 100,
      tokensGranted: 1000,
      status: "pending",
    },
  });
  return NextResponse.json(payment);
}
