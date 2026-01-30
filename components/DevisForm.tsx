"use client";

import { Audience } from "@/lib/types";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

export default function DevisForm({ audience }: { audience: Audience }) {
  const t = useTranslations("forms.devis");
  const locale = useLocale();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    const fd = new FormData(e.currentTarget);
    const payload = {
      audience,
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      service: String(fd.get("service") || "general"),
      packId: String(fd.get("packId") || ""),
      deadline: String(fd.get("deadline") || ""),
      details: String(fd.get("details") || ""),
      locale
    };

    try {
      const res = await fetch("/api/devis", {
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
    <form onSubmit={onSubmit} className="rounded-2xl border p-5 space-y-4">
      <div className="text-sm font-semibold">{t("title")}</div>

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
          <label className="text-sm font-medium">{t("service")}</label>
          <select name="service" required className="mt-1 w-full rounded-xl border px-3 py-2">
            <option value="general">{t("serviceGeneral")}</option>
            <option value="suivi-memoires-projets">{t("serviceMemoires")}</option>
            <option value="accompagnement-bts-tertiaires">{t("serviceBts")}</option>
            <option value="conseil-ingenierie-formation">{t("serviceFormation")}</option>
            <option value="interventions-pedagogiques">{t("serviceInterventions")}</option>
          </select>
        </div>
      </div>

      {audience === "student" ? (
        <div>
          <label className="text-sm font-medium">{t("pack")}</label>
          <input name="packId" placeholder={t("packPlaceholder")} className="mt-1 w-full rounded-xl border px-3 py-2" />
        </div>
      ) : null}

      <div>
        <label className="text-sm font-medium">{t("deadline")}</label>
        <input name="deadline" placeholder="YYYY-MM-DD (optionnel)" className="mt-1 w-full rounded-xl border px-3 py-2" />
      </div>

      <div>
        <label className="text-sm font-medium">{t("details")}</label>
        <textarea name="details" required rows={5} className="mt-1 w-full rounded-xl border px-3 py-2" />
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
