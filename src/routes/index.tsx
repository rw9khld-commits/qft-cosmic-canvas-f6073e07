import { createFileRoute } from "@tanstack/react-router";
import { QFTSidebar } from "@/components/QFTSidebar";
import { StarField } from "@/components/StarField";
import heroImg from "@/assets/qft-hero.jpg";
import { ArrowRight, Atom, Waves, FlaskConical, Brain, Map, Sparkles, Infinity as InfIcon, Eye } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "QFT Decoder — From Fields to Reality" },
      { name: "description", content: "Explore Quantum Field Theory through cinematic visualizations and interactive simulations." },
    ],
  }),
  component: Index,
});

const sections = [
  { title: "Derivations", desc: "Lagrangians, gauge symmetries, and the equations behind reality.", icon: Atom, accent: "violet" },
  { title: "Visual Explorer", desc: "See fields ripple, particles emerge, and forces unfold.", icon: Waves, accent: "cyan" },
  { title: "Simulations", desc: "Run Feynman diagrams and path integrals in real time.", icon: FlaskConical, accent: "gold" },
  { title: "Quizzes", desc: "Test your intuition across the standard model and beyond.", icon: Brain, accent: "violet" },
  { title: "Roadmap", desc: "A curated path from classical fields to quantum gravity.", icon: Map, accent: "cyan" },
  { title: "Beyond Standard Model", desc: "Dark matter, supersymmetry, strings — the open frontier.", icon: InfIcon, accent: "gold" },
];

function Index() {
  return (
    <div className="relative min-h-screen flex text-foreground">
      <StarField />
      <QFTSidebar />

      <main className="relative z-10 flex-1 min-w-0">
        <section className="relative min-h-screen overflow-hidden">
          <img
            src={heroImg}
            alt="Quantum vacuum field"
            width={1920}
            height={1088}
            className="absolute inset-0 w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/40" />

          <div className="relative z-10 px-6 lg:px-16 pt-20 pb-32 max-w-7xl">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span className="text-xs tracking-[0.25em] uppercase text-muted-foreground">A Cinematic Journey into Reality</span>
            </div>

            <h1 className="font-display font-light leading-[0.95] tracking-tight text-6xl md:text-8xl lg:text-9xl">
              <span className="block text-glow-gold text-gold/95">QFT</span>
              <span className="block text-glow-violet bg-gradient-to-r from-foreground via-violet to-cyan bg-clip-text text-transparent">
                Decoder
              </span>
            </h1>

            <p className="font-display italic text-2xl md:text-3xl mt-8 text-muted-foreground max-w-2xl">
              From Fields to Reality.
            </p>
            <p className="mt-6 text-base md:text-lg text-muted-foreground/80 max-w-xl leading-relaxed">
              Every particle is a ripple. Every force, a symmetry. Decode the language the universe writes itself in.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <button className="group relative inline-flex items-center gap-3 px-7 py-4 rounded-full bg-gradient-to-r from-violet to-violet/80 text-white font-medium shadow-glow-violet hover:scale-[1.02] transition-transform">
                <span>Begin Exploration</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="inline-flex items-center gap-3 px-7 py-4 rounded-full glass hover:border-cyan/50 transition-colors">
                <Eye className="w-4 h-4 text-cyan" />
                <span className="font-medium">Watch Trailer</span>
              </button>
            </div>

            <div className="hidden md:grid grid-cols-3 gap-4 mt-20 max-w-2xl">
              {[
                { k: "10⁻³⁵", v: "Planck Scale (m)" },
                { k: "17", v: "Fundamental Fields" },
                { k: "∞", v: "Vacuum Fluctuations" },
              ].map((s, i) => (
                <div key={s.v} className="glass rounded-2xl p-5 animate-float" style={{ animationDelay: `${i * 0.4}s` }}>
                  <div className="font-display text-3xl text-gold text-glow-gold">{s.k}</div>
                  <div className="text-xs text-muted-foreground mt-1 tracking-wider uppercase">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden xl:block absolute right-12 top-1/2 -translate-y-1/2 w-80 glass-strong rounded-2xl p-6 z-10">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs tracking-widest uppercase text-muted-foreground">Active Field</span>
              <span className="w-2 h-2 rounded-full bg-cyan shadow-glow-cyan animate-shimmer" />
            </div>
            <h3 className="font-display text-2xl mb-4">Electron Field</h3>
            <div className="aspect-square rounded-xl bg-gradient-to-br from-violet/30 to-cyan/20 relative overflow-hidden mb-5 border border-violet/30">
              <div className="absolute inset-0 starfield opacity-50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-violet/40 blur-2xl animate-pulse-glow" />
                <div className="absolute w-3 h-3 rounded-full bg-white shadow-glow-violet" />
              </div>
            </div>
            <div className="space-y-2 text-sm">
              {[["Spin", "1/2"], ["Charge", "-e"], ["Mass", "0.511 MeV"], ["Type", "Fermion"]].map(([k, v]) => (
                <div key={k} className="flex justify-between border-b border-violet/10 pb-1.5">
                  <span className="text-muted-foreground">{k}</span>
                  <span className="text-foreground">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative px-6 lg:px-16 py-24 max-w-7xl">
          <div className="mb-14">
            <div className="text-xs tracking-[0.3em] uppercase text-cyan mb-3">The Decoder</div>
            <h2 className="font-display text-5xl md:text-6xl font-light max-w-3xl leading-tight">
              Six pathways through the <span className="italic text-violet text-glow-violet">quantum substrate</span>.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sections.map((s) => (
              <article
                key={s.title}
                className="group glass rounded-2xl p-7 hover:border-violet/50 transition-all duration-500 hover:-translate-y-1 cursor-pointer relative overflow-hidden"
              >
                <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-violet/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative">
                  <div className={`w-12 h-12 rounded-xl glass-strong flex items-center justify-center mb-5 text-${s.accent}`}>
                    <s.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-2xl mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
                  <div className="flex items-center gap-2 text-sm text-violet group-hover:gap-3 transition-all">
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="relative px-6 lg:px-16 pb-24 max-w-7xl">
          <div className="relative glass-strong rounded-3xl p-10 md:p-16 overflow-hidden">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-violet via-gold to-cyan blur-[120px] animate-pulse-glow" />
            </div>
            <div className="relative max-w-2xl">
              <div className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Beyond The Standard Model</div>
              <h2 className="font-display text-4xl md:text-6xl font-light leading-tight mb-6">
                Infinity is not the end. It is the <span className="italic text-glow-gold text-gold">beginning</span> of our questions.
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Dark matter. Quantum gravity. Vacuum structure. The hierarchy problem. Step past the known into what physics is still learning to ask.
              </p>
              <button className="inline-flex items-center gap-3 px-7 py-4 rounded-full glass-strong border-gold/40 hover:border-gold transition-all group">
                <span className="font-medium">Enter the Unknown</span>
                <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        <footer className="px-6 lg:px-16 py-8 text-center text-xs text-muted-foreground tracking-widest uppercase border-t border-violet/10">
          QFT Decoder · Decoding the language of the universe
        </footer>
      </main>
    </div>
  );
}
