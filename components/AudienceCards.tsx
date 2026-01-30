"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

function withLocale(locale: string, path: string) {
  return `/${locale}${path}`;
}

export default function AudienceCards() {
  const t = useTranslations("home.audience");
  const locale = useLocale();

  return (
    <section className="grid gap-4 md:grid-cols-2">
      <Link href={withLocale(locale, "/institutions")} className="rounded-2xl border p-6 hover:shadow-sm transition">
        <div className="text-lg font-semibold">{t("institutionTitle")}</div>
        <div className="text-neutral-600 mt-1">{t("institutionBody")}</div>
        <div className="text-sm font-medium mt-4">{t("institutionCta")}</div>
      </Link>

      <Link href={withLocale(locale, "/etudiants")} className="rounded-2xl border p-6 hover:shadow-sm transition">
        <div className="text-lg font-semibold">{t("studentTitle")}</div>
        <div className="text-neutral-600 mt-1">{t("studentBody")}</div>
        <div className="text-sm font-medium mt-4">{t("studentCta")}</div>
      </Link>
    </section>
  );
}
