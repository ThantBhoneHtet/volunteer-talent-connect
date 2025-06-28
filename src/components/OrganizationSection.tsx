
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Clock, ArrowRight } from "lucide-react";

const organizations = [
  {
    name: "Green Earth Initiative",
    type: "Environmental",
    location: "San Francisco, CA",
    volunteers: 45,
    description: "Fighting climate change through community action and sustainable technology solutions.",
    needs: ["Web Development", "Marketing", "Data Analysis"],
    urgent: true
  },
  {
    name: "TechForGood Foundation",
    type: "Education",
    location: "Austin, TX",
    volunteers: 32,
    description: "Bridging the digital divide by teaching coding skills to underserved communities.",
    needs: ["Teaching", "Curriculum Design", "Mentoring"],
    urgent: false
  },
  {
    name: "Community Health Partners",
    type: "Healthcare",
    location: "Chicago, IL",
    volunteers: 28,
    description: "Improving community health outcomes through preventive care and education programs.",
    needs: ["Healthcare", "Grant Writing", "Public Health"],
    urgent: true
  },
  {
    name: "Youth Mentorship Network",
    type: "Youth Development",
    location: "Denver, CO",
    volunteers: 67,
    description: "Empowering young people through mentorship, skill development, and career guidance.",
    needs: ["Mentoring", "Career Coaching", "Event Planning"],
    urgent: false
  }
];

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
          {organizations.map((org, index) => (
            <Card 
              key={org.name}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-white/80 backdrop-blur-sm"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                      {org.name}
                    </CardTitle>
                    <Badge variant="outline" className="text-xs mb-2">
                      {org.type}
                    </Badge>
                  </div>
                  {org.urgent && (
                    <Badge className="bg-red-100 text-red-700 hover:bg-red-200">
                      Urgent Need
                    </Badge>
                  )}
                </div>
                <div className="flex items-center text-sm text-gray-500 space-x-4">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {org.location}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {org.volunteers} volunteers
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {org.description}
                </p>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Skills Needed:</p>
                  <div className="flex flex-wrap gap-2">
                    {org.needs.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="text-xs bg-green-50 text-green-700 hover:bg-green-100 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-700 group">
                  Learn More & Apply
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-50 mr-4">
            View All Organizations
          </Button>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Register Your Organization
          </Button>
        </div>
      </div>
    </section>
  );
};
