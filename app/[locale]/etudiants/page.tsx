import PageHeader from "@/components/PageHeader";
import ServiceCardsGrid from "@/components/ServiceCardsGrid";
import PacksTable from "@/components/PacksTable";

export default function StudentsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 space-y-8">
      <PageHeader titleKey="students.title" subtitleKey="students.intro" />

      <ServiceCardsGrid
        services={[
          {
            href: "/etudiants/suivi-memoires-projets",
            titleKey: "services.memoires.title",
            descKey: "services.memoires.short"
          },
          {
            href: "/etudiants/accompagnement-bts-tertiaires",
            titleKey: "services.bts.title",
            descKey: "services.bts.short"
          }
        ]}
      />

      <PacksTable />
    </div>
  );
}
