
import React, { useState } from 'react';
import { Send, Paperclip, Image, Hash, AlertTriangle, HelpCircle, MessageSquare, CheckSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const AdminTeam = () => {
  const [messageText, setMessageText] = useState('');
  const [selectedTag, setSelectedTag] = useState('general');

  const messages = [
    {
      id: 1,
      sender: 'Admin',
      senderRole: 'System Administrator',
      content: 'Welcome to the global volunteer chat! Please keep discussions professional and helpful.',
      time: '9:00 AM',
      isAdmin: true,
      tag: 'general',
      isVerified: false
    },
    {
      id: 2,
      sender: 'Sarah Johnson',
      senderRole: 'Volunteer',
      content: 'Has anyone else experienced issues with the task scheduling system?',
      time: '10:15 AM',
      isAdmin: false,
      tag: 'issue',
      isVerified: false
    },
    {
      id: 3,
      sender: 'Mike Admin',
      senderRole: 'Technical Administrator',
      content: 'We\'re aware of the scheduling issue and are working on a fix. Expected resolution by end of day.',
      time: '10:18 AM',
      isAdmin: true,
      tag: 'issue',
      isVerified: true
    },
    {
      id: 4,
      sender: 'Emma Williams',
      senderRole: 'Volunteer',
      content: 'Can someone help me understand how to update my profile picture?',
      time: '10:20 AM',
      isAdmin: false,
      tag: 'help',
      isVerified: false
    },
    {
      id: 5,
      sender: 'Lisa Coordinator',
      senderRole: 'Program Coordinator',
      content: 'Go to Settings > Profile and click on your avatar to upload a new image.',
      time: '10:25 AM',
      isAdmin: true,
      tag: 'help',
      isVerified: true
    },
    {
      id: 6,
      sender: 'John Volunteer',
      senderRole: 'Volunteer',
      content: 'I want to report an inappropriate behavior in the community garden project.',
      time: '11:00 AM',
      isAdmin: false,
      tag: 'report',
      isVerified: false
    }
  ];

  const getTagIcon = (tag: string) => {
    switch (tag) {
      case 'issue':
        return AlertTriangle;
      case 'help':
        return HelpCircle;
      case 'report':
        return MessageSquare;
      default:
        return Hash;
    }
  };

  const getTagColor = (tag: string) => {
    switch (tag) {
      case 'issue':
        return 'bg-red-100 text-red-800';
      case 'help':
        return 'bg-blue-100 text-blue-800';
      case 'report':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Global Volunteer Chat</h2>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span>138 users online</span>
        </div>
      </div>

      <div className="h-[600px] flex flex-col">
        <Card className="flex-1 flex flex-col">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Community Discussion
            </CardTitle>
            <p className="text-sm text-gray-600">
              Use tags to categorize your messages: General, Issue, Help, or Report
            </p>
          </CardHeader>
          
          <CardContent className="flex-1 flex flex-col">
            <div className="flex-1 overflow-y-auto space-y-4 mb-4 max-h-96">
              {messages.map((message) => {
                const TagIcon = getTagIcon(message.tag);
                return (
                  <div
                    key={message.id}
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>{message.sender.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-sm">{message.sender}</span>
                        <Badge 
                          variant="outline" 
                          className={message.isAdmin ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-600'}
                        >
                          {message.senderRole}
                        </Badge>
                        <Badge 
                          variant="outline" 
                          className={`${getTagColor(message.tag)} flex items-center gap-1`}
                        >
                          <TagIcon className="h-3 w-3" />
                          {message.tag}
                        </Badge>
                        {message.isVerified && (
                          <Badge variant="outline" className="bg-green-100 text-green-800 flex items-center gap-1">
                            <CheckSquare className="h-3 w-3" />
                            Verified
                          </Badge>
                        )}
                        <span className="text-xs text-gray-500">{message.time}</span>
                      </div>
                      <p className="text-sm text-gray-700">{message.content}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="space-y-3 pt-3 border-t">
              <div className="flex items-center gap-2">
                <Select value={selectedTag} onValueChange={setSelectedTag}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General</SelectItem>
                    <SelectItem value="issue">Issue</SelectItem>
                    <SelectItem value="help">Help</SelectItem>
                    <SelectItem value="report">Report</SelectItem>
                  </SelectContent>
                </Select>
                <span className="text-sm text-gray-500">Choose message type</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="icon">
                  <Paperclip className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Image className="h-4 w-4" />
                </Button>
                <Input
                  placeholder="Type your message..."
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  className="flex-1"
                />
                <Button size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminTeam;
