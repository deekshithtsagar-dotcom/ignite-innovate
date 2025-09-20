import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Plus, Search, Users, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Idea {
  id: number;
  title: string;
  description: string;
  tags: string[];
  author: string;
  members: number;
  maxMembers: number;
  timePosted: string;
}

export default function IdeaBoard() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const ideas: Idea[] = [
    {
      id: 1,
      title: "EcoTrack - Carbon Footprint App",
      description: "A mobile app to help students track and reduce their carbon footprint through gamification and social challenges.",
      tags: ["Sustainability", "Mobile App", "React Native", "Environmental"],
      author: "Sarah Kim",
      members: 2,
      maxMembers: 5,
      timePosted: "2 hours ago"
    },
    {
      id: 2,
      title: "StudyBuddy AI Tutor",
      description: "AI-powered personalized learning assistant that adapts to individual learning styles and pace.",
      tags: ["AI", "Education", "Machine Learning", "Python"],
      author: "Marcus Johnson",
      members: 3,
      maxMembers: 4,
      timePosted: "5 hours ago"
    },
    {
      id: 3,
      title: "Campus Food Waste Tracker",
      description: "Platform to connect students with surplus food from campus dining, reducing waste and saving money.",
      tags: ["Social Impact", "Sustainability", "Web App", "Food"],
      author: "Elena Rodriguez",
      members: 1,
      maxMembers: 6,
      timePosted: "1 day ago"
    },
    {
      id: 4,
      title: "Mental Health Check-in Bot",
      description: "Anonymous peer support platform with mood tracking and resource recommendations for student wellness.",
      tags: ["Mental Health", "Chatbot", "Wellness", "Support"],
      author: "David Park",
      members: 4,
      maxMembers: 4,
      timePosted: "2 days ago"
    },
    {
      id: 5,
      title: "AR Campus Navigation",
      description: "Augmented reality app to help new students navigate campus with interactive waypoints and building info.",
      tags: ["AR", "Mobile", "Unity", "Campus Life"],
      author: "Zoe Chen",
      members: 2,
      maxMembers: 5,
      timePosted: "3 days ago"
    },
    {
      id: 6,
      title: "Blockchain Academic Credits",
      description: "Decentralized system for verifying and transferring academic credits between institutions securely.",
      tags: ["Blockchain", "Education", "Security", "Innovation"],
      author: "Alex Thompson",
      members: 1,
      maxMembers: 3,
      timePosted: "1 week ago"
    }
  ];

  const filteredIdeas = ideas.filter(idea =>
    idea.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    idea.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    idea.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleJoinProject = (ideaId: number) => {
    navigate(`/project/${ideaId}`);
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Innovation Ideas</h1>
          <p className="text-muted-foreground">Discover exciting projects and join collaborative teams</p>
        </div>
        <Button className="gradient-primary text-white shadow-glow">
          <Plus className="h-4 w-4 mr-2" />
          Post New Idea
        </Button>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder="Search ideas, tags, or keywords..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredIdeas.map((idea) => (
          <Card key={idea.id} className="innovation-card group">
            <CardHeader>
              <div className="flex items-start justify-between">
                <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                  {idea.title}
                </CardTitle>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-3 w-3 mr-1" />
                  {idea.timePosted}
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-sm leading-relaxed">
                {idea.description}
              </p>
              
              <div className="flex flex-wrap gap-1">
                {idea.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="h-4 w-4 mr-1" />
                  {idea.members}/{idea.maxMembers} members
                </div>
                <p className="text-xs text-muted-foreground">by {idea.author}</p>
              </div>

              <Button
                onClick={() => handleJoinProject(idea.id)}
                className={`w-full ${
                  idea.members >= idea.maxMembers 
                    ? "bg-muted text-muted-foreground cursor-not-allowed" 
                    : "gradient-primary text-white hover:shadow-glow"
                }`}
                disabled={idea.members >= idea.maxMembers}
              >
                {idea.members >= idea.maxMembers ? "Team Full" : "Join Project"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredIdeas.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">No ideas found matching your search.</p>
          <Button className="mt-4 gradient-primary text-white">
            <Plus className="h-4 w-4 mr-2" />
            Be the first to post an idea!
          </Button>
        </div>
      )}
    </div>
  );
}