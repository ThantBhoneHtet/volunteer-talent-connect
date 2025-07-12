import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Badge } from "@/shared/components/ui/badge";
import { 
  Users, 
  FileText, 
  Clock, 
  CheckCircle, 
  TrendingUp,
  Calendar,
  MessageSquare,
  Plus
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    { title: "Active Requests", value: "12", icon: FileText, change: "+3", color: "text-blue-600" },
    { title: "Total Volunteers", value: "147", icon: Users, change: "+12", color: "text-green-600" },
    { title: "Pending Reviews", value: "8", icon: Clock, change: "-2", color: "text-orange-600" },
    { title: "Completed Tasks", value: "34", icon: CheckCircle, change: "+5", color: "text-purple-600" },
  ];

  const recentRequests = [
    { id: 1, title: "Website Development", volunteers: 5, status: "Active", urgency: "High" },
    { id: 2, title: "Graphic Design", volunteers: 3, status: "Review", urgency: "Medium" },
    { id: 3, title: "Content Writing", volunteers: 8, status: "Active", urgency: "Low" },
    { id: 4, title: "Social Media Management", volunteers: 2, status: "Draft", urgency: "High" },
  ];

  return (
    <div className="p-6 animate-fade-in">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2 animate-slide-up">
          Welcome back, HelpingHands Org! 👋
        </h1>
        <p className="text-muted-foreground animate-slide-up" style={{ animationDelay: "0.1s" }}>
          Here's what's happening with your volunteer requests today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card 
            key={stat.title} 
            className="card-gradient hover-lift animate-scale-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <h3 className="text-2xl font-bold">{stat.value}</h3>
                    <span className={`text-sm font-medium ${stat.color} flex items-center gap-1`}>
                      <TrendingUp className="w-3 h-3" />
                      {stat.change}
                    </span>
                  </div>
                </div>
                <div className={`p-3 rounded-lg bg-accent ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Requests */}
        <Card className="lg:col-span-2 card-gradient animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-semibold">Recent Requests</CardTitle>
            <Button size="sm" className="gap-2">
              <Plus className="w-4 h-4" />
              New Request
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentRequests.map((request) => (
                <div 
                  key={request.id} 
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <div className="flex-1">
                    <h4 className="font-medium">{request.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {request.volunteers} volunteers applied
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge 
                      variant={request.urgency === 'High' ? 'destructive' : 
                              request.urgency === 'Medium' ? 'default' : 'secondary'}
                    >
                      {request.urgency}
                    </Badge>
                    <Badge 
                      variant={request.status === 'Active' ? 'default' : 'outline'}
                    >
                      {request.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="card-gradient animate-slide-up" style={{ animationDelay: "0.5s" }}>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full justify-start gap-3" variant="outline">
              <Plus className="w-4 h-4" />
              Post New Request
            </Button>
            <Button className="w-full justify-start gap-3" variant="outline">
              <MessageSquare className="w-4 h-4" />
              Message Volunteers
            </Button>
            <Button className="w-full justify-start gap-3" variant="outline">
              <Calendar className="w-4 h-4" />
              Schedule Interview
            </Button>
            <Button className="w-full justify-start gap-3" variant="outline">
              <FileText className="w-4 h-4" />
              Generate Report
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;