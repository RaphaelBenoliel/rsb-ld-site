import PageHeader from "@/components/PageHeader";
import ServiceCardsGrid from "@/components/ServiceCardsGrid";
import CalendarCTA from "@/components/CalendarCTA";

export default function InstitutionsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 space-y-8">
      <PageHeader titleKey="institutions.title" subtitleKey="institutions.intro" />
      <ServiceCardsGrid
        services={[
          {
            href: "/institutions/conseil-ingenierie-formation",
            titleKey: "services.formation.title",
            descKey: "services.formation.short"
          },
          {
            href: "/institutions/interventions-pedagogiques",
            titleKey: "services.interventions.title",
            descKey: "services.interventions.short"
          }
        ]}
      />
      <div className="rounded-2xl border p-6 flex items-center justify-between gap-4 flex-col md:flex-row">
        <div className="space-y-1">
          <div className="text-lg font-semibold">Prendre RDV</div>
          <div className="text-neutral-600">
            Planifions un échange pour cadrer votre besoin et définir le bon dispositif.
          </div>
        </div>
        <CalendarCTA />
      </div>
    </div>
  );
}
