import type { ReactElement } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { QFTSidebar } from "@/components/QFTSidebar";
import { QuantumCanvas } from "@/components/QuantumCanvas";
import { QuantumFieldHeroElevated } from "@/components/QuantumFieldHeroElevated";
import { RightRail } from "@/components/RightRail";
import { ActiveFieldCard } from "@/components/ActiveFieldCard";
import { LearningJourney } from "@/components/LearningJourney";
import { Reveal } from "@/components/Reveal";
import {
  VizLagrangian, VizFeynman, VizPathIntegral, VizRenormalization, VizVacuum, VizSymmetries,
} from "@/components/FeatureVisuals";
import { ArrowRight, Sparkles, Sigma, Cpu, Eye, BookOpen, MousePointer2, Zap, Compass } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "QFT Cosmic Canvas — The Universe as a Living Field" },
      { name: "description", content: "A cinematic, philosophical, and deeply interactive journey into Quantum Field Theory. Discover how reality emerges from the dance of infinite fields." },
    ],
  }),
  component: Index,
});

type Feature = { title: string; tag: string; blurb: string; Viz: () => ReactElement; eq?: string; url: string };

const features: Feature[] = [
  { title: "Lagrangian",      tag: "Dynamics",          blurb: "The heartbeat of creation. One elegant equation that whispers how every field dances through spacetime, how they oscillate, how they speak to one another.", Viz: VizLagrangian,      eq: "ℒ = ψ̄(iγᵘ∂ᵤ − m)ψ", url: "/lagrangian" },
  { title: "Feynman Diagram", tag: "Interactions",      blurb: "The poetry of probability. Each line traces a particle's journey, each vertex a moment where the universe makes a choice, where possibility becomes event.", Viz: VizFeynman,                                  url: "/feynman" },
  { title: "Path Integral",   tag: "Sum over Histories",blurb: "Reality is not a single path, but a symphony of all possible paths. The universe explores every route, and what we witness is the harmony of infinite possibilities converging.",   Viz: VizPathIntegral,                              url: "/path-integral" },
  { title: "Renormalization", tag: "Scale",             blurb: "The art of asking the right questions. How to gently tame infinity, how to understand that physics speaks only to what we choose to measure.", Viz: VizRenormalization, eq: "Z(Λ) = 1 + g²/16π² ln Λ/μ", url: "/renormalization" },
  { title: "Vacuum",          tag: "Zero-Point",        blurb: "The deepest silence is not empty. Empty space seethes with virtual particles, a quantum foam where creation and annihilation dance in eternal rhythm.",  Viz: VizVacuum,                                    url: "/vacuum" },
  { title: "Symmetries",      tag: "Invariance",        blurb: "The universe's deepest laws are its symmetries. Every conservation law is a hidden truth — what remains unchanged is what truly matters.",      Viz: VizSymmetries,                                url: "/symmetries" },
];

function Index() {
  return (
    <div className="relative min-h-screen flex text-foreground">
      <QuantumCanvas />
      <QFTSidebar />

      <main className="relative z-10 flex-1 min-w-0">
        {/* Enhanced Top Bar */}
        <div className="hidden md:flex items-center justify-between gap-4 px-6 lg:px-10 py-5 border-b border-violet/10 backdrop-blur-sm">
          <div className="text-[13px] leading-snug text-muted-foreground">
            <div className="text-foreground/90 font-medium">You are exploring the language of the universe.</div>
            <div className="italic font-display text-[15px] text-foreground/65 mt-1">Where fields dance, reality emerges.</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="glass rounded-full flex items-center p-1 gap-1">
              {[Eye, BookOpen, Sigma].map((Ic, i) => (
                <button key={i} className="w-9 h-9 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-violet/10 transition">
                  <Ic className="w-4 h-4" />
                </button>
              ))}
            </div>
            <button className="glass-strong rounded-full px-4 h-10 flex items-center gap-2 text-sm border-violet/40 text-violet shadow-glow-violet hover:shadow-glow-gold transition-all">
              <Zap className="w-4 h-4" />
              Quantum Engine
            </button>
          </div>
        </div>

        <div className="flex">
          <div className="flex-1 min-w-0 px-4 sm:px-6 lg:px-10 py-6 md:py-8 space-y-12 md:space-y-20">
            {/* HERO SECTION */}
            <section className="relative rounded-3xl overflow-hidden glass-strong h-[80vh] min-h-[560px] md:h-[720px]">
              <QuantumFieldHeroElevated />
              {/* Sophisticated layered veils for text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-background/20 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/85 pointer-events-none" />

              <div className="relative z-10 h-full flex flex-col justify-between p-6 sm:p-10 lg:p-16">
                <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-10">
                  <div className="max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-[10px] tracking-[0.3em] uppercase text-violet/90 mb-8">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-shimmer" />
                      Quantum Field Theory · Philosophical · Interactive
                    </div>
                    <h1 className="font-display font-light leading-[0.92] tracking-tight">
                      <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-gold text-glow-gold">Reality</span>
                      <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl mt-2 bg-gradient-to-br from-cyan via-foreground to-violet bg-clip-text text-transparent">
                        is a Living Field.
                      </span>
                    </h1>
                    <p className="mt-8 md:mt-10 text-base md:text-lg text-foreground/85 leading-relaxed max-w-2xl font-light">
                      Beneath the surface of existence lies a profound truth: the universe is not made of things, but of <em className="text-cyan/95 not-italic font-medium">fields</em>. Infinite, continuous, and alive with possibility. What we call matter is merely the universe's way of speaking to itself through vibrations. What we call force is the gentle conversation between fields across the void.
                    </p>
                    <p className="mt-6 font-display italic text-2xl md:text-3xl text-violet text-glow-violet">
                      Begin your journey into the deepest layer of reality.
                    </p>

                    <div className="mt-10 md:mt-12 flex flex-wrap items-center gap-4">
                      <Link
                        to="/fields"
                        className="group relative inline-flex items-center gap-3 pl-6 pr-3 py-3 rounded-full glass-strong border-violet/50 hover:border-violet transition-all shadow-glow-violet hover:shadow-glow-gold"
                      >
                        <span className="font-medium tracking-wide">Begin Exploration</span>
                        <span className="w-9 h-9 rounded-full bg-gradient-to-br from-violet to-cyan flex items-center justify-center group-hover:scale-110 transition-transform">
                          <ArrowRight className="w-4 h-4 text-white" />
                        </span>
                      </Link>
                      <Link
                        to="/feynman"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-sm text-muted-foreground hover:text-foreground transition-all hover:bg-violet/5"
                      >
                        <Sparkles className="w-4 h-4 text-gold" />
                        See an Interaction
                      </Link>
                    </div>
                  </div>

                  {/* Active Field Card */}
                  <div className="hidden xl:block shrink-0">
                    <ActiveFieldCard />
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-muted-foreground/70">
                  <MousePointer2 className="w-3 h-3" />
                  Move your cursor — the quantum field responds to your presence
                </div>
              </div>
            </section>

            {/* Active Field Card for medium screens */}
            <div className="xl:hidden flex justify-center">
              <ActiveFieldCard />
            </div>

            {/* Philosophical Opening */}
            <Reveal as="section" className="max-w-3xl">
              <div className="text-[10px] tracking-[0.4em] uppercase text-gold/80 mb-4">The Beginning</div>
              <h2 className="font-display text-3xl md:text-4xl text-foreground/95 leading-snug font-light mb-6">
                Imagine the universe as an infinite ocean of possibility.
              </h2>
              <p className="text-[15px] text-muted-foreground leading-relaxed font-light mb-4">
                For centuries, we imagined reality as a collection of separate things — atoms bouncing in the void, particles isolated in space. But quantum field theory reveals something far more profound: there is no void. Space itself is not empty. Instead, it is filled with fields — infinite, continuous, and interconnected.
              </p>
              <p className="text-[15px] text-muted-foreground leading-relaxed font-light">
                Every field that exists — the electron field, the photon field, the Higgs field — stretches across all of space and time. When a field vibrates, we perceive a particle. When fields interact, we witness force. This is not merely a mathematical convenience. This is the deepest description of reality we have ever discovered. And it is beautiful.
              </p>
            </Reveal>

            {/* Three Pillars of QFT */}
            <Reveal as="section">
              <div className="text-[10px] tracking-[0.4em] uppercase text-violet/80 mb-6">The Foundation</div>
              <div className="grid md:grid-cols-3 gap-5 md:gap-6">
                {[
                  { 
                    n: "I",   
                    t: "Fields are Fundamental",      
                    b: "Forget particles as tiny spheres. The deepest layer of reality is not made of objects, but of fields — smooth, continuous, and stretching across every point in space. An electron field. A photon field. A Higgs field. Each one a voice in the cosmic symphony." 
                  },
                  { 
                    n: "II",  
                    t: "Particles are Excitations",   
                    b: "When a field vibrates, we perceive a particle. An electron is not a thing — it is a knot of energy in the electron field. A photon is not a bullet — it is a ripple of light in the electromagnetic field. The same field, expressing itself in infinite ways." 
                  },
                  { 
                    n: "III", 
                    t: "Interactions are Conversations", 
                    b: "Forces are not magic acting across emptiness. They are fields whispering to one another. Photons passed between charges. Gluons holding quarks together. Fields gently shaping fields. Reality is a dialogue." 
                  },
                ].map((c) => (
                  <article key={c.n} className="glass-deep rounded-2xl p-7 md:p-8 relative overflow-hidden group">
                    <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-violet/10 blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="relative">
                      <div className="font-display text-xs text-gold/80 tracking-[0.4em] mb-3">{c.n}</div>
                      <h3 className="font-display text-2xl md:text-[1.7rem] leading-tight text-foreground/95 mb-4">{c.t}</h3>
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

            {/* Six Pillars - Feature Cards */}
            <Reveal as="section">
              <div className="flex items-end justify-between mb-8 md:mb-10">
                <div>
                  <div className="text-[10px] tracking-[0.4em] uppercase text-cyan/80 mb-3">Six Pillars</div>
                  <h2 className="font-display text-4xl md:text-5xl font-light text-foreground/95">The Architecture of Reality</h2>
                </div>
                <Link to="/fields" className="hidden md:inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition group">
                  Explore all <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                {features.map((f) => (
                  <Link
                    key={f.title}
                    to={f.url}
                    className="group glass-deep rounded-2xl p-6 hover:border-violet/45 hover:-translate-y-1 transition-all duration-500 relative overflow-hidden block"
                  >
                    <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-violet/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="relative">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[9px] tracking-[0.35em] uppercase text-cyan/70 font-medium">{f.tag}</span>
                        <span className="w-2 h-2 rounded-full bg-cyan/70" />
                      </div>
                      <h3 className="font-display text-2xl text-foreground/95 mb-2">{f.title}</h3>
                      {f.eq && <div className="text-[10px] text-cyan/80 mb-4 font-mono">{f.eq}</div>}
                      <div className="aspect-[16/9] rounded-xl overflow-hidden glass mb-4">
                        <f.Viz />
                      </div>
                      <p className="text-[13.5px] leading-relaxed text-muted-foreground font-light">{f.blurb}</p>
                      <div className="mt-5 inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-violet/80 group-hover:text-violet transition">
                        Explore <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </Reveal>

            {/* Beyond The Standard Model */}
            <Reveal as="section">
              <div className="relative glass-strong rounded-3xl p-8 md:p-14 overflow-hidden">
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-violet via-gold to-cyan blur-[120px] animate-pulse-glow" />
                </div>

                <div className="relative grid md:grid-cols-2 gap-10 items-center">
                  <div>
                    <div className="text-[10px] tracking-[0.4em] uppercase text-gold/80 mb-5">The Frontier</div>
                    <h2 className="font-display text-4xl md:text-5xl font-light leading-tight mb-6">
                      Beyond the <span className="italic text-gold text-glow-gold">Standard Model</span>
                    </h2>
                    <p className="text-muted-foreground text-base mb-4 leading-relaxed font-light">
                      Quantum Field Theory is humanity's most accurate description of reality. It predicts the behavior of particles to extraordinary precision. And yet, it leaves profound mysteries unanswered.
                    </p>
                    <p className="text-muted-foreground text-base mb-6 leading-relaxed font-light">
                      Dark matter. The weight of the vacuum. The quantum nature of gravity itself. These remain the open horizons of physics — the places where new understanding awaits discovery.
                    </p>
                    <p className="font-display italic text-lg text-foreground/85">
                      The universe still has secrets to tell.
                    </p>
                  </div>
                  <div className="hidden md:block aspect-square rounded-2xl glass-deep flex items-center justify-center">
                    <div className="text-center">
                      <Compass className="w-16 h-16 text-gold/60 mx-auto mb-4" />
                      <p className="text-muted-foreground text-sm">The frontier awaits exploration</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Call to Action */}
            <Reveal as="section" className="text-center py-8">
              <div className="text-[10px] tracking-[0.4em] uppercase text-violet/80 mb-6">Your Journey Begins</div>
              <h2 className="font-display text-4xl md:text-5xl font-light text-foreground/95 mb-6">
                Discover the poetry hidden in the equations.
              </h2>
              <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto font-light">
                Quantum Field Theory is not just a collection of equations. It is a profound statement about the nature of reality. Begin your exploration and discover how the universe speaks through fields.
              </p>
              <Link
                to="/fields"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full glass-strong border-violet/50 hover:border-violet transition-all shadow-glow-violet hover:shadow-glow-gold text-lg font-medium"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Reveal>
          </div>

          <RightRail />
        </div>
      </main>
    </div>
  );
}
