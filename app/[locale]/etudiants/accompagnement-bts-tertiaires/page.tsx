import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function Page() {
  return (
    <ServicePageTemplate
      contentBase="services.bts"
      primaryCta="seePacks"
      secondaryCta="requestQuote"
      relatedLinks={[
        { href: "/institutions/conseil-ingenierie-formation", key: "services.formation.title" }
      ]}
    />
  );
}
