import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function Page() {
  return (
    <ServicePageTemplate
      contentBase="services.memoires"
      primaryCta="seePacks"
      secondaryCta="requestQuote"
      relatedLinks={[
        { href: "/institutions/interventions-pedagogiques", key: "services.interventions.title" }
      ]}
    />
  );
}
