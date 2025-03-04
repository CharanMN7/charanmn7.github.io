import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  const formUrl = process.env.FORM_URL as string;
  const fieldId = process.env.FIELD_ID as string;

  const formBody = new URLSearchParams({
    [fieldId]: email,
  });

  try {
    const response = await fetch(formUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formBody.toString(),
    });

    return NextResponse.json({ success: response.ok });
  } catch (error) {
    console.error("Error submitting form:", error);
    return NextResponse.json({
      success: false,
      error: "Failed to submit form",
    });
  }
}
