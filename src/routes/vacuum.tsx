import { createFileRoute } from "@tanstack/react-router";
import { SectionShell, GlassCard } from "@/components/SectionShell";
import vacuumImg from "@/assets/vacuum-qft.png.asset.json";

export const Route = createFileRoute("/vacuum")({
  head: () => ({ meta: [{ title: "The Quantum Vacuum — QFT Decoder" }, { name: "description", content: "The vacuum is the ground state of every quantum field." }] }),
  component: Page,
});

function Page() {
  return (
    <SectionShell
      eyebrow="Chapter VII · Ground State"
      title="The Quantum"
      italic="Vacuum"
      description="The vacuum |0⟩ is the lowest-energy eigenstate of the full Hamiltonian, annihilated by every lowering operator: a_k |0⟩ = 0 for all k. It is a specific, dynamically nontrivial state — not the absence of anything — and its structure has direct, measurable consequences."
    >
      <figure className="glass rounded-3xl overflow-hidden border border-violet/20">
        <img src={vacuumImg.url} alt="The Vacuum in QFT — ground state of all fields" className="w-full h-auto" loading="lazy" />
        <figcaption className="px-6 py-3 text-xs tracking-[0.25em] uppercase text-muted-foreground border-t border-violet/10">Fig. VII · |0⟩ — ground state of every quantum field</figcaption>
      </figure>

      <GlassCard title="Zero-Point Energy, Derived" eq="H = ∑ₖ ℏωₖ (aₖ†aₖ + ½)">
        <p>Every field mode is a quantum harmonic oscillator. For one oscillator with H = ½(p² + ω²q²), the substitution q = √(ℏ/2ω)(a + a†), p = i√(ℏω/2)(a† − a) and the canonical commutator [q, p] = iℏ give [a, a†] = 1 and</p>
        <p className="font-mono text-cyan/80 pl-3 border-l border-cyan/30">
          H = ℏω (a†a + ½).
        </p>
        <p>The ground state satisfies a|0⟩ = 0 and has energy E₀ = ½ℏω &gt; 0. Summing over all modes of a field of mass m:</p>
        <p className="font-mono text-cyan/80 pl-3 border-l border-cyan/30">
          ⟨0|H|0⟩ = ∫ d³k/(2π)³ · ½ ℏ √(k² + m²) → ∞.
        </p>
        <p>The divergence is regulated by a cutoff Λ. <strong>Absolute vacuum energy has no operational meaning</strong> in a theory without gravity; only differences (Casimir force, cosmological expansion) are observable.</p>
      </GlassCard>

      <GlassCard title="Vacuum Fluctuations — What They Actually Are" eq="⟨0 | φ(x)² | 0⟩ ≠ 0   even though   ⟨0 | φ(x) | 0⟩ = 0">
        <p>The field has zero mean in the vacuum but non-zero variance. This is not particles appearing and disappearing in time — it is a statement about the two-point function ⟨0|φ(x)φ(y)|0⟩ of the operator-valued field.</p>
        <p>These fluctuations produce quantitatively measured effects:</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li><strong>Lamb shift</strong>: vacuum EM fluctuations shift the 2s₁/₂ level of hydrogen above 2p₁/₂ by ≈ 1057 MHz.</li>
          <li><strong>Anomalous magnetic moment</strong>: g − 2 for the electron receives corrections a<sub>e</sub> = α/2π + … predicted and measured to 10⁻¹².</li>
          <li><strong>Casimir force</strong>: boundary conditions restrict the modes; the resulting pressure imbalance is F/A = −π²ℏc / (240 d⁴).</li>
        </ul>
      </GlassCard>

      <GlassCard title="The Casimir Effect, Line by Line" eq="F/A = − π²ℏc / (240 d⁴)">
        <p>Between two parallel conducting plates separated by d, the EM field must vanish on the surfaces. The allowed transverse modes have k<sub>z</sub> = nπ/d. The vacuum energy per unit area is</p>
        <p className="font-mono text-cyan/80 pl-3 border-l border-cyan/30">
          E(d)/A = (ℏc/2) ∑<sub>n</sub> ∫ d²k<sub>∥</sub>/(2π)²  √(k<sub>∥</sub>² + (nπ/d)²).
        </p>
        <p>Both this sum and the free-space energy E<sub>free</sub>(d)/A are infinite, but their difference is finite. Regulating and subtracting yields the negative result above; the force is attractive and scales as 1/d⁴, verified to better than 1% since 1997.</p>
      </GlassCard>

      <GlassCard title="The Higgs Vacuum: a Broken-Symmetry Ground State" eq="⟨0|Φ|0⟩ = (0, v/√2)  with  v ≈ 246 GeV">
        <p>For most fields symmetry forces ⟨0|φ|0⟩ = 0. The Higgs is different: its potential is minimised at |Φ| ≠ 0, so the vacuum selects one direction on the internal SU(2)×U(1) manifold. Expanding the covariant kinetic term |D<sub>ᵤ</sub>Φ|² around this point produces mass terms for the W and Z bosons and Yukawa couplings that give fermions mass. <strong>Mass is a property of the vacuum, not of the fields.</strong></p>
      </GlassCard>

      <GlassCard title="The Cosmological Constant Problem">
        <p>Naive vacuum-energy calculation with a Planck-scale cutoff gives ρ<sub>vac</sub> ~ M<sub>Pl</sub>⁴ ≈ 10¹¹² GeV/m³. Cosmological observation gives ρ<sub>Λ</sub> ≈ 10⁻⁴⁷ GeV⁴ ≈ 10⁻⁹ J/m³. The mismatch of ~120 orders of magnitude is the largest quantitative discrepancy in theoretical physics. <strong>It signals that our understanding of how the vacuum gravitates is incomplete — most plausibly requiring quantum gravity.</strong></p>
      </GlassCard>
    </SectionShell>
  );
}
