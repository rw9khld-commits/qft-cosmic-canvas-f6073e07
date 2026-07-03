import { createFileRoute } from "@tanstack/react-router";
import { SectionShell, GlassCard } from "@/components/SectionShell";

export const Route = createFileRoute("/beyond")({
  head: () => ({ meta: [{ title: "Beyond the Standard Model — QFT Decoder" }, { name: "description", content: "Open problems past the edge of our best theory." }] }),
  component: Page,
});

function Page() {
  return (
    <SectionShell
      eyebrow="Epilogue · Open Problems"
      title="Beyond the"
      italic="Standard Model"
      description="The Standard Model correctly describes every collider experiment performed to date, yet it is demonstrably incomplete. Several concrete observational and structural facts require physics that is not in its Lagrangian."
    >
      <GlassCard title="Neutrino Masses — the First Confirmed Departure" eq="ν_e, ν_μ, ν_τ  oscillate  ⟹  Δm² ≠ 0">
        <p>The Standard Model contains only left-handed neutrinos and predicts m<sub>ν</sub> = 0. Neutrino oscillations (Super-Kamiokande 1998, SNO 2001) show at least two mass-squared differences are non-zero. Adding masses requires either right-handed neutrinos with Dirac terms or a Majorana mass term of the form ½ m<sub>ν</sub> ν<sup>T</sup>Cν, which violates lepton number by two units.</p>
      </GlassCard>

      <GlassCard title="Dark Matter and Dark Energy" eq="Ω_dm ≈ 0.26,   Ω_Λ ≈ 0.69,   Ω_baryon ≈ 0.05">
        <p>Rotation curves, gravitational lensing, the CMB acoustic peaks, and large-scale structure all point to a non-baryonic, non-relativistic component making up ~5× the mass of ordinary matter. Its particle content is unknown but must be gravitationally coupled and have negligible cross-section with photons.</p>
        <p>The observed accelerated expansion additionally requires an energy component with equation of state w ≈ −1. Whether this is a true cosmological constant or a dynamical field (quintessence) is unresolved.</p>
      </GlassCard>

      <GlassCard title="The Hierarchy Problem" eq="δm_H²  ~  Λ²   whereas   m_H ≈ 125 GeV">
        <p>Radiative corrections to the Higgs mass from top-quark loops scale quadratically with the cutoff: if new physics enters at the Planck scale, the natural expectation is m<sub>H</sub> ~ 10¹⁹ GeV. Its observed value near 10² GeV requires a cancellation of one part in 10³⁴. Supersymmetry, compositeness, and extra dimensions are candidate explanations; none is yet supported by data.</p>
      </GlassCard>

      <GlassCard title="Matter–Antimatter Asymmetry" eq="η ≡ n_B / n_γ  ≈  6 × 10⁻¹⁰">
        <p>A universe evolving from a symmetric hot Big Bang under Standard Model dynamics would annihilate almost completely. The observed baryon-to-photon ratio requires the Sakharov conditions: baryon number violation, C and CP violation, and a departure from thermal equilibrium. The CP violation known to exist in the CKM matrix is quantitatively insufficient by ~10 orders of magnitude.</p>
      </GlassCard>

      <GlassCard title="Quantum Gravity" eq="[gᵤᵥ(x), gᵃᵦ(y)] = ?">
        <p>General relativity treated as a quantum field theory is non-renormalisable: the coupling 1/M<sub>Pl</sub>² has negative mass dimension, so infinitely many counterterms are needed above the Planck energy. It is an excellent effective field theory below M<sub>Pl</sub> but requires a UV completion.</p>
        <p>Candidate frameworks include string theory (extended objects replace point particles, softening UV divergences), loop quantum gravity (quantised geometry), causal dynamical triangulations, and asymptotic safety. No experimental signature has yet discriminated between them.</p>
      </GlassCard>

      <GlassCard title="Structural Questions Without Numerical Answers">
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>Why three generations of fermions with mass ratios spanning 10¹²?</li>
          <li>Why is θ<sub>QCD</sub> &lt; 10⁻¹⁰ (the strong CP problem)?</li>
          <li>Why is the cosmological constant 10⁻¹²² in Planck units — anthropics, symmetry, or dynamics?</li>
          <li>Why is the gauge group SU(3) × SU(2) × U(1) and not something else?</li>
        </ul>
        <p>Each question is a signpost. QFT tells us how to phrase it precisely; nature has not yet chosen to answer.</p>
      </GlassCard>
    </SectionShell>
  );
}
