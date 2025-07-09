
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin, Star, Clock, MessageCircle, Award } from "lucide-react";

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
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 bg-gradient-to-br from-white to-gray-50/50 overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Header with gradient background */}
                <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full -ml-8 -mb-8"></div>
                  
                  <div className="flex items-start justify-between relative z-10">
                    <div className="flex items-center space-x-3">
                      <Avatar className="w-12 h-12 border-2 border-white/20">
                        <AvatarFallback className="bg-white/10 text-white font-semibold backdrop-blur-sm">
                          {volunteer.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-bold text-lg">{volunteer.name}</h3>
                        <p className="text-sm text-white/80">{volunteer.title}</p>
                      </div>
                    </div>
                    <div className={`w-3 h-3 rounded-full ${volunteer.available ? 'bg-green-400' : 'bg-gray-400'} shadow-lg`}></div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 space-x-4 mb-4">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                      {volunteer.location}
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-1 text-amber-500" fill="currentColor" />
                      <span className="font-medium text-gray-700">{volunteer.rating}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1 text-gray-400" />
                      <span className="font-medium text-gray-700">{volunteer.hours}h</span>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {volunteer.bio}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {volunteer.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="text-xs bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 hover:from-slate-200 hover:to-slate-300 transition-all duration-200 border border-slate-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
                      disabled={!volunteer.available}
                    >
                      {volunteer.available ? (
                        <>
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Connect
                        </>
                      ) : "Unavailable"}
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon"
                      className="border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-colors"
                    >
                      <Award className="w-4 h-4 text-gray-600" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-indigo-200 text-indigo-700 hover:bg-indigo-50 hover:border-indigo-300 transition-all duration-200"
          >
            View All Volunteers
          </Button>
        </div>
      </div>
    </section>
  );
};
