import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Search, Users, Clock, Heart, MessageCircle, Share2, TrendingUp, Lightbulb } from "lucide-react";
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

interface FeedItem {
  id: number;
  type: "project_launch" | "team_join" | "milestone" | "idea_post";
  title: string;
  description: string;
  author: string;
  authorInitials: string;
  timestamp: string;
  likes: number;
  comments: number;
  tags?: string[];
  projectId?: number;
}

export default function InnovationHub() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [filter, setFilter] = useState("all");

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

  const feedItems: FeedItem[] = [
    {
      id: 1,
      type: "project_launch",
      title: "EcoTrack Carbon Footprint App launched!",
      description: "We're excited to announce the official launch of our sustainability tracking app. Join us in making campus more environmentally conscious!",
      author: "Sarah Kim",
      authorInitials: "SK",
      timestamp: "2 hours ago",
      likes: 24,
      comments: 8,
      tags: ["Sustainability", "Mobile App", "Launch"],
      projectId: 1
    },
    {
      id: 2,
      type: "team_join",
      title: "New developer joined StudyBuddy AI project",
      description: "Welcome Emma Martinez to our AI tutoring platform team! With her machine learning expertise, we're ready to enhance our recommendation engine.",
      author: "Marcus Johnson",
      authorInitials: "MJ",
      timestamp: "4 hours ago",
      likes: 12,
      comments: 3,
      tags: ["AI", "Team Update"],
      projectId: 2
    },
    {
      id: 3,
      type: "milestone",
      title: "Campus Food Waste Tracker reaches 100 users!",
      description: "Incredible milestone! We've successfully connected over 100 students with surplus food, preventing 500+ meals from going to waste.",
      author: "Elena Rodriguez",
      authorInitials: "ER",
      timestamp: "8 hours ago",
      likes: 45,
      comments: 15,
      tags: ["Social Impact", "Milestone", "Food Waste"],
      projectId: 3
    },
    {
      id: 4,
      type: "idea_post",
      title: "Looking for team: Blockchain Academic Credits",
      description: "Have an innovative idea for decentralized academic credit verification. Seeking blockchain developers and education enthusiasts!",
      author: "Alex Thompson",
      authorInitials: "AT",
      timestamp: "1 day ago",
      likes: 18,
      comments: 12,
      tags: ["Blockchain", "Education", "Team Needed"],
      projectId: 6
    },
    {
      id: 5,
      type: "milestone",
      title: "Mental Health Check-in Bot completes beta testing",
      description: "After 3 months of testing with 200+ students, our anonymous support platform is ready for campus-wide launch. Thank you to all beta testers!",
      author: "David Park",
      authorInitials: "DP",
      timestamp: "2 days ago",
      likes: 67,
      comments: 28,
      tags: ["Mental Health", "Beta Complete", "Launch Ready"],
      projectId: 4
    },
    {
      id: 6,
      type: "project_launch",
      title: "AR Campus Navigation now available for download",
      description: "New students can now navigate campus with ease! Our AR app provides real-time directions and building information.",
      author: "Zoe Chen",
      authorInitials: "ZC",
      timestamp: "3 days ago",
      likes: 89,
      comments: 22,
      tags: ["AR", "Campus Life", "Navigation"],
      projectId: 5
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

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "project_launch":
        return <TrendingUp className="h-4 w-4 text-success" />;
      case "team_join":
        return <Users className="h-4 w-4 text-primary" />;
      case "milestone":
        return <Badge className="h-4 w-4 text-accent" />;
      case "idea_post":
        return <MessageCircle className="h-4 w-4 text-warning" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "project_launch": return "Project Launch";
      case "team_join": return "Team Update";
      case "milestone": return "Milestone";
      case "idea_post": return "New Idea";
      default: return "Update";
    }
  };

  const handleProjectClick = (projectId?: number) => {
    if (projectId) {
      navigate(`/project/${projectId}`);
    }
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Innovation Hub</h1>
          <p className="text-muted-foreground">Discover ideas, join projects, and stay connected with the community</p>
        </div>
      </div>

      <Tabs defaultValue="ideas" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="ideas" className="flex items-center gap-2">
            <Lightbulb className="h-4 w-4" />
            Ideas
          </TabsTrigger>
          <TabsTrigger value="community" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Community
          </TabsTrigger>
        </TabsList>

        <TabsContent value="ideas" className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search ideas, tags, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button className="gradient-primary text-white shadow-glow">
              <Plus className="h-4 w-4 mr-2" />
              Post New Idea
            </Button>
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
        </TabsContent>

        <TabsContent value="community" className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-muted-foreground">Stay updated with the latest innovation projects and milestones</p>
            
            <div className="flex gap-3">
              <Select value={filter} onValueChange={setFilter}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Posts</SelectItem>
                  <SelectItem value="project_launch">Launches</SelectItem>
                  <SelectItem value="milestone">Milestones</SelectItem>
                  <SelectItem value="team_join">Team Updates</SelectItem>
                  <SelectItem value="idea_post">New Ideas</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="trending">Trending</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-6 max-w-4xl">
            {feedItems
              .filter(item => filter === "all" || item.type === filter)
              .map((item) => (
                <Card key={item.id} className="innovation-card cursor-pointer group" onClick={() => handleProjectClick(item.projectId)}>
                  <CardHeader className="pb-4">
                    <div className="flex items-start space-x-4">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback className="bg-gradient-to-r from-primary to-accent text-white">
                          {item.authorInitials}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          {getTypeIcon(item.type)}
                          <Badge variant="outline" className="text-xs">
                            {getTypeLabel(item.type)}
                          </Badge>
                          <span className="text-sm text-muted-foreground">•</span>
                          <span className="text-sm text-muted-foreground">{item.timestamp}</span>
                        </div>
                        
                        <h3 className="font-semibold text-lg group-hover:text-primary transition-colors mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-1">by {item.author}</p>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    
                    {item.tags && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                          <Heart className="h-4 w-4 mr-1" />
                          {item.likes}
                        </Button>
                        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                          <MessageCircle className="h-4 w-4 mr-1" />
                          {item.comments}
                        </Button>
                        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                          <Share2 className="h-4 w-4 mr-1" />
                          Share
                        </Button>
                      </div>
                      
                      {item.projectId && (
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/project/${item.projectId}`);
                          }}
                        >
                          View Project
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
          
          <div className="text-center py-8">
            <Button variant="outline">Load More Posts</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}