
import React, { useState, useEffect } from 'react';
import { Search, Filter, Heart, MapPin, Calendar, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Programs = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [programs, setPrograms] = useState<any[]>([]);

  const recommendedPrograms = [
    {
      id: 1,
      title: 'Community Garden Maintenance',
      organization: 'Local Green Initiative',
      description: 'Help maintain and expand our community garden space.',
      location: 'Downtown Community Center',
      date: '2024-01-20',
      volunteers: 12,
      category: 'Environmental',
      isRecommended: true
    },
    {
      id: 2,
      title: 'Senior Companion Program',
      organization: 'Elder Care Network',
      description: 'Provide companionship and assistance to elderly residents.',
      location: 'Sunrise Assisted Living',
      date: '2024-01-25',
      volunteers: 8,
      category: 'Community',
      isRecommended: true
    }
  ];

  const allPrograms = [
    {
      id: 3,
      title: 'Youth Mentorship Program',
      organization: 'Future Leaders Foundation',
      description: 'Mentor young students in academic and life skills.',
      location: 'Central High School',
      date: '2024-01-30',
      volunteers: 25,
      category: 'Education'
    },
    {
      id: 4,
      title: 'Animal Shelter Support',
      organization: 'Paws & Hearts Rescue',
      description: 'Help care for rescued animals and assist with adoptions.',
      location: 'City Animal Shelter',
      date: '2024-02-05',
      volunteers: 18,
      category: 'Animals'
    },
    {
      id: 5,
      title: 'Homeless Shelter Meal Service',
      organization: 'Hope & Healing Center',
      description: 'Prepare and serve meals to individuals experiencing homelessness.',
      location: 'Downtown Shelter',
      date: '2024-02-10',
      volunteers: 30,
      category: 'Community'
    }
  ];

  // Simulate infinite scroll
  const loadMorePrograms = () => {
    setLoading(true);
    setTimeout(() => {
      setPrograms(prev => [...prev, ...allPrograms.slice(0, 3)]);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    setPrograms(allPrograms);
  }, []);

  const getCategoryColor = (category: string) => {
    const colors = {
      Environmental: 'bg-green-100 text-green-800',
      Community: 'bg-blue-100 text-blue-800',
      Education: 'bg-purple-100 text-purple-800',
      Animals: 'bg-orange-100 text-orange-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Programs</h2>
        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search programs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-64"
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Recommended Programs */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
          <Star className="h-5 w-5 text-yellow-500" />
          Recommended for You
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recommendedPrograms.map((program) => (
            <Card key={program.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <Badge className="bg-yellow-100 text-yellow-800">
                    Recommended
                  </Badge>
                  <Button variant="ghost" size="icon">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                <h4 className="font-medium text-gray-900 mb-2">{program.title}</h4>
                <p className="text-sm text-gray-600 mb-3">{program.description}</p>
                <div className="flex items-center gap-2 mb-3">
                  <Badge className={getCategoryColor(program.category)}>
                    {program.category}
                  </Badge>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {program.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {program.volunteers} volunteers
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{program.organization}</span>
                  <Button size="sm">Apply Now</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* All Programs */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">All Programs</h3>
        <div className="space-y-3">
          {programs.map((program) => (
            <Card key={program.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-medium text-gray-900">{program.title}</h4>
                      <Badge className={getCategoryColor(program.category)}>
                        {program.category}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{program.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>{program.organization}</span>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {program.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {program.volunteers} volunteers
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button size="sm">Apply</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            variant="outline" 
            onClick={loadMorePrograms} 
            disabled={loading}
            className="w-full"
          >
            {loading ? 'Loading...' : 'Load More Programs'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Programs;
