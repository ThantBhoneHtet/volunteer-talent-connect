import React, { useState } from 'react';
import { User, Mail, Lock, Bell, Shield, Palette, Globe, HelpCircle, Plus, X, Award, Briefcase } from 'lucide-react';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/components/ui/avatar';
import { Switch } from '@/shared/components/ui/switch';
import { Label } from '@/shared/components/ui/label';
import { Textarea } from '@/shared/components/ui/textarea';
import { Badge } from '@/shared/components/ui/badge';

const Settings = () => {
  const [profileData, setProfileData] = useState({
    firstName: 'Emma',
    lastName: 'Brown',
    email: 'emmabrown08@gmail.com',
    phone: '+1 (555) 123-4567',
    bio: 'Passionate volunteer dedicated to making a positive impact in the community through environmental and social initiatives.',
    location: 'San Francisco, CA'
  });

  const [skills, setSkills] = useState(['Environmental Conservation', 'Community Outreach', 'Event Planning']);
  const [newSkill, setNewSkill] = useState('');
  
  const [certificates, setCertificates] = useState([
    { id: 1, name: 'First Aid Certification', issuer: 'Red Cross', year: '2023' },
    { id: 2, name: 'Project Management', issuer: 'PMI', year: '2022' }
  ]);
  const [newCertificate, setNewCertificate] = useState({ name: '', issuer: '', year: '' });

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    pushNotifications: true,
    taskReminders: true,
    teamUpdates: true,
    recommendations: false
  });

  const [privacy, setPrivacy] = useState({
    profileVisibility: true,
    activityStatus: true,
    volunteerHours: false
  });

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  const addCertificate = () => {
    if (newCertificate.name.trim() && newCertificate.issuer.trim()) {
      setCertificates([...certificates, {
        id: Date.now(),
        ...newCertificate
      }]);
      setNewCertificate({ name: '', issuer: '', year: '' });
    }
  };

  const removeCertificate = (id: number) => {
    setCertificates(certificates.filter(cert => cert.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Settings</h2>
        <Button>Save Changes</Button>
      </div>

      {/* Profile Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Profile Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center space-x-6">
            <Avatar className="h-24 w-24">
              <AvatarImage src="/placeholder-avatar.jpg" />
              <AvatarFallback className="text-lg">EB</AvatarFallback>
            </Avatar>
            <div className="space-y-2">
              <Button variant="outline">Change Photo</Button>
              <Button variant="ghost" size="sm" className="text-red-600">
                Remove Photo
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                value={profileData.firstName}
                onChange={(e) => setProfileData({...profileData, firstName: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                value={profileData.lastName}
                onChange={(e) => setProfileData({...profileData, lastName: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={profileData.email}
                onChange={(e) => setProfileData({...profileData, email: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                value={profileData.phone}
                onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                value={profileData.location}
                onChange={(e) => setProfileData({...profileData, location: e.target.value})}
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                value={profileData.bio}
                onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                rows={3}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Skills Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Briefcase className="h-5 w-5" />
            Skills & Expertise
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <Badge key={index} variant="outline" className="flex items-center gap-1 bg-blue-50 text-blue-700">
                {skill}
                <button
                  onClick={() => removeSkill(skill)}
                  className="ml-1 hover:bg-blue-200 rounded-full p-0.5"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
          </div>
          <div className="flex gap-2">
            <Input
              placeholder="Add a skill..."
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addSkill()}
            />
            <Button onClick={addSkill} size="icon">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Certificates Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5" />
            Certificates & Qualifications
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            {certificates.map((cert) => (
              <div key={cert.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">{cert.name}</h4>
                  <p className="text-sm text-gray-600">{cert.issuer} • {cert.year}</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeCertificate(cert.id)}
                  className="text-red-600 hover:text-red-700"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
          
          <div className="space-y-3 p-4 border-2 border-dashed border-gray-200 rounded-lg">
            <h4 className="font-medium text-gray-900">Add New Certificate</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <Input
                placeholder="Certificate name"
                value={newCertificate.name}
                onChange={(e) => setNewCertificate({...newCertificate, name: e.target.value})}
              />
              <Input
                placeholder="Issuing organization"
                value={newCertificate.issuer}
                onChange={(e) => setNewCertificate({...newCertificate, issuer: e.target.value})}
              />
              <Input
                placeholder="Year"
                value={newCertificate.year}
                onChange={(e) => setNewCertificate({...newCertificate, year: e.target.value})}
              />
            </div>
            <Button onClick={addCertificate} className="w-full">
              <Plus className="h-4 w-4 mr-2" />
              Add Certificate
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Help & Support */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5" />
            Help & Support
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-20 flex-col">
              <HelpCircle className="h-6 w-6 mb-2" />
              Help Center
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <Mail className="h-6 w-6 mb-2" />
              Contact Support
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <Globe className="h-6 w-6 mb-2" />
              Community Forum
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;
