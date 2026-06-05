import { useEffect, useRef } from "react";

/**
 * Quantum vacuum particle system.
 * Virtual particle pairs appear, fluctuate, and annihilate.
 * Plus a faint flowing field-wave grid.
 */
export function QuantumCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let raf = 0;
    let w = 0, h = 0, dpr = 1;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    type P = {
      x: number; y: number;
      vx: number; vy: number;
      life: number; max: number;
      hue: number; r: number; partner?: P;
    };
    const parts: P[] = [];
    const MAX = 120;

    const spawnPair = () => {
      const x = Math.random() * w;
      const y = Math.random() * h;
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.15 + Math.random() * 0.35;
      const max = 120 + Math.random() * 140;
      const hue = Math.random() < 0.5 ? 270 : (Math.random() < 0.5 ? 195 : 45);
      const a: P = { x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed, life: 0, max, hue, r: 1.2 + Math.random() * 1.8 };
      const b: P = { x, y, vx: -a.vx, vy: -a.vy, life: 0, max, hue, r: a.r };
      a.partner = b; b.partner = a;
      parts.push(a, b);
    };

    // pre-populate
    for (let i = 0; i < 30; i++) spawnPair();

    let t = 0;
    const render = () => {
      t += 0.008;
      // trail fade
      ctx.fillStyle = "rgba(5, 5, 10, 0.18)";
      ctx.fillRect(0, 0, w, h);

      // faint quantum field grid (sinusoidal)
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      ctx.strokeStyle = "rgba(124, 58, 237, 0.05)";
      ctx.lineWidth = 1;
      const step = 60;
      for (let y = 0; y < h; y += step) {
        ctx.beginPath();
        for (let x = 0; x <= w; x += 8) {
          const yy = y + Math.sin(x * 0.01 + t + y * 0.005) * 6;
          if (x === 0) ctx.moveTo(x, yy); else ctx.lineTo(x, yy);
        }
        ctx.stroke();
      }
      ctx.restore();

      // particles
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      for (let i = parts.length - 1; i >= 0; i--) {
        const p = parts[i];
        p.life++;
        p.x += p.vx;
        p.y += p.vy;
        const t0 = p.life / p.max;
        const alpha = Math.sin(t0 * Math.PI); // fade in & out
        const color = `hsla(${p.hue}, 90%, 65%, ${alpha * 0.9})`;
        const glow = `hsla(${p.hue}, 95%, 70%, ${alpha * 0.25})`;

        // glow halo
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 10);
        grad.addColorStop(0, glow);
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 10, 0, Math.PI * 2);
        ctx.fill();

        // core
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * (0.6 + alpha * 0.8), 0, Math.PI * 2);
        ctx.fill();

        // annihilation line to partner near end of life
        if (p.partner && t0 > 0.85) {
          const a2 = (1 - t0) * 6;
          ctx.strokeStyle = `hsla(${p.hue}, 100%, 80%, ${a2})`;
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.partner.x, p.partner.y);
          ctx.stroke();
        }

        if (p.life >= p.max) parts.splice(i, 1);
      }
      ctx.restore();

      if (parts.length < MAX && Math.random() < 0.5) spawnPair();
      raf = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 w-full h-full z-0"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
