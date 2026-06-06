import { createFileRoute } from "@tanstack/react-router";
import { SectionShell, GlassCard } from "@/components/SectionShell";

export const Route = createFileRoute("/feynman")({
  head: () => ({ meta: [{ title: "Feynman Diagrams — QFT Decoder" }, { name: "description", content: "A visual algebra of subatomic interactions." }] }),
  component: Page,
});

function Page() {
  return (
    <SectionShell
      eyebrow="Chapter IV · Interaction"
      title="Feynman Diagrams"
      italic="A Visual Algebra of Reality"
      description="Richard Feynman invented a way to draw the unseeable. Every line is a particle, every vertex an interaction, and every diagram a complex number whose square is a probability of the universe."
    >
      <GlassCard title="The Three Strokes" eq="propagator · vertex · external leg">
        <p>Solid lines carry fermions through spacetime. Wavy lines carry photons. At a vertex, an electron emits or absorbs a photon, and history forks into possibility.</p>
      </GlassCard>
      <GlassCard title="Virtual Particles">
        <p>Inside a diagram, particles need not obey E² = p²c² + m²c⁴. They live briefly off-shell, borrowing energy from the vacuum under Heisenberg's permission — and vanishing before reality can object.</p>
      </GlassCard>
      <GlassCard title="From Pictures to Probabilities">
        <p>Each diagram is translated into an integral via the Feynman rules. Sum every topology, square the amplitude, and out comes a cross-section measurable at the Large Hadron Collider.</p>
      </GlassCard>
    </SectionShell>
  );
}
