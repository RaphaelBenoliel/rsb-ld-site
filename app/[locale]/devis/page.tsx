import PageHeader from "@/components/PageHeader";
import PacksTable from "@/components/PacksTable";
import DevisForm from "@/components/DevisForm";
import CalendarCTA from "@/components/CalendarCTA";
import { useTranslations } from "next-intl";

export default function DevisPage() {
  const t = useTranslations("devis");

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 space-y-10">
      <PageHeader titleKey="devis.title" subtitleKey="devis.intro" />

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border p-6 space-y-4">
          <div className="text-lg font-semibold">{t("studentsTitle")}</div>
          <div className="text-neutral-600">{t("studentsBody")}</div>
          <PacksTable />
          <DevisForm audience="student" />
        </div>

        <div className="rounded-2xl border p-6 space-y-4">
          <div className="text-lg font-semibold">{t("institutionsTitle")}</div>
          <div className="text-neutral-600">{t("institutionsBody")}</div>

          <div className="flex items-center justify-between gap-4 flex-col md:flex-row rounded-2xl border p-5">
            <div>
              <div className="font-semibold">{t("bookTitle")}</div>
              <div className="text-neutral-600">{t("bookBody")}</div>
            </div>
            <CalendarCTA />
          </div>

          <DevisForm audience="institution" />
        </div>
      </div>
    </div>
  );
}
