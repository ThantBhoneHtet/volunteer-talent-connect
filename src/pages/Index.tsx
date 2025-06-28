
import { Hero } from "@/components/Hero";
import { SkillsShowcase } from "@/components/SkillsShowcase";
import { VolunteerProfiles } from "@/components/VolunteerProfiles";
import { HowItWorks } from "@/components/HowItWorks";
import { OrganizationSection } from "@/components/OrganizationSection";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navigation />
      <Hero />
      <SkillsShowcase />
      <VolunteerProfiles />
      <HowItWorks />
      <OrganizationSection />
      <Footer />
    </div>
  );
};

export default Index;
