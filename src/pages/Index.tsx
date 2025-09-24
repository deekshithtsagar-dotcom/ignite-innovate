import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Users, TrendingUp, Star, ArrowRight, Rocket } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const stats = [
    { label: "Active Projects", value: "124", icon: Rocket },
    { label: "Students", value: "850+", icon: Users },
    { label: "Success Rate", value: "89%", icon: TrendingUp },
    { label: "Industry Partners", value: "23", icon: Star },
  ];

  const featuredProjects = [
    {
      title: "EcoTrack Carbon App",
      description: "Gamified sustainability tracking for students",
      team: "Sarah Kim + 2 others",
      status: "Seeking members"
    },
    {
      title: "StudyBuddy AI Tutor",
      description: "Personalized AI learning assistant",
      team: "Marcus Johnson + 3 others", 
      status: "Active"
    },
    {
      title: "Mental Health Bot",
      description: "Anonymous peer support platform",
      team: "David Park + 4 others",
      status: "Beta testing"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-6 gradient-subtle overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  INNOVEXA
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Where student innovation comes to life. Connect with like-minded creators, 
                join groundbreaking projects, and build the future together.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="gradient-primary text-white shadow-glow hover:shadow-large text-lg px-8 py-6"
                onClick={() => navigate("/innovation")}
              >
                <Lightbulb className="mr-2 h-5 w-5" />
                Explore Ideas
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 hover:bg-muted"
                onClick={() => navigate("/profile")}
              >
                <Users className="mr-2 h-5 w-5" />
                Join Community
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="innovation-card text-center">
                <CardContent className="pt-6 space-y-3">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full gradient-primary">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold">{stat.value}</p>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Innovation Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the latest student projects making real impact on campus and beyond
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="innovation-card group cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge 
                      variant={project.status === "Active" ? "default" : "secondary"}
                      className={project.status === "Active" ? "gradient-primary text-white" : ""}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-1" />
                    {project.team}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate("/innovation")}
              className="hover:bg-muted"
            >
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <Card className="innovation-card gradient-subtle border-0 shadow-large">
            <CardContent className="text-center py-12 px-8">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Turn Your Ideas Into Reality?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join a vibrant community of student innovators, collaborate on meaningful projects, 
                and make your mark on the world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="gradient-primary text-white shadow-glow"
                  onClick={() => navigate("/profile")}
                >
                  Create Your Profile
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => navigate("/innovation")}
                >
                  Explore Community
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;