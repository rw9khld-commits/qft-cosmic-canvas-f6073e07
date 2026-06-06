import { createFileRoute } from "@tanstack/react-router";
import { SectionShell, GlassCard } from "@/components/SectionShell";

export const Route = createFileRoute("/path-integral")({
  head: () => ({ meta: [{ title: "Path Integral — QFT Decoder" }, { name: "description", content: "A particle takes every possible path." }] }),
  component: Page,
});

function Page() {
  return (
    <SectionShell
      eyebrow="Chapter V · Sum Over Histories"
      title="The Path Integral"
      italic="Every History at Once"
      description="To get from here to there, a quantum particle does not choose a single path. It takes them all — weighted by a complex phase — and the universe quietly averages over every possible past."
    >
      <GlassCard title="Feynman's Formulation" eq="⟨xf|xi⟩ = ∫ 𝒟x  e^(iS[x]/ℏ)">
        <p>The amplitude to go from one state to another is the sum, over every conceivable trajectory, of e raised to i times the action divided by ℏ. The classical path is simply where these phases interfere constructively.</p>
      </GlassCard>
      <GlassCard title="Why Classical Mechanics Wins">
        <p>For macroscopic objects, S ≫ ℏ. Tiny variations in the path cause wild oscillations in phase that cancel — except near the stationary path. Newton's laws emerge as the loud silence between cancellations.</p>
      </GlassCard>
      <GlassCard title="Quantum Fields as Functional Integrals">
        <p>In QFT, we integrate over field configurations, not particle paths. Z = ∫𝒟φ e^(iS[φ]) generates every correlation function — the partition function of the entire universe.</p>
      </GlassCard>
    </SectionShell>
  );
}
