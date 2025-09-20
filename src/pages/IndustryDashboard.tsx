import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Star, Users, TrendingUp, Mail, ExternalLink, Search, Filter } from "lucide-react";
import { toast } from "sonner";

interface Student {
  id: number;
  name: string;
  initials: string;
  year: string;
  major: string;
  skills: string[];
  projects: string[];
  rating: number;
  completedProjects: number;
}

interface TopProject {
  id: number;
  title: string;
  description: string;
  team: string[];
  category: string;
  impact: string;
  stage: string;
  fundingRaised?: string;
}

export default function IndustryDashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [skillFilter, setSkillFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const topStudents: Student[] = [
    {
      id: 1,
      name: "Sarah Kim",
      initials: "SK",
      year: "Senior",
      major: "Computer Science",
      skills: ["React Native", "UI/UX", "Sustainability"],
      projects: ["EcoTrack App", "Green Campus Initiative"],
      rating: 4.9,
      completedProjects: 3
    },
    {
      id: 2,
      name: "Marcus Johnson",
      initials: "MJ",
      year: "Junior",
      major: "Data Science",
      skills: ["Machine Learning", "Python", "AI"],
      projects: ["StudyBuddy AI", "Predictive Analytics Dashboard"],
      rating: 4.8,
      completedProjects: 2
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      initials: "ER",
      year: "Senior",
      major: "Social Innovation",
      skills: ["Social Impact", "Project Management", "Community Outreach"],
      projects: ["Food Waste Tracker", "Student Support Network"],
      rating: 4.9,
      completedProjects: 4
    },
    {
      id: 4,
      name: "David Park",
      initials: "DP",
      year: "Graduate",
      major: "Psychology & CS",
      skills: ["Mental Health Tech", "Research", "Statistics"],
      projects: ["Mental Health Bot", "Wellness Analytics Platform"],
      rating: 4.7,
      completedProjects: 2
    },
    {
      id: 5,
      name: "Zoe Chen",
      initials: "ZC",
      year: "Senior",
      major: "Computer Graphics",
      skills: ["AR/VR", "Unity", "3D Modeling"],
      projects: ["AR Navigation", "Virtual Campus Tours"],
      rating: 4.8,
      completedProjects: 3
    },
    {
      id: 6,
      name: "Alex Thompson",
      initials: "AT",
      year: "Graduate",
      major: "Blockchain & Finance",
      skills: ["Blockchain", "Smart Contracts", "FinTech"],
      projects: ["Academic Credits Chain", "DeFi Learning Platform"],
      rating: 4.6,
      completedProjects: 1
    }
  ];

  const topProjects: TopProject[] = [
    {
      id: 1,
      title: "EcoTrack Carbon Footprint App",
      description: "Gamified sustainability tracking for students with social challenges and environmental impact visualization.",
      team: ["Sarah Kim", "Mike Chen", "Lisa Johnson"],
      category: "Sustainability",
      impact: "500+ users, 20% avg carbon reduction",
      stage: "Market Ready",
      fundingRaised: "$25K"
    },
    {
      id: 2,
      title: "StudyBuddy AI Tutor",
      description: "Personalized AI learning assistant that adapts to individual learning styles and academic needs.",
      team: ["Marcus Johnson", "Emma Martinez", "Tyler Wong"],
      category: "EdTech",
      impact: "1,200+ users, 85% satisfaction rate",
      stage: "Scaling",
      fundingRaised: "$50K"
    },
    {
      id: 3,
      title: "Mental Health Check-in Platform",
      description: "Anonymous peer support network with mood tracking and mental health resource recommendations.",
      team: ["David Park", "Anna Sullivan", "Chris Lee", "Maya Patel"],
      category: "HealthTech",
      impact: "800+ active users, partnership with counseling center",
      stage: "Campus Deployment"
    },
    {
      id: 4,
      title: "AR Campus Navigation",
      description: "Augmented reality wayfinding app for new students with interactive building information and event discovery.",
      team: ["Zoe Chen", "Jake Morrison", "Priya Sharma"],
      category: "AR/VR",
      impact: "Featured in university marketing, 95% user retention",
      stage: "Market Ready"
    }
  ];

  const handleContactStudent = (studentName: string) => {
    toast.success(`Contact request sent to ${studentName}!`);
  };

  const handleContactProject = (projectTitle: string) => {
    toast.success(`Interest expressed in ${projectTitle}! Team will be notified.`);
  };

  const filteredStudents = topStudents.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         student.major.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSkill = skillFilter === "all" || student.skills.some(skill => 
      skill.toLowerCase().includes(skillFilter.toLowerCase()));
    return matchesSearch && matchesSkill;
  });

  const filteredProjects = topProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "all" || project.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Industry Dashboard</h1>
        <p className="text-muted-foreground">Discover exceptional student talent and innovative projects ready for industry collaboration</p>
      </div>

      {/* Search and Filters */}
      <Card className="innovation-card mb-8">
        <CardContent className="pt-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search students, skills, or projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex gap-3">
              <Select value={skillFilter} onValueChange={setSkillFilter}>
                <SelectTrigger className="w-40">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Skills" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Skills</SelectItem>
                  <SelectItem value="react">React/Frontend</SelectItem>
                  <SelectItem value="ai">AI/ML</SelectItem>
                  <SelectItem value="blockchain">Blockchain</SelectItem>
                  <SelectItem value="ar">AR/VR</SelectItem>
                  <SelectItem value="sustainability">Sustainability</SelectItem>
                </SelectContent>
              </Select>

              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="EdTech">EdTech</SelectItem>
                  <SelectItem value="HealthTech">HealthTech</SelectItem>
                  <SelectItem value="Sustainability">Sustainability</SelectItem>
                  <SelectItem value="AR/VR">AR/VR</SelectItem>
                  <SelectItem value="FinTech">FinTech</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Top Students */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <Star className="h-6 w-6 mr-2 text-primary" />
            Top Students
          </h2>
          
          <div className="space-y-4">
            {filteredStudents.map((student) => (
              <Card key={student.id} className="innovation-card">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback className="bg-gradient-to-r from-primary to-accent text-white">
                          {student.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-lg">{student.name}</h3>
                        <p className="text-sm text-muted-foreground">{student.year} • {student.major}</p>
                        <div className="flex items-center mt-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="ml-1 text-sm font-medium">{student.rating}</span>
                          <span className="ml-2 text-sm text-muted-foreground">
                            {student.completedProjects} projects completed
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium mb-2">Skills</p>
                      <div className="flex flex-wrap gap-1">
                        {student.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-medium mb-2">Recent Projects</p>
                      <div className="space-y-1">
                        {student.projects.map((project) => (
                          <p key={project} className="text-xs text-muted-foreground">
                            • {project}
                          </p>
                        ))}
                      </div>
                    </div>

                    <Button
                      onClick={() => handleContactStudent(student.name)}
                      className="w-full gradient-primary text-white"
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Contact Student
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Top Projects */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <TrendingUp className="h-6 w-6 mr-2 text-primary" />
            Featured Projects
          </h2>
          
          <div className="space-y-4">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="innovation-card">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">{project.title}</CardTitle>
                      <Badge variant="outline" className="border-primary text-primary">
                        {project.category}
                      </Badge>
                    </div>
                    <Badge 
                      variant="secondary"
                      className={
                        project.stage === "Market Ready" 
                          ? "bg-success text-success-foreground" 
                          : project.stage === "Scaling"
                          ? "bg-warning text-warning-foreground"
                          : "bg-muted"
                      }
                    >
                      {project.stage}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium mb-1">Team</p>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          {project.team.join(", ")}
                        </span>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-medium mb-1">Impact</p>
                      <p className="text-sm text-muted-foreground">{project.impact}</p>
                    </div>

                    {project.fundingRaised && (
                      <div>
                        <p className="text-sm font-medium mb-1">Funding Raised</p>
                        <p className="text-sm text-success font-semibold">{project.fundingRaised}</p>
                      </div>
                    )}

                    <div className="flex gap-2 pt-2">
                      <Button
                        onClick={() => handleContactProject(project.title)}
                        className="flex-1 gradient-primary text-white"
                      >
                        Express Interest
                      </Button>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}