
import React, { useState } from 'react';
import { Search, Filter, MoreHorizontal, Eye, Award, Ban, UserCheck } from 'lucide-react';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui/card';
import { Badge } from '@/shared/components/ui/badge';
import { Avatar, AvatarFallback } from '@/shared/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/shared/components/ui/dropdown-menu';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/components/ui/tabs';

const mockVolunteers = [
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice@example.com',
    skills: ['Web Development', 'UI/UX Design'],
    type: 'individual',
    status: 'verified',
    rating: 4.8,
    completedProjects: 15,
    joinDate: '2023-11-15',
    availability: 'weekends'
  },
  {
    id: 2,
    name: 'Bob Smith',
    email: 'bob@example.com',
    skills: ['Project Management', 'Marketing'],
    type: 'individual',
    status: 'pending',
    rating: 0,
    completedProjects: 0,
    joinDate: '2024-01-20',
    availability: 'evenings'
  },
  {
    id: 3,
    name: 'Carol Davis',
    email: 'carol@example.com',
    skills: ['Healthcare', 'Community Outreach'],
    type: 'individual',
    status: 'verified',
    rating: 4.9,
    completedProjects: 23,
    joinDate: '2023-09-10',
    availability: 'flexible'
  },
  {
    id: 3,
    name: 'Carol Davis',
    email: 'carol@example.com',
    skills: ['Healthcare', 'Community Outreach'],
    type: 'individual',
    status: 'verified',
    rating: 4.9,
    completedProjects: 23,
    joinDate: '2023-09-10',
    availability: 'flexible'
  },
  {
    id: 3,
    name: 'Carol Davis',
    email: 'carol@example.com',
    skills: ['Healthcare', 'Community Outreach'],
    type: 'individual',
    status: 'verified',
    rating: 4.9,
    completedProjects: 23,
    joinDate: '2023-09-10',
    availability: 'flexible'
  },
  {
    id: 3,
    name: 'Carol Davis',
    email: 'carol@example.com',
    skills: ['Healthcare', 'Community Outreach'],
    type: 'individual',
    status: 'verified',
    rating: 4.9,
    completedProjects: 23,
    joinDate: '2023-09-10',
    availability: 'flexible'
  },
];

const mockGroups = [
  {
    id: 1,
    name: 'Tech Volunteers Hub',
    members: 25,
    lead: 'Sarah Johnson',
    specialties: ['Software Development', 'IT Support'],
    status: 'active',
    projects: 8
  },
  {
    id: 2,
    name: 'Healthcare Heroes',
    members: 42,
    lead: 'Dr. Michael Chen',
    specialties: ['Medical Care', 'Health Education'],
    status: 'active',
    projects: 12
  },
];

export const VolunteerManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'verified': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-sm ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Volunteer Management</h1>
          <p className="text-gray-600 mt-2">Manage individual volunteers and volunteer groups</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className='hover:shadow-lg transition-shadow'>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-blue-600">1,234</div>
            <p className="text-sm text-gray-600">Total Volunteers</p>
          </CardContent>
        </Card>
        <Card className='hover:shadow-lg transition-shadow'>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-green-600">892</div>
            <p className="text-sm text-gray-600">Verified</p>
          </CardContent>
        </Card>
        <Card className='hover:shadow-lg transition-shadow'>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-yellow-600">45</div>
            <p className="text-sm text-gray-600">Pending Approval</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Individual Volunteers</CardTitle>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search volunteers..."
                  className="pl-10 w-64"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full table-fixed">
              <thead className="block w-full">
                <tr className="border-b border-gray-200 flex w-full">
                  <th className="py-3 px-4 w-[16%] text-left font-medium text-gray-700">Volunteer</th>
                  <th className="py-3 px-4 w-[16%] text-left font-medium text-gray-700">Skills</th>
                  <th className="py-3 px-4 w-[12%] text-left font-medium text-gray-700">Status</th>
                  <th className="py-3 px-4 w-[14%] text-left font-medium text-gray-700">Rating</th>
                  <th className="py-3 px-4 w-[12%] text-left font-medium text-gray-700">Projects</th>
                  <th className="py-3 px-4 w-[14%] text-left font-medium text-gray-700">Availability</th>
                  <th className="py-3 px-4 w-[16%] text-left font-medium text-gray-700">Actions</th>
                </tr>
              </thead>

              <tbody className="block max-h-[400px] overflow-y-auto w-full">
                {mockVolunteers.map((volunteer) => (
                  <tr key={volunteer.id} className="flex w-full border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4 w-[16%]">
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarFallback>
                            {volunteer.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-gray-900">{volunteer.name}</p>
                          <p className="text-sm text-gray-500">{volunteer.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 w-[16%]">
                      <div className="flex flex-wrap gap-1">
                        {volunteer.skills.map((skill, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </td>
                    <td className="py-4 px-4 w-[12%]">
                      <Badge className={getStatusColor(volunteer.status)} variant="secondary">
                        {volunteer.status}
                      </Badge>
                    </td>
                    <td className="py-4 px-4 w-[14%]">
                      <div className="flex items-center space-x-1">
                        {volunteer.rating > 0 ? (
                          <>
                            {renderStars(volunteer.rating)}
                            <span className="text-sm text-gray-600 ml-2">{volunteer.rating.toFixed(1)}</span>
                          </>
                        ) : (
                          <span className="text-sm text-gray-400">No rating</span>
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-4 w-[12%] text-gray-600">{volunteer.completedProjects}</td>
                    <td className="py-4 px-4 w-[14%]">
                      <Badge variant="outline" className="text-xs">
                        {volunteer.availability}
                      </Badge>
                    </td>
                    <td className="py-4 px-4 w-[16%]">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Eye className="h-4 w-4 mr-2" />
                            View Profile
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <UserCheck className="h-4 w-4 mr-2" />
                            Verify
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Award className="h-4 w-4 mr-2" />
                            Give Recognition
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            <Ban className="h-4 w-4 mr-2" />
                            Suspend
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
