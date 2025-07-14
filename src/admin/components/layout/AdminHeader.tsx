
import React from 'react';
import { Bell, Search, User, LogOut, Github } from 'lucide-react';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { useGithubInfo } from '@/admin/hooks/useGithubInfo';

export const AdminHeader = () => {
  const { lastCommit, lastUpdate, loading } = useGithubInfo();

  return (
    <header className="bg-white shadow-sm border-b border-border px-6 py-4 animate-fade-in">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
        </div>
        
        <div className="flex items-center space-x-4">
          {/* <Button variant="ghost" size="sm" className="relative animate-button-hover">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center animate-pulse-subtle">
              3
            </span>
          </Button> */}
          
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center animate-scale-in">
              <User className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-sm font-medium text-foreground">Admin User</span>
          </div>
          
          <Button variant="ghost" size="sm" className="animate-button-hover">
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};
