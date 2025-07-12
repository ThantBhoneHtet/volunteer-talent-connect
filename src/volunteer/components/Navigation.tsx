
import { Button } from "@/shared/components/ui/button";
import { Menu, X, Heart, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRegisterDropdownOpen, setIsRegisterDropdownOpen] = useState(false);

  const handleRegisterDropdownEnter = () => {
    setIsRegisterDropdownOpen(true);
  };

  const handleRegisterDropdownLeave = () => {
    setIsRegisterDropdownOpen(false);
  };

  return (
    <nav className="bg-white/90 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">SkillBridge</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#skills" className="text-gray-700 hover:text-blue-600 transition-colors">
              Skills Bank
            </a>
            <a href="#volunteers" className="text-gray-700 hover:text-blue-600 transition-colors">
              Our Volunteers
            </a>
            <a href="#organizations" className="text-gray-700 hover:text-blue-600 transition-colors">
              Partner Organizations
            </a>
            <a href="#forum" className="text-gray-700 hover:text-blue-600 transition-colors">
             Forum
            </a>
            <div 
              className="relative"
              onMouseEnter={handleRegisterDropdownEnter}
              
            >
              <Button className="bg-white border border-blue-600 text-blue-600 hover:bg-white flex items-center gap-2">
                Register
                <ChevronDown className="h-4 w-4" />
              </Button>
              {isRegisterDropdownOpen && (
                <div 
                  onMouseLeave={handleRegisterDropdownLeave}
                  className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-[60]">
                  <Link 
                    to="/register/volunteer" 
                    className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    <div className="font-medium">For Volunteer</div>
                    <div className="text-sm text-gray-500">Join as a volunteer</div>
                  </Link>
                  <div className="border-t border-gray-100"></div>
                  <Link 
                    to="/register/organization" 
                    className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    <div className="font-medium">For Organization</div>
                    <div className="text-sm text-gray-500">Register your organization</div>
                  </Link>
                </div>
              )}
            </div>
            <Link to="/login">
              <Button variant="outline" className="bg-blue-600 border-blue-600 text-white hover:text-white hover:bg-blue-700">
                Login
              </Button>
            </Link>
            <Link to="/admin">
              <Button variant="outline" className="bg-blue-600 border-blue-600 text-white hover:text-white hover:bg-blue-700">
                Admin
              </Button>
            </Link>
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
              <Link to="/login">
                <Button variant="outline" className="w-full border-blue-600 text-blue-600">
                  Sign In
                </Button>
              </Link>
              <Link to="/register/volunteer">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Join as Volunteer
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
