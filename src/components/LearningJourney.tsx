import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

const steps = [
  { n: "01", title: "Fields",         url: "/fields",          tag: "Begin here",       blurb: "The fabric beneath particles — what fields actually are." },
  { n: "02", title: "Lagrangian",     url: "/lagrangian",      tag: "The recipe",       blurb: "A single line of mathematics that contains the dynamics of nature." },
  { n: "03", title: "Symmetries",     url: "/symmetries",      tag: "Hidden order",     blurb: "Why conservation laws exist — the universe loves invariance." },
  { n: "04", title: "Feynman",        url: "/feynman",         tag: "Interactions",     blurb: "How particles meet — pictures that compute probability." },
  { n: "05", title: "Path Integral",  url: "/path-integral",   tag: "Sum of histories", blurb: "Reality as the interference of every possibility at once." },
  { n: "06", title: "Renormalization",url: "/renormalization", tag: "Taming infinity",  blurb: "How physics asks nature only the questions it can answer." },
  { n: "07", title: "Vacuum",         url: "/vacuum",          tag: "Loudest silence",  blurb: "Empty space, the most active state in physics." },
  { n: "08", title: "Beyond",         url: "/beyond",          tag: "The frontier",     blurb: "Dark matter, quantum gravity — the open horizon." },
];

export function LearningJourney() {
  return (
    <section className="relative">
      <div className="mb-6 md:mb-8">
        <div className="text-[10px] tracking-[0.4em] uppercase text-gold/80 mb-2">A Guided Path</div>
        <h2 className="font-display text-3xl md:text-4xl font-light text-foreground/95">
          The journey, in <span className="italic text-gold/90">eight quiet steps</span>
        </h2>
        <p className="mt-3 text-[14.5px] text-muted-foreground max-w-2xl font-light leading-relaxed">
          You don't have to rush. Each chapter rests on the one before it. Begin where curiosity calls you — but if you wonder where the trail leads, this is the map.
        </p>
      </div>

      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {steps.map((s, i) => (
          <li key={s.n} className="relative">
            <Link
              to={s.url}
              className="group block h-full glass rounded-2xl p-5 hover:border-violet/45 hover:-translate-y-0.5 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-28 h-28 rounded-full bg-violet/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[11px] text-gold/70">{s.n}</span>
                  <span className="text-[9px] tracking-[0.3em] uppercase text-cyan/70">{s.tag}</span>
                </div>
                <h3 className="font-display text-xl text-foreground/95 mb-1.5">{s.title}</h3>
                <p className="text-[12.5px] text-muted-foreground leading-relaxed font-light">{s.blurb}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-[10px] tracking-[0.25em] uppercase text-violet/70 group-hover:text-violet transition">
                  Enter <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </Link>
            {/* connector dot */}
            {i < steps.length - 1 && (
              <span aria-hidden className="hidden lg:block absolute top-1/2 -right-2 w-1.5 h-1.5 rounded-full bg-violet/40 translate-y-[-50%]" />
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
