import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ArrowLeft, Users, Calendar, ExternalLink, Github, MessageCircle } from "lucide-react";
import { toast } from "sonner";

export default function ProjectPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock project data - in real app would fetch based on id
  const project = {
    id: Number(id) || 1,
    title: "EcoTrack - Carbon Footprint App",
    description: "A comprehensive mobile application designed to help students track and reduce their carbon footprint through gamification and social challenges. The app will feature real-time tracking of daily activities, personalized recommendations for sustainable choices, and a community platform for sharing eco-friendly tips and competing in environmental challenges.",
    fullDescription: `Our mission is to make sustainability engaging and accessible for college students. The EcoTrack app will include:

• **Activity Tracking**: Monitor daily carbon emissions from transportation, food choices, energy usage, and purchases
• **Gamification**: Earn points, badges, and compete with friends through eco-challenges
• **Personalized Insights**: AI-powered recommendations based on individual habits and campus resources
• **Social Features**: Join sustainability groups, share achievements, and participate in campus-wide initiatives
• **Impact Visualization**: See real-time environmental impact with beautiful data visualizations

We're looking for passionate team members who want to make a real difference in how students approach environmental responsibility.`,
    tags: ["Sustainability", "Mobile App", "React Native", "Environmental", "Gamification"],
    author: "Sarah Kim",
    members: [
      { name: "Sarah Kim", role: "Project Lead & UI/UX Designer", initials: "SK" },
      { name: "Mike Chen", role: "Frontend Developer", initials: "MC" },
      { name: "Lisa Johnson", role: "Data Scientist", initials: "LJ" }
    ],
    maxMembers: 5,
    status: "Active",
    startDate: "March 15, 2024",
    timeline: "6 months",
    requirements: [
      "React Native experience preferred",
      "Interest in environmental sustainability",
      "Ability to commit 8-10 hours per week",
      "Strong communication skills"
    ],
    goals: [
      "Launch MVP by end of semester",
      "Onboard 500+ students in pilot program",
      "Achieve 20% average carbon footprint reduction",
      "Partner with campus sustainability office"
    ]
  };

  const isTeamFull = project.members.length >= project.maxMembers;
  const isAlreadyMember = project.members.some(member => member.name === "Alex Chen"); // Mock current user

  const handleJoinProject = () => {
    if (isTeamFull) {
      toast.error("This team is already full");
      return;
    }
    if (isAlreadyMember) {
      toast.info("You're already a member of this project");
      return;
    }
    toast.success("Successfully joined the project! The team lead will contact you soon.");
  };

  const handleContactTeam = () => {
    toast.success("Message sent to project team!");
  };

  return (
    <div className="container mx-auto px-6 py-8 max-w-6xl">
      <Button
        onClick={() => navigate(-1)}
        variant="ghost"
        className="mb-6 hover:bg-muted"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Ideas
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="innovation-card">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Badge 
                  variant="outline" 
                  className="border-success text-success-foreground"
                >
                  {project.status}
                </Badge>
              </div>
            </CardHeader>
          </Card>

          <Card className="innovation-card">
            <CardHeader>
              <CardTitle>Project Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="prose max-w-none">
                <div className="whitespace-pre-line text-muted-foreground leading-relaxed">
                  {project.fullDescription}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="innovation-card">
            <CardHeader>
              <CardTitle>Project Goals</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {project.goals.map((goal, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{goal}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="innovation-card">
            <CardHeader>
              <CardTitle>Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {project.requirements.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-accent mt-2 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{req}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card className="innovation-card">
            <CardHeader>
              <CardTitle className="text-lg">Project Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center text-sm">
                <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                <span className="text-muted-foreground">Started {project.startDate}</span>
              </div>
              <div className="flex items-center text-sm">
                <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                <span className="text-muted-foreground">
                  {project.members.length}/{project.maxMembers} members
                </span>
              </div>
              <div className="pt-4">
                <Button
                  onClick={handleJoinProject}
                  className={`w-full mb-3 ${
                    isTeamFull || isAlreadyMember
                      ? "bg-muted text-muted-foreground cursor-not-allowed"
                      : "gradient-primary text-white hover:shadow-glow"
                  }`}
                  disabled={isTeamFull || isAlreadyMember}
                >
                  {isAlreadyMember 
                    ? "Already Joined" 
                    : isTeamFull 
                    ? "Team Full" 
                    : "Join Project"
                  }
                </Button>
                <Button
                  onClick={handleContactTeam}
                  variant="outline"
                  className="w-full"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Contact Team
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="innovation-card">
            <CardHeader>
              <CardTitle className="text-lg">Team Members</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {project.members.map((member, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-gradient-to-r from-primary to-accent text-white">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-sm">{member.name}</p>
                      <p className="text-xs text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="innovation-card">
            <CardHeader>
              <CardTitle className="text-lg">Project Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" size="sm" className="w-full justify-start">
                <Github className="h-4 w-4 mr-2" />
                View Repository
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                <ExternalLink className="h-4 w-4 mr-2" />
                Project Website
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}