import { Toaster } from "@/shared/components/ui/toaster";
import { Toaster as Sonner } from "@/shared/components/ui/sonner";
import { TooltipProvider } from "@/shared/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// ----- Admin -----
import { AdminLayout } from "@/admin/components/layout/AdminLayout";
import { DashboardOverview } from "@/admin/components/dashboard/DashboardOverview";
import { AccountManagement } from "@/admin/components/management/AccountManagement";
import { PostManagement } from "@/admin/components/management/PostManagement";
import { GroupManagement } from "@/admin/components/management/GroupManagement";
import { VolunteerManagement } from "@/admin/components/management/VolunteerManagement";
import { Analytics } from "@/admin/components/analytics/Analytics";
import { Settings } from "@/admin/components/settings/Settings";
import SkillbankNotFound from "@/admin/pages/NotFound";

// ----- Volunteer -----
import Index from "@/volunteer/pages/Index";
import VolunteerRegister from "@/volunteer/pages/VolunteerRegister";
import OrganizationRegister from "@/volunteer/pages/OrganizationRegister";
import Login from "@/volunteer/pages/Login";
import VolunteerDashboard from "@/volunteer/pages/VolunteerDashboard";
import VolunteerNotFound from "@/volunteer/pages/NotFound";
import Admin from "@/volunteer/pages/Admin";

// ----- Organization -----
import {OrganizationLayout}  from "@/organization/components/OrganizationLayout";
import HiveDashboard from "@/organization/pages/Dashboard";
import AddRequest from "@/organization/pages/AddRequest";
import ManagePosts from "@/organization/pages/ManagePosts";
import Notifications from "@/organization/pages/Notifications";
import Messages from "@/organization/pages/Messages";
import Profile from "@/organization/pages/Profile";
import HiveNotFound from "@/organization/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* ----- Skillbank Admin Routes ----- */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<DashboardOverview />} />
            <Route path="accounts" element={<AccountManagement />} />
            <Route path="posts" element={<PostManagement />} />
            <Route path="groups" element={<GroupManagement />} />
            <Route path="volunteers" element={<VolunteerManagement />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="/admin/welcome" element={
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to VSB Admin</h1>
                <p className="text-gray-600 mb-6">Volunteer Skill Bank Administration Portal</p>
                <a href="/admin" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                  Go to Admin Dashboard
                </a>
              </div>
            </div>
          } />

          {/* ----- Volunteer Talent Connect Routes ----- */}
          <Route path="/" element={<Index />} />
          <Route path="/register/volunteer" element={<VolunteerRegister />} />
          <Route path="/register/organization" element={<OrganizationRegister />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-panel" element={<Admin />} />
          <Route path="/volunteer/dashboard" element={<VolunteerDashboard />} />

          {/* ----- Volunteer Hive Hub Routes ----- */}
          <Route path="/organization" element={<OrganizationLayout />}>
            <Route index element={<HiveDashboard />} />
            <Route path="add-request" element={<AddRequest />} />
            <Route path="manage-posts" element={<ManagePosts />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="messages" element={<Messages />} />
            <Route path="profile" element={<Profile />} />
            <Route path="*" element={<HiveNotFound />} />
          </Route>

          {/* ----- Global Fallback Route ----- */}
          <Route path="*" element={<div className="p-10 text-center text-xl font-semibold text-red-500">404 — Page Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
