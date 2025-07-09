
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react"

export const OrganizationRegister = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex">
      <Link to="/">
        <Button className="bg-white m-5 border border-black text-dark hover:bg-white">
        <ArrowLeft className="h-6 w-6" />
      </Button>
      </Link>
      {/* Left side - Illustration */}
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center p-12">
        <div className="max-w-md">
          <img 
            src="/lovable-uploads/b022a427-2844-4d05-8ca7-e0a706ce32a5.png"
            alt="Volunteers working together"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Right side - Registration Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Get started</h2>
            <p className="text-gray-500">Create your organization account now</p>
          </div>

          <form className="space-y-6">
            <div>
              <Label htmlFor="orgName" className="text-sm font-medium text-gray-700">
                Organization name
              </Label>
              <Input
                id="orgName"
                type="text"
                placeholder="Green Earth Foundation"
                className="mt-1 w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <Label htmlFor="orgId" className="text-sm font-medium text-gray-700">
                Organization registration ID
              </Label>
              <Input
                id="orgId"
                type="text"
                placeholder="REG123456789"
                className="mt-1 w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <Label htmlFor="address" className="text-sm font-medium text-gray-700">
                Address
              </Label>
              <Input
                id="address"
                type="text"
                placeholder="123 Main Street, City, State"
                className="mt-1 w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="contact@greenearth.org"
                className="mt-1 w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder=""
                className="mt-1 w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {/* <div className="mt-1 text-right">
                <span className="text-sm text-green-600 font-medium">Strong!</span>
              </div> */}
            </div>

            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium">
              Sign Up
            </Button>
          </form>

          <div className="text-center">
            <p className="text-gray-500">
              Have an account?{" "}
              <Link to="/login" className="text-blue-600 hover:text-blue-700 font-medium">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationRegister;
