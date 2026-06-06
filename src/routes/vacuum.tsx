import { createFileRoute } from "@tanstack/react-router";
import { SectionShell, GlassCard } from "@/components/SectionShell";

export const Route = createFileRoute("/vacuum")({
  head: () => ({ meta: [{ title: "The Quantum Vacuum — QFT Decoder" }, { name: "description", content: "The vacuum is the loudest silence in physics." }] }),
  component: Page,
});

function Page() {
  return (
    <SectionShell
      eyebrow="Chapter VII · Nothingness"
      title="The Quantum"
      italic="Vacuum"
      description="What we call empty space is the most active state in physics — a churning sea of virtual particles, blinking in and out of existence faster than time can measure, governed by the uncertainty principle itself."
    >
      <GlassCard title="Zero-Point Energy" eq="E₀ = ½ℏω">
        <p>Even at absolute zero, a quantum harmonic oscillator retains an irreducible energy. Every field, at every point in space, contributes this fundamental restlessness.</p>
      </GlassCard>
      <GlassCard title="The Casimir Effect">
        <p>Place two metal plates a micron apart in perfect vacuum. They will pull toward each other. The vacuum between them is poorer in modes than the vacuum outside — and nothingness itself exerts a measurable force.</p>
      </GlassCard>
      <GlassCard title="The Cosmological Constant Problem">
        <p>Naive theory predicts a vacuum energy 10¹²⁰ times larger than what we observe. This may be the largest discrepancy between theory and experiment in the history of science — a great open question of our age.</p>
      </GlassCard>
    </SectionShell>
  );
}
