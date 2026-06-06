import { Link, useRouterState } from "@tanstack/react-router";
import { Home, Sparkles, Atom, Sigma, Shuffle, GitBranch, Infinity as InfIcon, CircleDot, Layers, Telescope } from "lucide-react";

const items = [
  { title: "Overview", url: "/", icon: Home },
  { title: "Fields", url: "/fields", icon: CircleDot },
  { title: "Lagrangian", url: "/lagrangian", icon: Sigma },
  { title: "Symmetries", url: "/symmetries", icon: Shuffle },
  { title: "Feynman Diagram", url: "/feynman", icon: GitBranch },
  { title: "Path Integral", url: "/path-integral", icon: Atom },
  { title: "Renormalization", url: "/renormalization", icon: Layers },
  { title: "Vacuum", url: "/vacuum", icon: Telescope },
  { title: "Advanced", url: "/advanced", icon: Sparkles },
  { title: "Beyond the Standard Model", url: "/beyond", icon: InfIcon },
] as const;

export function QFTSidebar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <aside className="hidden lg:flex flex-col w-72 shrink-0 h-screen sticky top-0 glass-strong border-r border-violet/15 p-6 z-20">
      <Link to="/" className="flex items-center gap-3 mb-10 group">
        <div className="relative">
          <div className="absolute inset-0 bg-violet/40 rounded-xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
          <div className="relative w-12 h-12 rounded-2xl glass flex items-center justify-center">
            <svg viewBox="0 0 40 40" className="w-8 h-8 text-violet/90">
              <g stroke="currentColor" strokeWidth="0.7" fill="none" opacity="0.85">
                <polygon points="20,4 34,12 34,28 20,36 6,28 6,12" />
                <polygon points="20,10 29,15 29,25 20,30 11,25 11,15" />
                <line x1="20" y1="4" x2="20" y2="36" />
                <line x1="6" y1="12" x2="34" y2="28" />
                <line x1="34" y1="12" x2="6" y2="28" />
              </g>
              <circle cx="20" cy="20" r="1.8" fill="currentColor" />
            </svg>
          </div>
        </div>
        <div>
          <div className="font-display text-2xl font-light tracking-tight text-foreground/95 leading-none">QFT</div>
          <div className="text-[9px] text-muted-foreground tracking-[0.3em] uppercase mt-1.5">Quantum Field Theory</div>
        </div>
      </Link>

      <nav className="flex flex-col gap-0.5">
        {items.map((it) => {
          const active = pathname === it.url;
          return (
            <Link
              key={it.url}
              to={it.url}
              className={`group flex items-center gap-3 px-4 py-2.5 rounded-xl text-[13px] transition-all relative overflow-hidden ${
                active
                  ? "text-foreground bg-violet/10 border border-violet/25"
                  : "text-muted-foreground hover:text-foreground hover:bg-violet/5 border border-transparent"
              }`}
            >
              <it.icon className="w-4 h-4 relative shrink-0 opacity-80" />
              <span className="relative font-medium tracking-wide">{it.title}</span>
              {active && <span className="ml-auto w-1 h-1 rounded-full bg-cyan/80" />}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto pt-8">
        <div className="glass rounded-2xl p-4">
          <p className="font-display italic text-[13px] text-muted-foreground/90 leading-relaxed">
            "The purpose of physics is not to conquer nature, but to understand her language."
          </p>
          <p className="text-[10px] text-violet/70 mt-2 tracking-[0.25em] uppercase">— Heisenberg</p>
        </div>
      </div>
    </aside>
  );
}
