import { createFileRoute } from "@tanstack/react-router";
import { SectionShell, GlassCard } from "@/components/SectionShell";

export const Route = createFileRoute("/renormalization")({
  head: () => ({ meta: [{ title: "Renormalization — QFT Decoder" }, { name: "description", content: "Taming the infinities of quantum field theory." }] }),
  component: Page,
});

function Page() {
  return (
    <SectionShell
      eyebrow="Chapter VI · Scale"
      title="Renormalisation"
      italic="and the Renormalisation Group"
      description="Loop diagrams produce integrals that diverge at large internal momentum. Renormalisation is the systematic procedure that absorbs these divergences into a redefinition of the parameters of the Lagrangian, and the renormalisation group turns this redefinition into a statement about how physics depends on the scale of observation."
    >
      <GlassCard title="Where the Infinities Come From" eq="∫ d⁴k / (k² − m²)² ~ ln Λ">
        <p>Consider the one-loop correction to the electron self-energy in QED. Momentum conservation at each vertex fixes the external legs, but the loop momentum k is unconstrained, and the integrand falls off only as 1/k⁴ at large k. The integral is logarithmically divergent at the upper limit.</p>
        <p><strong>The divergence is not a failure of the theory — it is the theory telling us it has been extrapolated beyond its domain of validity.</strong> High-momentum modes correspond to short distances, where new physics (unknown to the low-energy Lagrangian) may reside.</p>
      </GlassCard>

      <GlassCard title="Regularisation and Renormalisation, Step by Step">
        <p>The procedure has three sharp stages:</p>
        <ol className="list-decimal list-inside space-y-1 pl-2">
          <li><strong>Regularise.</strong> Introduce a cutoff (a maximum momentum Λ, a dimensional parameter ε = 4 − d, or a lattice spacing a). The integral is now finite but depends on the regulator.</li>
          <li><strong>Absorb.</strong> Split every parameter in ℒ into a physical piece plus a counterterm: m² = m<sub>R</sub>² + δm², e = e<sub>R</sub> + δe, φ = √Z φ<sub>R</sub>. Choose δm², δe, and (Z − 1) to cancel the regulator-dependent pieces of the divergent diagrams order by order.</li>
          <li><strong>Remove the regulator.</strong> Take Λ → ∞ (or ε → 0). Physical observables — cross sections, energy levels — remain finite and independent of the regulator.</li>
        </ol>
        <p>A theory is <strong>renormalisable</strong> when a finite number of counterterms suffices to all orders. This requires the couplings in ℒ to have non-negative mass dimension — the same criterion that constrains the Standard Model Lagrangian.</p>
      </GlassCard>

      <GlassCard title="The Renormalisation Group" eq="μ dg/dμ = β(g)">
        <p>The subtraction procedure requires an arbitrary energy scale μ. Physical observables cannot depend on this arbitrary choice, so the "bare" couplings must vary with μ in exactly the way that cancels the μ-dependence of the loop integrals. That variation is encoded in the <strong>beta function</strong>.</p>
        <p>For QED at one loop:</p>
        <p className="font-mono text-cyan/80 pl-3 border-l border-cyan/30">
          β(e) = e³ / (12π²)  &gt;  0.
        </p>
        <p>Integrating gives a coupling that <em>grows</em> with energy: α(m<sub>e</sub>) ≈ 1/137, α(m<sub>Z</sub>) ≈ 1/128. For QCD, quark and gluon loops enter with the opposite sign:</p>
        <p className="font-mono text-cyan/80 pl-3 border-l border-cyan/30">
          β(g<sub>s</sub>) = − ( (11N<sub>c</sub> − 2N<sub>f</sub>) / (48π²) ) g<sub>s</sub>³.
        </p>
        <p>With N<sub>c</sub> = 3 and N<sub>f</sub> ≤ 16, the coefficient is negative — the coupling <strong>shrinks</strong> at high energy. This is <em>asymptotic freedom</em>: at short distances quarks behave as if free, at long distances they are confined.</p>
      </GlassCard>

      <GlassCard title="Wilson's Picture — Coarse-Graining Field Theory">
        <p>Split the field φ into "slow" modes with |k| &lt; Λ/b and "fast" modes with Λ/b &lt; |k| &lt; Λ. Perform the path integral over the fast modes only. The result is an <em>effective</em> action for the slow modes with modified couplings.</p>
        <p>Iterating this coarse-graining flows the theory through the space of possible Lagrangians. Fixed points of the flow describe <strong>scale-invariant physics</strong> — precisely the physics of second-order phase transitions and of quantum critical points.</p>
        <p><strong>Renormalisation is not a repair procedure; it is the language of scale.</strong> A "coupling constant" is an answer to the question "at what resolution are you looking?".</p>
      </GlassCard>

      <GlassCard title="Effective Field Theory">
        <p>Any quantum theory is valid only below some cutoff Λ. Unknown high-energy physics manifests at low energy as a tower of higher-dimensional operators suppressed by powers of E/Λ. To predict experiments at energy E you need only keep the terms with dimension ≤ 4 plus a controlled expansion in E/Λ. <strong>We can do precise physics without knowing the ultimate theory</strong> — the decoupling of scales is the reason science is possible at all.</p>
      </GlassCard>
    </SectionShell>
  );
}
