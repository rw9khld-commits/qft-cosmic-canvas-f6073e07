import { useEffect, useRef } from "react";

/**
 * Elevated quantum field hero with advanced visuals and philosophical depth.
 * Features:
 * - Dynamic 3D perspective grid with fluid ripples
 * - Cursor-driven field excitations with energetic bloom
 * - Virtual particle pairs with sophisticated lifecycle
 * - Cinematic color palette and lighting
 */
export function QuantumFieldHeroElevated() {
  const ref = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0.55, y: 0.55, active: false, energy: 0 });

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

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      mouseRef.current.x = (e.clientX - r.left) / r.width;
      mouseRef.current.y = (e.clientY - r.top) / r.height;
      mouseRef.current.active = true;
      mouseRef.current.energy = Math.min(1, mouseRef.current.energy + 0.12);
    };
    const onLeave = () => { mouseRef.current.active = false; };
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);

    type Pair = {
      x: number; y: number; vx: number; vy: number;
      life: number; max: number; hue: number; r: number; partner?: Pair;
    };
    const pairs: Pair[] = [];
    const MAX_PAIRS = 120;

    const spawnPair = (x?: number, y?: number, energetic = false) => {
      const px = x ?? Math.random() * w;
      const py = y ?? Math.random() * h;
      const ang = Math.random() * Math.PI * 2;
      const sp = (energetic ? 1.2 : 0.3) + Math.random() * (energetic ? 1.8 : 0.5);
      const max = (energetic ? 80 : 140) + Math.random() * 160;
      const hues = [268, 200, 45]; // violet, cyan, gold
      const hue = hues[Math.floor(Math.random() * hues.length)];
      const a: Pair = { x: px, y: py, vx: Math.cos(ang) * sp, vy: Math.sin(ang) * sp, life: 0, max, hue, r: 1.3 + Math.random() * 2.0 };
      const b: Pair = { x: px, y: py, vx: -a.vx, vy: -a.vy, life: 0, max, hue, r: a.r };
      a.partner = b; b.partner = a;
      pairs.push(a, b);
    };
    for (let i = 0; i < 35; i++) spawnPair();

    let t = 0;
    const cols = 72;
    const rows = 40;

    const project = (gx: number, gy: number, mx: number, my: number, energy: number) => {
      const nx = gx / (cols - 1) - 0.5;
      const ny = gy / (rows - 1) - 0.5;

      const dx = (nx + 0.5) - mx;
      const dy = (ny + 0.5) - my;
      const md = Math.sqrt(dx * dx + dy * dy);

      // Multi-layered wave patterns for richness
      const baseRipple =
        Math.sin(gx * 0.28 + t * 1.4) * 3.5 +
        Math.cos(gy * 0.35 - t * 1.8) * 3.5 +
        Math.sin((gx + gy) * 0.15 + t * 0.9) * 3.0 +
        Math.cos((gx - gy) * 0.12 + t * 1.1) * 2.5;

      // Quantum field excitation under cursor
      const peak = -45 * energy * Math.exp(-md * md * 28);
      const radial = Math.sin(md * 32 - t * 5) * 8 * Math.exp(-md * 2.8) * (0.5 + energy * 0.8);

      const z = baseRipple + peak + radial;
      const persp = 1 / (1 + (ny + 0.5) * 1.0);
      const sx = w * 0.5 + nx * w * 1.1 * persp;
      const sy = h * 0.58 + ny * h * 0.82 * persp + z * persp;
      return { x: sx, y: sy, persp, md, z };
    };

    const render = () => {
      t += 0.014;

      // Deeper, richer fade for trails
      ctx.fillStyle = "rgba(3, 3, 8, 0.25)";
      ctx.fillRect(0, 0, w, h);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      mouseRef.current.energy *= 0.96;
      if (!mouseRef.current.active) mouseRef.current.energy *= 0.92;
      const energy = mouseRef.current.energy;

      // FIELD GRID — horizontal lines with gradient
      for (let gy = 0; gy < rows; gy++) {
        ctx.beginPath();
        for (let gx = 0; gx < cols; gx++) {
          const p = project(gx, gy, mx, my, energy);
          if (gx === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        const fade = gy / rows;
        const hue = 268 + fade * 22;
        const alpha = 0.08 + fade * 0.32 + energy * 0.08;
        ctx.strokeStyle = `hsla(${hue}, 90%, ${50 + fade * 16}%, ${alpha})`;
        ctx.lineWidth = 0.85;
        ctx.stroke();
      }

      // Vertical lines — sparser but visible
      for (let gx = 0; gx < cols; gx += 2) {
        ctx.beginPath();
        for (let gy = 0; gy < rows; gy++) {
          const p = project(gx, gy, mx, my, energy);
          if (gy === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        ctx.strokeStyle = `hsla(200, 85%, 64%, ${0.07 + energy * 0.1})`;
        ctx.lineWidth = 0.65;
        ctx.stroke();
      }

      // CURSOR EXCITATION GLOW — more dramatic
      if (energy > 0.02) {
        const cx = mx * w;
        const cy = my * h;
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, 220 + energy * 100);
        g.addColorStop(0, `rgba(255, 220, 150, ${0.65 * energy})`);
        g.addColorStop(0.25, `rgba(200, 140, 255, ${0.35 * energy})`);
        g.addColorStop(0.5, `rgba(120, 200, 255, ${0.18 * energy})`);
        g.addColorStop(1, "transparent");
        ctx.save();
        ctx.globalCompositeOperation = "lighter";
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(cx, cy, 250, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Energetic pairs from cursor
        if (Math.random() < energy * 0.5) spawnPair(cx, cy, true);
      }

      // VIRTUAL PARTICLE PAIRS
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      for (let i = pairs.length - 1; i >= 0; i--) {
        const p = pairs[i];
        p.life++;
        p.x += p.vx;
        p.y += p.vy;
        const t0 = p.life / p.max;
        const a = Math.sin(t0 * Math.PI);

        // Glow halo
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 12);
        grad.addColorStop(0, `hsla(${p.hue}, 95%, 75%, ${a * 0.6})`);
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 12, 0, Math.PI * 2);
        ctx.fill();

        // Core
        ctx.fillStyle = `hsla(${p.hue}, 96%, 80%, ${a * 0.9})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * (0.7 + a * 0.9), 0, Math.PI * 2);
        ctx.fill();

        // Annihilation line
        if (p.partner && t0 > 0.8) {
          const a2 = (1 - t0) * 7;
          ctx.strokeStyle = `hsla(${p.hue}, 100%, 85%, ${a2})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.partner.x, p.partner.y);
          ctx.stroke();
        }

        if (p.life >= p.max) pairs.splice(i, 1);
      }
      ctx.restore();

      if (pairs.length < MAX_PAIRS && Math.random() < 0.55) spawnPair();

      raf = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="absolute inset-0 w-full h-full cursor-crosshair"
    />
  );
}
