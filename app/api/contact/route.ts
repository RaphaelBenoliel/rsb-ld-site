import { NextResponse } from "next/server";
import { LeadSchema } from "@/lib/validators";
import { getSupabaseAdmin } from "@/lib/supabaseAdmin";
import { getResendClient } from "@/lib/resend";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parsed = LeadSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const data = parsed.data;

  // 1) Insert to Supabase (optional)
  const supabase = getSupabaseAdmin();
  if (supabase) {
    const { error } = await supabase.from("leads").insert({
      audience: data.audience,
      name: data.name,
      email: data.email,
      phone: data.phone ?? null,
      subject: data.subject ?? null,
      service_interest: data.serviceInterest ?? null,
      message: data.message,
      locale: data.locale
    });
    if (error) {
      console.error("Supabase insert leads error:", error);
    }
  } else {
    console.warn("Supabase not configured (SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY). Skipping DB insert.");
  }

  // 2) Email notify (optional)
  const resend = getResendClient();
  const adminEmail = process.env.ADMIN_EMAIL; // e.g. client email
  const fromEmail = process.env.FROM_EMAIL;   // e.g. "RSB <no-reply@yourdomain.com>"

  if (resend && adminEmail && fromEmail) {
    try {
      await resend.emails.send({
        from: fromEmail,
        to: adminEmail,
        subject: `Nouveau contact (${data.audience}) — ${data.name}`,
        text:
          `Audience: ${data.audience}\n` +
          `Nom: ${data.name}\n` +
          `Email: ${data.email}\n` +
          `Téléphone: ${data.phone ?? "-"}\n` +
          `Sujet: ${data.subject ?? "-"}\n` +
          `Message:\n${data.message}\n` +
          `Locale: ${data.locale}\n`
      });
    } catch (e) {
      console.error("Resend send error:", e);
    }
  } else {
    console.warn("Resend not configured (RESEND_API_KEY / ADMIN_EMAIL / FROM_EMAIL). Skipping email.");
  }

  return NextResponse.json({ ok: true });
}
