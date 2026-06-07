import { createFileRoute } from "@tanstack/react-router";
import { SectionShell, GlassCard } from "@/components/SectionShell";
import vacuumImg from "@/assets/vacuum-qft.png.asset.json";

export const Route = createFileRoute("/vacuum")({
  head: () => ({ meta: [{ title: "The Quantum Vacuum — QFT Decoder" }, { name: "description", content: "The vacuum is the loudest silence in physics." }] }),
  component: Page,
});

function Page() {
  return (
    <SectionShell
      eyebrow="Chapter VII · Nothingness"
      title="The Quantum"
      italic="Vacuum"
      description="What we call empty space is the most active state in physics — a churning sea of virtual particles, blinking in and out of existence faster than time can measure, governed by the uncertainty principle itself."
    >
      <figure className="glass rounded-3xl overflow-hidden border border-violet/20">
        <img src={vacuumImg.url} alt="The Vacuum in QFT — ground state of all fields visualised as a luminous lattice of fluctuations" className="w-full h-auto" loading="lazy" />
        <figcaption className="px-6 py-3 text-xs tracking-[0.25em] uppercase text-muted-foreground border-t border-violet/10">Fig. VII · The vacuum state |0⟩ — ground state of every quantum field</figcaption>
      </figure>

      <GlassCard title="Zero-Point Energy" eq="E₀ = ½ℏω  ·  P^μ|0⟩ = 0">
        <p>Every mode of every field is, mathematically, a quantum harmonic oscillator. Even when no quanta are excited, each mode retains an irreducible energy ½ℏω. Sum over all modes and the vacuum carries — formally — an infinite density of energy. Renormalization extracts the physics; the residue is the cosmological constant we measure in the sky.</p>
      </GlassCard>

      <GlassCard title="Vacuum Fluctuations" eq="ΔE · Δt ≥ ℏ/2">
        <p>Heisenberg's time–energy inequality lets the vacuum borrow energy ΔE, provided it returns it within Δt. In that loaned instant, virtual particle–antiparticle pairs flicker into existence and annihilate. They are not metaphor: they shift the energy levels of hydrogen (Lamb shift), modify the electron's magnetic moment (g − 2), and pull metal plates together (Casimir effect).</p>
      </GlassCard>

      <GlassCard title="The Vacuum Expectation Value" eq="⟨0|φ(x)|0⟩ = 0   (or ≠ 0)">
        <p>For most fields the vacuum is symmetric and ⟨0|φ|0⟩ vanishes. But the Higgs field condenses: its VEV is non-zero, v ≈ 246 GeV, breaking electroweak symmetry and giving every massive particle its mass. The "nothing" of the universe chose a direction — and reality crystallized around that choice.</p>
      </GlassCard>

      <GlassCard title="The Casimir Effect — Force from Emptiness">
        <p>Place two uncharged conducting plates a micron apart in perfect vacuum. The plates restrict which wavelengths can exist between them; outside, every mode is allowed. The vacuum between is "poorer" than the vacuum without, and the pressure difference pulls the plates together with a measurable force ∝ 1/d⁴ — nothingness exerting itself, confirmed experimentally to better than 1%.</p>
      </GlassCard>

      <GlassCard title="The Cosmological Constant Problem">
        <p>Quantum field theory predicts a vacuum energy density of order 10¹¹³ J/m³. Astronomical observation finds 10⁻⁹ J/m³. The disagreement — 122 orders of magnitude — is the largest quantitative failure in the history of physics. It is the single clearest signal that our description of the vacuum is incomplete, and perhaps that spacetime itself is emergent.</p>
      </GlassCard>

      <GlassCard title="Philosophical Coda">
        <p>The vacuum is not the absence of things; it is the presence of every field in its most modest state. Reality is not built upon emptiness — it is built upon a structured silence that already contains, in potentia, every particle that has ever been or could ever be. <em className="text-gold/90">Everything emerges from nothing — because nothing was never truly empty.</em></p>
      </GlassCard>
    </SectionShell>
  );
}
