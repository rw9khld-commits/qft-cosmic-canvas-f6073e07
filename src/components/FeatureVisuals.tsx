// Inline SVG mini-visualizations for the feature cards.

export function VizLagrangian() {
  return (
    <svg viewBox="0 0 200 120" className="w-full h-full">
      <defs>
        <radialGradient id="lag-core" cx="50%" cy="55%" r="50%">
          <stop offset="0%" stopColor="hsl(280 100% 80%)" stopOpacity="1" />
          <stop offset="60%" stopColor="hsl(270 90% 50%)" stopOpacity="0.3" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="68" rx="80" ry="42" fill="url(#lag-core)" />
      {[20, 30, 40, 50].map((r, i) => (
        <ellipse key={i} cx="100" cy="68" rx={r * 1.6} ry={r * 0.55} stroke={`hsl(280 80% 70% / ${0.6 - i * 0.1})`} fill="none" strokeWidth="0.6" transform={`rotate(${-15 + i * 3} 100 68)`} />
      ))}
      <circle cx="100" cy="68" r="3" fill="hsl(280 100% 85%)" />
    </svg>
  );
}

export function VizFeynman() {
  return (
    <svg viewBox="0 0 200 120" className="w-full h-full">
      <g stroke="hsl(195 80% 70%)" strokeWidth="1" fill="none">
        <path d="M 20 30 L 90 60" markerEnd="url(#arr)" />
        <path d="M 20 90 L 90 60" markerEnd="url(#arr)" />
        <path d="M 110 60 L 180 30" markerEnd="url(#arr)" />
        <path d="M 110 60 L 180 90" markerEnd="url(#arr)" />
      </g>
      <defs>
        <marker id="arr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill="hsl(195 80% 70%)" />
        </marker>
      </defs>
      <path d="M 90 60 q 5 -8 10 0 q 5 8 10 0" stroke="hsl(45 100% 70%)" strokeWidth="1.2" fill="none" />
      <text x="105" y="48" fill="hsl(45 100% 80%)" fontSize="10" fontStyle="italic">γ</text>
      <text x="10" y="28" fill="hsl(195 80% 80%)" fontSize="9">e⁻</text>
      <text x="10" y="100" fill="hsl(195 80% 80%)" fontSize="9">e⁻</text>
      <text x="185" y="28" fill="hsl(195 80% 80%)" fontSize="9">e⁻</text>
      <text x="185" y="100" fill="hsl(195 80% 80%)" fontSize="9">e⁻</text>
    </svg>
  );
}

export function VizPathIntegral() {
  return (
    <svg viewBox="0 0 200 120" className="w-full h-full">
      <circle cx="40" cy="80" r="3" fill="hsl(45 100% 70%)" />
      <circle cx="160" cy="40" r="3" fill="hsl(195 90% 70%)" />
      <text x="28" y="100" fill="hsl(45 100% 80%)" fontSize="9">A</text>
      <text x="158" y="32" fill="hsl(195 90% 80%)" fontSize="9">B</text>
      {Array.from({ length: 18 }).map((_, i) => {
        const cy = 30 + i * 4;
        return (
          <path key={i} d={`M 40 80 Q 100 ${cy}, 160 40`} stroke={`hsl(${30 + i * 8} 90% 65% / ${0.15 + (i / 18) * 0.45})`} strokeWidth="0.5" fill="none" />
        );
      })}
    </svg>
  );
}

export function VizRenormalization() {
  return (
    <svg viewBox="0 0 200 120" className="w-full h-full">
      <text x="35" y="40" fill="hsl(195 80% 80%)" fontSize="10" fontStyle="italic">Z(Λ) = 1 + g²/16π² ln Λ/μ</text>
      {[12, 22, 32, 42].map((r, i) => (
        <circle key={i} cx="100" cy="80" r={r} stroke={`hsl(195 90% 65% / ${0.7 - i * 0.15})`} fill="none" strokeWidth="0.8" />
      ))}
      <circle cx="100" cy="80" r="3" fill="hsl(195 100% 85%)" />
    </svg>
  );
}

export function VizVacuum() {
  return (
    <svg viewBox="0 0 200 120" className="w-full h-full">
      <defs>
        <radialGradient id="vac" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(270 90% 70%)" stopOpacity="0.6" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="60" r="50" fill="url(#vac)" />
      {Array.from({ length: 40 }).map((_, i) => {
        const a = (i / 40) * Math.PI * 2;
        const r = 18 + (i % 5) * 7;
        return <circle key={i} cx={100 + Math.cos(a) * r} cy={60 + Math.sin(a) * r * 0.9} r="0.8" fill={`hsl(${270 + (i % 30)} 90% 80% / 0.8)`} />;
      })}
      <circle cx="100" cy="60" r="2" fill="white" />
    </svg>
  );
}

export function VizSymmetries() {
  return (
    <svg viewBox="0 0 200 120" className="w-full h-full">
      <g stroke="hsl(195 80% 70% / 0.7)" strokeWidth="0.6" fill="none">
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i / 12) * Math.PI;
          return <line key={i} x1={100 - Math.cos(a) * 50} y1={60 - Math.sin(a) * 40} x2={100 + Math.cos(a) * 50} y2={60 + Math.sin(a) * 40} />;
        })}
        <ellipse cx="100" cy="60" rx="50" ry="40" />
        <ellipse cx="100" cy="60" rx="30" ry="40" />
        <ellipse cx="100" cy="60" rx="50" ry="22" />
      </g>
      <circle cx="100" cy="60" r="2.5" fill="hsl(195 100% 85%)" />
    </svg>
  );
}
