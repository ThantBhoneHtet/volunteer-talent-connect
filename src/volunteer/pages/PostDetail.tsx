import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Badge } from "@/shared/components/ui/badge";
import { Separator } from "@/shared/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/components/ui/tabs";
import { 
  ChevronLeft, 
  MapPin, 
  Users, 
  Clock, 
  Target, 
  Zap, 
  Heart,
  Share2,
  Calendar,
  Phone,
  Mail,
  Globe,
  TreePine,
  GraduationCap,
  Baby,
  CheckCircle,
  ArrowRight,
  Star,
  Building
} from "lucide-react";

// Extended organization data
const organizationData = {
  1: {
    id: 1,
    name: "Green Earth Initiative",
    type: "Environmental",
    location: "San Francisco, CA",
    volunteers: 45,
    description: "Fighting climate change through community action and sustainable technology solutions.",
    longDescription: "Green Earth Initiative is a pioneering environmental organization dedicated to combating climate change through innovative community-based solutions. Founded in 2015, we focus on implementing sustainable technology practices, urban reforestation projects, and environmental education programs that create lasting positive impact.",
    needs: ["Web Development", "Marketing", "Data Analysis"],
    urgent: true,
    impact: "2.5K+ trees planted",
    timeCommitment: "5-10 hours/week",
    featured: true,
    website: "https://greenearthsf.org",
    email: "volunteer@greenearthsf.org",
    phone: "(415) 555-0123",
    address: "123 Green Street, San Francisco, CA 94102",
    founded: "2015",
    mission: "To create a sustainable future through community-driven environmental action and innovative green technology solutions.",
    currentProjects: [
      {
        title: "Urban Forest Expansion",
        description: "Planting native trees in underserved neighborhoods",
        participants: 25,
        duration: "6 months"
      },
      {
        title: "Solar Panel Installation Program",
        description: "Installing solar panels in low-income housing",
        participants: 15,
        duration: "3 months"
      },
      {
        title: "Environmental Education Workshops",
        description: "Teaching sustainable practices to local schools",
        participants: 30,
        duration: "Ongoing"
      }
    ],
    requirements: [
      "Passion for environmental conservation",
      "Ability to work outdoors",
      "Basic computer skills",
      "Commitment to weekly volunteering"
    ],
    benefits: [
      "Professional development opportunities",
      "Environmental impact training",
      "Networking with like-minded individuals",
      "Recognition certificates",
      "Volunteer appreciation events"
    ],
    testimonials: [
      {
        name: "Sarah Johnson",
        role: "Marketing Volunteer",
        quote: "Working with Green Earth Initiative has been incredibly rewarding. I've learned so much about environmental advocacy while contributing my marketing skills to a cause I care about.",
        rating: 5
      },
      {
        name: "Mike Chen",
        role: "Tree Planting Volunteer",
        quote: "The team is amazing and the impact is real. Seeing the neighborhoods transform with our tree planting efforts is incredibly motivating.",
        rating: 5
      }
    ],
    upcomingEvents: [
      {
        title: "Community Tree Planting Day",
        date: "2024-02-15",
        time: "9:00 AM - 3:00 PM",
        location: "Golden Gate Park"
      },
      {
        title: "Volunteer Orientation",
        date: "2024-02-20",
        time: "6:00 PM - 8:00 PM",
        location: "Green Earth Office"
      }
    ]
  }
  // Add more organizations as needed
};

const getTypeColor = (type: string) => {
  const colors = {
    "Environmental": "var(--gradient-environmental)",
    "Education": "var(--gradient-education)",
    "Healthcare": "var(--gradient-healthcare)",
    "Youth Development": "var(--gradient-youth)"
  };
  return colors[type as keyof typeof colors] || "var(--gradient-hero)";
};

const getTypeIcon = (type: string) => {
  const icons = {
    "Environmental": TreePine,
    "Education": GraduationCap,
    "Healthcare": Heart,
    "Youth Development": Baby
  };
  return icons[type as keyof typeof icons] || Heart;
};

const PostDetail = () => {
  const { id } = useParams();
  const [isApplying, setIsApplying] = useState(false);
  
  const org = organizationData[parseInt(id || "1") as keyof typeof organizationData];
  
  if (!org) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <Card className="max-w-md mx-auto">
          <CardContent className="text-center py-12">
            <Building className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-foreground mb-2">Organization Not Found</h2>
            <p className="text-muted-foreground mb-6">The organization you're looking for doesn't exist.</p>
            <Link to="/organizations">
              <Button>Back to All Organizations</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const TypeIcon = getTypeIcon(org.type);

  const handleApply = () => {
    setIsApplying(true);
    // Simulate application process
    setTimeout(() => {
      setIsApplying(false);
      alert("Application submitted successfully! The organization will contact you soon.");
    }, 2000);
  };

const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between mb-6">
            <button 
              onClick={() => navigate("/")}
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors animate-fade-in"
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              Back to Organizations
            </button>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Heart className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Organization Header */}
            <Card className="animate-fade-in-up">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div 
                    className="p-4 rounded-xl text-white shadow-lg"
                    style={{ background: getTypeColor(org.type) }}
                  >
                    <TypeIcon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <CardTitle className="text-3xl font-bold text-card-foreground">
                        {org.name}
                      </CardTitle>
                      {org.featured && (
                        <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">
                          Featured
                        </Badge>
                      )}
                      {org.urgent && (
                        <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white border-0">
                          <Zap className="w-3 h-3 mr-1" />
                          Urgent
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center space-x-6 text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {org.location}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {org.volunteers} active volunteers
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        Founded {org.founded}
                      </div>
                    </div>
                    <Badge 
                      variant="outline" 
                      className="text-white border-transparent"
                      style={{ background: getTypeColor(org.type) }}
                    >
                      {org.type}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Tabs Content */}
            <Card className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <CardContent className="p-6">
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="projects">Projects</TabsTrigger>
                    <TabsTrigger value="requirements">Requirements</TabsTrigger>
                    <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="overview" className="mt-6 space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-card-foreground mb-3">About This Organization</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {org.longDescription}
                      </p>
                      <div className="bg-muted/50 rounded-lg p-4">
                        <h4 className="font-semibold text-card-foreground mb-2">Mission</h4>
                        <p className="text-muted-foreground">{org.mission}</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-card-foreground mb-3">Skills We Need</h3>
                      <div className="flex flex-wrap gap-2">
                        {org.needs.map((skill) => (
                          <Badge 
                            key={skill} 
                            variant="secondary" 
                            className="bg-accent/50 text-accent-foreground hover:bg-accent transition-all duration-200"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-card-foreground mb-3">What You'll Gain</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {org.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-muted-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="projects" className="mt-6">
                    <h3 className="text-xl font-semibold text-card-foreground mb-4">Current Projects</h3>
                    <div className="space-y-4">
                      {org.currentProjects.map((project, index) => (
                        <Card key={index}>
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-semibold text-card-foreground">{project.title}</h4>
                              <Badge variant="outline">{project.duration}</Badge>
                            </div>
                            <p className="text-muted-foreground mb-3">{project.description}</p>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Users className="w-4 h-4 mr-1" />
                              {project.participants} volunteers involved
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="requirements" className="mt-6">
                    <h3 className="text-xl font-semibold text-card-foreground mb-4">What We're Looking For</h3>
                    <div className="space-y-3">
                      {org.requirements.map((requirement, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                          <span className="text-muted-foreground">{requirement}</span>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="reviews" className="mt-6">
                    <h3 className="text-xl font-semibold text-card-foreground mb-4">Volunteer Reviews</h3>
                    <div className="space-y-4">
                      {org.testimonials.map((testimonial, index) => (
                        <Card key={index}>
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between mb-3">
                              <div>
                                <h4 className="font-semibold text-card-foreground">{testimonial.name}</h4>
                                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                              </div>
                              <div className="flex items-center">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                              </div>
                            </div>
                            <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card className="animate-slide-in-right">
              <CardHeader>
                <CardTitle className="text-lg">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Target className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Impact</span>
                  </div>
                  <span className="font-semibold text-card-foreground">{org.impact}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Time</span>
                  </div>
                  <span className="font-semibold text-card-foreground">{org.timeCommitment}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Volunteers</span>
                  </div>
                  <span className="font-semibold text-card-foreground">{org.volunteers}</span>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="animate-slide-in-right" style={{ animationDelay: "200ms" }}>
              <CardHeader>
                <CardTitle className="text-lg">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <a href={`mailto:${org.email}`} className="text-primary hover:underline">
                    {org.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <a href={`tel:${org.phone}`} className="text-primary hover:underline">
                    {org.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-4 h-4 text-muted-foreground" />
                  <a href={org.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Visit Website
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-muted-foreground mt-0.5" />
                  <span className="text-muted-foreground text-sm">{org.address}</span>
                </div>
              </CardContent>
            </Card>

            {/* Apply Section */}
            <Card className="animate-slide-in-right" style={{ animationDelay: "400ms" }}>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-card-foreground mb-4">Ready to Make a Difference?</h3>
                <Button 
                  onClick={handleApply}
                  disabled={isApplying}
                  className="w-full text-white hover:shadow-lg transition-all duration-200"
                  style={{ background: getTypeColor(org.type) }}
                >
                  {isApplying ? "Submitting..." : "Apply to Volunteer"}
                  {!isApplying && <ArrowRight className="ml-2 h-4 w-4" />}
                </Button>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  Application review typically takes 2-3 business days
                </p>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card className="animate-slide-in-right" style={{ animationDelay: "600ms" }}>
              <CardHeader>
                <CardTitle className="text-lg">Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {org.upcomingEvents.map((event, index) => (
                  <div key={index} className="border border-border rounded-lg p-3">
                    <h4 className="font-semibold text-card-foreground text-sm mb-1">{event.title}</h4>
                    <div className="flex items-center text-xs text-muted-foreground mb-1">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(event.date).toLocaleDateString()} at {event.time}
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3 mr-1" />
                      {event.location}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;