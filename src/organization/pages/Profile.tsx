import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { Textarea } from "@/shared/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select";
import { Switch } from "@/shared/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/components/ui/tabs";
import { Badge } from "@/shared/components/ui/badge";
import { Avatar, AvatarFallback } from "@/shared/components/ui/avatar";
import { useToast } from "@/shared/hooks/use-toast";
import { 
  User, 
  Building, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Bell, 
  Shield, 
  Eye,
  Save,
  Upload,
  Edit3,
  Star,
  Award,
  Users
} from "lucide-react";

const Profile = () => {
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Profile updated successfully!",
      description: "Your changes have been saved.",
    });
  };

  const organizationStats = [
    { label: "Total Requests", value: "47", icon: Award },
    { label: "Active Volunteers", value: "142", icon: Users },
    { label: "Completed Projects", value: "38", icon: Star },
    { label: "Success Rate", value: "94%", icon: Shield }
  ];

  return (
    <div className="p-6 animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2 animate-slide-up">
          Profile Settings
        </h1>
        <p className="text-muted-foreground animate-slide-up" style={{ animationDelay: "0.1s" }}>
          Manage your organization profile and preferences.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Overview */}
        <Card className="card-gradient hover-lift animate-scale-in">
          <CardHeader className="text-center">
            <div className="relative mx-auto mb-4">
              <Avatar className="w-24 h-24">
                <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                  HH
                </AvatarFallback>
              </Avatar>
              <Button size="icon" className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full">
                <Upload className="w-4 h-4" />
              </Button>
            </div>
            <CardTitle>HelpingHands Organization</CardTitle>
            <p className="text-muted-foreground">Nonprofit Organization</p>
            <div className="flex justify-center gap-2 mt-4">
              <Badge variant="secondary">Verified</Badge>
              <Badge variant="outline">Premium</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <span>info@helpinghands.org</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Globe className="w-4 h-4 text-muted-foreground" />
                <span>helpinghands.org</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Settings */}
        <div className="lg:col-span-2 space-y-6">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {organizationStats.map((stat, index) => (
              <Card 
                key={stat.label} 
                className="card-gradient hover-lift animate-scale-in"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <CardContent className="p-4 text-center">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tabs */}
          <Card className="card-gradient animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="orgName">Organization Name</Label>
                      <Input id="orgName" defaultValue="HelpingHands Organization" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="orgType">Organization Type</Label>
                      <Select defaultValue="nonprofit">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="nonprofit">Nonprofit</SelectItem>
                          <SelectItem value="charity">Charity</SelectItem>
                          <SelectItem value="social">Social Enterprise</SelectItem>
                          <SelectItem value="government">Government</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea 
                      id="description"
                      placeholder="Tell volunteers about your organization..."
                      defaultValue="HelpingHands is a nonprofit organization dedicated to improving lives in our community through various volunteer programs and initiatives."
                      className="min-h-24"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="website">Website</Label>
                      <Input id="website" defaultValue="https://helpinghands.org" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="registration">Registration Number</Label>
                      <Input id="registration" defaultValue="501(c)(3) #12-3456789" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" defaultValue="San Francisco" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State</Label>
                      <Input id="state" defaultValue="California" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">Country</Label>
                      <Select defaultValue="us">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="us">United States</SelectItem>
                          <SelectItem value="ca">Canada</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                          <SelectItem value="au">Australia</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                <div className="flex justify-end pt-6 border-t">
                  <Button onClick={handleSave} className="gap-2">
                    <Save className="w-4 h-4" />
                    Save Changes
                  </Button>
                </div>
              </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;