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
];

export function QFTSidebar() {
  return (
    <aside className="hidden lg:flex flex-col w-72 shrink-0 h-screen sticky top-0 glass-strong border-r border-violet/20 p-6 z-20">
      <div className="flex items-center gap-3 mb-10">
        <div className="relative">
          <div className="absolute inset-0 bg-violet rounded-xl blur-2xl opacity-70 animate-pulse-glow" />
          <div className="relative w-14 h-14 rounded-2xl glass-strong flex items-center justify-center shadow-glow-violet">
            <svg viewBox="0 0 40 40" className="w-9 h-9 text-violet">
              <g stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.9">
                <polygon points="20,4 34,12 34,28 20,36 6,28 6,12" />
                <polygon points="20,10 29,15 29,25 20,30 11,25 11,15" />
                <line x1="20" y1="4" x2="20" y2="36" />
                <line x1="6" y1="12" x2="34" y2="28" />
                <line x1="34" y1="12" x2="6" y2="28" />
              </g>
              <circle cx="20" cy="20" r="2" fill="currentColor" />
            </svg>
          </div>
        </div>
        <div>
          <div className="font-display text-3xl font-light tracking-tight text-glow-violet leading-none">QFT</div>
          <div className="text-[10px] text-muted-foreground tracking-[0.25em] uppercase mt-1">Quantum Field Theory</div>
        </div>
      </div>

      <nav className="flex flex-col gap-0.5">
        {items.map((it, i) => (
          <a
            key={it.url}
            href={it.url}
            className={`group flex items-center gap-3 px-4 py-2.5 rounded-xl text-[13px] transition-all relative overflow-hidden ${i === 0 ? "text-foreground bg-violet/15 border border-violet/30 shadow-glow-violet" : "text-muted-foreground hover:text-foreground hover:bg-violet/5"}`}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-violet/0 via-violet/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <it.icon className="w-4 h-4 relative shrink-0" />
            <span className="relative font-medium tracking-wide">{it.title}</span>
          </a>
        ))}
      </nav>

      <div className="mt-auto pt-8">
        <div className="glass rounded-2xl p-4 mb-4">
          <p className="font-display italic text-[13px] text-muted-foreground leading-relaxed">
            "The purpose of physics is not to conquer nature, but to understand her language."
          </p>
          <p className="text-[10px] text-violet mt-2 tracking-[0.25em] uppercase">— Heisenberg</p>
        </div>
        <div className="relative h-24 rounded-2xl overflow-hidden glass">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 rounded-full bg-cyan/40 blur-xl animate-pulse-glow" />
              <div className="absolute inset-3 rounded-full bg-cyan/80 shadow-glow-cyan" />
              <div className="absolute inset-0 rounded-full border border-cyan/40 animate-orbit" />
              <div className="absolute inset-2 rounded-full border border-violet/30 animate-orbit-reverse" />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
