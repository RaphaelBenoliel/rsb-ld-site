import { useTranslations } from "next-intl";

export default function PacksTable() {
  const t = useTranslations("packs");
  const packs = t.raw("items") as { title: string; includes: string[]; badge?: string }[];

  return (
    <section className="rounded-2xl border p-6 space-y-4">
      <div className="flex items-baseline justify-between gap-4">
        <div className="text-lg font-semibold">{t("title")}</div>
        <div className="text-sm text-neutral-500">{t("priceNote")}</div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {packs.map((p, idx) => (
          <div key={idx} className="rounded-2xl border p-5 space-y-3">
            <div className="flex items-center justify-between gap-2">
              <div className="font-semibold">{p.title}</div>
              {p.badge ? (
                <span className="text-xs rounded-lg border px-2 py-1">{p.badge}</span>
              ) : null}
            </div>
            <ul className="text-sm text-neutral-600 space-y-1 list-disc pl-5">
              {p.includes.map((x, i) => (
                <li key={i}>{x}</li>
              ))}
            </ul>
            <div className="text-sm font-medium">{t("cta")}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
