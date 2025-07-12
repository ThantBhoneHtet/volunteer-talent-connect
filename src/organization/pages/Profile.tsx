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
            <Tabs defaultValue="general">
              <CardHeader>
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="general">General</TabsTrigger>
                  <TabsTrigger value="notifications">Notifications</TabsTrigger>
                  <TabsTrigger value="privacy">Privacy</TabsTrigger>
                  <TabsTrigger value="billing">Billing</TabsTrigger>
                </TabsList>
              </CardHeader>

              <CardContent>
                <TabsContent value="general" className="space-y-6">
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
                </TabsContent>

                <TabsContent value="notifications" className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">New Applications</h4>
                        <p className="text-sm text-muted-foreground">Get notified when volunteers apply</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Messages</h4>
                        <p className="text-sm text-muted-foreground">Receive message notifications</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Deadline Reminders</h4>
                        <p className="text-sm text-muted-foreground">Get reminded about approaching deadlines</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Weekly Reports</h4>
                        <p className="text-sm text-muted-foreground">Receive weekly activity summaries</p>
                      </div>
                      <Switch />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Marketing Updates</h4>
                        <p className="text-sm text-muted-foreground">Product updates and tips</p>
                      </div>
                      <Switch />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="privacy" className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Public Profile</h4>
                        <p className="text-sm text-muted-foreground">Make your organization visible to volunteers</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Show Contact Info</h4>
                        <p className="text-sm text-muted-foreground">Display email and phone to applicants</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Analytics</h4>
                        <p className="text-sm text-muted-foreground">Help improve our service with usage data</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Data Export</Label>
                      <div className="flex gap-2">
                        <Button variant="outline" className="gap-2">
                          <Eye className="w-4 h-4" />
                          Download My Data
                        </Button>
                        <Button variant="outline" className="gap-2">
                          <Shield className="w-4 h-4" />
                          Delete Account
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="billing" className="space-y-6">
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg bg-accent/50">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Premium Plan</h4>
                          <p className="text-sm text-muted-foreground">Unlimited posts and premium features</p>
                        </div>
                        <Badge>Active</Badge>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-2xl font-bold">$29.99/month</span>
                        <Button variant="outline">Manage Plan</Button>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Payment Method</Label>
                      <div className="flex items-center gap-3 p-3 border rounded-lg">
                        <div className="w-8 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded"></div>
                        <span className="flex-1">•••• •••• •••• 4242</span>
                        <Button variant="ghost" size="sm">
                          <Edit3 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Billing Address</Label>
                      <div className="text-sm text-muted-foreground">
                        123 Nonprofit Way<br />
                        San Francisco, CA 94105<br />
                        United States
                      </div>
                      <Button variant="outline" size="sm" className="gap-2">
                        <Edit3 className="w-4 h-4" />
                        Update Address
                      </Button>
                    </div>
                  </div>
                </TabsContent>

                <div className="flex justify-end pt-6 border-t">
                  <Button onClick={handleSave} className="gap-2">
                    <Save className="w-4 h-4" />
                    Save Changes
                  </Button>
                </div>
              </CardContent>
            </Tabs>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;