"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

function withLocale(locale: string, path: string) {
  return `/${locale}${path}`;
}

export default function FooterMega() {
  const t = useTranslations("footer");
  const locale = useLocale();

  const links = [
        { href: "/a-propos", label: t("about") },

    { href: "/institutions", label: t("institutions") },
    { href: "/etudiants", label: t("students") },
    { href: "/devis", label: t("devis") },
    { href: "/contact", label: t("contact") }
  ];

  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-3">
        <div className="space-y-2">
          <div className="font-semibold">{t("title")}</div>
          <div className="text-neutral-600 text-sm">{t("subtitle")}</div>
        </div>

        <div className="space-y-2">
          <div className="font-semibold">{t("navTitle")}</div>
          <div className="grid gap-2 text-sm">
            {links.map((l) => (
              <Link key={l.href} href={withLocale(locale, l.href)} className="text-neutral-600 hover:text-neutral-900">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <div className="font-semibold">{t("strongTopicsTitle")}</div>
          <div className="text-sm text-neutral-600 grid gap-2">
            <Link href={withLocale(locale, "/etudiants/suivi-memoires-projets")} className="hover:text-neutral-900">
              {t("topic1")}
            </Link>
            <Link href={withLocale(locale, "/etudiants/accompagnement-bts-tertiaires")} className="hover:text-neutral-900">
              {t("topic2")}
            </Link>
            <Link href={withLocale(locale, "/institutions/conseil-ingenierie-formation")} className="hover:text-neutral-900">
              {t("topic3")}
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-4 text-xs text-neutral-500">
          {t("copyright")}
        </div>
      </div>
    </footer>
  );
}
