import { Button } from "@/shared/components/ui/button";
import { Card, CardContent } from "@/shared/components/ui/card";
import { Users, Target, Zap, Shield, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Skilled Talent Pool",
    description: "Access thousands of pre-screened volunteers with verified skills and experience.",
  },
  {
    icon: Target,
    title: "Perfect Matches",
    description: "Our AI-powered matching finds volunteers who align with your specific needs and mission.",
  },
  {
    icon: Zap,
    title: "Quick Mobilization",
    description: "Post a project and connect with qualified volunteers within 24 hours.",
  },
  {
    icon: Shield,
    title: "Verified Volunteers",
    description: "All volunteers go through background checks and skill verification for your peace of mind.",
  },
];

const OrganizationSection = () => {
  return (
    <section id="for-organizations" className="py-20 bg-gradient-to-br from-secondary/50 to-accent/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Features Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow bg-card/80 backdrop-blur">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Find the Right
                <span className="text-primary block">Volunteers Fast</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Stop struggling to find skilled volunteers. Our platform connects 
                you with passionate professionals who want to contribute to your mission. 
                From one-time projects to ongoing support, we have the talent you need.
              </p>
            </div>

            {/* Success Stats */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary">89%</div>
                <div className="text-sm text-muted-foreground">Project Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">24hrs</div>
                <div className="text-sm text-muted-foreground">Average Match Time</div>
              </div>
            </div>

            {/* Organization Types */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">We work with:</h3>
              <div className="flex flex-wrap gap-2">
                {["Nonprofits", "Schools", "Community Groups", "Healthcare", "Environmental", "Animal Welfare"].map((type) => (
                  <span key={type} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {type}
                  </span>
                ))}
              </div>
            </div>

            <Button variant="hero" className="group">
              Find Volunteers Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizationSection;