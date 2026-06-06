import { createFileRoute, Link } from "@tanstack/react-router";
import { QFTSidebar } from "@/components/QFTSidebar";
import { QuantumCanvas } from "@/components/QuantumCanvas";
import { FieldWaveCanvas } from "@/components/FieldWaveCanvas";
import { RightRail } from "@/components/RightRail";
import {
  VizLagrangian, VizFeynman, VizPathIntegral, VizRenormalization, VizVacuum, VizSymmetries,
} from "@/components/FeatureVisuals";
import { ArrowRight, Eye, Camera, BookOpen, Cpu, Sigma, Settings, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "QFT Decoder — From Fields to Reality" },
      { name: "description", content: "Cinematic exploration of Quantum Field Theory: fields, Lagrangians, Feynman diagrams, path integrals, and beyond." },
    ],
  }),
  component: Index,
});

const features = [
  { title: "Lagrangian", action: "Inspect", Viz: VizLagrangian, eq: "ℒ = ψ̄(iγᵘDᵤ − m)ψ", url: "/lagrangian" },
  { title: "Feynman Diagram", action: "Build", Viz: VizFeynman, url: "/feynman" },
  { title: "Path Integral", action: "Visualize", Viz: VizPathIntegral, url: "/path-integral" },
  { title: "Renormalization", action: "Run", Viz: VizRenormalization, url: "/renormalization" },
  { title: "Vacuum", action: "Explore", Viz: VizVacuum, url: "/vacuum" },
  { title: "Symmetries", action: "Analyze", Viz: VizSymmetries, url: "/symmetries" },
] as const;

function Index() {
  return (
    <div className="relative min-h-screen flex text-foreground">
      <QuantumCanvas />
      <QFTSidebar />

      <main className="relative z-10 flex-1 min-w-0">
        {/* Top bar */}
        <div className="flex items-center justify-between gap-4 px-6 lg:px-10 py-5 border-b border-violet/10">
          <div className="text-[13px] leading-snug text-muted-foreground">
            <div>You are exploring the language of the universe.</div>
            <div className="text-foreground/70">Reality is a field. Particles are its poetry.</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="glass rounded-full flex items-center p-1 gap-1">
              {[Eye, Camera, BookOpen].map((Ic, i) => (
                <button key={i} className="w-9 h-9 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-violet/10 transition">
                  <Ic className="w-4 h-4" />
                </button>
              ))}
            </div>
            <button className="glass-strong rounded-full px-4 h-10 flex items-center gap-2 text-sm border-violet/50 text-violet shadow-glow-violet">
              <Cpu className="w-4 h-4" />
              Visual Engine
            </button>
            <button className="glass rounded-full px-4 h-10 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition">
              <Sigma className="w-4 h-4" />
              Math Mode
            </button>
            <button className="glass rounded-full w-10 h-10 flex items-center justify-center text-muted-foreground">
              <Settings className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex">
          <div className="flex-1 min-w-0 px-6 lg:px-10 py-8 space-y-8">
            {/* HERO */}
            <section className="relative rounded-3xl overflow-hidden glass-strong h-[560px]">
              <FieldWaveCanvas />
              <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/30" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/60" />

              <div className="relative z-10 p-10 lg:p-14 max-w-2xl">
                <h1 className="font-display font-light leading-[0.95] tracking-tight">
                  <span className="block text-5xl md:text-6xl lg:text-7xl text-gold text-glow-gold">Reality is</span>
                  <span className="block text-5xl md:text-6xl lg:text-7xl mt-1 bg-gradient-to-br from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
                    an Interacting Field.
                  </span>
                </h1>
                <p className="mt-8 font-display italic text-2xl text-violet text-glow-violet">
                  Explore. Interact. Understand.
                </p>
                <div className="mt-10">
                  <button className="group relative inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full glass-strong border-violet/40 hover:border-violet transition-all shadow-glow-violet">
                    <span className="font-medium tracking-wide">Start Exploration</span>
                    <span className="w-9 h-9 rounded-full bg-gradient-to-br from-violet to-cyan flex items-center justify-center shadow-glow-violet group-hover:scale-105 transition-transform">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </span>
                  </button>
                </div>
              </div>

              {/* Active Field panel */}
              <div className="hidden md:flex absolute right-6 top-6 bottom-6 w-[300px] flex-col z-10 glass-strong rounded-2xl p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">Active Field</span>
                  <span className="w-2 h-2 rounded-full bg-cyan shadow-glow-cyan animate-shimmer" />
                </div>
                <h3 className="font-display text-2xl mb-3">Electron Field</h3>
                <div className="relative aspect-square rounded-xl bg-gradient-to-br from-violet/30 via-background/40 to-cyan/20 overflow-hidden mb-4 border border-violet/30">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute w-28 h-28 rounded-full bg-violet/40 blur-2xl animate-pulse-glow" />
                    <svg viewBox="0 0 120 120" className="absolute inset-0 w-full h-full">
                      {Array.from({ length: 24 }).map((_, i) => {
                        const a = (i / 24) * Math.PI * 2;
                        return <line key={i} x1="60" y1="60" x2={60 + Math.cos(a) * 50} y2={60 + Math.sin(a) * 50} stroke="hsl(270 90% 70% / 0.25)" strokeWidth="0.5" />;
                      })}
                      <circle cx="60" cy="60" r="44" stroke="hsl(270 90% 70% / 0.3)" fill="none" />
                      <circle cx="60" cy="60" r="28" stroke="hsl(195 90% 70% / 0.4)" fill="none" />
                    </svg>
                    <div className="relative w-3 h-3 rounded-full bg-white shadow-glow-violet" />
                  </div>
                </div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">Field Properties</div>
                <div className="space-y-1.5 text-sm">
                  {[["Spin", "1/2"], ["Charge", "-e"], ["Mass", "0.511 MeV"], ["Type", "Fermion"]].map(([k, v]) => (
                    <div key={k} className="flex justify-between border-b border-violet/10 pb-1.5">
                      <span className="text-muted-foreground">{k}</span>
                      <span className="text-foreground">{v}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-4 inline-flex items-center justify-between gap-2 px-4 py-2.5 rounded-full glass border-violet/40 text-sm hover:border-violet hover:shadow-glow-violet transition-all">
                  <span>Visualize Field</span>
                  <ArrowRight className="w-3.5 h-3.5 text-violet" />
                </button>
              </div>
            </section>

            {/* Feature cards */}
            <section className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
              {features.map((f) => (
                <article key={f.title} className="group glass rounded-2xl p-4 hover:border-violet/50 hover:-translate-y-1 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full bg-violet/30 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="flex items-center justify-between mb-3 relative">
                    <h3 className="font-display text-lg">{f.title}</h3>
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan shadow-glow-cyan" />
                  </div>
                  {f.eq && <div className="text-[10px] text-cyan/80 mb-1 font-mono">{f.eq}</div>}
                  <div className="aspect-[5/3] rounded-xl overflow-hidden glass mb-3">
                    <f.Viz />
                  </div>
                  <button className="w-full glass rounded-lg py-1.5 text-xs tracking-wider uppercase text-muted-foreground hover:text-foreground hover:border-violet/40 transition">
                    {f.action}
                  </button>
                </article>
              ))}
            </section>

            {/* Beyond The Standard Model */}
            <section className="relative glass-strong rounded-3xl p-8 md:p-12 overflow-hidden">
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-violet via-gold to-cyan blur-[120px] animate-pulse-glow" />
              </div>

              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="font-display text-4xl md:text-5xl font-light leading-tight mb-4">
                    Beyond The <span className="italic text-gold text-glow-gold">Standard Model</span>
                  </h2>
                  <p className="text-muted-foreground text-base mb-8 leading-relaxed">
                    Infinity is not the end. It is the beginning of our questions.
                  </p>
                  <button className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass border-gold/40 hover:border-gold transition-all group">
                    <span className="font-medium">Enter the Unknown</span>
                    <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                <div className="relative h-48">
                  <svg viewBox="0 0 400 200" className="w-full h-full">
                    <defs>
                      <radialGradient id="bsm-core" cx="35%" cy="50%" r="40%">
                        <stop offset="0%" stopColor="hsl(45 100% 75%)" />
                        <stop offset="50%" stopColor="hsl(280 90% 50% / 0.4)" />
                        <stop offset="100%" stopColor="transparent" />
                      </radialGradient>
                    </defs>
                    <ellipse cx="140" cy="100" rx="120" ry="60" fill="url(#bsm-core)" />
                    {[15, 30, 45, 60].map((r, i) => (
                      <ellipse key={i} cx="140" cy="100" rx={r * 2.5} ry={r * 0.7} stroke={`hsl(45 80% 70% / ${0.5 - i * 0.1})`} fill="none" transform={`rotate(${-12 + i * 2} 140 100)`} />
                    ))}
                    <circle cx="140" cy="100" r="3" fill="white" />
                    {[["Dark Matter", 80], ["Quantum Gravity", 200], ["Vacuum Structure", 290], ["Hierarchy", 360]].map(([t, x], i) => (
                      <g key={i}>
                        <circle cx={x as number} cy="170" r="2" fill="hsl(195 90% 70%)" />
                        <text x={x as number} y="190" textAnchor="middle" fill="hsl(0 0% 70%)" fontSize="9">{t}</text>
                      </g>
                    ))}
                  </svg>
                </div>
              </div>
            </section>

            <footer className="py-8 text-center text-[11px] text-muted-foreground tracking-[0.25em] uppercase">
              <span className="inline-flex items-center gap-2"><Sparkles className="w-3 h-3 text-gold" />QFT Decoder · Decoding the language of the universe</span>
            </footer>
          </div>

          <RightRail />
        </div>
      </main>
    </div>
  );
}
