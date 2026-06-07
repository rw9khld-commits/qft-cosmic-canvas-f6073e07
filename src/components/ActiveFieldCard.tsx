import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

type Field = {
  id: string;
  name: string;
  symbol: string;
  spin: string;
  charge: string;
  mass: string;
  type: string;
  hue: number;
  blurb: string;
};

const FIELDS: Field[] = [
  { id: "electron", name: "Electron Field", symbol: "ψₑ", spin: "1/2", charge: "−e", mass: "0.511 MeV", type: "Fermion", hue: 280, blurb: "A ripple of matter — the same field everywhere, knotted into every electron in existence." },
  { id: "photon",   name: "Photon Field",   symbol: "Aᵘ",  spin: "1",   charge: "0",   mass: "0",        type: "Boson",   hue: 50,  blurb: "Light itself — a vibration of the electromagnetic field, carrier of every electric whisper." },
  { id: "quark",    name: "Quark Field",    symbol: "ψq", spin: "1/2", charge: "±⅔, ±⅓", mass: "2.2 MeV+", type: "Fermion", hue: 200, blurb: "Six flavors bound by color — the field whose excitations build every proton and neutron." },
  { id: "higgs",    name: "Higgs Field",    symbol: "Φ",   spin: "0",   charge: "0",   mass: "125 GeV",  type: "Scalar",  hue: 320, blurb: "The field that chose a direction — its quiet condensate gives every massive particle its weight." },
];

export function ActiveFieldCard() {
  const [active, setActive] = useState(0);
  const f = FIELDS[active];

  return (
    <div className="glass-deep rounded-2xl p-5 w-full max-w-[300px] backdrop-blur-2xl">
      <div className="flex items-center justify-between mb-4">
        <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Active Field</span>
        <span className="w-2 h-2 rounded-full bg-cyan animate-shimmer" />
      </div>

      <h3 className="font-display text-2xl text-foreground/95 leading-tight">{f.name}</h3>
      <div className="font-mono text-[11px] text-gold/80 mt-0.5">{f.symbol}(x)</div>

      {/* Field visualization */}
      <div className="relative aspect-square mt-4 mb-4 rounded-xl overflow-hidden glass">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <radialGradient id={`grad-${f.id}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={`hsl(${f.hue} 100% 80%)`} stopOpacity="0.9" />
              <stop offset="40%" stopColor={`hsl(${f.hue} 90% 55%)`} stopOpacity="0.45" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          <circle cx="100" cy="100" r="80" fill={`url(#grad-${f.id})`}>
            <animate attributeName="r" values="78;84;78" dur="6s" repeatCount="indefinite" />
          </circle>
          {/* Filament strands */}
          {Array.from({ length: 38 }).map((_, i) => {
            const a = (i / 38) * Math.PI * 2;
            const r1 = 28 + (i % 5) * 6;
            const r2 = 70 + (i % 4) * 10;
            return (
              <line
                key={i}
                x1={100 + Math.cos(a) * r1}
                y1={100 + Math.sin(a) * r1}
                x2={100 + Math.cos(a) * r2}
                y2={100 + Math.sin(a) * r2}
                stroke={`hsl(${f.hue + (i % 20)} 90% 70% / ${0.18 + (i % 5) * 0.06})`}
                strokeWidth="0.5"
              />
            );
          })}
          {/* Particle nodes */}
          {Array.from({ length: 26 }).map((_, i) => {
            const a = (i / 26) * Math.PI * 2;
            const r = 32 + (i % 4) * 16;
            return (
              <circle
                key={i}
                cx={100 + Math.cos(a) * r}
                cy={100 + Math.sin(a) * r}
                r={0.8 + (i % 3) * 0.5}
                fill={`hsl(${f.hue} 100% 85%)`}
                opacity={0.6}
              />
            );
          })}
          <circle cx="100" cy="100" r="4" fill="white" />
          <circle cx="100" cy="100" r="14" fill={`hsl(${f.hue} 100% 80% / 0.35)`}>
            <animate attributeName="r" values="10;18;10" dur="3s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>

      {/* Properties */}
      <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-2">Field Properties</div>
      <dl className="space-y-1.5 text-[12.5px] mb-4">
        {[
          ["Spin", f.spin],
          ["Charge", f.charge],
          ["Mass", f.mass],
          ["Type", f.type],
        ].map(([k, v]) => (
          <div key={k} className="flex justify-between border-b border-violet/10 pb-1.5">
            <dt className="text-muted-foreground">{k}</dt>
            <dd className="text-foreground/90 font-mono">{v}</dd>
          </div>
        ))}
      </dl>

      <p className="text-[12px] text-muted-foreground/90 leading-relaxed font-light italic mb-4">
        {f.blurb}
      </p>

      {/* Selector */}
      <div className="grid grid-cols-4 gap-1 mb-3">
        {FIELDS.map((ff, i) => (
          <button
            key={ff.id}
            onClick={() => setActive(i)}
            aria-label={ff.name}
            className={`h-7 rounded-md font-mono text-[10px] transition-all ${
              i === active
                ? "glass border border-violet/60 text-foreground shadow-glow-violet"
                : "glass text-muted-foreground hover:text-foreground"
            }`}
          >
            {ff.symbol}
          </button>
        ))}
      </div>

      <Link
        to="/fields"
        className="w-full inline-flex items-center justify-center gap-2 h-10 rounded-full bg-gradient-to-r from-violet/30 to-cyan/20 border border-violet/40 text-[13px] font-medium hover:from-violet/40 hover:to-cyan/30 transition-all group"
      >
        Visualize Field
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
      </Link>
    </div>
  );
}
