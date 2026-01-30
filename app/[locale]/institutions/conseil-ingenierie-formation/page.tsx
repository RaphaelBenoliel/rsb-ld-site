import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function Page() {
  return (
    <ServicePageTemplate
      contentBase="services.formation"
      primaryCta="book"
      secondaryCta="requestQuote"
      relatedLinks={[
        { href: "/etudiants/suivi-memoires-projets", key: "services.memoires.title" }
      ]}
    />
  );
}
