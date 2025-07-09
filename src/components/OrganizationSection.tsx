
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Clock, ArrowRight, Heart, Target, Zap } from "lucide-react";

const organizations = [
  {
    name: "Green Earth Initiative",
    type: "Environmental",
    location: "San Francisco, CA",
    volunteers: 45,
    description: "Fighting climate change through community action and sustainable technology solutions.",
    needs: ["Web Development", "Marketing", "Data Analysis"],
    urgent: true,
    impact: "2.5K+ trees planted"
  },
  {
    name: "TechForGood Foundation",
    type: "Education",
    location: "Austin, TX",
    volunteers: 32,
    description: "Bridging the digital divide by teaching coding skills to underserved communities.",
    needs: ["Teaching", "Curriculum Design", "Mentoring"],
    urgent: false,
    impact: "500+ students taught"
  },
  {
    name: "Community Health Partners",
    type: "Healthcare",
    location: "Chicago, IL",
    volunteers: 28,
    description: "Improving community health outcomes through preventive care and education programs.",
    needs: ["Healthcare", "Grant Writing", "Public Health"],
    urgent: true,
    impact: "10K+ people helped"
  },
  {
    name: "Youth Mentorship Network",
    type: "Youth Development",
    location: "Denver, CO",
    volunteers: 67,
    description: "Empowering young people through mentorship, skill development, and career guidance.",
    needs: ["Mentoring", "Career Coaching", "Event Planning"],
    urgent: false,
    impact: "300+ youth mentored"
  }
];

const getTypeColor = (type: string) => {
  const colors = {
    "Environmental": "from-emerald-500 to-teal-600",
    "Education": "from-blue-500 to-indigo-600",
    "Healthcare": "from-rose-500 to-pink-600",
    "Youth Development": "from-violet-500 to-purple-600"
  };
  return colors[type as keyof typeof colors] || "from-gray-500 to-gray-600";
};

const getTypeIcon = (type: string) => {
  const icons = {
    "Environmental": Heart,
    "Education": Target,
    "Healthcare": Zap,
    "Youth Development": Users
  };
  return icons[type as keyof typeof icons] || Heart;
};

export const OrganizationSection = () => {
  return (
    <section id="organizations" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Organizations Seeking Volunteers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover meaningful opportunities to apply your skills and make a lasting impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {organizations.map((org, index) => {
            const TypeIcon = getTypeIcon(org.type);
            return (
              <Card 
                key={org.name}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 bg-white overflow-hidden"
              >
                <CardHeader className="pb-4 relative">
                  {/* Background pattern */}
                  <div className="absolute top-0 right-0 w-24 h-24 opacity-5">
                    <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 rounded-full"></div>
                  </div>
                  
                  <div className="flex items-start justify-between relative z-10">
                    <div className="flex items-start space-x-3">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${getTypeColor(org.type)} text-white shadow-lg`}>
                        <TypeIcon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors mb-2">
                          {org.name}
                        </CardTitle>
                        <Badge 
                          variant="outline" 
                          className={`text-xs mb-2 border-2 bg-gradient-to-r ${getTypeColor(org.type)} text-white border-transparent`}
                        >
                          {org.type}
                        </Badge>
                      </div>
                    </div>
                    {org.urgent && (
                      <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white border-0 shadow-lg">
                        <Zap className="w-3 h-3 mr-1" />
                        Urgent
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-500 space-x-4 mt-4">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                      {org.location}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1 text-gray-400" />
                      {org.volunteers} volunteers
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {org.description}
                  </p>

                  {/* Impact stats */}
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-3 mb-4">
                    <div className="flex items-center text-sm">
                      <Target className="w-4 h-4 mr-2 text-gray-600" />
                      <span className="font-semibold text-gray-700">Impact: </span>
                      <span className="text-gray-600 ml-1">{org.impact}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Skills Needed:</p>
                    <div className="flex flex-wrap gap-2">
                      {org.needs.map((skill) => (
                        <Badge 
                          key={skill} 
                          variant="secondary" 
                          className="text-xs bg-gradient-to-r from-amber-50 to-orange-50 text-amber-700 hover:from-amber-100 hover:to-orange-100 transition-all duration-200 border border-amber-200"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className={`flex-1 bg-gradient-to-r ${getTypeColor(org.type)} hover:shadow-lg group text-white transition-all duration-200`}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button 
                      variant="outline"
                      size="icon"
                      className="border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-colors"
                    >
                      <Heart className="w-4 h-4 text-gray-600" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 mr-4 transition-all duration-200"
          >
            View All Organizations
          </Button>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Register Your Organization
          </Button>
        </div>
      </div>
    </section>
  );
};
