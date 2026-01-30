import ServiceCardsGrid from "@/components/ServiceCardsGrid";
import { useTranslations } from "next-intl";

export default function ServicesOverviewGrid() {
  const t = useTranslations("home.services");

  return (
    <section className="space-y-4">
      <div className="text-xl font-semibold">{t("title")}</div>
      <ServiceCardsGrid
        services={[
          { href: "/institutions/conseil-ingenierie-formation", titleKey: "services.formation.title", descKey: "services.formation.short" },
          { href: "/institutions/interventions-pedagogiques", titleKey: "services.interventions.title", descKey: "services.interventions.short" },
          { href: "/etudiants/suivi-memoires-projets", titleKey: "services.memoires.title", descKey: "services.memoires.short" },
          { href: "/etudiants/accompagnement-bts-tertiaires", titleKey: "services.bts.title", descKey: "services.bts.short" }
        ]}
      />
    </section>
  );
}
