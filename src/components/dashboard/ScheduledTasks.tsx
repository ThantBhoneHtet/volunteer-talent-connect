
import React, { useState } from 'react';
import { Calendar, Clock, Search, Filter, MapPin, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Badge } from '@/components/ui/badge';

const ScheduledTasks = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [searchQuery, setSearchQuery] = useState('');

  const upcomingTasks = [
    {
      id: 1,
      title: 'Tree Planting Initiative',
      organization: 'Green Earth Alliance',
      date: '2024-01-15',
      time: '10:00 AM',
      location: 'Central Park',
      participants: 24,
      status: 'confirmed'
    },
    {
      id: 2,
      title: 'Food Bank Distribution',
      organization: 'Community Food Network',
      date: '2024-01-18',
      time: '2:00 PM',
      location: 'Downtown Center',
      participants: 15,
      status: 'pending'
    },
    {
      id: 3,
      title: 'Beach Cleanup Drive',
      organization: 'Ocean Conservation',
      date: '2024-01-22',
      time: '8:00 AM',
      location: 'Sunset Beach',
      participants: 32,
      status: 'confirmed'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Scheduled Tasks</h2>
        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search tasks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-64"
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Upcoming Tasks</h3>
          <div className="space-y-3">
            {upcomingTasks.map((task) => (
              <Card key={task.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-medium text-gray-900">{task.title}</h4>
                        <Badge variant={task.status === 'confirmed' ? 'default' : 'secondary'}>
                          {task.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{task.organization}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {task.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {task.time}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {task.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {task.participants} participants
                        </div>
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
        </div>

        <div>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold text-gray-900 mb-4">Calendar</h3>
              <CalendarComponent
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-md border-0"
              />
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-sm font-medium text-blue-900">Today's Tasks</p>
                <p className="text-sm text-blue-700">Tree Planting Initiative +1 more</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ScheduledTasks;
