import { NextResponse } from "next/server";
import { submitSignal } from "@/app/actions/signal";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      {
        ok: false,
        status: "validation_error",
        fields: { message: "INVALID PAYLOAD" },
      },
      { status: 400 },
    );
  }

  const result = await submitSignal(body);
  const status =
    result.ok
      ? 200
      : result.status === "validation_error"
        ? 400
        : 503;

  return NextResponse.json(result, { status });
}
