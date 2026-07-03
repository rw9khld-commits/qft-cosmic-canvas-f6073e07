import { createFileRoute } from "@tanstack/react-router";
import { SectionShell, GlassCard } from "@/components/SectionShell";
import feynmanImg from "@/assets/feynman-diagram.png.asset.json";

export const Route = createFileRoute("/feynman")({
  head: () => ({ meta: [{ title: "Feynman Diagrams — QFT Decoder" }, { name: "description", content: "A visual algebra of subatomic interactions." }] }),
  component: Page,
});

function Page() {
  return (
    <SectionShell
      eyebrow="Chapter IV · Interaction"
      title="Feynman Diagrams"
      italic="A Graphical Algebra"
      description="A Feynman diagram is not a picture of a trajectory. It is a mnemonic for one term in a perturbative expansion of a correlation function — a rigorous graphical bookkeeping of Wick contractions with a definite mathematical translation."
    >
      <figure className="glass rounded-3xl overflow-hidden border border-violet/20">
        <img src={feynmanImg.url} alt="Feynman diagram — two electrons exchanging a virtual photon" className="w-full h-auto" loading="lazy" />
        <figcaption className="px-6 py-3 text-xs tracking-[0.25em] uppercase text-muted-foreground border-t border-violet/10">Fig. IV · Tree-level Møller scattering — t-channel photon exchange</figcaption>
      </figure>

      <GlassCard title="Where Diagrams Come From" eq="⟨f | S | i⟩ = ⟨f | T exp(−i ∫ Hᵢ dt) | i⟩">
        <p>Split the Hamiltonian H = H₀ + Hᵢ. In the interaction picture, the S-matrix is a time-ordered exponential of the interaction Hamiltonian. Expand:</p>
        <p className="font-mono text-cyan/80 pl-3 border-l border-cyan/30">
          S = 𝟙 + (−i)∫Hᵢ dt + ((−i)²/2!) T∫∫Hᵢ Hᵢ dt dt′ + …
        </p>
        <p>Each term is a product of field operators. Wick's theorem reduces the vacuum expectation value of a time-ordered product of fields to a sum of products of two-point functions (propagators). <strong>Each way of pairing operators into propagators is one Feynman diagram.</strong> Diagrams are literally a graphical index of Wick contractions — nothing more, nothing less.</p>
      </GlassCard>

      <GlassCard title="The Feynman Rules as a Dictionary">
        <p>Given a Lagrangian, the rules are mechanical:</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li><strong>Internal line</strong> ↔ propagator, e.g. photon: −i η<sub>ᵤᵥ</sub> / (k² + iε);  scalar: i / (k² − m² + iε);  fermion: i(γ·k + m) / (k² − m² + iε).</li>
          <li><strong>Vertex</strong> ↔ coupling read directly off ℒ<sub>int</sub>. QED gives −ieγ<sup>ᵘ</sup>.</li>
          <li><strong>External line</strong> ↔ polarisation vector / spinor of the physical incoming or outgoing particle.</li>
          <li><strong>Loop</strong> ↔ integration ∫ d⁴k / (2π)⁴ over the undetermined internal momentum.</li>
          <li>Impose momentum conservation at every vertex; include symmetry factors and a minus sign for each closed fermion loop.</li>
        </ul>
        <p><strong>Every physical amplitude is an ordered polynomial in the coupling constant, with each monomial equal to a specific diagram.</strong></p>
      </GlassCard>

      <GlassCard title="On-Shell vs. Off-Shell" eq="external: k² = m²   ·   internal: k² arbitrary">
        <p>External legs correspond to detectable particles and must satisfy E² = p² + m². Internal lines are integrated over all four-momenta and are <em>off-shell</em>: they do not obey the mass-shell condition and are not, individually, observable.</p>
        <p><strong>A "virtual particle" is a propagator, not a particle.</strong> It is a Green's function of the free field equation — a mathematical response, not a physical entity that fleetingly exists.</p>
      </GlassCard>

      <GlassCard title="Coupling Expansion and the Loop Hierarchy" eq="𝓐 = 𝓐<sub>tree</sub> + α 𝓐<sub>1-loop</sub> + α² 𝓐<sub>2-loop</sub> + …">
        <p>Each additional vertex costs a factor of the coupling (√α for a QED vertex). Each closed loop contributes an integral over an internal momentum and a further factor of α. When α ≪ 1 the series is a controlled expansion. In QED the coupling is ~1/137, and the electron anomalous magnetic moment agrees with experiment to twelve significant figures — the sharpest quantitative test of any physical theory.</p>
      </GlassCard>

      <GlassCard title="Crossing Symmetry — One Diagram, Many Processes">
        <p>The amplitude 𝓜(p₁, p₂ → p₃, p₄) is an analytic function of the Mandelstam invariants s = (p₁+p₂)², t = (p₁−p₃)², u = (p₁−p₄)². Analytically continuing an outgoing particle of momentum p to an incoming antiparticle of momentum −p relates:</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>e⁻e⁻ → e⁻e⁻ (Møller, t-channel)</li>
          <li>e⁻e⁺ → e⁻e⁺ (Bhabha, adds s-channel)</li>
          <li>e⁻e⁺ → γγ (annihilation, u-channel)</li>
        </ul>
        <p><strong>These are not three physics problems; they are three real slices of one complex-analytic amplitude.</strong> Crossing symmetry is a rigorous consequence of Lorentz invariance and locality.</p>
      </GlassCard>
    </SectionShell>
  );
}
