import PageHeader from "@/components/PageHeader";
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("about");
  const values = t.raw("values") as string[];

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 space-y-8">
      <PageHeader titleKey="about.title" subtitleKey="about.intro" />

      <div className="rounded-2xl border p-6 space-y-3">
        <div className="text-lg font-semibold">{t("section1Title")}</div>
        <p className="text-neutral-700">{t("section1Body")}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {values.map((v, idx) => (
          <div key={idx} className="rounded-2xl border p-5">
            <div className="font-semibold">{v}</div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border p-6 space-y-2">
        <div className="text-lg font-semibold">{t("processTitle")}</div>
        <p className="text-neutral-700">{t("processBody")}</p>
      </div>
    </div>
  );
}
