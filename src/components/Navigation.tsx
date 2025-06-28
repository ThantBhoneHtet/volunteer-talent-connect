
import { Button } from "@/components/ui/button";
import { Menu, X, Heart } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">SkillBridge</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#skills" className="text-gray-700 hover:text-blue-600 transition-colors">
              Browse Skills
            </a>
            <a href="#volunteers" className="text-gray-700 hover:text-blue-600 transition-colors">
              Find Volunteers
            </a>
            <a href="#organizations" className="text-gray-700 hover:text-blue-600 transition-colors">
              For Organizations
            </a>
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              Sign In
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Join as Volunteer
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#skills" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
              Browse Skills
            </a>
            <a href="#volunteers" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
              Find Volunteers
            </a>
            <a href="#organizations" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
              For Organizations
            </a>
            <div className="flex flex-col gap-2 pt-2">
              <Button variant="outline" className="border-blue-600 text-blue-600">
                Sign In
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Join as Volunteer
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
