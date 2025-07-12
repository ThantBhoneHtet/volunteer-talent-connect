
import { Button } from "@/shared/components/ui/button";
import heroImg from "@/assets/Volunteering-amico.svg";
import { ArrowRight, Users, Star, Award } from "lucide-react";

export const Hero = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Connect Your Skills
              <span className="text-blue-600 block">With Meaningful Causes</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
              Join thousands of skilled volunteers making a difference. Share your expertise, 
              learn new skills, and contribute to organizations that matter to you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4 group"
              >
                Get Started as Volunteer
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-4"
              >
                Find Volunteers
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative overflow-hidden">
              <img 
                src={heroImg}
                alt="Volunteers working together on community projects"
                className="w-full h-[500px]"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div> */}
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-100 rounded-full opacity-60"></div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-100 rounded-full opacity-60"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-blue-100 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">15,000+</h3>
            <p className="text-gray-600">Active Volunteers</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-green-100 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">500+</h3>
            <p className="text-gray-600">Partner Organizations</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-purple-100 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">1M+</h3>
            <p className="text-gray-600">Hours Contributed</p>
          </div>
        </div>
      </div>
    </section>
  );
};
