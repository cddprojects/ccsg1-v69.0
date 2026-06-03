import { AboutSection } from "@/components/about-section";
import { CompensationSection } from "@/components/compensation-section";
import { ConfidenceSection } from "@/components/confidence-section";
import { EligibilitySection } from "@/components/eligibility-section";
import { GetStartedSection } from "@/components/get-started-section";
import { HeroSection } from "@/components/hero-section";
import { QuestionsSection } from "@/components/questions-section";
import { RolesSection } from "@/components/roles-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StepsSection } from "@/components/steps-section";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <StepsSection />
        <RolesSection />
        <EligibilitySection />
        <ConfidenceSection />
        <CompensationSection />
        <GetStartedSection />
        <QuestionsSection />
      </main>
      <SiteFooter />
    </>
  );
}
