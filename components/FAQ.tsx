import { useTranslations } from "next-intl";

export default function FAQ() {
  const t = useTranslations("home.faq");
  const items = t.raw("items") as { q: string; a: string }[];

  return (
    <section className="rounded-2xl border p-8 space-y-4">
      <div className="text-xl font-semibold">{t("title")}</div>
      <div className="space-y-3">
        {items.map((it, idx) => (
          <div key={idx} className="rounded-xl border p-4">
            <div className="font-semibold">{it.q}</div>
            <div className="text-neutral-600 mt-1">{it.a}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
