import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Badge } from "@/shared/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/shared/components/ui/table";
import { 
  Search, 
  Filter, 
  Edit3, 
  Trash2, 
  Eye, 
  Users, 
  Calendar,
  MoreHorizontal,
  Plus,
  TrendingUp
} from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/components/ui/popover";

const ManagePosts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const posts = [
    {
      id: 1,
      title: "Website Development for Local Shelter",
      category: "Technology",
      status: "Active",
      urgency: "High",
      volunteers: 8,
      applicants: 12,
      deadline: "2024-02-15",
      created: "2024-01-10"
    },
    {
      id: 2,
      title: "Graphic Design for Campaign",
      category: "Design",
      status: "Review",
      urgency: "Medium",
      volunteers: 3,
      applicants: 7,
      deadline: "2024-02-20",
      created: "2024-01-12"
    },
    {
      id: 3,
      title: "Content Writing for Newsletter",
      category: "Writing",
      status: "Completed",
      urgency: "Low",
      volunteers: 2,
      applicants: 5,
      deadline: "2024-01-30",
      created: "2024-01-05"
    },
    {
      id: 4,
      title: "Social Media Management",
      category: "Marketing",
      status: "Draft",
      urgency: "High",
      volunteers: 0,
      applicants: 0,
      deadline: "2024-03-01",
      created: "2024-01-15"
    },
    {
      id: 5,
      title: "Photography for Events",
      category: "Creative",
      status: "Active",
      urgency: "Medium",
      volunteers: 4,
      applicants: 9,
      deadline: "2024-02-25",
      created: "2024-01-08"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "default";
      case "Review": return "secondary";
      case "Completed": return "outline";
      case "Draft": return "destructive";
      default: return "outline";
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "High": return "destructive";
      case "Medium": return "default";
      case "Low": return "secondary";
      default: return "outline";
    }
  };

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || post.status.toLowerCase() === statusFilter;
    return matchesSearch && matchesStatus;
  });

 const navigate = useNavigate();

  return (
    <div className="p-6 animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2 animate-slide-up">
          Manage Posts
        </h1>
        <p className="text-muted-foreground animate-slide-up" style={{ animationDelay: "0.1s" }}>
          Track and manage all your volunteer requests in one place.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card className="card-gradient hover:shadow-lg transition-shadow">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Posts</p>
                <p className="text-2xl font-bold">{posts.length}</p>
              </div>
              <TrendingUp className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="card-gradient hover:shadow-lg transition-shadow" style={{ animationDelay: "0.1s" }}>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Posts</p>
                <p className="text-2xl font-bold text-green-600">
                  {posts.filter(p => p.status === "Active").length}
                </p>
              </div>
              <Eye className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="card-gradient hover:shadow-lg transition-shadow" style={{ animationDelay: "0.2s" }}>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Applicants</p>
                <p className="text-2xl font-bold text-purple-600">
                  {posts.reduce((sum, p) => sum + p.applicants, 0)}
                </p>
              </div>
              <Users className="w-8 h-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="card-gradient hover:shadow-lg transition-shadow" style={{ animationDelay: "0.3s" }}>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Completed</p>
                <p className="text-2xl font-bold text-orange-600">
                  {posts.filter(p => p.status === "Completed").length}
                </p>
              </div>
              <Calendar className="w-8 h-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card className="card-gradient mb-6 animate-slide-up" style={{ animationDelay: "0.4s" }}>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search posts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-40">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="review">Review</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Button onClick={() => navigate("/organization/add-request")} className="gap-2">
              <Plus className="w-4 h-4" />
              New Post
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Posts Table */}
      <Card className="card-gradient animate-slide-up" style={{ animationDelay: "0.5s" }}>
        <CardHeader>
          <CardTitle>Your Posts ({filteredPosts.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Urgency</TableHead>
                <TableHead>Volunteers</TableHead>
                <TableHead>Applicants</TableHead>
                <TableHead>Deadline</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPosts.map((post, index) => (
                <TableRow 
                  key={post.id} 
                  className="hover:bg-accent/50 transition-colors animate-fade-in"
                  style={{ animationDelay: `${0.6 + index * 0.05}s` }}
                >
                  <TableCell className="font-medium">{post.title}</TableCell>
                  <TableCell>{post.category}</TableCell>
                  <TableCell>
                    <Badge variant={getStatusColor(post.status)}>
                      {post.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getUrgencyColor(post.urgency)}>
                      {post.urgency}
                    </Badge>
                  </TableCell>
                  <TableCell>{post.volunteers}</TableCell>
                  <TableCell>{post.applicants}</TableCell>
                  <TableCell>{post.deadline}</TableCell>
                  <TableCell>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-40">
                        <div className="space-y-2">
                          <Button variant="ghost" size="sm" className="w-full justify-start gap-2">
                            <Eye className="w-4 h-4" />
                            View
                          </Button>
                          <Button variant="ghost" size="sm" className="w-full justify-start gap-2">
                            <Edit3 className="w-4 h-4" />
                            Edit
                          </Button>
                          <Button variant="ghost" size="sm" className="w-full justify-start gap-2 text-destructive">
                            <Trash2 className="w-4 h-4" />
                            Delete
                          </Button>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default ManagePosts;