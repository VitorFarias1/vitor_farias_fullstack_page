import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";
import { getResend } from "@/lib/resend";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const { name, email, message, company } = parsed.data;

  if (company) {
    return NextResponse.json({ ok: true });
  }

  const to = process.env.CONTACT_EMAIL_TO;
  if (!to) {
    console.error("CONTACT_EMAIL_TO is not set");
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  const { error } = await getResend().emails.send({
    from: process.env.RESEND_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>",
    to,
    replyTo: email,
    subject: `New message from ${name}`,
    text: `From: ${name} <${email}>\n\n${message}`,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ ok: false }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
