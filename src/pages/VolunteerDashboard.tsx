
import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  Users, 
  Award, 
  Bell, 
  MessageSquare, 
  Settings, 
  User, 
  LogOut,
  Home,
  Menu,
  CalendarDays,
  FolderOpen,
  UserCheck,
  Shield,
  ChevronDown,
  Heart,
  MapPin,
  Eye
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Link } from 'react-router-dom';

// Import dashboard components
import ScheduledTasks from '@/components/dashboard/ScheduledTasks';
import Programs from '@/components/dashboard/Programs';
import Messages from '@/components/dashboard/Messages';
import Notifications from '@/components/dashboard/Notifications';
import ColleaguesTeams from '@/components/dashboard/ColleaguesTeams';
import AdminTeam from '@/components/dashboard/AdminTeam';
import SettingsComponent from '@/components/dashboard/Settings';

type SidebarOption = 'dashboard' | 'scheduled-tasks' | 'programs' | 'notifications' | 'messages' | 'colleagues' | 'admin' | 'settings';

export const VolunteerDashboard = () => {
  const [activeSection, setActiveSection] = useState<SidebarOption>('dashboard');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'scheduled-tasks', label: 'Scheduled Tasks', icon: CalendarDays },
    { id: 'programs', label: 'Programs', icon: FolderOpen },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'messages', label: 'Messages', icon: MessageSquare },
    { id: 'colleagues', label: 'Colleagues/Teams', icon: Users },
    { id: 'admin', label: 'Admin Team', icon: Shield },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  const upcomingTasks = [
    {
      id: 1,
      title: 'Tree Planting and Restoration Project',
      category: 'Environmental',
      date: 'Sep 15, 2023',
      time: '10:00 AM',
      organization: 'Green Earth Alliance',
      image: '/lovable-uploads/b022a427-2844-4d05-8ca7-e0a706ce32a5.png'
    },
    {
      id: 2,
      title: 'Shelter Adoption Day: Find Your Furry Companion',
      category: 'Animals',
      date: 'Oct 20, 2023',
      time: '9:00 AM',
      organization: 'Paws and Hearts Rescue',
      image: '/lovable-uploads/b022a427-2844-4d05-8ca7-e0a706ce32a5.png'
    }
  ];

  const recommendedTasks = [
    {
      id: 3,
      title: 'Community Garden Maintenance',
      category: 'Environmental',
      date: 'Nov 5, 2023',
      time: '2:00 PM',
      organization: 'Local Community Center',
      image: '/lovable-uploads/b022a427-2844-4d05-8ca7-e0a706ce32a5.png'
    },
    {
      id: 4,
      title: 'Food Bank Distribution',
      category: 'Community',
      date: 'Nov 12, 2023',
      time: '1:00 PM',
      organization: 'City Food Bank',
      image: '/lovable-uploads/b022a427-2844-4d05-8ca7-e0a706ce32a5.png'
    }
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {getGreeting()}, Emma!
        </h2>
        <p className="text-gray-600">Welcome to your volunteer dashboard. Here's what's happening today.</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Hours</p>
                <p className="text-2xl font-bold text-blue-600">127</p>
              </div>
              <Clock className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Projects Completed</p>
                <p className="text-2xl font-bold text-green-600">24</p>
              </div>
              <Award className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Team Members</p>
                <p className="text-2xl font-bold text-orange-600">156</p>
              </div>
              <Users className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Tasks - Smaller Cards */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900">Your Upcoming Volunteer Opportunities</h3>
          <Button 
            variant="ghost" 
            className="text-orange-600 hover:text-orange-700"
            onClick={() => setActiveSection('scheduled-tasks')}
          >
            View All <Eye className="ml-1 h-4 w-4" />
          </Button>
        </div>
        <div className="space-y-3">
          {upcomingTasks.map((task) => (
            <Card key={task.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img 
                      src={task.image} 
                      alt={task.title}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{task.title}</h4>
                      <div className="flex items-center gap-3 text-sm text-gray-500">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                          {task.category}
                        </span>
                        <div className="flex items-center gap-1">
                          <CalendarDays className="h-4 w-4" />
                          {task.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {task.time}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button size="sm">View Details</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Recommended Tasks - Smaller Cards */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900">Volunteer Opportunities You Might Be Interested In</h3>
          <Button 
            variant="ghost" 
            className="text-orange-600 hover:text-orange-700"
            onClick={() => setActiveSection('programs')}
          >
            View All <Eye className="ml-1 h-4 w-4" />
          </Button>
        </div>
        <div className="space-y-3">
          {recommendedTasks.map((task) => (
            <Card key={task.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img 
                      src={task.image} 
                      alt={task.title}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{task.title}</h4>
                      <div className="flex items-center gap-3 text-sm text-gray-500">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                          {task.category}
                        </span>
                        <div className="flex items-center gap-1">
                          <CalendarDays className="h-4 w-4" />
                          {task.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {task.time}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button size="sm">Apply</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Calendar */}
      <Card>
        <CardHeader>
          <CardTitle>Today's Schedule</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <CalendarComponent
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border"
            />
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Today's Tasks</h4>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-800 font-medium">Tree Planting Project +2 more</p>
                <p className="text-xs text-blue-600 mt-1">Click to view all tasks for today</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return renderDashboard();
      case 'scheduled-tasks':
        return <ScheduledTasks />;
      case 'programs':
        return <Programs />;
      case 'messages':
        return <Messages />;
      case 'notifications':
        return <Notifications />;
      case 'colleagues':
        return <ColleaguesTeams />;
      case 'admin':
        return <AdminTeam />;
      case 'settings':
        return <SettingsComponent />;
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className={`bg-slate-900 text-white transition-all duration-300 ${
        isSidebarCollapsed ? 'w-18' : 'w-64'
      }`}>
        <div className="p-4">
          <div className="flex items-center justify-between mb-8">
            {!isSidebarCollapsed && (
              <Link to="/" className="flex items-center space-x-2">
                <Heart className="h-8 w-8 text-blue-600" />
                <span className="text-2xl text-white font-bold">SkillBridge</span>
              </Link>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
              className="text-white hover:bg-slate-800"
            >
              <Menu className="h-5 w-5 text-white" />
            </Button>
          </div>
          
          <nav className="space-y-2">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id as SidebarOption)}
                  className={`w-full flex items-center px-3 py-2 rounded-lg transition-colors ${
                    isActive 
                      ? 'bg-orange-600 text-white' 
                      : 'text-gray-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {!isSidebarCollapsed && (
                    <span className="ml-3 text-sm">{item.label}</span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm border-b px-6 py-4">
          <div className="flex items-center justify-end">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder-avatar.jpg" alt="Emma Brown" />
                    <AvatarFallback>EB</AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <p className="text-sm font-medium text-gray-900">Emma Brown</p>
                    <p className="text-xs text-gray-500">emmabrown08@gmail.com</p>
                  </div>
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem onClick={() => setActiveSection('settings')}>
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 p-6 overflow-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default VolunteerDashboard;
