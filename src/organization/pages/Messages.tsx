import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Badge } from "@/shared/components/ui/badge";
import { Avatar, AvatarFallback } from "@/shared/components/ui/avatar";
import { ScrollArea } from "@/shared/components/ui/scroll-area";
import { 
  Search, 
  Send, 
  Phone, 
  Video, 
  MoreHorizontal, 
  Paperclip,
  Smile,
  MessageSquare,
  Users,
  Star
} from "lucide-react";

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState(1);
  const [newMessage, setNewMessage] = useState("");

  const conversations = [
    {
      id: 1,
      name: "Sarah Johnson",
      lastMessage: "Thank you for considering my application!",
      time: "2m ago",
      unread: 2,
      online: true,
      project: "Website Development",
      avatar: "SJ"
    },
    {
      id: 2,
      name: "Mike Chen",
      lastMessage: "I have some questions about the timeline",
      time: "15m ago",
      unread: 0,
      online: true,
      project: "Graphic Design",
      avatar: "MC"
    },
    {
      id: 3,
      name: "Emma Davis",
      lastMessage: "Perfect! I'll start working on it tomorrow",
      time: "1h ago",
      unread: 1,
      online: false,
      project: "Content Writing",
      avatar: "ED"
    },
    {
      id: 4,
      name: "Alex Rodriguez",
      lastMessage: "Could we schedule a quick call?",
      time: "3h ago",
      unread: 0,
      online: false,
      project: "Social Media",
      avatar: "AR"
    },
    {
      id: 5,
      name: "John Smith",
      lastMessage: "I've uploaded the initial drafts",
      time: "1d ago",
      unread: 0,
      online: false,
      project: "Photography",
      avatar: "JS"
    }
  ];

  const messages = [
    {
      id: 1,
      sender: "Sarah Johnson",
      message: "Hi! I'm very interested in the Website Development project you posted.",
      time: "10:30 AM",
      isOwn: false
    },
    {
      id: 2,
      sender: "You",
      message: "Hello Sarah! Thanks for your interest. I've reviewed your profile and it looks great.",
      time: "10:35 AM",
      isOwn: true
    },
    {
      id: 3,
      sender: "Sarah Johnson",
      message: "Thank you! I have 5 years of experience with React and Node.js. Could you tell me more about the project scope?",
      time: "10:37 AM",
      isOwn: false
    },
    {
      id: 4,
      sender: "You",
      message: "Certainly! We need a responsive website for our local animal shelter. It should include donation functionality, volunteer registration, and an admin panel.",
      time: "10:40 AM",
      isOwn: true
    },
    {
      id: 5,
      sender: "Sarah Johnson",
      message: "That sounds perfect for my skill set. I've built similar platforms before. When would you like to start?",
      time: "10:42 AM",
      isOwn: false
    },
    {
      id: 6,
      sender: "You",
      message: "Great! We're hoping to start next week. Are you available for a quick video call to discuss the details?",
      time: "10:45 AM",
      isOwn: true
    },
    {
      id: 7,
      sender: "Sarah Johnson",
      message: "Absolutely! I'm available tomorrow afternoon or Friday morning. What works best for you?",
      time: "10:47 AM",
      isOwn: false
    },
    {
      id: 8,
      sender: "Sarah Johnson",
      message: "Thank you for considering my application!",
      time: "10:48 AM",
      isOwn: false
    }
  ];

  const selectedConversation = conversations.find(c => c.id === selectedChat);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      // Add message logic here
      setNewMessage("");
    }
  };

  return (
    <div className="p-6 h-[calc(100vh-4rem)] animate-fade-in">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground mb-2 animate-slide-up">
          Messages
        </h1>
        <p className="text-muted-foreground animate-slide-up" style={{ animationDelay: "0.1s" }}>
          Chat with volunteers about your projects.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100%-120px)]">
        {/* Conversations List */}
        <Card className="card-gradient animate-scale-in">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Conversations
              </span>
              <Badge variant="secondary">
                {conversations.filter(c => c.unread > 0).length} new
              </Badge>
            </CardTitle>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input placeholder="Search conversations..." className="pl-10" />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-[calc(100vh-300px)]">
              <div className="space-y-2 p-4">
                {conversations.map((conversation, index) => (
                  <div
                    key={conversation.id}
                    className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all hover:bg-accent/50 animate-fade-in ${
                      selectedChat === conversation.id ? 'bg-accent border border-primary/20' : ''
                    }`}
                    style={{ animationDelay: `${0.2 + index * 0.05}s` }}
                    onClick={() => setSelectedChat(conversation.id)}
                  >
                    <div className="relative">
                      <Avatar>
                        <AvatarFallback>{conversation.avatar}</AvatarFallback>
                      </Avatar>
                      {conversation.online && (
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-background rounded-full"></div>
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium truncate">{conversation.name}</h4>
                        <span className="text-xs text-muted-foreground">{conversation.time}</span>
                      </div>
                      <p className="text-sm text-muted-foreground truncate">
                        {conversation.lastMessage}
                      </p>
                      <Badge variant="outline" className="text-xs mt-1">
                        {conversation.project}
                      </Badge>
                    </div>
                    
                    {conversation.unread > 0 && (
                      <Badge variant="destructive" className="min-w-5 h-5 text-xs">
                        {conversation.unread}
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Chat Window */}
        <Card className="lg:col-span-2 card-gradient animate-scale-in" style={{ animationDelay: "0.1s" }}>
          {selectedConversation ? (
            <>
              {/* Chat Header */}
              <CardHeader className="border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Avatar>
                        <AvatarFallback>{selectedConversation.avatar}</AvatarFallback>
                      </Avatar>
                      {selectedConversation.online && (
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-background rounded-full"></div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold">{selectedConversation.name}</h3>
                      <div className="flex items-center gap-2">
                        <span className={`text-sm ${selectedConversation.online ? 'text-green-600' : 'text-muted-foreground'}`}>
                          {selectedConversation.online ? 'Online' : 'Offline'}
                        </span>
                        <Badge variant="outline" className="text-xs">
                          {selectedConversation.project}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon">
                      <Phone className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Video className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Star className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              {/* Messages */}
              <CardContent className="p-0 flex flex-col h-[calc(100vh-400px)]">
                <ScrollArea className="flex-1 p-4">
                  <div className="space-y-4">
                    {messages.map((message, index) => (
                      <div
                        key={message.id}
                        className={`flex animate-fade-in ${
                          message.isOwn ? 'justify-end' : 'justify-start'
                        }`}
                        style={{ animationDelay: `${0.3 + index * 0.05}s` }}
                      >
                        <div
                          className={`max-w-[70%] p-3 rounded-lg ${
                            message.isOwn
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-accent'
                          }`}
                        >
                          <p className="text-sm">{message.message}</p>
                          <span className="text-xs opacity-70 mt-1 block">
                            {message.time}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>

                {/* Message Input */}
                <div className="border-t p-4">
                  <form onSubmit={handleSendMessage} className="flex items-center gap-2">
                    <Button type="button" variant="ghost" size="icon">
                      <Paperclip className="w-4 h-4" />
                    </Button>
                    <div className="flex-1 relative">
                      <Input
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type your message..."
                        className="pr-10"
                      />
                      <Button type="button" variant="ghost" size="icon" className="absolute right-2 top-1/2 transform -translate-y-1/2">
                        <Smile className="w-4 h-4" />
                      </Button>
                    </div>
                    <Button type="submit" disabled={!newMessage.trim()}>
                      <Send className="w-4 h-4" />
                    </Button>
                  </form>
                </div>
              </CardContent>
            </>
          ) : (
            <CardContent className="flex items-center justify-center h-full">
              <div className="text-center">
                <MessageSquare className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Select a conversation</h3>
                <p className="text-muted-foreground">
                  Choose a conversation from the list to start messaging
                </p>
              </div>
            </CardContent>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Messages;