
import { Navigation } from "@/volunteer/components/Navigation";
import Hero from "@/volunteer/components/Hero";
import HowItWorks  from "@/volunteer/components/HowItWorks";
import OrganizationSection from "@/volunteer/components/OrganizationSection";
import VolunteerSection from "@/volunteer/components/VolunteerSection";
import SkillsShowcase from "@/volunteer/components/SkillsShowcase";
import { Footer } from "@/volunteer/components/Footer";
import { VolunteerProfiles } from "@/volunteer/components/VolunteerProfiles";
import { OrganizationSeeking } from "@/volunteer/components/OrganizationSeeking";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navigation />
      <Hero />
      <HowItWorks/>
      <VolunteerSection />
      <OrganizationSection />
      <OrganizationSeeking/>
      <SkillsShowcase/>
      <Footer />
    </div>
  );
};

export default Index;
