import type { ReactElement } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { QFTSidebar } from "@/components/QFTSidebar";
import { QuantumCanvas } from "@/components/QuantumCanvas";
import { QuantumFieldHero } from "@/components/QuantumFieldHero";
import { RightRail } from "@/components/RightRail";
import { ActiveFieldCard } from "@/components/ActiveFieldCard";
import { LearningJourney } from "@/components/LearningJourney";
import { Reveal } from "@/components/Reveal";
import {
  VizLagrangian, VizFeynman, VizPathIntegral, VizRenormalization, VizVacuum, VizSymmetries,
} from "@/components/FeatureVisuals";
import { ArrowRight, Sparkles, Sigma, Cpu, Eye, BookOpen, MousePointer2 } from "lucide-react";

export const Route = createFileRoute("/index_backup")({
  head: () => ({
    meta: [
      { title: "QFT Decoder — From Fields to Reality" },
      { name: "description", content: "A cinematic, interactive journey into Quantum Field Theory — the deepest description of reality we have." },
    ],
  }),
  component: Index,
});

type Feature = { title: string; tag: string; blurb: string; Viz: () => ReactElement; eq?: string; url: string };

const features: Feature[] = [
  { title: "Lagrangian",      tag: "Dynamics",          blurb: "A single elegant line of mathematics that quietly describes how every field moves, oscillates, and interacts.", Viz: VizLagrangian,      eq: "ℒ = ψ̄(iγᵘ∂ᵤ − m)ψ", url: "/lagrangian" },
  { title: "Feynman Diagram", tag: "Interactions",      blurb: "Pictures of probability. Each line a particle, each vertex a moment where reality decides what happens next.", Viz: VizFeynman,                                  url: "/feynman" },
  { title: "Path Integral",   tag: "Sum over Histories",blurb: "A particle considers every possible route between two points. What we observe is the harmony of them all.",   Viz: VizPathIntegral,                              url: "/path-integral" },
  { title: "Renormalization", tag: "Scale",             blurb: "The graceful art of taming infinity — the recognition that physics only answers the questions we frame well.", Viz: VizRenormalization, eq: "Z(Λ) = 1 + g²/16π² ln Λ/μ", url: "/renormalization" },
  { title: "Vacuum",          tag: "Zero-Point",        blurb: "Empty space is the loudest silence in physics — a calm sea humming with the possibility of every particle.",  Viz: VizVacuum,                                    url: "/vacuum" },
  { title: "Symmetries",      tag: "Invariance",        blurb: "Every conservation law is a hidden symmetry. The universe protects what it leaves unchanged by motion.",      Viz: VizSymmetries,                                url: "/symmetries" },
];

function Index() {
  return (
    <div className="relative min-h-screen flex text-foreground">
      <QuantumCanvas />
      <QFTSidebar />

      <main className="relative z-10 flex-1 min-w-0">
        {/* Top bar */}
        <div className="hidden md:flex items-center justify-between gap-4 px-6 lg:px-10 py-5 border-b border-violet/10">
          <div className="text-[13px] leading-snug text-muted-foreground">
            <div className="text-foreground/85">You are exploring the language of the universe.</div>
            <div className="italic font-display text-[15px] text-foreground/60">Reality is a field. Particles are its poetry.</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="glass rounded-full flex items-center p-1 gap-1">
              {[Eye, BookOpen, Sigma].map((Ic, i) => (
                <button key={i} className="w-9 h-9 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-violet/10 transition">
                  <Ic className="w-4 h-4" />
                </button>
              ))}
            </div>
            <button className="glass-strong rounded-full px-4 h-10 flex items-center gap-2 text-sm border-violet/40 text-violet shadow-glow-violet">
              <Cpu className="w-4 h-4" />
              Visual Engine
            </button>
          </div>
        </div>

        <div className="flex">
          <div className="flex-1 min-w-0 px-4 sm:px-6 lg:px-10 py-6 md:py-8 space-y-10 md:space-y-16">
            {/* HERO */}
            <section className="relative rounded-3xl overflow-hidden glass-strong h-[80vh] min-h-[560px] md:h-[680px]">
              <QuantumFieldHero />
              {/* Layered veils so text always reads */}
              <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-background/15 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/80 pointer-events-none" />

              <div className="relative z-10 h-full flex flex-col justify-between p-6 sm:p-10 lg:p-14">
                <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-8">
                  <div className="max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-[10px] tracking-[0.3em] uppercase text-violet/90 mb-6">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-shimmer" />
                      Quantum Field Theory · Interactive
                    </div>
                    <h1 className="font-display font-light leading-[0.95] tracking-tight">
                      <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gold text-glow-gold">Reality is</span>
                      <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-1 bg-gradient-to-br from-foreground via-foreground/95 to-foreground/70 bg-clip-text text-transparent">
                        an Interacting Field.
                      </span>
                    </h1>
                    <p className="mt-6 md:mt-8 text-base md:text-lg text-foreground/80 leading-relaxed max-w-xl font-light">
                      Beneath every particle, every photon, every quiet atom, a continuous ocean of fields fills all of space. What we call <em className="text-foreground/95 not-italic font-normal">matter</em> is its ripples. What we call <em className="text-foreground/95 not-italic font-normal">force</em> is its gentle conversation with itself.
                    </p>
                    <p className="mt-4 font-display italic text-xl md:text-2xl text-violet text-glow-violet">
                      Explore. Interact. Understand.
                    </p>

                    <div className="mt-8 md:mt-10 flex flex-wrap items-center gap-3">
                      <Link
                        to="/fields"
                        className="group relative inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full glass-strong border-violet/50 hover:border-violet transition-all shadow-glow-violet"
                      >
                        <span className="font-medium tracking-wide">Start Exploration</span>
                        <span className="w-9 h-9 rounded-full bg-gradient-to-br from-violet to-cyan flex items-center justify-center group-hover:scale-110 transition-transform">
                          <ArrowRight className="w-4 h-4 text-white" />
                        </span>
                      </Link>
                      <Link
                        to="/feynman"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-full glass text-sm text-muted-foreground hover:text-foreground transition-all"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-gold" />
                        See an Interaction
                      </Link>
                    </div>
                  </div>

                  {/* Active Field card — desktop only inside hero */}
                  <div className="hidden xl:block shrink-0">
                    <ActiveFieldCard />
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-muted-foreground/70">
                  <MousePointer2 className="w-3 h-3" />
                  Move your cursor — the vacuum responds
                </div>
              </div>
            </section>

            {/* Active Field card for medium screens (below hero) */}
            <div className="xl:hidden flex justify-center">
              <ActiveFieldCard />
            </div>

            {/* Calm philosophical intro */}
            <Reveal as="section" className="max-w-3xl">
              <div className="text-[10px] tracking-[0.4em] uppercase text-violet/80 mb-3">A Quiet Beginning</div>
              <p className="font-display text-2xl md:text-3xl text-foreground/90 leading-snug font-light">
                Imagine the universe not as a collection of things, but as a calm surface of water — and everything we have ever called a <em className="italic text-gold/90">particle</em> is simply a ripple passing through.
              </p>
              <p className="mt-5 text-[15px] text-muted-foreground leading-relaxed font-light">
                Quantum Field Theory is the language physicists use to describe that surface. It is the most accurate theory humanity has ever written, and yet its message is gentle: reality is continuous, reality is shared, and every particle in your body is borrowed momentarily from a field that stretches across the cosmos.
              </p>
            </Reveal>

            {/* Three pillars */}
            <Reveal as="section">
              <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                {[
                  { n: "I",   t: "Fields are fundamental.",      b: "Forget particles as tiny spheres. The deepest layer of reality is a smooth field stretched across every point in space — one for electrons, one for photons, one for each kind of matter that exists." },
                  { n: "II",  t: "Particles are excitations.",   b: "When a field vibrates, we perceive a particle. An electron is a knot of energy in the electron field. A photon is a ripple of light in the electromagnetic one. The same field, expressing itself in many voices." },
                  { n: "III", t: "Interactions are conversations.", b: "Forces are not magic acting across emptiness. They are fields whispering to one another — photons passed between charges, gluons holding quarks together, fields gently shaping fields." },
                ].map((c) => (
                  <article key={c.n} className="glass-deep rounded-2xl p-6 md:p-7 relative overflow-hidden group">
                    <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-violet/10 blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="relative">
                      <div className="font-display text-xs text-gold/80 tracking-[0.4em] mb-2">{c.n}</div>
                      <h3 className="font-display text-2xl md:text-[1.6rem] leading-tight text-foreground/95 mb-3">{c.t}</h3>
                      <p className="text-[14.5px] leading-relaxed text-muted-foreground font-light">{c.b}</p>
                    </div>
                  </article>
                ))}
              </div>
            </Reveal>

            {/* Learning Journey */}
            <Reveal>
              <LearningJourney />
            </Reveal>

            {/* Feature cards */}
            <Reveal as="section">
              <div className="flex items-end justify-between mb-5 md:mb-6">
                <div>
                  <div className="text-[10px] tracking-[0.4em] uppercase text-violet/80 mb-2">Six Pillars</div>
                  <h2 className="font-display text-3xl md:text-4xl font-light text-foreground/95">The architecture of a field theory</h2>
                </div>
                <Link to="/fields" className="hidden md:inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition group">
                  Explore all <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                {features.map((f) => (
                  <Link
                    key={f.title}
                    to={f.url}
                    className="group glass-deep rounded-2xl p-5 hover:border-violet/45 hover:-translate-y-1 transition-all duration-500 relative overflow-hidden block"
                  >
                    <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-violet/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="relative">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[9px] tracking-[0.35em] uppercase text-cyan/70">{f.tag}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan/70" />
                      </div>
                      <h3 className="font-display text-2xl text-foreground/95 mb-1">{f.title}</h3>
                      {f.eq && <div className="text-[10px] text-cyan/80 mb-3 font-mono">{f.eq}</div>}
                      <div className="aspect-[16/9] rounded-xl overflow-hidden glass mb-3">
                        <f.Viz />
                      </div>
                      <p className="text-[13px] leading-relaxed text-muted-foreground font-light">{f.blurb}</p>
                      <div className="mt-4 inline-flex items-center gap-1.5 text-[11px] tracking-[0.2em] uppercase text-violet/80 group-hover:text-violet transition">
                        Explore <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </Reveal>

            {/* Beyond The Standard Model */}
            <Reveal as="section">
              <div className="relative glass-strong rounded-3xl p-8 md:p-12 overflow-hidden">
                <div className="absolute inset-0 opacity-25 pointer-events-none">
                  <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-violet via-gold to-cyan blur-[120px] animate-pulse-glow" />
                </div>

                <div className="relative grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="text-[10px] tracking-[0.4em] uppercase text-gold/80 mb-4">The Frontier</div>
                    <h2 className="font-display text-4xl md:text-5xl font-light leading-tight mb-5">
                      Beyond the <span className="italic text-gold text-glow-gold">Standard Model</span>
                    </h2>
                    <p className="text-muted-foreground text-base mb-3 leading-relaxed font-light">
                      Quantum Field Theory explains almost everything we have measured, and nearly nothing of what we cannot yet see. Dark matter, the weight of the vacuum, the quantum nature of gravity itself — these remain the open horizons of physics.
                    </p>
                    <p className="font-display italic text-lg text-foreground/85 mb-8">
                      Infinity is not the end. It is the beginning of our questions.
                    </p>
                    <Link to="/beyond" className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass border-gold/40 hover:border-gold/70 hover:shadow-glow-gold transition-all group">
                      <span className="font-medium">Enter the Unknown</span>
                      <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  <div className="relative h-56">
                    <svg viewBox="0 0 400 220" className="w-full h-full">
                      <defs>
                        <radialGradient id="bsm-core" cx="35%" cy="50%" r="40%">
                          <stop offset="0%" stopColor="hsl(45 100% 75%)" />
                          <stop offset="45%" stopColor="hsl(280 90% 55% / 0.45)" />
                          <stop offset="100%" stopColor="transparent" />
                        </radialGradient>
                      </defs>
                      <ellipse cx="140" cy="110" rx="130" ry="70" fill="url(#bsm-core)" />
                      {[15, 28, 42, 58, 76].map((r, i) => (
                        <ellipse key={i} cx="140" cy="110" rx={r * 2.4} ry={r * 0.75} stroke={`hsl(45 80% 70% / ${0.5 - i * 0.08})`} fill="none" transform={`rotate(${-15 + i * 3} 140 110)`} />
                      ))}
                      <circle cx="140" cy="110" r="3.5" fill="white" />
                      {[["Dark Matter", 70], ["Quantum Gravity", 195], ["Vacuum Energy", 295], ["Hierarchy", 370]].map(([t, x], i) => (
                        <g key={i}>
                          <line x1={x as number} y1="180" x2={x as number} y2="195" stroke="hsl(195 90% 70% / 0.4)" />
                          <circle cx={x as number} cy="195" r="2" fill="hsl(195 90% 70%)" />
                          <text x={x as number} y="212" textAnchor="middle" fill="hsl(0 0% 70%)" fontSize="9" letterSpacing="1">{t}</text>
                        </g>
                      ))}
                    </svg>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Closing thought */}
            <Reveal as="section" className="max-w-3xl mx-auto text-center py-6">
              <div className="text-[10px] tracking-[0.4em] uppercase text-violet/80 mb-4">A Closing Thought</div>
              <p className="font-display italic text-2xl md:text-3xl text-foreground/90 leading-snug font-light">
                "What we observe is not nature itself, but nature exposed to our method of questioning."
              </p>
              <p className="mt-3 text-[11px] tracking-[0.3em] uppercase text-gold/70">— Werner Heisenberg</p>
            </Reveal>

            <footer className="py-10 text-center text-[10px] text-muted-foreground tracking-[0.35em] uppercase">
              <span className="inline-flex items-center gap-2"><Sparkles className="w-3 h-3 text-gold" />QFT Decoder · Decoding the language of the universe</span>
            </footer>
          </div>

          <RightRail />
        </div>
      </main>
    </div>
  );
}
