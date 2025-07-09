
import React, { useState } from 'react';
import { Send, Paperclip, Users, AlertTriangle, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';

const AdminTeam = () => {
  const [messageText, setMessageText] = useState('');
  const [activeTab, setActiveTab] = useState('chat');

  const messages = [
    {
      id: 1,
      sender: 'Admin',
      senderRole: 'System Administrator',
      content: 'Welcome to the global volunteer chat! Please keep discussions professional and helpful.',
      time: '9:00 AM',
      isAdmin: true,
      isPinned: true
    },
    {
      id: 2,
      sender: 'Sarah Johnson',
      senderRole: 'Volunteer',
      content: 'Has anyone else experienced issues with the task scheduling system?',
      time: '10:15 AM',
      isAdmin: false
    },
    {
      id: 3,
      sender: 'Mike Admin',
      senderRole: 'Technical Administrator',
      content: 'We\'re aware of the scheduling issue and are working on a fix. Expected resolution by end of day.',
      time: '10:18 AM',
      isAdmin: true
    },
    {
      id: 4,
      sender: 'Emma Williams',
      senderRole: 'Volunteer',
      content: 'Thank you for the quick response! Is there a backup way to sign up for events?',
      time: '10:20 AM',
      isAdmin: false
    },
    {
      id: 5,
      sender: 'Lisa Coordinator',
      senderRole: 'Program Coordinator',
      content: 'Yes, you can email us directly at volunteer@skillbridge.com for now.',
      time: '10:25 AM',
      isAdmin: true
    }
  ];

  const reports = [
    {
      id: 1,
      type: 'Technical Issue',
      title: 'Calendar sync not working',
      reporter: 'John Doe',
      priority: 'high',
      status: 'in-progress',
      time: '2 hours ago'
    },
    {
      id: 2,
      type: 'Content Report',
      title: 'Inappropriate message in team chat',
      reporter: 'Jane Smith',
      priority: 'medium',
      status: 'resolved',
      time: '1 day ago'
    },
    {
      id: 3,
      type: 'Feature Request',
      title: 'Add dark mode to dashboard',
      reporter: 'Alex Johnson',
      priority: 'low',
      status: 'pending',
      time: '3 days ago'
    }
  ];

  const onlineUsers = [
    { name: 'Mike Admin', role: 'Admin', count: 3 },
    { name: 'Active Volunteers', role: 'Volunteer', count: 127 },
    { name: 'Program Coordinators', role: 'Coordinator', count: 8 }
  ];

  const getPriorityColor = (priority: string) => {
    const colors = {
      high: 'bg-red-100 text-red-800',
      medium: 'bg-yellow-100 text-yellow-800',
      low: 'bg-green-100 text-green-800'
    };
    return colors[priority as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getStatusColor = (status: string) => {
    const colors = {
      'pending': 'bg-gray-100 text-gray-800',
      'in-progress': 'bg-blue-100 text-blue-800',
      'resolved': 'bg-green-100 text-green-800'
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Admin Team</h2>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span>138 users online</span>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-2 border-b">
        {[
          { key: 'chat', label: 'Global Chat', icon: MessageSquare },
          { key: 'reports', label: 'Reports & Issues', icon: AlertTriangle },
          { key: 'users', label: 'Online Users', icon: Users }
        ].map((tab) => {
          const IconComponent = tab.icon;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-2 px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab.key
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <IconComponent className="h-4 w-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Global Chat */}
      {activeTab === 'chat' && (
        <div className="h-[600px] flex flex-col">
          <Card className="flex-1 flex flex-col">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Global Volunteer Chat
              </CardTitle>
            </CardHeader>
            
            <CardContent className="flex-1 flex flex-col">
              <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex items-start space-x-3 ${message.isPinned ? 'bg-blue-50 p-3 rounded-lg' : ''}`}
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
                        <span className="text-xs text-gray-500">{message.time}</span>
                        {message.isPinned && (
                          <Badge variant="outline" className="bg-blue-100 text-blue-800">
                            Pinned
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-700">{message.content}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center space-x-2 pt-3 border-t">
                <Button variant="ghost" size="icon">
                  <Paperclip className="h-4 w-4" />
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
            </CardContent>
          </Card>
        </div>
      )}

      {/* Reports & Issues */}
      {activeTab === 'reports' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Recent Reports & Issues</h3>
            <Button>
              <AlertTriangle className="h-4 w-4 mr-2" />
              Report Issue
            </Button>
          </div>
          
          {reports.map((report) => (
            <Card key={report.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-medium text-gray-900">{report.title}</h4>
                      <Badge variant="outline">{report.type}</Badge>
                      <Badge className={getPriorityColor(report.priority)}>
                        {report.priority}
                      </Badge>
                      <Badge className={getStatusColor(report.status)}>
                        {report.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>Reported by: {report.reporter}</span>
                      <span>{report.time}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Online Users */}
      {activeTab === 'users' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {onlineUsers.map((userGroup, index) => (
            <Card key={index}>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{userGroup.name}</h3>
                <p className="text-2xl font-bold text-blue-600 mb-2">{userGroup.count}</p>
                <p className="text-sm text-gray-500">Online now</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminTeam;
