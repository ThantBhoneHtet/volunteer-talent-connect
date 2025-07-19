import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Badge } from "@/shared/components/ui/badge";
import { Input } from "@/shared/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select";
import { 
  MapPin, 
  Users, 
  Clock, 
  ArrowRight, 
  Heart, 
  Target, 
  Zap, 
  Search,
  Filter,
  ChevronLeft,
  Globe,
  Building,
  Briefcase,
  GraduationCap,
  TreePine,
  Baby
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const allOrganizations = [
  {
    id: 1,
    name: "Green Earth Initiative",
    type: "Environmental",
    location: "San Francisco, CA",
    volunteers: 45,
    description: "Fighting climate change through community action and sustainable technology solutions.",
    needs: ["Web Development", "Marketing", "Data Analysis"],
    urgent: true,
    impact: "2.5K+ trees planted",
    timeCommitment: "5-10 hours/week",
    featured: true
  },
  {
    id: 2,
    name: "TechForGood Foundation",
    type: "Education",
    location: "Austin, TX",
    volunteers: 32,
    description: "Bridging the digital divide by teaching coding skills to underserved communities.",
    needs: ["Teaching", "Curriculum Design", "Mentoring"],
    urgent: false,
    impact: "500+ students taught",
    timeCommitment: "3-5 hours/week",
    featured: true
  },
  {
    id: 3,
    name: "Community Health Partners",
    type: "Healthcare",
    location: "Chicago, IL",
    volunteers: 28,
    description: "Improving community health outcomes through preventive care and education programs.",
    needs: ["Healthcare", "Grant Writing", "Public Health"],
    urgent: true,
    impact: "10K+ people helped",
    timeCommitment: "6-8 hours/week",
    featured: false
  },
  {
    id: 4,
    name: "Youth Mentorship Network",
    type: "Youth Development",
    location: "Denver, CO",
    volunteers: 67,
    description: "Empowering young people through mentorship, skill development, and career guidance.",
    needs: ["Mentoring", "Career Coaching", "Event Planning"],
    urgent: false,
    impact: "300+ youth mentored",
    timeCommitment: "4-6 hours/week",
    featured: true
  },
  {
    id: 5,
    name: "Ocean Conservation Alliance",
    type: "Environmental",
    location: "Miami, FL",
    volunteers: 89,
    description: "Protecting marine ecosystems through research, cleanup initiatives, and awareness campaigns.",
    needs: ["Marine Biology", "Photography", "Social Media"],
    urgent: true,
    impact: "50+ beaches cleaned",
    timeCommitment: "8-12 hours/week",
    featured: false
  },
  {
    id: 6,
    name: "Digital Literacy Hub",
    type: "Education",
    location: "Seattle, WA",
    volunteers: 23,
    description: "Teaching digital skills to seniors and helping them stay connected with technology.",
    needs: ["Computer Training", "Patience", "Communication"],
    urgent: false,
    impact: "800+ seniors trained",
    timeCommitment: "2-4 hours/week",
    featured: false
  },
  {
    id: 7,
    name: "Mental Health Support Network",
    type: "Healthcare",
    location: "Portland, OR",
    volunteers: 156,
    description: "Providing peer support and resources for mental health awareness in communities.",
    needs: ["Counseling", "Event Organization", "Outreach"],
    urgent: false,
    impact: "2K+ people supported",
    timeCommitment: "6-10 hours/week",
    featured: true
  },
  {
    id: 8,
    name: "Creative Arts for Kids",
    type: "Youth Development",
    location: "Los Angeles, CA",
    volunteers: 41,
    description: "Fostering creativity and self-expression in underprivileged children through art programs.",
    needs: ["Art Instruction", "Supply Management", "Fundraising"],
    urgent: true,
    impact: "1.2K+ kids reached",
    timeCommitment: "3-6 hours/week",
    featured: false
  },
  {
    id: 9,
    name: "Urban Garden Project",
    type: "Environmental",
    location: "New York, NY",
    volunteers: 72,
    description: "Creating sustainable urban gardens to improve food security and community health.",
    needs: ["Gardening", "Community Outreach", "Workshop Leading"],
    urgent: false,
    impact: "15 gardens established",
    timeCommitment: "4-8 hours/week",
    featured: false
  },
  {
    id: 10,
    name: "Coding Bootcamp for Veterans",
    type: "Education",
    location: "Boston, MA",
    volunteers: 18,
    description: "Helping military veterans transition to tech careers through intensive coding education.",
    needs: ["Software Development", "Career Counseling", "Networking"],
    urgent: true,
    impact: "200+ veterans trained",
    timeCommitment: "10-15 hours/week",
    featured: true
  },
  {
    id: 11,
    name: "Rural Healthcare Access",
    type: "Healthcare",
    location: "Nashville, TN",
    volunteers: 34,
    description: "Bringing healthcare services to underserved rural communities through mobile clinics.",
    needs: ["Medical Assistance", "Transportation", "Community Relations"],
    urgent: true,
    impact: "5K+ patients served",
    timeCommitment: "12-16 hours/week",
    featured: false
  },
  {
    id: 12,
    name: "Teen Leadership Academy",
    type: "Youth Development",
    location: "Phoenix, AZ",
    volunteers: 29,
    description: "Developing leadership skills in teenagers through workshops, projects, and mentorship.",
    needs: ["Leadership Training", "Project Management", "Public Speaking"],
    urgent: false,
    impact: "400+ teens empowered",
    timeCommitment: "5-7 hours/week",
    featured: false
  }
];

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

const ViewAllPosts = () => {
  const [organizations, setOrganizations] = useState(allOrganizations);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [urgentOnly, setUrgentOnly] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);

  const organizationTypes = ["Environmental", "Education", "Healthcare", "Youth Development"];
  const locations = [...new Set(allOrganizations.map(org => org.location.split(", ")[1]))];

  const filteredOrganizations = organizations.filter(org => {
    const matchesSearch = org.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         org.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         org.needs.some(need => need.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesType = selectedType === "all" || org.type === selectedType;
    const matchesLocation = selectedLocation === "all" || org.location.includes(selectedLocation);
    const matchesUrgent = !urgentOnly || org.urgent;
    
    return matchesSearch && matchesType && matchesLocation && matchesUrgent;
  });

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 6, filteredOrganizations.length));
  };

  useEffect(() => {
    setVisibleCount(6);
  }, [searchTerm, selectedType, selectedLocation, urgentOnly]);

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <button
              onClick={() => navigate("/")}
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
                <ChevronLeft className="w-5 h-5 mr-1" />
                Back to Home
              </button>
            </div>
            <div className="hidden md:flex items-center space-x-2 text-sm text-muted-foreground">
              <Globe className="w-4 h-4" />
              <span>{filteredOrganizations.length} organizations found</span>
            </div>
          </div>
          
          <div className="animate-fade-in-up">
            <h1 className="text-4xl font-bold text-foreground mb-3">
              All Volunteer Opportunities
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Discover meaningful ways to make a difference in your community and beyond
            </p>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 animate-slide-in-right">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search organizations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger>
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {organizationTypes.map(type => (
                  <SelectItem key={type} value={type}>{type}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger>
                <SelectValue placeholder="All Locations" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                {locations.map(location => (
                  <SelectItem key={location} value={location}>{location}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button
              variant={urgentOnly ? "default" : "outline"}
              onClick={() => setUrgentOnly(!urgentOnly)}
              className="w-full"
            >
              <Filter className="w-4 h-4 mr-2" />
              {urgentOnly ? "Showing Urgent" : "Urgent Only"}
            </Button>
          </div>
        </div>
      </div>

      {/* Organizations Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredOrganizations.length === 0 ? (
          <div className="text-center py-16 animate-fade-in">
            <Building className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-foreground mb-2">No organizations found</h3>
            <p className="text-muted-foreground">Try adjusting your search criteria</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredOrganizations.slice(0, visibleCount).map((org, index) => {
              const TypeIcon = getTypeIcon(org.type);
              return (
                <Card 
                  key={org.id}
                  className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-border bg-card overflow-hidden animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="pb-4 relative">
                    {/* Background pattern */}
                    <div className="absolute top-0 right-0 w-24 h-24 opacity-5">
                      <div 
                        className="w-full h-full rounded-full"
                        style={{ background: getTypeColor(org.type) }}
                      ></div>
                    </div>
                    
                    <div className="flex items-start justify-between relative z-10">
                      <div className="flex items-start space-x-3">
                        <div 
                          className="p-3 rounded-xl text-white shadow-lg"
                          style={{ background: getTypeColor(org.type) }}
                        >
                          <TypeIcon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors mb-2">
                            {org.name}
                          </CardTitle>
                          <Badge 
                            variant="outline" 
                            className="text-xs mb-2 border-2 text-white border-transparent"
                            style={{ background: getTypeColor(org.type) }}
                          >
                            {org.type}
                          </Badge>
                          {org.featured && (
                            <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200 text-xs ml-2">
                              Featured
                            </Badge>
                          )}
                        </div>
                      </div>
                      {org.urgent && (
                        <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white border-0 shadow-lg">
                          <Zap className="w-3 h-3 mr-1" />
                          Urgent
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center text-sm text-muted-foreground space-x-4 mt-4">
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
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {org.description}
                    </p>

                    {/* Impact and Time Commitment */}
                    <div className="grid grid-cols-1 gap-3 mb-4">
                      <div className="bg-muted/50 rounded-lg p-3">
                        <div className="flex items-center text-sm">
                          <Target className="w-4 h-4 mr-2 text-muted-foreground" />
                          <span className="font-semibold text-card-foreground">Impact: </span>
                          <span className="text-muted-foreground ml-1">{org.impact}</span>
                        </div>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-3">
                        <div className="flex items-center text-sm">
                          <Clock className="w-4 h-4 mr-2 text-muted-foreground" />
                          <span className="font-semibold text-card-foreground">Time: </span>
                          <span className="text-muted-foreground ml-1">{org.timeCommitment}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <p className="text-sm font-semibold text-card-foreground mb-2">Skills Needed:</p>
                      <div className="flex flex-wrap gap-2">
                        {org.needs.map((skill) => (
                          <Badge 
                            key={skill} 
                            variant="secondary" 
                            className="text-xs bg-accent/50 text-accent-foreground hover:bg-accent transition-all duration-200 border border-accent/20"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <div className="flex-1">
                        <Button 
                        onClick={() => navigate("/volunteer/pages/PostDetail")}
                          className="w-full text-white transition-all duration-200 hover:shadow-lg group"
                          style={{ background: getTypeColor(org.type) }}
                        >
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                      <Button 
                        variant="outline"
                        size="icon"
                        className="border-border hover:bg-muted hover:border-muted-foreground transition-colors"
                      >
                        <Heart className="w-4 h-4 text-muted-foreground" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        {/* Load More Button */}
        {visibleCount < filteredOrganizations.length && (
          <div className="text-center mt-12 animate-fade-in">
            <Button 
              onClick={loadMore}
              variant="outline" 
              size="lg" 
              className="border-2 border-border text-foreground hover:bg-muted hover:border-muted-foreground transition-all duration-200"
            >
              Load More Organizations
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <p className="text-sm text-muted-foreground mt-2">
              Showing {visibleCount} of {filteredOrganizations.length} organizations
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewAllPosts;