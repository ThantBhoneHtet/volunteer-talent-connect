import { SidebarProvider, SidebarTrigger } from "@/shared/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { Bell, Search, User } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Outlet } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

export function OrganizationLayout() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="h-16 border-b bg-card flex items-center justify-between px-6 animate-fade-in">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="hover:bg-secondary p-2 rounded-lg transition-colors" />
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input 
                  placeholder="Search volunteers, requests..." 
                  className="pl-10 w-80 bg-muted"
                />
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-destructive text-destructive-foreground rounded-full text-xs flex items-center justify-center">
                  3
                </span>
              </Button>
              <Button variant="ghost" size="icon">
                <User className="w-5 h-5" />
              </Button>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 overflow-auto">
            <Outlet/>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}