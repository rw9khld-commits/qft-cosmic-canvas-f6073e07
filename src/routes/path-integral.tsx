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
      italic="Every History at Once"
      description="To get from here to there, a quantum particle does not choose a single trajectory. It takes them all — weighted by a complex phase — and the universe quietly averages over every possible past."
    >
      <figure className="glass rounded-3xl overflow-hidden border border-violet/20">
        <img src={pathImg.url} alt="Path integral — the probability amplitude from A to B as a sum over all possible trajectories" className="w-full h-auto" loading="lazy" />
        <figcaption className="px-6 py-3 text-xs tracking-[0.25em] uppercase text-muted-foreground border-t border-violet/10">Fig. V · Every trajectory from A to B contributes a complex amplitude</figcaption>
      </figure>

      <GlassCard title="Feynman's Formulation" eq="K(b,a) = ∫ 𝒟x(t)  exp( i S[x(t)] / ℏ )">
        <p>The propagator K(b,a) — the amplitude for a particle to go from event a to event b — is a functional integral over every continuous path connecting them. Each path contributes a unit-modulus phase e^{`{iS/ℏ}`}, where S = ∫ L dt is the classical action. The probability amplitude is their coherent sum; the probability is its modulus squared.</p>
      </GlassCard>

      <GlassCard title="Why Classical Mechanics Emerges">
        <p>For macroscopic motion, S ≫ ℏ. A tiny variation δx of the path produces an enormous phase change δS/ℏ, and neighbouring contributions cancel through destructive interference — except near a path where δS = 0. That stationary path is exactly the solution of the Euler–Lagrange equations. Newton's laws are the loud silence between cancellations.</p>
      </GlassCard>

      <GlassCard title="Interference of Histories">
        <p>In the double slit, the two slits provide two families of paths whose phases add. The bright fringes are where histories interfere constructively, the dark fringes where they annihilate. A "single" particle does not pass through one slit — every conceivable trajectory contributes, and reality is the interference pattern of the universe's own indecision.</p>
      </GlassCard>

      <GlassCard title="From Particles to Fields" eq="Z = ∫ 𝒟φ  exp( i S[φ] / ℏ )">
        <p>In QFT, the integration variable is not a particle path but an entire field configuration φ(x,t) over spacetime. The generating functional Z encodes every correlation function — and therefore every observable. Differentiate Z with respect to source terms and out fall propagators, scattering amplitudes, vacuum structure: the complete physical content of the theory.</p>
      </GlassCard>

      <GlassCard title="Wick Rotation & the Bridge to Statistical Mechanics" eq="t → −iτ ⇒ e^{iS/ℏ} → e^{−SE/ℏ}">
        <p>Continuing time into the imaginary axis turns the oscillating quantum integrand into a real Boltzmann weight. Quantum field theory in d dimensions becomes statistical mechanics in d+1. This is why critical phenomena, phase transitions, and quantum fields share the same mathematical skeleton — they are two faces of one geometry.</p>
      </GlassCard>

      <GlassCard title="Philosophical Coda">
        <p>The path integral does not say a particle takes one path we cannot know. It says the question "which path?" has no answer because nature does not pick one. <em className="text-gold/90">Reality is the sum of every possibility, weighted by an angle no instrument can ever measure directly.</em></p>
      </GlassCard>
    </SectionShell>
  );
}
