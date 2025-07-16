import { Button } from "@/shared/components/ui/button";
import { Card, CardContent } from "@/shared/components/ui/card";
import { Calendar, MapPin, Clock, Award, ArrowRight } from "lucide-react";

const benefits = [
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description: "Choose when and how often you want to volunteer. Work around your schedule.",
  },
  {
    icon: MapPin,
    title: "Local & Remote",
    description: "Find opportunities in your area or contribute remotely from anywhere.",
  },
  {
    icon: Clock,
    title: "Short & Long-term",
    description: "From one-time projects to ongoing commitments, find what works for you.",
  },
  {
    icon: Award,
    title: "Skill Development",
    description: "Learn new skills while helping others and building your professional network.",
  },
];

const VolunteerSection = () => {
  return (
    <section id="for-volunteers" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Share Your Skills,
                <span className="text-primary block">Change Lives</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Whether you're a developer, designer, teacher, or have any other skill, 
                there's a cause that needs your expertise. Make a meaningful impact 
                while growing personally and professionally.
              </p>
            </div>

            {/* Popular Skills */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Popular Skills in Demand:</h3>
              <div className="flex flex-wrap gap-2">
                {["Web Development", "Graphic Design", "Teaching", "Marketing", "Writing", "Photography", "Accounting", "Legal Advice"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <Button variant="hero" className="group">
              Start Volunteering Today
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Benefits Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;