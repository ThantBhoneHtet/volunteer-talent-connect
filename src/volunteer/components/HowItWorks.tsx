
import { Card, CardContent } from "@/shared/components/ui/card";
import { UserPlus, Search, MessageCircle, HandHeart } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Create Your Profile",
    description: "Sign up and showcase your skills, experience, and availability. Let organizations know what you're passionate about.",
    color: "bg-blue-500"
  },
  {
    icon: Search,
    title: "Discover Opportunities",
    description: "Browse projects and organizations that match your skills and interests. Filter by cause, location, and time commitment.",
    color: "bg-green-500"
  },
  {
    icon: MessageCircle,
    title: "Connect & Collaborate",
    description: "Connect directly with organizations, discuss project details, and find the perfect match for your skills and schedule.",
    color: "bg-purple-500"
  },
  {
    icon: HandHeart,
    title: "Make an Impact",
    description: "Use your skills to create meaningful change. Track your contributions and build lasting relationships with causes you care about.",
    color: "bg-orange-500"
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How SkillBridge Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple steps to connect your skills with meaningful opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-sm font-bold text-blue-600 mb-2">
                    STEP {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-blue-300 to-green-300"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
