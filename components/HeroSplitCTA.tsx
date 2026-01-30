"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

function withLocale(locale: string, path: string) {
  return `/${locale}${path}`;
}

export default function HeroSplitCTA() {
  const t = useTranslations("home.hero");
  const cta = useTranslations("cta");
  const locale = useLocale();

  return (
    <section className="rounded-2xl border p-8 md:p-10 bg-white">
      <div className="space-y-4">
        <div className="text-sm text-neutral-500">{t("kicker")}</div>
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">{t("title")}</h1>
        <p className="text-neutral-600 text-base md:text-lg max-w-2xl">{t("subtitle")}</p>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Link
            href={withLocale(locale, "/institutions")}
            className="rounded-xl px-5 py-3 font-medium bg-neutral-900 text-white text-center"
          >
            {cta("book")}
          </Link>
          <Link
            href={withLocale(locale, "/etudiants")}
            className="rounded-xl px-5 py-3 font-medium border text-center"
          >
            {cta("seePacks")}
          </Link>
        </div>
      </div>
    </section>
  );
}
