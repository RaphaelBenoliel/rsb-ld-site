import HeroSplitCTA from "@/components/HeroSplitCTA";
import AudienceCards from "@/components/AudienceCards";
import ServicesOverviewGrid from "@/components/ServicesOverviewGrid";
import ValuePillars from "@/components/ValuePillars";
import FAQ from "@/components/FAQ";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 space-y-10">
      <HeroSplitCTA />
      <AudienceCards />
      <ServicesOverviewGrid />
      <ValuePillars />
      <FAQ />
    </div>
  );
}
