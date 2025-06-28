
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin, Star, Clock } from "lucide-react";

const volunteers = [
  {
    name: "Sarah Chen",
    title: "Full-Stack Developer",
    location: "San Francisco, CA",
    rating: 4.9,
    hours: 120,
    skills: ["React", "Node.js", "Python", "AWS"],
    bio: "Passionate about using technology to solve social problems. Experienced in building scalable web applications.",
    avatar: "SC",
    available: true
  },
  {
    name: "Marcus Rodriguez",
    title: "Marketing Strategist",
    location: "Austin, TX",
    rating: 4.8,
    hours: 85,
    skills: ["Social Media", "Content Strategy", "Analytics", "SEO"],
    bio: "Marketing professional helping nonprofits amplify their message and reach more supporters.",
    avatar: "MR",
    available: true
  },
  {
    name: "Emily Watson",
    title: "UX Designer",
    location: "Seattle, WA",
    rating: 5.0,
    hours: 200,
    skills: ["UI/UX Design", "Figma", "User Research", "Prototyping"],
    bio: "Designing intuitive experiences that make a difference. Specializing in accessibility and inclusive design.",
    avatar: "EW",
    available: false
  },
  {
    name: "David Kim",
    title: "Financial Analyst",
    location: "New York, NY",
    rating: 4.7,
    hours: 65,
    skills: ["Financial Modeling", "Grant Writing", "Budgeting", "Excel"],
    bio: "Helping organizations optimize their financial strategies and secure funding for their missions.",
    avatar: "DK",
    available: true
  },
  {
    name: "Lisa Thompson",
    title: "Medical Professional",
    location: "Denver, CO",
    rating: 4.9,
    hours: 150,
    skills: ["Healthcare", "Training", "Public Health", "Emergency Care"],
    bio: "Registered nurse with 10+ years experience. Committed to improving community health outcomes.",
    avatar: "LT",
    available: true
  },
  {
    name: "Alex Rivera",
    title: "Educator & Trainer",
    location: "Chicago, IL",
    rating: 4.8,
    hours: 180,
    skills: ["Teaching", "Curriculum Design", "Public Speaking", "Mentoring"],
    bio: "Former teacher turned corporate trainer. Passionate about adult education and skill development.",
    avatar: "AR",
    available: true
  }
];

export const VolunteerProfiles = () => {
  return (
    <section id="volunteers" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our Featured Volunteers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with skilled professionals ready to contribute their expertise to your cause
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {volunteers.map((volunteer, index) => (
            <Card 
              key={volunteer.name}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-white/80 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <Avatar className="w-16 h-16">
                    <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold text-lg">
                      {volunteer.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {volunteer.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-1">{volunteer.title}</p>
                    <div className="flex items-center text-xs text-gray-500 space-x-3">
                      <div className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {volunteer.location}
                      </div>
                      <div className="flex items-center">
                        <Star className="h-3 w-3 mr-1 text-yellow-500" />
                        {volunteer.rating}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {volunteer.hours}h
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <div className={`w-3 h-3 rounded-full ${volunteer.available ? 'bg-green-500' : 'bg-gray-400'}`} />
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {volunteer.bio}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {volunteer.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="text-xs bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 transition-colors"
                  disabled={!volunteer.available}
                >
                  {volunteer.available ? "Connect" : "Unavailable"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
            View All Volunteers
          </Button>
        </div>
      </div>
    </section>
  );
};
