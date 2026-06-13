import { useEffect, useRef } from "react";

/**
 * Enhanced particle system with sophisticated lifecycle and visual effects.
 * Renders virtual particle pairs with quantum field behavior.
 */
export function EnhancedParticleSystem() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
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

    type Particle = {
      x: number; y: number;
      vx: number; vy: number;
      life: number; max: number;
      hue: number; r: number;
      partner?: Particle;
      type: "virtual" | "energetic";
    };

    const particles: Particle[] = [];
    const MAX_PARTICLES = 150;

    const spawnPair = (x?: number, y?: number, type: "virtual" | "energetic" = "virtual") => {
      const px = x ?? Math.random() * w;
      const py = y ?? Math.random() * h;
      const angle = Math.random() * Math.PI * 2;
      const speed = type === "energetic" ? 1.0 + Math.random() * 2.0 : 0.2 + Math.random() * 0.4;
      const max = type === "energetic" ? 80 + Math.random() * 120 : 150 + Math.random() * 200;
      
      const hueOptions = [268, 200, 45, 120]; // violet, cyan, gold, green
      const hue = hueOptions[Math.floor(Math.random() * hueOptions.length)];
      
      const a: Particle = {
        x: px, y: py,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 0, max, hue,
        r: 1.2 + Math.random() * 1.8,
        type,
      };
      const b: Particle = {
        x: px, y: py,
        vx: -a.vx, vy: -a.vy,
        life: 0, max, hue,
        r: a.r,
        type,
      };
      a.partner = b;
      b.partner = a;
      particles.push(a, b);
    };

    // Pre-populate with virtual particles
    for (let i = 0; i < 40; i++) spawnPair();

    let t = 0;
    const render = () => {
      t += 0.01;

      // Fade trails
      ctx.fillStyle = "rgba(3, 3, 8, 0.2)";
      ctx.fillRect(0, 0, w, h);

      ctx.save();
      ctx.globalCompositeOperation = "lighter";

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        const t0 = p.life / p.max;
        const alpha = Math.sin(t0 * Math.PI);

        // Glow halo
        const glowRadius = p.r * (8 + alpha * 6);
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowRadius);
        grad.addColorStop(0, `hsla(${p.hue}, 95%, 75%, ${alpha * 0.5})`);
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, glowRadius, 0, Math.PI * 2);
        ctx.fill();

        // Core particle
        const coreSize = p.r * (0.6 + alpha * 0.8);
        ctx.fillStyle = `hsla(${p.hue}, 96%, 80%, ${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, coreSize, 0, Math.PI * 2);
        ctx.fill();

        // Annihilation line to partner
        if (p.partner && t0 > 0.75) {
          const lineAlpha = (1 - t0) * 8;
          ctx.strokeStyle = `hsla(${p.hue}, 100%, 85%, ${lineAlpha})`;
          ctx.lineWidth = 1.0;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.partner.x, p.partner.y);
          ctx.stroke();
        }

        if (p.life >= p.max) {
          particles.splice(i, 1);
        }
      }

      ctx.restore();

      // Spawn new particles
      if (particles.length < MAX_PARTICLES) {
        if (Math.random() < 0.4) spawnPair(undefined, undefined, "virtual");
        if (Math.random() < 0.05) spawnPair(Math.random() * w, Math.random() * h, "energetic");
      }

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
      style={{ mixBlendMode: "screen", opacity: 0.9 }}
    />
  );
}
