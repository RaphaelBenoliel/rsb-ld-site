"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

type ServiceCard = {
  href: string;      // without locale
  titleKey: string;  // i18n key
  descKey: string;   // i18n key
};

function withLocale(locale: string, path: string) {
  return `/${locale}${path}`;
}

export default function ServiceCardsGrid({ services }: { services: ServiceCard[] }) {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {services.map((s) => (
        <Link
          key={s.href}
          href={withLocale(locale, s.href)}
          className="rounded-2xl border p-6 hover:shadow-sm transition"
        >
          <div className="text-lg font-semibold">{t(s.titleKey)}</div>
          <div className="text-neutral-600 mt-1">{t(s.descKey)}</div>
          <div className="text-sm font-medium mt-4">{t("cta.requestQuote")}</div>
        </Link>
      ))}
    </div>
  );
}
