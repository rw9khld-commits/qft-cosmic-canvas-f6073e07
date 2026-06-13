import { Link } from "@tanstack/react-router";
import { ChevronRight, BookOpen, Zap, Compass } from "lucide-react";

/**
 * Enhanced navigation component showing the learning journey and current position.
 * Provides clear pathways through QFT concepts from basic to advanced.
 */
export function EnhancedNavigation() {
  const learningPath = [
    { title: "Fields", description: "The foundation of reality", icon: Compass, url: "/fields", level: "Foundational" },
    { title: "Lagrangian", description: "How fields move and interact", icon: Zap, url: "/lagrangian", level: "Foundational" },
    { title: "Feynman Diagrams", description: "Visualizing interactions", icon: BookOpen, url: "/feynman", level: "Intermediate" },
    { title: "Path Integral", description: "Sum over all possibilities", icon: Compass, url: "/path-integral", level: "Intermediate" },
    { title: "Renormalization", description: "Taming infinity", icon: Zap, url: "/renormalization", level: "Advanced" },
    { title: "Symmetries", description: "Hidden conservation laws", icon: BookOpen, url: "/symmetries", level: "Advanced" },
    { title: "Vacuum", description: "The quantum foam", icon: Compass, url: "/vacuum", level: "Advanced" },
  ];

  return (
    <nav className="glass-deep rounded-2xl p-6 md:p-8">
      <div className="mb-6">
        <h3 className="font-display text-2xl text-foreground/95 mb-2">Your Learning Journey</h3>
        <p className="text-sm text-muted-foreground">Progress through the architecture of Quantum Field Theory</p>
      </div>

      <div className="space-y-3">
        {learningPath.map((item, idx) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.url}
              to={item.url}
              className="group flex items-start gap-4 p-4 rounded-lg glass hover:bg-violet/5 transition-all"
            >
              <div className="flex-shrink-0 mt-1">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet to-cyan flex items-center justify-center">
                  <Icon className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-display text-lg text-foreground/90 group-hover:text-foreground transition">{item.title}</h4>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-cyan/70">{item.level}</span>
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
