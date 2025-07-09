
import React, { useState } from 'react';
import { Bell, CheckCircle, AlertCircle, Info, Users, Calendar, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Notifications = () => {
  const [filter, setFilter] = useState('all');

  const notifications = [
    {
      id: 1,
      type: 'system',
      icon: Calendar,
      title: 'Upcoming Event Reminder',
      message: 'Tree Planting Initiative starts in 2 hours at Central Park',
      time: '2 hours ago',
      read: false,
      priority: 'high'
    },
    {
      id: 2,
      type: 'organization',
      icon: Info,
      title: 'Green Earth Alliance',
      message: 'Thank you for your participation! Event photos are now available.',
      time: '5 hours ago',
      read: false,
      priority: 'normal'
    },
    {
      id: 3,
      type: 'system',
      icon: AlertCircle,
      title: 'Schedule Change',
      message: 'Food Bank Distribution has been rescheduled to 3:00 PM',
      time: '1 day ago',
      read: true,
      priority: 'high'
    },
    {
      id: 4,
      type: 'recommendation',
      icon: Star,
      title: 'New Recommendation',
      message: 'Based on your interests, we found a new Community Garden project',
      time: '2 days ago',
      read: true,
      priority: 'normal'
    },
    {
      id: 5,
      type: 'team',
      icon: Users,
      title: 'Team Update',
      message: 'Sarah Johnson invited you to join the Environmental Action Team',
      time: '3 days ago',
      read: false,
      priority: 'normal'
    },
    {
      id: 6,
      type: 'system',
      icon: CheckCircle,
      title: 'Volunteer Hours Updated',
      message: 'Your volunteer hours have been updated. You now have 127 total hours!',
      time: '1 week ago',
      read: true,
      priority: 'low'
    }
  ];

  const getTypeColor = (type: string) => {
    const colors = {
      system: 'bg-blue-100 text-blue-800',
      organization: 'bg-green-100 text-green-800',
      recommendation: 'bg-yellow-100 text-yellow-800',
      team: 'bg-purple-100 text-purple-800'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getPriorityColor = (priority: string) => {
    const colors = {
      high: 'border-l-red-500',
      normal: 'border-l-blue-500',
      low: 'border-l-gray-300'
    };
    return colors[priority as keyof typeof colors] || 'border-l-gray-300';
  };

  const filteredNotifications = filter === 'all' 
    ? notifications 
    : notifications.filter(n => n.type === filter);

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-bold text-gray-900">Notifications</h2>
          {unreadCount > 0 && (
            <Badge variant="destructive">{unreadCount} unread</Badge>
          )}
        </div>
        <Button variant="outline" size="sm">
          Mark all as read
        </Button>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 border-b">
        {[
          { key: 'all', label: 'All' },
          { key: 'system', label: 'System' },
          { key: 'organization', label: 'Organizations' },
          { key: 'recommendation', label: 'Recommendations' },
          { key: 'team', label: 'Teams' }
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setFilter(tab.key)}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
              filter === tab.key
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Notifications List */}
      <div className="space-y-3">
        {filteredNotifications.map((notification) => {
          const IconComponent = notification.icon;
          return (
            <Card 
              key={notification.id} 
              className={`hover:shadow-md transition-shadow border-l-4 ${getPriorityColor(notification.priority)} ${
                !notification.read ? 'bg-blue-50/50' : ''
              }`}
            >
              <CardContent className="p-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className={`p-2 rounded-full ${
                      notification.priority === 'high' ? 'bg-red-100' : 'bg-gray-100'
                    }`}>
                      <IconComponent className={`h-5 w-5 ${
                        notification.priority === 'high' ? 'text-red-600' : 'text-gray-600'
                      }`} />
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium text-gray-900">{notification.title}</h3>
                        <Badge variant="outline" className={getTypeColor(notification.type)}>
                          {notification.type}
                        </Badge>
                        {!notification.read && (
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        )}
                      </div>
                      <span className="text-sm text-gray-500">{notification.time}</span>
                    </div>
                    <p className="text-sm text-gray-600">{notification.message}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filteredNotifications.length === 0 && (
        <div className="text-center py-12">
          <Bell className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500">No notifications found</p>
        </div>
      )}
    </div>
  );
};

export default Notifications;
