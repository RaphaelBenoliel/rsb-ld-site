"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

type RelatedLink = { href: string; key: string };

function withLocale(locale: string, path: string) {
  return `/${locale}${path}`;
}

export default function ServicePageTemplate({
  contentBase,
  primaryCta,
  secondaryCta,
  relatedLinks
}: {
  contentBase: string; // e.g. "services.formation"
  primaryCta: "book" | "seePacks";
  secondaryCta: "requestQuote";
  relatedLinks?: RelatedLink[];
}) {
  const t = useTranslations();
  const cta = useTranslations("cta");
  const locale = useLocale();

  const methodology = t.raw(`${contentBase}.methodology`) as string[];
  const expertise = t.raw(`${contentBase}.expertise`) as string[];

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 space-y-8">
      <div className="rounded-2xl border p-8 space-y-3">
        <div className="text-sm text-neutral-500">{t(`${contentBase}.kicker`)}</div>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">{t(`${contentBase}.title`)}</h1>
        <p className="text-neutral-600">{t(`${contentBase}.short`)}</p>

        <div className="flex flex-col sm:flex-row gap-3 pt-3">
          <Link
            href={withLocale(locale, primaryCta === "book" ? "/institutions" : "/etudiants")}
            className="rounded-xl px-5 py-3 font-medium bg-neutral-900 text-white text-center"
          >
            {cta(primaryCta)}
          </Link>
          <Link
            href={withLocale(locale, "/devis")}
            className="rounded-xl px-5 py-3 font-medium border text-center"
          >
            {cta(secondaryCta)}
          </Link>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border p-6 space-y-2">
          <div className="font-semibold">{t("serviceBlocks.problemTitle")}</div>
          <div className="text-neutral-600">{t(`${contentBase}.problem`)}</div>
        </div>
        <div className="rounded-2xl border p-6 space-y-2">
          <div className="font-semibold">{t("serviceBlocks.objectiveTitle")}</div>
          <div className="text-neutral-600">{t(`${contentBase}.objective`)}</div>
        </div>
      </div>

      <div className="rounded-2xl border p-6 space-y-3">
        <div className="font-semibold">{t("serviceBlocks.methodTitle")}</div>
        <ul className="list-disc pl-5 text-neutral-700 space-y-1">
          {methodology.map((m, idx) => (
            <li key={idx}>{m}</li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl border p-6 space-y-3">
        <div className="font-semibold">{t("serviceBlocks.expertiseTitle")}</div>
        <div className="flex flex-wrap gap-2">
          {expertise.map((x, idx) => (
            <span key={idx} className="text-sm rounded-xl border px-3 py-1">
              {x}
            </span>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border p-6 space-y-2">
        <div className="font-semibold">{t("serviceBlocks.benefitTitle")}</div>
        <div className="text-neutral-700">{t(`${contentBase}.benefit`)}</div>
      </div>

      {relatedLinks?.length ? (
        <div className="rounded-2xl border p-6 space-y-3">
          <div className="font-semibold">{t("serviceBlocks.relatedTitle")}</div>
          <div className="grid gap-2">
            {relatedLinks.map((rl) => (
              <Link key={rl.href} href={withLocale(locale, rl.href)} className="text-neutral-700 hover:text-neutral-900 underline">
                {t(rl.key)}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
