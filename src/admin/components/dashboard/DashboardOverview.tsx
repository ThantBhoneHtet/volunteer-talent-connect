import React from "react";
import { useNavigate } from "react-router-dom";
import { Users, FileText, UserCheck, AlertTriangle, Network } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";

const stats = [
  {
    title: "Total Users",
    value: "2,847",
    change: "+12%",
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Active Posts",
    value: "423",
    change: "+8%",
    icon: FileText,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    title: "Volunteers",
    value: "1,234",
    change: "+15%",
    icon: UserCheck,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
];

export const DashboardOverview = () => {

  const navigate = useNavigate();

  return (
    <div className="space-y-2">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">
          Welcome back! Here's what's happening with VSB today.
        </p>
      </div>

      <div className="grid grid-cols-5 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`h-2 w-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">
                {stat.value}
              </div>
              {/* <p className={`text-xs ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                {stat.change} from last month
              </p> */}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
            <CardDescription>Latest actions on the platform</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 max-h-64 overflow-y-auto pr-2">
              {[
                {
                  action: "New volunteer registration",
                  user: "John Doe",
                  time: "2 minutes ago",
                },
                {
                  action: "Post reported",
                  user: "Community Foundation",
                  time: "15 minutes ago",
                },
                {
                  action: "Group created",
                  user: "Tech Volunteers",
                  time: "1 hour ago",
                },
                {
                  action: "New volunteer registration",
                  user: "John Doe",
                  time: "2 minutes ago",
                },
                {
                  action: "Post reported",
                  user: "Community Foundation",
                  time: "15 minutes ago",
                },
                {
                  action: "Group created",
                  user: "Tech Volunteers",
                  time: "1 hour ago",
                },
                {
                  action: "New volunteer registration",
                  user: "John Doe",
                  time: "2 minutes ago",
                },
                {
                  action: "Post reported",
                  user: "Community Foundation",
                  time: "15 minutes ago",
                },
                {
                  action: "Group created",
                  user: "Tech Volunteers",
                  time: "1 hour ago",
                },
              ].map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
                >
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {activity.action}
                    </p>
                    <p className="text-sm text-gray-500">{activity.user}</p>
                  </div>
                  <span className="text-xs text-gray-400">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common administrative tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <button onClick={() => navigate("/admin/management/account")} className="p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors text-left">
                <Users className="h-6 w-6 text-blue-600 mb-2" />
                <p className="text-sm font-medium text-gray-900">
                  Manage Users
                </p>
              </button>
              <button onClick={() => navigate("/admin/management/post")} className="p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors text-left">
                <FileText className="h-6 w-6 text-green-600 mb-2" />
                <p className="text-sm font-medium text-gray-900">
                  Review Posts
                </p>
              </button>
              <button 
              onClick={() => navigate("/admin/management/volunteer")}
              className="p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors text-left">
                <Users className="h-6 w-6 text-purple-600 mb-2" /> {/* Changed to Users */}
                <p className="text-sm font-medium text-gray-900">
                  Volunteer Management
                </p>
              </button>

              <button onClick={() => navigate("/admin/management/group")} className="p-4 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors text-left">
                <Network className="h-6 w-6 text-orange-600 mb-2" /> {/* New icon: Network */}
                <p className="text-sm font-medium text-gray-900">
                  Group Management
                </p>
              </button>

            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
