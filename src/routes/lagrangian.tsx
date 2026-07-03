import { createFileRoute } from "@tanstack/react-router";
import { SectionShell, GlassCard } from "@/components/SectionShell";

export const Route = createFileRoute("/lagrangian")({
  head: () => ({ meta: [{ title: "Lagrangian — QFT Decoder" }, { name: "description", content: "The Lagrangian density encodes the dynamics of every field." }] }),
  component: Page,
});

function Page() {
  return (
    <SectionShell
      eyebrow="Chapter II · Dynamics"
      title="The Lagrangian"
      italic="Density and the Action"
      description="The Lagrangian density ℒ(φ, ∂φ) is a Lorentz scalar built from the fields. Its integral over spacetime is the action S. Extremising S produces the equations of motion; expanding it around the vacuum produces the Feynman rules. Every prediction of QFT is a consequence of choosing ℒ."
    >
      <GlassCard title="The Action Principle" eq="S = ∫ ℒ(φ, ∂ᵤφ) d⁴x   ·   δS = 0">
        <p>
          Consider varying the field φ(x) → φ(x) + δφ(x), with δφ vanishing on the boundary. The variation of the action is
        </p>
        <p className="font-mono text-cyan/80 pl-3 border-l border-cyan/30">
          δS = ∫ [ (∂ℒ/∂φ) δφ + (∂ℒ/∂(∂ᵤφ)) δ(∂ᵤφ) ] d⁴x.
        </p>
        <p>Integrate the second term by parts, using δ(∂ᵤφ) = ∂ᵤ(δφ):</p>
        <p className="font-mono text-cyan/80 pl-3 border-l border-cyan/30">
          δS = ∫ [ ∂ℒ/∂φ  −  ∂ᵤ ( ∂ℒ/∂(∂ᵤφ) ) ] δφ  d⁴x  +  (boundary term = 0).
        </p>
        <p>
          Because δφ is arbitrary in the interior, the bracket must vanish. This gives the <strong>Euler–Lagrange equation for a field</strong>:
        </p>
        <p className="font-mono text-cyan/80 pl-3 border-l border-cyan/30">
          ∂ᵤ ( ∂ℒ/∂(∂ᵤφ) )  −  ∂ℒ/∂φ  =  0.
        </p>
        <p>
          <strong>The equations of motion are not additional inputs — they are geometric extremals of a scalar functional on the space of field configurations.</strong>
        </p>
      </GlassCard>

      <GlassCard title="The Klein–Gordon Field, Derived" eq="ℒ = ½ (∂ᵤφ)(∂ᵘφ) − ½ m²φ²">
        <p>Compute each ingredient of the Euler–Lagrange equation:</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>∂ℒ/∂φ = −m²φ.</li>
          <li>∂ℒ/∂(∂ᵤφ) = ∂ᵘφ,  so ∂ᵤ(∂ᵘφ) = □φ  (with □ ≡ ∂ᵤ∂ᵘ = ∂²/∂t² − ∇²).</li>
        </ul>
        <p>Substitution gives (□ + m²) φ = 0, the <strong>Klein–Gordon equation</strong>. Plane-wave solutions φ ∝ e<sup>−ik·x</sup> require k² = m², i.e. E² = p² + m². <strong>The relativistic energy–momentum relation is not assumed; it drops out of the algebra.</strong></p>
      </GlassCard>

      <GlassCard title="The Dirac Lagrangian and Spin" eq="ℒ = ψ̄ (iγᵘ∂ᵤ − m) ψ">
        <p>
          Dirac searched for a Lorentz-covariant equation <em>first order</em> in ∂ᵤ, so probability density stays positive. The requirement (iγᵘ∂ᵤ − m)(iγᵘ∂ᵤ + m) = □ + m² forces the γ-matrices to satisfy the Clifford algebra
        </p>
        <p className="font-mono text-cyan/80 pl-3 border-l border-cyan/30">{`{ γᵘ, γᵛ } = 2 ηᵘᵛ 𝟙.`}</p>
        <p>
          The smallest matrices obeying this are 4×4, and their four complex components describe spin-½ particles <em>and</em> their antiparticles. <strong>Antimatter is not added by hand — it is the algebraic price of demanding relativity and unitarity together.</strong>
        </p>
      </GlassCard>

      <GlassCard title="From Global to Local: Gauging" eq="∂ᵤ  ⟶  Dᵤ = ∂ᵤ + ieAᵤ">
        <p>
          The free Dirac Lagrangian is invariant under a <em>global</em> phase rotation ψ → e<sup>iα</sup> ψ (α constant). Now demand invariance under a <em>local</em> phase α(x). Then ∂ᵤψ picks up an unwanted term i(∂ᵤα)ψ.
        </p>
        <p>
          Introduce a new vector field A<sub>ᵤ</sub>(x) that shifts as A<sub>ᵤ</sub> → A<sub>ᵤ</sub> − (1/e)∂ᵤα, and replace ∂ᵤ by the covariant derivative D<sub>ᵤ</sub> = ∂ᵤ + ieA<sub>ᵤ</sub>. Then D<sub>ᵤ</sub>ψ transforms exactly like ψ, and ℒ = ψ̄(iγᵘD<sub>ᵤ</sub> − m)ψ is fully invariant.
        </p>
        <p>
          Add its own kinetic term −¼ F<sub>ᵤᵥ</sub>F<sup>ᵤᵥ</sup> with F<sub>ᵤᵥ</sub> ≡ ∂<sub>ᵤ</sub>A<sub>ᵥ</sub> − ∂<sub>ᵥ</sub>A<sub>ᵤ</sub> — the unique gauge-invariant, Lorentz-scalar, dimension-4 object built from A<sub>ᵤ</sub>. The result is <strong>Quantum Electrodynamics</strong>. The photon and the electromagnetic interaction are <em>forced</em> upon us by promoting a rigid symmetry to a local one.
        </p>
      </GlassCard>

      <GlassCard title="Why This Structure Is Universal">
        <p>
          Every term in ℒ must be (i) a Lorentz scalar, (ii) invariant under the postulated internal symmetries, (iii) local, (iv) hermitian, and (v) of mass-dimension ≤ 4 for renormalisability. These five constraints leave <em>almost no freedom</em>. The Standard Model Lagrangian is essentially the shortest expression compatible with them.
        </p>
      </GlassCard>
    </SectionShell>
  );
}
