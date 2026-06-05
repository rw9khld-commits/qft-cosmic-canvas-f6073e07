import { Atom, Sparkles, FlaskConical, Brain, Map, Compass, Waves, Infinity as InfIcon } from "lucide-react";

const items = [
  { title: "Overview", url: "/", icon: Compass },
  { title: "Derivations", url: "/derivations", icon: Atom },
  { title: "Visual Explorer", url: "/explorer", icon: Waves },
  { title: "Simulations", url: "/simulations", icon: FlaskConical },
  { title: "Quizzes", url: "/quizzes", icon: Brain },
  { title: "Roadmap", url: "/roadmap", icon: Map },
  { title: "Beyond Standard Model", url: "/beyond", icon: InfIcon },
];

export function QFTSidebar() {
  return (
    <aside className="hidden lg:flex flex-col w-72 shrink-0 h-screen sticky top-0 glass-strong border-r border-violet/20 p-6 z-20">
      <div className="flex items-center gap-3 mb-10">
        <div className="relative">
          <div className="absolute inset-0 bg-violet rounded-xl blur-xl opacity-60 animate-pulse-glow" />
          <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-violet to-cyan flex items-center justify-center shadow-glow-violet">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
        </div>
        <div>
          <div className="font-display text-2xl font-semibold tracking-tight text-glow-violet">QFT</div>
          <div className="text-xs text-muted-foreground tracking-widest uppercase">Decoder</div>
        </div>
      </div>

      <nav className="flex flex-col gap-1">
        {items.map((it, i) => (
          <a
            key={it.url}
            href={it.url}
            className={`group flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all relative overflow-hidden ${i === 0 ? "text-foreground bg-violet/15 border border-violet/30 shadow-glow-violet" : "text-muted-foreground hover:text-foreground"}`}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-violet/0 via-violet/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <it.icon className="w-4 h-4 relative" />
            <span className="relative font-medium tracking-wide">{it.title}</span>
          </a>
        ))}
      </nav>

      <div className="mt-auto pt-8 border-t border-violet/15">
        <p className="font-display italic text-sm text-muted-foreground leading-relaxed">
          "The universe is not only stranger than we imagine, it is stranger than we can imagine."
        </p>
        <p className="text-xs text-violet mt-2 tracking-widest uppercase">— Eddington</p>
      </div>
    </aside>
  );
}
