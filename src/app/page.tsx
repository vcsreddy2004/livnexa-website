import { OwnerSection, ResidentSection } from "../components/marketing/audience-sections";
import {
  FaqSection,
  FinalCallToAction,
  SiteFooter,
} from "../components/marketing/closing-sections";
import {
  FeaturesSection,
  StepsSection,
  TrustStrip,
} from "../components/marketing/feature-sections";
import { HeroSection } from "../components/marketing/hero-section";
import { PricingSection, SecuritySection } from "../components/marketing/pricing-section";
import { SiteNavigation } from "../components/marketing/site-navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-liv-body leading-[1.6] text-liv-ink">
      <SiteNavigation />
      <main>
        <HeroSection />
        <TrustStrip />
        <FeaturesSection />
        <StepsSection />
        <OwnerSection />
        <ResidentSection />
        <PricingSection />
        <SecuritySection />
        <FaqSection />
        <FinalCallToAction />
      </main>
      <SiteFooter />
    </div>
  );
}
