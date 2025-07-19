import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Badge } from "@/shared/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/components/ui/tabs";
import { 
  Bell, 
  User, 
  FileText, 
  MessageSquare, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Settings,
  MoreHorizontal,
  Trash2,
  Eye
} from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/components/ui/popover";

const Notifications = () => {
  const [activeTab, setActiveTab] = useState("all");

  const notifications = [
    {
      id: 1,
      type: "application",
      title: "New volunteer application",
      message: "Sarah Johnson applied for Website Development project",
      time: "2 minutes ago",
      read: false,
      icon: User,
      color: "text-blue-500"
    },
    {
      id: 2,
      type: "message",
      title: "New message received",
      message: "Mike Chen sent you a message about the design project",
      time: "15 minutes ago",
      read: false,
      icon: MessageSquare,
      color: "text-green-500"
    },
    {
      id: 3,
      type: "completed",
      title: "Task completed",
      message: "Graphics Design project has been marked as completed",
      time: "2 hours ago",
      read: true,
      icon: CheckCircle,
      color: "text-green-600"
    },
    {
      id: 4,
      type: "application",
      title: "Application withdrawn",
      message: "Alex Rodriguez withdrew their application for Content Writing",
      time: "3 hours ago",
      read: false,
      icon: AlertCircle,
      color: "text-red-500"
    },
    {
      id: 5,
      type: "post",
      title: "Post updated",
      message: "Your Social Media Management post has been published",
      time: "5 hours ago",
      read: true,
      icon: FileText,
      color: "text-purple-500"
    },
    {
      id: 6,
      type: "message",
      title: "New message received",
      message: "Emma Davis asked a question about project requirements",
      time: "1 day ago",
      read: true,
      icon: MessageSquare,
      color: "text-green-500"
    },
    {
      id: 7,
      type: "application",
      title: "New volunteer application",
      message: "John Smith applied for Photography project",
      time: "2 days ago",
      read: true,
      icon: User,
      color: "text-blue-500"
    }
  ];

  const getFilteredNotifications = (filter: string) => {
    if (filter === "all") return notifications;
    if (filter === "unread") return notifications.filter(n => !n.read);
    return notifications.filter(n => n.type === filter);
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="p-6 animate-fade-in">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2 animate-slide-up">
              Notifications
            </h1>
            <p className="text-muted-foreground animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Stay updated with volunteer activities and messages.
            </p>
          </div>
          <Button variant="outline" className="gap-2 animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <Settings className="w-4 h-4" />
            Settings
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card className="card-gradient hover:shadow-lg transition-shadow">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total</p>
                <p className="text-2xl font-bold">{notifications.length}</p>
              </div>
              <Bell className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="card-gradient hover:shadow-lg transition-shadow" style={{ animationDelay: "0.1s" }}>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Unread</p>
                <p className="text-2xl font-bold text-red-600">{unreadCount}</p>
              </div>
              <AlertCircle className="w-8 h-8 text-red-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="card-gradient hover:shadow-lg transition-shadow" style={{ animationDelay: "0.2s" }}>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Applications</p>
                <p className="text-2xl font-bold text-green-600">
                  {notifications.filter(n => n.type === "application").length}
                </p>
              </div>
              <User className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="card-gradient hover:shadow-lg transition-shadow" style={{ animationDelay: "0.3s" }}>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Messages</p>
                <p className="text-2xl font-bold text-purple-600">
                  {notifications.filter(n => n.type === "message").length}
                </p>
              </div>
              <MessageSquare className="w-8 h-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Notifications */}
      <Card className="card-gradient animate-slide-up" style={{ animationDelay: "0.4s" }}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="w-5 h-5" />
            Recent Activity
            {unreadCount > 0 && (
              <Badge variant="destructive" className="ml-2">
                {unreadCount} new
              </Badge>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="unread">Unread</TabsTrigger>
              <TabsTrigger value="application">Applications</TabsTrigger>
              <TabsTrigger value="message">Messages</TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab} className="mt-6">
              <div className="space-y-4">
                {getFilteredNotifications(activeTab).map((notification, index) => (
                  <div 
                    key={notification.id}
                    className={`flex items-start gap-4 p-4 border rounded-lg hover:bg-accent/50 transition-all cursor-pointer animate-fade-in ${
                      !notification.read ? 'bg-accent/30 border-primary/20' : ''
                    }`}
                    style={{ animationDelay: `${0.5 + index * 0.05}s` }}
                  >
                    <div className={`p-2 rounded-lg bg-accent ${notification.color}`}>
                      <notification.icon className="w-5 h-5" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className={`font-medium ${!notification.read ? 'text-foreground' : 'text-muted-foreground'}`}>
                            {notification.title}
                          </h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            {notification.message}
                          </p>
                        </div>
                        
                        <div className="flex items-center gap-2 ml-4">
                          <span className="text-xs text-muted-foreground whitespace-nowrap">
                            {notification.time}
                          </span>
                          {!notification.read && (
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                          )}
                          
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <MoreHorizontal className="w-4 h-4" />
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-40">
                              <div className="space-y-2">
                                <Button variant="ghost" size="sm" className="w-full justify-start gap-2">
                                  <Eye className="w-4 h-4" />
                                  Mark as read
                                </Button>
                                <Button variant="ghost" size="sm" className="w-full justify-start gap-2 text-destructive">
                                  <Trash2 className="w-4 h-4" />
                                  Delete
                                </Button>
                              </div>
                            </PopoverContent>
                          </Popover>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Notifications;