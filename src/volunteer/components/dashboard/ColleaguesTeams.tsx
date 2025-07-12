
import React, { useState } from 'react';
import { Users, UserPlus, Mail, MessageCircle, Search } from 'lucide-react';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/components/ui/avatar';
import { Badge } from '@/shared/components/ui/badge';

const ColleaguesTeams = () => {
  const [activeTab, setActiveTab] = useState('colleagues');

  const colleagues = [
    {
      id: 1,
      name: 'Sarah Johnson',
      avatar: '',
      role: 'Environmental Volunteer',
      joinedProjects: 15,
      totalHours: 89,
      status: 'online'
    },
    {
      id: 2,
      name: 'Mike Chen',
      avatar: '',
      role: 'Community Outreach',
      joinedProjects: 23,
      totalHours: 156,
      status: 'offline'
    },
    {
      id: 3,
      name: 'Emma Williams',
      avatar: '',
      role: 'Youth Mentor',
      joinedProjects: 8,
      totalHours: 67,
      status: 'online'
    }
  ];

  const teams = [
    {
      id: 1,
      name: 'Environmental Action Team',
      members: 24,
      projects: 8,
      description: 'Focused on environmental conservation and sustainability projects',
      role: 'Member',
      joined: '2 months ago'
    },
    {
      id: 2,
      name: 'Community Builders',
      members: 18,
      projects: 12,
      description: 'Working on community development and social welfare initiatives',
      role: 'Team Leader',
      joined: '4 months ago'
    }
  ];

  const invitations = [
    {
      id: 1,
      organization: 'Green Earth Alliance',
      program: 'Urban Gardening Initiative',
      invitedBy: 'Sarah Johnson',
      message: 'We think you\'d be a great fit for our urban gardening project!',
      time: '2 days ago'
    },
    {
      id: 2,
      organization: 'Community Food Network',
      program: 'Weekend Food Distribution',
      invitedBy: 'Mike Chen',
      message: 'Join us in making a difference in our community food security.',
      time: '5 days ago'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Colleagues & Teams</h2>
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input placeholder="Search people..." className="pl-10 w-64" />
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-2 border-b">
        {[
          { key: 'colleagues', label: 'Colleagues' },
          { key: 'teams', label: 'Teams' },
          { key: 'invitations', label: 'Invitations' }
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
              activeTab === tab.key
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Colleagues Tab */}
      {activeTab === 'colleagues' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {colleagues.map((colleague) => (
            <Card key={colleague.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="relative">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={colleague.avatar} />
                      <AvatarFallback>{colleague.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                      colleague.status === 'online' ? 'bg-green-500' : 'bg-gray-300'
                    }`}></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{colleague.name}</h3>
                    <p className="text-sm text-gray-600">{colleague.role}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4 text-center">
                  <div>
                    <p className="text-lg font-semibold text-blue-600">{colleague.joinedProjects}</p>
                    <p className="text-xs text-gray-500">Projects</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-green-600">{colleague.totalHours}</p>
                    <p className="text-xs text-gray-500">Hours</p>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Message
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Mail className="h-4 w-4 mr-2" />
                    Email
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Teams Tab */}
      {activeTab === 'teams' && (
        <div className="space-y-4">
          {teams.map((team) => (
            <Card key={team.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{team.name}</h3>
                      <Badge variant={team.role === 'Team Leader' ? 'default' : 'secondary'}>
                        {team.role}
                      </Badge>
                    </div>
                    <p className="text-gray-600 mb-3">{team.description}</p>
                    <div className="flex items-center gap-6 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {team.members} members
                      </div>
                      <span>{team.projects} active projects</span>
                      <span>Joined {team.joined}</span>
                    </div>
                  </div>
                  <Button variant="outline">
                    View Team
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Invitations Tab */}
      {activeTab === 'invitations' && (
        <div className="space-y-4">
          {invitations.map((invitation) => (
            <Card key={invitation.id} className="hover:shadow-md transition-shadow border-l-4 border-l-blue-500">
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-gray-900">{invitation.program}</h3>
                      <Badge variant="outline" className="bg-blue-50 text-blue-700">
                        Invitation
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">From: {invitation.organization}</p>
                    <p className="text-sm text-gray-600 mb-2">Invited by: {invitation.invitedBy}</p>
                    <p className="text-sm text-gray-700 mb-3">{invitation.message}</p>
                    <span className="text-xs text-gray-500">{invitation.time}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Decline
                    </Button>
                    <Button size="sm">
                      Accept
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default ColleaguesTeams;
