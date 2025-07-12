
import { Heart, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">SkillBridge</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Connecting skilled volunteers with meaningful opportunities to create positive change in communities worldwide.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center text-sm text-gray-300">
                <Mail className="h-4 w-4 mr-2" />
                hello@skillbridge.org
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Phone className="h-4 w-4 mr-2" />
                (555) 123-4567
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">For Volunteers</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Find Opportunities</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Create Profile</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Browse Skills</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Success Stories</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">For Organizations</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Post Projects</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Find Volunteers</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Resources</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 SkillBridge. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
