import { useEffect, useRef } from "react";

/**
 * Cinematic 2.5D quantum field surface for the hero.
 * Renders a flowing wireframe wave with bright peak singularity.
 */
export function FieldWaveCanvas() {
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

    let t = 0;
    const cols = 64;
    const rows = 40;

    const render = () => {
      t += 0.012;
      ctx.clearRect(0, 0, w, h);

      const cx = w * 0.55;
      const cy = h * 0.55;
      const peakX = w * 0.55;
      const peakY = h * 0.42;

      // perspective grid
      const project = (gx: number, gy: number) => {
        const nx = (gx / (cols - 1)) - 0.5;
        const ny = (gy / (rows - 1)) - 0.5;
        const dist = Math.sqrt(nx * nx + ny * ny);
        const ripple =
          Math.sin(dist * 18 - t * 3) * 22 * Math.exp(-dist * 3) +
          Math.sin(gx * 0.18 + t * 1.4) * 4 +
          Math.cos(gy * 0.22 - t * 1.1) * 4;
        const peak = 90 * Math.exp(-dist * 6);
        const z = -ripple - peak;
        const persp = 1 / (1 + (ny + 0.5) * 1.1);
        const sx = cx + nx * w * 1.1 * persp;
        const sy = cy + ny * h * 0.9 * persp + z * persp;
        return { x: sx, y: sy, persp, dist };
      };

      // draw horizontal lines back-to-front
      for (let gy = 0; gy < rows; gy++) {
        ctx.beginPath();
        for (let gx = 0; gx < cols; gx++) {
          const p = project(gx, gy);
          if (gx === 0) ctx.moveTo(p.x, p.y); else ctx.lineTo(p.x, p.y);
        }
        const fade = gy / rows;
        ctx.strokeStyle = `hsla(${270 + fade * 30}, 90%, ${55 + fade * 15}%, ${0.08 + fade * 0.35})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }
      // vertical lines (sparser)
      for (let gx = 0; gx < cols; gx += 2) {
        ctx.beginPath();
        for (let gy = 0; gy < rows; gy++) {
          const p = project(gx, gy);
          if (gy === 0) ctx.moveTo(p.x, p.y); else ctx.lineTo(p.x, p.y);
        }
        ctx.strokeStyle = `hsla(195, 80%, 60%, 0.10)`;
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }

      // central singularity glow
      const g = ctx.createRadialGradient(peakX, peakY, 0, peakX, peakY, 220);
      g.addColorStop(0, "rgba(255, 220, 150, 0.9)");
      g.addColorStop(0.2, "rgba(245, 158, 11, 0.45)");
      g.addColorStop(0.5, "rgba(124, 58, 237, 0.2)");
      g.addColorStop(1, "transparent");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(peakX, peakY, 220, 0, Math.PI * 2);
      ctx.fill();

      // sparkle points
      for (let i = 0; i < 40; i++) {
        const a = (i / 40) * Math.PI * 2 + t * 0.3;
        const rr = 60 + Math.sin(t * 2 + i) * 40;
        const x = peakX + Math.cos(a) * rr;
        const y = peakY + Math.sin(a) * rr * 0.4;
        ctx.fillStyle = `hsla(${i % 2 ? 45 : 280}, 100%, 80%, ${0.4 + Math.random() * 0.5})`;
        ctx.beginPath();
        ctx.arc(x, y, 1.3, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(render);
    };
    render();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} aria-hidden className="absolute inset-0 w-full h-full" />;
}
