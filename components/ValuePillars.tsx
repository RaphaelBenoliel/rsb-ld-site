import { useTranslations } from "next-intl";

export default function ValuePillars() {
  const t = useTranslations("home.values");
  const items = t.raw("items") as { title: string; body: string }[];

  return (
    <section className="grid gap-4 md:grid-cols-3">
      {items.map((it, idx) => (
        <div key={idx} className="rounded-2xl border p-6">
          <div className="font-semibold">{it.title}</div>
          <div className="text-neutral-600 mt-2">{it.body}</div>
        </div>
      ))}
    </section>
  );
}
