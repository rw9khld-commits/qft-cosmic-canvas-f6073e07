import { createFileRoute } from "@tanstack/react-router";
import { SectionShell, GlassCard } from "@/components/SectionShell";
import pathImg from "@/assets/path-integral.png.asset.json";

export const Route = createFileRoute("/path-integral")({
  head: () => ({ meta: [{ title: "Path Integral — QFT Decoder" }, { name: "description", content: "A particle takes every possible path." }] }),
  component: Page,
});

function Page() {
  return (
    <SectionShell
      eyebrow="Chapter V · Sum Over Histories"
      title="The Path Integral"
      italic="Formulation"
      description="The path integral rewrites quantum mechanics as a weighted sum over classical histories. In QFT it becomes a functional integral over field configurations. It is not an alternative interpretation — it is a computational and conceptual reformulation with the same predictions as canonical quantisation, but exposing the geometry more clearly."
    >
      <figure className="glass rounded-3xl overflow-hidden border border-violet/20">
        <img src={pathImg.url} alt="Path integral — amplitude as a sum over trajectories" className="w-full h-auto" loading="lazy" />
        <figcaption className="px-6 py-3 text-xs tracking-[0.25em] uppercase text-muted-foreground border-t border-violet/10">Fig. V · Every trajectory from A to B contributes a phase e^(iS/ℏ)</figcaption>
      </figure>

      <GlassCard title="Deriving the Propagator" eq="K(b, a) = ⟨b | e^(−iĤ(t_b − t_a)/ℏ) | a⟩">
        <p>Slice the time interval into N steps of size ε = (t<sub>b</sub> − t<sub>a</sub>)/N. Insert a complete set of position states between each factor:</p>
        <p className="font-mono text-cyan/80 pl-3 border-l border-cyan/30">
          K = ∫ dx₁ … dx<sub>N−1</sub>  ∏<sub>j=0</sub><sup>N−1</sup>  ⟨x<sub>j+1</sub> | e^(−iĤε/ℏ) | x<sub>j</sub>⟩.
        </p>
        <p>For H = p²/2m + V(x), evaluate each infinitesimal amplitude by also inserting momentum states and doing the Gaussian p-integral. The result is</p>
        <p className="font-mono text-cyan/80 pl-3 border-l border-cyan/30">
          ⟨x<sub>j+1</sub> | e^(−iĤε/ℏ) | x<sub>j</sub>⟩ ≈ (m/2πiℏε)^½ exp{`{ (iε/ℏ) [ ½m ((x_{j+1} − x_j)/ε)² − V(x_j) ] }`}.
        </p>
        <p>The bracket is exactly the discretised Lagrangian L = ½mẋ² − V. Taking N → ∞ turns the product of integrals into a functional integral, and the sum in the exponent into ∫L dt = S:</p>
        <p className="font-mono text-cyan/80 pl-3 border-l border-cyan/30">
          K(b, a) = ∫ 𝒟x(t)  exp( i S[x(t)] / ℏ ).
        </p>
        <p><strong>The Lagrangian formulation of classical mechanics is embedded in quantum mechanics at the deepest level: it is the exponent of the propagator.</strong></p>
      </GlassCard>

      <GlassCard title="Why Newton's Laws Re-emerge" eq="δS[x_cl] = 0">
        <p>Consider a nearby path x(t) = x<sub>cl</sub>(t) + η(t). Expand S to second order in η:</p>
        <p className="font-mono text-cyan/80 pl-3 border-l border-cyan/30">
          S[x] = S[x<sub>cl</sub>] + δS·η + ½ δ²S·η² + …
        </p>
        <p>At a classical solution the linear term vanishes (that is the Euler–Lagrange equation). For a macroscopic system S ≫ ℏ, so a small change in η causes an enormous change in phase e<sup>iS/ℏ</sup>. Contributions from neighbouring paths <em>oscillate rapidly and cancel</em> — except in a narrow tube around x<sub>cl</sub> where the phase is stationary.</p>
        <p><strong>Classical mechanics is the semiclassical limit of a stationary-phase approximation.</strong> Nature "picks" one trajectory because destructive interference silences the alternatives.</p>
      </GlassCard>

      <GlassCard title="Field Path Integral and the Generating Functional" eq="Z[J] = ∫ 𝒟φ  exp( i ∫ (ℒ + Jφ) d⁴x )">
        <p>Promote x(t) to a field φ(x). The integration measure 𝒟φ runs over every field configuration on spacetime. Introduce a source J(x) coupled to φ. Then all n-point correlation functions come from functional derivatives:</p>
        <p className="font-mono text-cyan/80 pl-3 border-l border-cyan/30">
          ⟨0 | T φ(x₁) … φ(xₙ) | 0⟩ = (−i)ⁿ (1/Z[0])  δⁿZ[J] / δJ(x₁)…δJ(xₙ) |<sub>J=0</sub>.
        </p>
        <p>Perturbatively expanding e<sup>iS<sub>int</sub></sup> inside the integral and evaluating each Gaussian moment reproduces the Feynman rules line by line. <strong>Feynman diagrams are the graphical expansion of a Gaussian functional integral perturbed by a polynomial interaction.</strong></p>
      </GlassCard>

      <GlassCard title="Wick Rotation and Statistical Mechanics" eq="t → −iτ  ⟹  e^(iS/ℏ)  →  e^(−S_E/ℏ)">
        <p>Analytically continue time to imaginary values. The oscillating integrand becomes a real, positive Boltzmann weight, and the action becomes the Euclidean action S<sub>E</sub> = ∫[½(∂φ)² + V(φ)] d⁴x<sub>E</sub>. The partition function of a d-dimensional QFT is mathematically identical to that of a classical statistical field theory in d dimensions with temperature k<sub>B</sub>T ↔ ℏ.</p>
        <p><strong>Quantum fluctuations in d dimensions and thermal fluctuations in d dimensions obey the same equations.</strong> This is why the renormalisation group, developed for phase transitions, applies verbatim to QFT.</p>
      </GlassCard>

      <GlassCard title="Why This Formulation Matters">
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>Manifest Lorentz invariance: time and space appear symmetrically inside S = ∫ℒ d⁴x.</li>
          <li>Gauge symmetry is enforced directly on the integration measure (Faddeev–Popov procedure).</li>
          <li>Non-perturbative phenomena (instantons, solitons) are visible as saddle points that no order of perturbation theory can see.</li>
          <li>Lattice discretisation of 𝒟φ turns QFT into a well-defined numerical problem (lattice QCD).</li>
        </ul>
      </GlassCard>
    </SectionShell>
  );
}
