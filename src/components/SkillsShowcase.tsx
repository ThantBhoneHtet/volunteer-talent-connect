
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Code, 
  Palette, 
  Calculator, 
  Camera, 
  Users, 
  TrendingUp, 
  Heart,
  BookOpen,
  Mic,
  Wrench 
} from "lucide-react";
import { Button } from "./ui/button";

const skillCategories = [
  {
    title: "Technology",
    icon: Code,
    color: "bg-blue-500",
    skills: ["Web Development", "Mobile Apps", "Data Analysis", "Cloud Computing", "AI/ML"],
    volunteers: 3200
  },
  {
    title: "Design & Creative",
    icon: Palette,
    color: "bg-purple-500",
    skills: ["Graphic Design", "UX/UI", "Video Editing", "Photography", "Branding"],
    volunteers: 1800
  },
  {
    title: "Marketing",
    icon: TrendingUp,
    color: "bg-green-500",
    skills: ["Social Media", "Content Writing", "SEO", "Email Marketing", "Analytics"],
    volunteers: 2100
  },
  {
    title: "Finance & Legal",
    icon: Calculator,
    color: "bg-orange-500",
    skills: ["Accounting", "Legal Advice", "Grant Writing", "Tax Prep", "Compliance"],
    volunteers: 950
  },
  {
    title: "Healthcare",
    icon: Heart,
    color: "bg-red-500",
    skills: ["Medical Care", "Mental Health", "Nutrition", "Physical Therapy", "Research"],
    volunteers: 1400
  },
  {
    title: "Education",
    icon: BookOpen,
    color: "bg-indigo-500",
    skills: ["Tutoring", "Curriculum Design", "Training", "Language Teaching", "Mentoring"],
    volunteers: 2800
  }
];

export const SkillsShowcase = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Skills by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover talented volunteers across diverse skill areas, ready to make an impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-0 bg-white/80 backdrop-blur-sm"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="text-sm">
                    {category.volunteers.toLocaleString()} volunteers
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="outline" 
                      className="text-xs hover:bg-blue-50 hover:border-blue-300 transition-colors cursor-pointer"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
            View All Skills
          </Button>
        </div>
      </div>
    </section>
  );
};
