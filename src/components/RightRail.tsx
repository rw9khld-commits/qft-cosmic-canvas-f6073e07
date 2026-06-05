import { Activity, GitMerge, Zap, Shuffle, Sparkle, X } from "lucide-react";

export function RightRail() {
  return (
    <aside className="hidden xl:flex flex-col w-80 shrink-0 p-6 gap-5 z-10">
      {/* Field Interaction Engine */}
      <div className="glass-strong rounded-2xl p-5">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">Field Interaction Engine</span>
          <X className="w-3.5 h-3.5 text-muted-foreground/60" />
        </div>
        <div className="relative aspect-square rounded-xl overflow-hidden glass">
          <div className="absolute inset-0 flex items-center justify-center">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <defs>
                <linearGradient id="cube" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="hsl(195 90% 65%)" />
                  <stop offset="100%" stopColor="hsl(270 90% 65%)" />
                </linearGradient>
              </defs>
              <g stroke="url(#cube)" strokeWidth="0.8" fill="none" opacity="0.7">
                <polygon points="50,60 150,60 170,90 70,90" />
                <polygon points="150,60 170,90 170,160 150,130" />
                <polygon points="50,60 70,90 70,160 50,130" />
                <polygon points="70,90 170,90 170,160 70,160" />
                <line x1="50" y1="130" x2="70" y2="160" />
                <line x1="150" y1="130" x2="170" y2="160" />
              </g>
              <circle cx="120" cy="120" r="3" fill="hsl(45 100% 70%)" />
              <circle cx="120" cy="120" r="14" fill="hsl(45 100% 70% / 0.25)" />
              {[[60,140],[160,100],[100,80],[150,150]].map(([x,y],i)=>(
                <g key={i}>
                  <line x1="120" y1="120" x2={x} y2={y} stroke="hsl(270 90% 70%)" strokeWidth="0.5" opacity="0.6"/>
                  <circle cx={x} cy={y} r="2" fill="hsl(195 90% 70%)" />
                </g>
              ))}
            </svg>
          </div>
        </div>
      </div>

      {/* Select Interaction */}
      <div className="glass-strong rounded-2xl p-5">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">Select Interaction</span>
          <X className="w-3.5 h-3.5 text-muted-foreground/60" />
        </div>
        <div className="grid grid-cols-5 gap-2 mb-5">
          {[Activity, GitMerge, Zap, Shuffle, Sparkle].map((Ic, i) => (
            <button key={i} className={`aspect-square rounded-lg flex items-center justify-center transition ${i === 0 ? "glass border border-violet/50 shadow-glow-violet text-violet" : "glass text-muted-foreground hover:text-foreground"}`}>
              <Ic className="w-3.5 h-3.5" />
            </button>
          ))}
        </div>
        <div>
          <div className="flex justify-between text-[11px] mb-2">
            <span className="text-muted-foreground tracking-widest uppercase">Energy Scale</span>
            <span className="text-gold">10² GeV</span>
          </div>
          <div className="relative h-1 rounded-full bg-violet/15">
            <div className="absolute inset-y-0 left-0 w-3/4 rounded-full bg-gradient-to-r from-violet via-cyan to-gold shadow-glow-violet" />
            <div className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-glow-cyan" />
          </div>
        </div>
      </div>

      {/* Spacetime Fabric */}
      <div className="glass-strong rounded-2xl p-5">
        <div className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-3">Spacetime Fabric</div>
        <div className="relative h-28 rounded-xl overflow-hidden">
          <svg viewBox="0 0 280 110" className="w-full h-full">
            {Array.from({ length: 14 }).map((_, i) => (
              <path
                key={i}
                d={`M 0 ${20 + i * 6} Q 140 ${50 + i * 6 + (i === 7 ? 25 : 0)}, 280 ${20 + i * 6}`}
                stroke={`hsl(${200 + i * 5} 80% 60% / ${0.15 + (i / 14) * 0.35})`}
                strokeWidth="0.6"
                fill="none"
              />
            ))}
            <circle cx="140" cy="75" r="3" fill="hsl(195 100% 75%)" />
            <circle cx="140" cy="75" r="14" fill="hsl(195 90% 65% / 0.2)" />
          </svg>
        </div>
      </div>

      {/* Philosophy */}
      <div className="glass-strong rounded-2xl p-5">
        <div className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-3">Philosophy Layer</div>
        <p className="font-display italic text-sm leading-relaxed text-foreground/90">
          We do not discover laws. We uncover patterns written into the fabric of existence.
        </p>
        <div className="mt-4 relative h-20 rounded-xl overflow-hidden">
          <svg viewBox="0 0 200 80" className="w-full h-full">
            {[10, 18, 26, 34].map((r, i) => (
              <ellipse key={i} cx="100" cy="40" rx={r * 2} ry={r * 0.6} stroke={`hsl(45 80% 60% / ${0.5 - i * 0.1})`} fill="none" strokeWidth="0.6" transform={`rotate(${-15 + i * 2} 100 40)`} />
            ))}
            <circle cx="100" cy="40" r="2.5" fill="hsl(45 100% 70%)" />
          </svg>
        </div>
      </div>
    </aside>
  );
}
