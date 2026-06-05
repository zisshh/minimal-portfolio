import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { profile } from "@/content/profile";

export const runtime = "nodejs";

const contactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(200),
  message: z.string().trim().min(1).max(5000),
  company: z.string().optional(), // honeypot
});

// Simple in-memory rate limit (best-effort; resets on cold start).
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, { count: number; firstAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = hits.get(ip);
  if (!record || now - record.firstAt > WINDOW_MS) {
    hits.set(ip, { count: 1, firstAt: now });
    return false;
  }
  record.count += 1;
  return record.count > MAX_PER_WINDOW;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request." },
      { status: 400 },
    );
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { success: false, error: "Please fill in all fields correctly." },
      { status: 400 },
    );
  }

  const { name, email, message, company } = parsed.data;

  // Honeypot tripped — silently accept without sending.
  if (company && company.trim() !== "") {
    return NextResponse.json({ success: true });
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { success: false, error: "Too many messages — try again in a minute." },
      { status: 429 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        success: false,
        error: `Email isn't configured yet — reach me directly at ${profile.email}.`,
      },
      { status: 503 },
    );
  }

  try {
    const resend = new Resend(apiKey);
    const to = process.env.CONTACT_TO_EMAIL ?? profile.email;
    const from =
      process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";

    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    if (error) {
      return NextResponse.json(
        { success: false, error: "Couldn't send right now. Please email me directly." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, error: "Couldn't send right now. Please email me directly." },
      { status: 502 },
    );
  }
}
