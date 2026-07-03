import { createFileRoute } from "@tanstack/react-router";
import { SectionShell, GlassCard } from "@/components/SectionShell";

export const Route = createFileRoute("/fields")({
  head: () => ({ meta: [{ title: "Quantum Fields — QFT Decoder" }, { name: "description", content: "Fields are the fundamental fabric of reality." }] }),
  component: Page,
});

function Page() {
  return (
    <SectionShell
      eyebrow="Chapter I · Foundations"
      title="The Fields That"
      italic="Weave Reality"
      description="A field is an assignment of a dynamical variable to every point of spacetime. Once quantised, its excitations are what we call particles — indistinguishable, relativistic, and forced upon us by combining special relativity with quantum mechanics."
    >
      <GlassCard title="From a Particle to a Field" eq="q(t)  ⟶  φ(x, t)">
        <p>
          In ordinary quantum mechanics the dynamical variable is a coordinate <em>q(t)</em>: one degree of freedom per particle, evolving in time. To make the theory Lorentz-covariant, time and space must appear on the same footing, so we promote the <em>label</em> of the degree of freedom from a particle index to a spacetime point <em>x</em>.
        </p>
        <p>
          The result is a <strong>field</strong> <em>φ(x, t)</em>: an <em>infinite</em> collection of dynamical variables, one at every point of space. This is not a stylistic choice — it is the only known way to reconcile locality, unitarity, and relativistic causality.
        </p>
      </GlassCard>

      <GlassCard title="Why Fields, Not Wavefunctions" eq="[φ(x), π(y)] = iℏ δ³(x − y)">
        <p>
          A single-particle relativistic wavefunction cannot exist consistently: negative-energy solutions of the Klein–Gordon and Dirac equations force pair creation, and probability density fails to stay positive. The resolution is to <strong>quantise the field, not the wavefunction</strong>.
        </p>
        <p>Step by step:</p>
        <ol className="list-decimal list-inside space-y-1 pl-2">
          <li>Take the classical field φ(x) and its conjugate momentum π(x) = ∂ℒ/∂(∂₀φ).</li>
          <li>Impose equal-time commutation relations, exactly as [q, p] = iℏ becomes [φ(x), π(y)] = iℏ δ³(x − y).</li>
          <li>Expand φ(x) in plane-wave modes; the Fourier coefficients become creation and annihilation operators <em>a†<sub>k</sub></em>, <em>a<sub>k</sub></em>.</li>
          <li>The state <em>a†<sub>k</sub>|0⟩</em> is a one-particle state of momentum <em>k</em>. Multi-particle states are automatically symmetric (bosons) or antisymmetric (fermions), depending on whether we used commutators or anticommutators.</li>
        </ol>
        <p>
          <strong>The particle concept is derived, not postulated.</strong> Identical particles are identical because they are quanta of the <em>same</em> field.
        </p>
      </GlassCard>

      <GlassCard title="The Field as an Infinite Set of Oscillators" eq="H = ∑<sub>k</sub> ℏω<sub>k</sub> (a†<sub>k</sub>a<sub>k</sub> + ½)">
        <p>
          Substitute the mode expansion into the free Hamiltonian H = ½∫(π² + (∇φ)² + m²φ²) d³x. Cross terms cancel by orthogonality of plane waves, and what remains is a sum over independent quantum harmonic oscillators, one per momentum mode <em>k</em>, with frequency ω<sub>k</sub> = √(k² + m²).
        </p>
        <p>
          <strong>Every free quantum field is, geometrically, a lattice of oscillators indexed by momentum.</strong> Particles are quantised excitations of these oscillators; the vacuum is the state where every oscillator sits in its ground state.
        </p>
      </GlassCard>

      <GlassCard title="Spin and Representation" eq="field  ≅  representation of the Lorentz group">
        <p>
          A field is not just a function — it is a function that transforms in a definite way under Lorentz boosts and rotations. The choice of representation <em>is</em> the choice of spin:
        </p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li><strong>Scalar (spin 0)</strong> — one component, invariant under Lorentz transformations. Example: Higgs.</li>
          <li><strong>Spinor (spin ½)</strong> — four complex components mixing under boosts through the γ<sup>μ</sup> matrices. Example: electron, quark.</li>
          <li><strong>Vector (spin 1)</strong> — four components A<sup>μ</sup> transforming as a 4-vector. Example: photon, gluon.</li>
        </ul>
        <p>
          Spin is therefore <strong>a geometric label of how the field sits inside the tangent space of spacetime</strong>, not an intrinsic angular momentum imagined as literal rotation.
        </p>
      </GlassCard>

      <GlassCard title="The Field Content of the Standard Model">
        <p>
          Twelve fermion fields (six quarks, three charged leptons, three neutrinos), twelve gauge fields (one photon, eight gluons, W⁺, W⁻, Z), and one complex scalar doublet (Higgs). Every particle we have ever detected is a quantum of one of these fields.
        </p>
      </GlassCard>
    </SectionShell>
  );
}
