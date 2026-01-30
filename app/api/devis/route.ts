import { NextResponse } from "next/server";
import { DevisSchema } from "@/lib/validators";
import { getSupabaseAdmin } from "@/lib/supabaseAdmin";
import { getResendClient } from "@/lib/resend";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parsed = DevisSchema.safeParse(body);

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
    const { error } = await supabase.from("devis_requests").insert({
      audience: data.audience,
      name: data.name,
      email: data.email,
      phone: data.phone ?? null,
      service: data.service,
      pack_id: data.packId ?? null,
      deadline: data.deadline ?? null,
      details: data.details,
      locale: data.locale
    });
    if (error) console.error("Supabase insert devis_requests error:", error);
  } else {
    console.warn("Supabase not configured. Skipping DB insert.");
  }

  // 2) Email notify (optional)
  const resend = getResendClient();
  const adminEmail = process.env.ADMIN_EMAIL;
  const fromEmail = process.env.FROM_EMAIL;

  if (resend && adminEmail && fromEmail) {
    try {
      await resend.emails.send({
        from: fromEmail,
        to: adminEmail,
        subject: `Demande de devis (${data.audience}) — ${data.name}`,
        text:
          `Audience: ${data.audience}\n` +
          `Nom: ${data.name}\n` +
          `Email: ${data.email}\n` +
          `Téléphone: ${data.phone ?? "-"}\n` +
          `Service: ${data.service}\n` +
          `Pack: ${data.packId ?? "-"}\n` +
          `Deadline: ${data.deadline ?? "-"}\n` +
          `Détails:\n${data.details}\n` +
          `Locale: ${data.locale}\n`
      });
    } catch (e) {
      console.error("Resend send error:", e);
    }
  } else {
    console.warn("Resend not configured. Skipping email.");
  }

  return NextResponse.json({ ok: true });
}
