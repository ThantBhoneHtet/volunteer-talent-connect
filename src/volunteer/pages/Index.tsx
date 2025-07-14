
import { Hero } from "@/volunteer/components/Hero";
import { SkillsShowcase } from "@/volunteer/components/SkillsShowcase";
import { VolunteerProfiles } from "@/volunteer/components/VolunteerProfiles";
import { HowItWorks } from "@/volunteer/components/HowItWorks";
import { OrganizationSection } from "@/volunteer/components/OrganizationSection";
import { Footer } from "@/volunteer/components/Footer";
import { Navigation } from "@/volunteer/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navigation />
      <Hero />
      <SkillsShowcase />
      {/* <VolunteerProfiles /> */}
      <HowItWorks />
      <OrganizationSection />
      <Footer />
    </div>
  );
};

export default Index;
