import { useEffect, useRef } from "react";

/**
 * Cinematic interactive quantum-field hero.
 * - 3D perspective grid that ripples in response to the cursor (an "excitation")
 * - Virtual particle/antiparticle pairs spontaneously appear, separate, annihilate
 * - Energy bloom at the cursor — your interaction perturbs the vacuum
 */
export function QuantumFieldHero() {
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
      mouseRef.current.energy = Math.min(1, mouseRef.current.energy + 0.08);
    };
    const onLeave = () => { mouseRef.current.active = false; };
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);

    type Pair = {
      x: number; y: number; vx: number; vy: number;
      life: number; max: number; hue: number; r: number; partner?: Pair;
    };
    const pairs: Pair[] = [];
    const MAX_PAIRS = 80;

    const spawnPair = (x?: number, y?: number, energetic = false) => {
      const px = x ?? Math.random() * w;
      const py = y ?? Math.random() * h;
      const ang = Math.random() * Math.PI * 2;
      const sp = (energetic ? 0.8 : 0.25) + Math.random() * (energetic ? 1.4 : 0.4);
      const max = (energetic ? 60 : 120) + Math.random() * 120;
      const hue = Math.random() < 0.45 ? 270 : Math.random() < 0.7 ? 200 : 45;
      const a: Pair = { x: px, y: py, vx: Math.cos(ang) * sp, vy: Math.sin(ang) * sp, life: 0, max, hue, r: 1.1 + Math.random() * 1.6 };
      const b: Pair = { x: px, y: py, vx: -a.vx, vy: -a.vy, life: 0, max, hue, r: a.r };
      a.partner = b; b.partner = a;
      pairs.push(a, b);
    };
    for (let i = 0; i < 25; i++) spawnPair();

    let t = 0;
    const cols = 56;
    const rows = 32;

    const project = (gx: number, gy: number, mx: number, my: number, energy: number) => {
      const nx = gx / (cols - 1) - 0.5;
      const ny = gy / (rows - 1) - 0.5;

      // distance to cursor in normalized space
      const dx = (nx + 0.5) - mx;
      const dy = (ny + 0.5) - my;
      const md = Math.sqrt(dx * dx + dy * dy);

      const baseRipple =
        Math.sin(gx * 0.32 + t * 1.2) * 3 +
        Math.cos(gy * 0.38 - t * 1.5) * 3 +
        Math.sin((gx + gy) * 0.18 + t * 0.8) * 2.5;

      // gaussian peak under the cursor — quantum-field excitation
      const peak = -34 * energy * Math.exp(-md * md * 26);
      const radial = Math.sin(md * 28 - t * 4) * 6 * Math.exp(-md * 3) * (0.4 + energy);

      const z = baseRipple + peak + radial;
      const persp = 1 / (1 + (ny + 0.5) * 0.95);
      const sx = w * 0.5 + nx * w * 1.05 * persp;
      const sy = h * 0.58 + ny * h * 0.78 * persp + z * persp;
      return { x: sx, y: sy, persp, md, z };
    };

    const render = () => {
      t += 0.012;

      // soft fade for trails
      ctx.fillStyle = "rgba(3, 3, 8, 0.32)";
      ctx.fillRect(0, 0, w, h);

      // mouse easing
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      mouseRef.current.energy *= 0.965;
      if (!mouseRef.current.active) mouseRef.current.energy *= 0.94;
      const energy = mouseRef.current.energy;

      // FIELD GRID — horizontal lines
      for (let gy = 0; gy < rows; gy++) {
        ctx.beginPath();
        let prev: { x: number; y: number } | null = null;
        for (let gx = 0; gx < cols; gx++) {
          const p = project(gx, gy, mx, my, energy);
          if (gx === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
          prev = p;
        }
        const fade = gy / rows;
        const hue = 268 + fade * 18;
        const alpha = 0.06 + fade * 0.28 + energy * 0.05;
        ctx.strokeStyle = `hsla(${hue}, 88%, ${52 + fade * 14}%, ${alpha})`;
        ctx.lineWidth = 0.7;
        ctx.stroke();
      }
      // vertical lines — sparser
      for (let gx = 0; gx < cols; gx += 2) {
        ctx.beginPath();
        for (let gy = 0; gy < rows; gy++) {
          const p = project(gx, gy, mx, my, energy);
          if (gy === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        ctx.strokeStyle = `hsla(198, 80%, 62%, ${0.06 + energy * 0.08})`;
        ctx.lineWidth = 0.55;
        ctx.stroke();
      }

      // CURSOR EXCITATION GLOW
      if (energy > 0.02) {
        const cx = mx * w;
        const cy = my * h;
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, 180 + energy * 80);
        g.addColorStop(0, `rgba(255, 220, 150, ${0.55 * energy})`);
        g.addColorStop(0.3, `rgba(168, 120, 255, ${0.28 * energy})`);
        g.addColorStop(0.7, `rgba(86, 180, 240, ${0.10 * energy})`);
        g.addColorStop(1, "transparent");
        ctx.save();
        ctx.globalCompositeOperation = "lighter";
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(cx, cy, 220, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // occasional energetic pair from cursor
        if (Math.random() < energy * 0.35) spawnPair(cx, cy, true);
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
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 10);
        grad.addColorStop(0, `hsla(${p.hue}, 95%, 72%, ${a * 0.5})`);
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 10, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `hsla(${p.hue}, 95%, 78%, ${a})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * (0.6 + a * 0.8), 0, Math.PI * 2);
        ctx.fill();

        if (p.partner && t0 > 0.82) {
          const a2 = (1 - t0) * 6;
          ctx.strokeStyle = `hsla(${p.hue}, 100%, 86%, ${a2})`;
          ctx.lineWidth = 0.7;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.partner.x, p.partner.y);
          ctx.stroke();
        }

        if (p.life >= p.max) pairs.splice(i, 1);
      }
      ctx.restore();

      if (pairs.length < MAX_PAIRS && Math.random() < 0.45) spawnPair();

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
