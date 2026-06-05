export function StarField() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      <div className="absolute inset-0 starfield opacity-70 animate-drift" />
      <div className="absolute inset-0 starfield opacity-40 animate-drift" style={{ animationDuration: "200s", backgroundSize: "600px 400px" }} />
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-violet/20 blur-[120px] animate-pulse-glow" />
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-cyan/15 blur-[120px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-0 left-1/3 w-[700px] h-[700px] rounded-full bg-violet/10 blur-[140px] animate-pulse-glow" style={{ animationDelay: "4s" }} />
    </div>
  );
}
