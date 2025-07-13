import { NavLink, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Plus, 
  FileText, 
  Bell, 
  MessageSquare, 
  Settings,
  Users
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/shared/components/ui/sidebar";

const menuItems = [
  { title: "Dashboard", url: "/organization/", icon: LayoutDashboard },
  { title: "Add Request", url: "/organization/add-request", icon: Plus },
  { title: "Manage Posts", url: "/organization/manage-posts", icon: FileText },
  { title: "Notifications", url: "/organization/notifications", icon: Bell },
  { title: "Messages", url: "/organization/messages", icon: MessageSquare },
  { title: "Profile Settings", url: "/organization/profile", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const isCollapsed = state === "collapsed";

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <Sidebar className="bg-sidebar border-r border-slate-700">
      <SidebarContent className="bg-sidebar">
        {/* Header */}
        <div className="p-6 border-b border-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-primary-foreground" />
            </div>
            {!isCollapsed && (
              <div className="animate-fade-in">
                <h1 className="text-sidebar font-bold text-lg">VolunteerHub</h1>
                <p className="text-slate-400 text-sm">Organization Portal</p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup className="px-4 py-6">
          <SidebarGroupLabel className="text-slate-400 mb-4">
            {!isCollapsed && "Main Menu"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={`transition-all duration-200 hover:bg-slate-700 ${
                      isActive(item.url)
                        ? "bg-primary text-primary-foreground"
                        : "text-sidebar"
                    }`}
                  >
                    <NavLink
                      to={item.url}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg"
                    >
                      <item.icon className="w-5 h-5" />
                      {!isCollapsed && (
                        <span className="animate-fade-in font-medium">
                          {item.title}
                        </span>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}