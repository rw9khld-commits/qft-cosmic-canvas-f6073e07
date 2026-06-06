import { createFileRoute } from "@tanstack/react-router";
import { SectionShell, GlassCard } from "@/components/SectionShell";

export const Route = createFileRoute("/beyond")({
  head: () => ({ meta: [{ title: "Beyond the Standard Model — QFT Decoder" }, { name: "description", content: "What lies past the edge of our best theory." }] }),
  component: Page,
});

function Page() {
  return (
    <SectionShell
      eyebrow="Epilogue · The Unknown"
      title="Beyond the"
      italic="Standard Model"
      description="The Standard Model is the most successful theory in history — and yet it cannot be the final answer. Dark matter, neutrino mass, the hierarchy problem, and gravity itself await a deeper framework."
    >
      <GlassCard title="Dark Matter & Dark Energy">
        <p>Ninety-five percent of the universe is missing from our equations. Whatever it is, it does not interact with light — only with gravity, and perhaps through forces we have yet to imagine.</p>
      </GlassCard>
      <GlassCard title="Quantum Gravity">
        <p>General relativity and quantum field theory are mutually incompatible at the Planck scale. Strings, loops, and asymptotic safety each propose a way forward. Nature has not yet told us which is right.</p>
      </GlassCard>
      <GlassCard title="The Final Questions">
        <p>Why these forces? Why three generations? Why is the cosmological constant so small? Each is a thread that may, one day, unravel into a new theory of everything.</p>
      </GlassCard>
    </SectionShell>
  );
}
