import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { User, Lightbulb, FolderOpen, Users, Building2 } from "lucide-react";

export function Navigation() {
  const navItems = [
    { to: "/profile", icon: User, label: "Profile" },
    { to: "/innovation", icon: Lightbulb, label: "Innovation" },
    { to: "/industry", icon: Building2, label: "Industry" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-6">
        <NavLink to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg gradient-primary flex items-center justify-center">
            <FolderOpen className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            InnovatU
          </span>
        </NavLink>

        <nav className="flex items-center space-x-1">
          {navItems.map(({ to, icon: Icon, label }) => (
            <NavLink key={to} to={to}>
              {({ isActive }) => (
                <Button
                  variant={isActive ? "default" : "ghost"}
                  size="sm"
                  className={`flex items-center space-x-2 transition-all ${
                    isActive 
                      ? "gradient-primary text-white shadow-glow" 
                      : "hover:bg-muted"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{label}</span>
                </Button>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}