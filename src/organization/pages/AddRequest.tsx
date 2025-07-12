import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { Textarea } from "@/shared/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select";
import { Badge } from "@/shared/components/ui/badge";
import { Calendar } from "@/shared/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/components/ui/popover";
import { useToast } from "@/shared/hooks/use-toast";
import { CalendarIcon, X, Plus, Save, Eye } from "lucide-react";
import { format } from "date-fns";

const AddRequest = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date>();
  const [skills, setSkills] = useState<string[]>([]);
  const [newSkill, setNewSkill] = useState("");

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request posted successfully!",
      description: "Your volunteer request has been published and volunteers can now apply.",
    });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2 animate-slide-up">
          Create New Volunteer Request
        </h1>
        <p className="text-muted-foreground animate-slide-up" style={{ animationDelay: "0.1s" }}>
          Fill out the details to post a new volunteer opportunity.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Form */}
          <Card className="lg:col-span-2 card-gradient animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <CardHeader>
              <CardTitle>Request Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Request Title *</Label>
                <Input 
                  id="title" 
                  placeholder="e.g., Website Development for Charity"
                  className="transition-all focus:scale-[1.02]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description *</Label>
                <Textarea 
                  id="description"
                  placeholder="Describe what kind of help you need, the project scope, and any specific requirements..."
                  className="min-h-32 transition-all focus:scale-[1.01]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Category *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tech">Technology</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="writing">Writing</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="urgency">Urgency Level</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select urgency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="urgent">Urgent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Required Skills</Label>
                <div className="flex gap-2">
                  <Input 
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    placeholder="Add a skill..."
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
                  />
                  <Button type="button" onClick={addSkill} size="icon">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="gap-1">
                      {skill}
                      <X 
                        className="w-3 h-3 cursor-pointer hover:text-destructive" 
                        onClick={() => removeSkill(skill)}
                      />
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Deadline</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="volunteers">Volunteers Needed</Label>
                  <Input 
                    id="volunteers" 
                    type="number"
                    placeholder="e.g., 3"
                    min="1"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="card-gradient animate-scale-in" style={{ animationDelay: "0.3s" }}>
              <CardHeader>
                <CardTitle className="text-lg">Publish Options</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button type="submit" className="w-full gap-2">
                  <Save className="w-4 h-4" />
                  Publish Request
                </Button>
                <Button type="button" variant="outline" className="w-full gap-2">
                  <Eye className="w-4 h-4" />
                  Save as Draft
                </Button>
              </CardContent>
            </Card>

            <Card className="card-gradient animate-scale-in" style={{ animationDelay: "0.4s" }}>
              <CardHeader>
                <CardTitle className="text-lg">Tips for Success</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <div className="hover-lift p-3 bg-accent/50 rounded-lg">
                  📝 <strong>Be specific:</strong> Clear descriptions attract better volunteers
                </div>
                <div className="hover-lift p-3 bg-accent/50 rounded-lg">
                  ⏰ <strong>Set realistic deadlines:</strong> Give volunteers enough time
                </div>
                <div className="hover-lift p-3 bg-accent/50 rounded-lg">
                  🎯 <strong>List required skills:</strong> Help volunteers self-assess
                </div>
                <div className="hover-lift p-3 bg-accent/50 rounded-lg">
                  💬 <strong>Stay responsive:</strong> Reply to applications quickly
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddRequest;