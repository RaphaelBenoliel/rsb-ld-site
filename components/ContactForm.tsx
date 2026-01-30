"use client";

import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

export default function ContactForm() {
  const t = useTranslations("forms.contact");
  const locale = useLocale();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    const fd = new FormData(e.currentTarget);
    const payload = {
      audience: fd.get("audience") as string,
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      subject: String(fd.get("subject") || ""),
      serviceInterest: String(fd.get("serviceInterest") || "general"),
      message: String(fd.get("message") || ""),
      locale
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      setStatus(res.ok ? "ok" : "err");
      if (res.ok) e.currentTarget.reset();
    } catch {
      setStatus("err");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border p-6 space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-medium">{t("name")}</label>
          <input name="name" required className="mt-1 w-full rounded-xl border px-3 py-2" />
        </div>
        <div>
          <label className="text-sm font-medium">{t("email")}</label>
          <input name="email" type="email" required className="mt-1 w-full rounded-xl border px-3 py-2" />
        </div>
        <div>
          <label className="text-sm font-medium">{t("phone")}</label>
          <input name="phone" className="mt-1 w-full rounded-xl border px-3 py-2" />
        </div>
        <div>
          <label className="text-sm font-medium">{t("audience")}</label>
          <select name="audience" required className="mt-1 w-full rounded-xl border px-3 py-2">
            <option value="institution">{t("audienceInstitution")}</option>
            <option value="student">{t("audienceStudent")}</option>
          </select>
        </div>
      </div>

      <div>
        <label className="text-sm font-medium">{t("subject")}</label>
        <input name="subject" className="mt-1 w-full rounded-xl border px-3 py-2" />
      </div>

      <div>
        <label className="text-sm font-medium">{t("message")}</label>
        <textarea name="message" required rows={5} className="mt-1 w-full rounded-xl border px-3 py-2" />
      </div>

      <button
        disabled={loading}
        className="rounded-xl px-5 py-3 font-medium bg-neutral-900 text-white disabled:opacity-60"
      >
        {loading ? t("sending") : t("submit")}
      </button>

      {status === "ok" ? <div className="text-sm text-green-700">{t("success")}</div> : null}
      {status === "err" ? <div className="text-sm text-red-700">{t("error")}</div> : null}
    </form>
  );
}
