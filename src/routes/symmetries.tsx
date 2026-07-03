import { createFileRoute } from "@tanstack/react-router";
import { SectionShell, GlassCard } from "@/components/SectionShell";

export const Route = createFileRoute("/symmetries")({
  head: () => ({ meta: [{ title: "Symmetries — QFT Decoder" }, { name: "description", content: "Symmetries dictate the laws of physics." }] }),
  component: Page,
});

function Page() {
  return (
    <SectionShell
      eyebrow="Chapter III · Invariance"
      title="Symmetry, Conservation,"
      italic="and Gauge Structure"
      description="A symmetry is a transformation of the fields that leaves the action invariant. Noether's theorem converts every continuous symmetry into a locally conserved current. Local (gauge) symmetries do more: they dictate the existence and form of the interactions themselves."
    >
      <GlassCard title="Noether's Theorem, Line by Line" eq="δS = 0  ⟹  ∂ᵤ jᵘ = 0">
        <p>Suppose the fields transform as φ → φ + εΔφ, and the Lagrangian shifts by a total divergence: δℒ = ε ∂ᵤ Kᵘ (this leaves the action invariant up to a boundary term). Compute δℒ directly:</p>
        <p className="font-mono text-cyan/80 pl-3 border-l border-cyan/30">
          δℒ = (∂ℒ/∂φ) εΔφ + (∂ℒ/∂(∂ᵤφ)) ε∂ᵤΔφ.
        </p>
        <p>Use the Euler–Lagrange equation ∂ℒ/∂φ = ∂ᵤ(∂ℒ/∂(∂ᵤφ)) to rewrite the first term. The two contributions combine into a total divergence:</p>
        <p className="font-mono text-cyan/80 pl-3 border-l border-cyan/30">
          δℒ = ε ∂ᵤ [ (∂ℒ/∂(∂ᵤφ)) Δφ ].
        </p>
        <p>Setting this equal to ε ∂ᵤ Kᵘ gives ∂ᵤ jᵘ = 0 with the <strong>Noether current</strong></p>
        <p className="font-mono text-cyan/80 pl-3 border-l border-cyan/30">
          jᵘ = (∂ℒ/∂(∂ᵤφ)) Δφ − Kᵘ.
        </p>
        <p>The conserved charge is Q = ∫ j⁰ d³x. <strong>Every conservation law in physics is a shadow of a continuous symmetry.</strong> Time translation → energy. Space translation → momentum. Internal U(1) phase → electric charge.</p>
      </GlassCard>

      <GlassCard title="Global vs. Local Symmetry — the Key Distinction">
        <p>A <strong>global</strong> symmetry uses the same transformation parameter α at every spacetime point. It gives a conservation law and nothing more.</p>
        <p>A <strong>local (gauge)</strong> symmetry allows α = α(x). To keep the Lagrangian invariant, one <em>must</em> introduce a compensating vector field A<sub>ᵤ</sub>(x) — the gauge boson — and replace ∂<sub>ᵤ</sub> by the covariant derivative D<sub>ᵤ</sub>. <strong>Interactions are the price of locality.</strong></p>
      </GlassCard>

      <GlassCard title="The Standard Model Gauge Group" eq="G = SU(3)ᶜ × SU(2)ᴸ × U(1)ʸ">
        <p>Each factor is a compact Lie group; each generator corresponds to a gauge boson:</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li><strong>U(1)ʸ</strong> — one generator → hypercharge boson B<sub>ᵤ</sub>.</li>
          <li><strong>SU(2)ᴸ</strong> — three generators (Pauli matrices/2) → W¹, W², W³.</li>
          <li><strong>SU(3)ᶜ</strong> — eight generators (Gell-Mann matrices/2) → eight gluons.</li>
        </ul>
        <p>The number of force carriers equals the dimension of the group. Non-abelian groups ([Tᵃ, Tᵇ] = if<sup>abc</sup>T<sup>c</sup> ≠ 0) yield self-interacting gauge bosons — gluons couple to gluons, W's couple to W's — a purely geometric consequence of non-commutativity.</p>
      </GlassCard>

      <GlassCard title="Geometry: Gauge Fields as Connections">
        <p>Picture spacetime with an internal vector space attached to every point (a <strong>fibre bundle</strong>). Comparing a field's internal orientation at two neighbouring points requires a rule for parallel transport. That rule <em>is</em> the gauge potential A<sub>ᵤ</sub>; the mismatch when transporting around an infinitesimal loop is the field strength F<sub>ᵤᵥ</sub>:</p>
        <p className="font-mono text-cyan/80 pl-3 border-l border-cyan/30">
          F<sub>ᵤᵥ</sub> = ∂<sub>ᵤ</sub>A<sub>ᵥ</sub> − ∂<sub>ᵥ</sub>A<sub>ᵤ</sub> + i[A<sub>ᵤ</sub>, A<sub>ᵥ</sub>].
        </p>
        <p><strong>Electromagnetism is the curvature of a U(1) bundle over spacetime.</strong> The strong and weak forces are curvatures of SU(3) and SU(2) bundles. This is the same mathematical structure as gravity, where the connection is the Christoffel symbols and the curvature is the Riemann tensor.</p>
      </GlassCard>

      <GlassCard title="Spontaneous Symmetry Breaking and the Higgs">
        <p>A symmetry is <em>spontaneously broken</em> when the Lagrangian respects it but the ground state does not. Consider the Higgs potential V(Φ) = −μ²|Φ|² + λ|Φ|⁴ with μ² &gt; 0. Minimising ∂V/∂|Φ|² = 0 gives</p>
        <p className="font-mono text-cyan/80 pl-3 border-l border-cyan/30">
          |Φ|² = μ² / (2λ)  ≡  v² / 2.
        </p>
        <p>The vacuum picks a specific direction on this circle of minima. Expanding Φ around the chosen VEV and substituting into the covariant kinetic term |D<sub>ᵤ</sub>Φ|² produces mass terms ∝ v² A<sub>ᵤ</sub>Aᵘ for the gauge bosons that couple to the broken generators — this is exactly how W and Z acquire mass while the photon stays massless. <strong>Mass is a geometric consequence of a symmetric law with an asymmetric vacuum.</strong></p>
      </GlassCard>
    </SectionShell>
  );
}
