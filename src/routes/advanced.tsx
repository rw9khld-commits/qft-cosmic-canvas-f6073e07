import { createFileRoute } from "@tanstack/react-router";
import { SectionShell, GlassCard } from "@/components/SectionShell";

export const Route = createFileRoute("/advanced")({
  head: () => ({ meta: [{ title: "Advanced Topics — QFT Decoder" }, { name: "description", content: "Anomalies, instantons, and the deeper structure of QFT." }] }),
  component: Page,
});

function Page() {
  return (
    <SectionShell
      eyebrow="Chapter VIII · Frontier"
      title="Advanced"
      italic="Structure"
      description="Beyond perturbation theory lies a rich landscape of exact and topological phenomena. These effects are invisible to any finite order in Feynman diagrams and reveal that QFT is fundamentally a theory of geometry and topology, not just of small oscillations around a vacuum."
    >
      <GlassCard title="Anomalies — Symmetries the Measure Cannot Preserve" eq="∂ᵤ jᵘ = (e² / 16π²) εᵘᵛᵃᵇ Fᵤᵥ Fᵃᵦ">
        <p>A classical symmetry may fail to survive quantisation because the path-integral measure 𝒟ψ is not invariant. Fujikawa's method computes the Jacobian explicitly: for a chiral rotation of a fermion coupled to a gauge field, the Jacobian is a finite functional of F<sub>ᵤᵥ</sub>, and the classical conservation law ∂<sub>ᵤ</sub>j<sup>ᵘ</sup><sub>5</sub> = 0 is replaced by the equation above.</p>
        <p><strong>Anomalies are exact, one-loop-exact quantities</strong> that have physical consequences: the anomalous decay π⁰ → γγ is predicted with no free parameter and agrees with experiment. The cancellation of gauge anomalies within each Standard Model generation (quarks compensate leptons) is a strict consistency requirement.</p>
      </GlassCard>

      <GlassCard title="Instantons — Tunnelling Between Vacua" eq="S_inst = 8π² / g²">
        <p>Non-abelian gauge theories admit topologically distinct vacua labelled by an integer winding number n. In Euclidean signature, finite-action classical solutions interpolate between vacua with different n; these are <strong>instantons</strong>. They contribute to the path integral a factor e<sup>−S_inst</sup> = e<sup>−8π²/g²</sup>, which is non-analytic in g and therefore invisible to any Taylor expansion.</p>
        <p>Instanton effects explain the U(1)<sub>A</sub> problem in QCD (why the η′ is heavy) and mediate baryon-number violation in the electroweak sector (sphaleron processes). <strong>Non-perturbative phenomena live between the terms of Feynman diagrams.</strong></p>
      </GlassCard>

      <GlassCard title="Solitons — Topologically Stable Field Configurations">
        <p>Certain field theories admit finite-energy classical solutions that cannot be smoothly deformed to the vacuum because they carry a conserved topological charge. Examples:</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>Kinks in 1+1 D φ⁴ theory — the field interpolates between two degenerate vacua.</li>
          <li>Vortices in Abelian Higgs models — quantised magnetic flux, realised in Type II superconductors.</li>
          <li>'t Hooft–Polyakov monopoles in spontaneously broken non-Abelian gauge theories — carriers of magnetic charge, predicted whenever a simple group breaks to a subgroup containing U(1).</li>
        </ul>
        <p><strong>Topological charge is not a coupling but a boundary condition</strong>: it is preserved by continuous evolution as reliably as energy.</p>
      </GlassCard>

      <GlassCard title="Conformal Field Theory" eq="Tᵘ<sub>ᵤ</sub> = 0">
        <p>Theories with vanishing trace of the stress tensor are invariant under the full conformal group, which in d = 2 is infinite-dimensional (the Virasoro algebra). This constrains correlation functions so tightly that many 2D CFTs are solvable exactly. In higher dimensions, CFTs describe fixed points of the renormalisation group flow — the universal physics of critical phenomena.</p>
      </GlassCard>

      <GlassCard title="Dualities and Holography">
        <p>Certain pairs of theories are quantum-mechanically equivalent despite looking entirely different: strong coupling in one becomes weak coupling in the other. The AdS/CFT correspondence maps a d+1-dimensional gravitational theory in anti-de Sitter space to a d-dimensional CFT on its boundary. <strong>Spacetime geometry itself can be an emergent, redundant description</strong> of a lower-dimensional quantum field theory.</p>
      </GlassCard>
    </SectionShell>
  );
}
