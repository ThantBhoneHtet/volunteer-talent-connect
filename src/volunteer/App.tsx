
import { Toaster } from "@/shared/components/ui/toaster";
import { Toaster as Sonner } from "@/shared/components/ui/sonner";
import { TooltipProvider } from "@/shared/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import VolunteerRegister from "./pages/VolunteerRegister";
import OrganizationRegister from "./pages/OrganizationRegister";
import Login from "./pages/Login";
import VolunteerDashboard from "./pages/VolunteerDashboard";
import NotFound from "./pages/NotFound";
import Admin from "./pages/Admin";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/register/volunteer" element={<VolunteerRegister />} />
          <Route path="/register/organization" element={<OrganizationRegister />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/volunteer/dashboard" element={<VolunteerDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
