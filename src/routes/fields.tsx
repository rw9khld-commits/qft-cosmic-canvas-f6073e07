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
      description="Every particle you have ever known is a localized ripple in a field that fills all of space. There is no empty void — only the silent hum of quantum fields, eternally vibrating beneath the surface of what we call matter."
    >
      <GlassCard title="What is a Field?" eq="φ(x, t) : ℝ⁴ → ℂ">
        <p>A quantum field assigns an operator to every point in spacetime. The electron field, the photon field, the Higgs field — each pervades the universe, and the particles we measure are merely its excitations.</p>
        <p>When the electron field is excited at a point, we observe an electron. When the photon field oscillates, we see light. Reality is not made of things — it is made of fields.</p>
      </GlassCard>
      <GlassCard title="The Standard Model Fields">
        <p>Twelve matter fields (quarks and leptons), four force-carrier fields (photon, gluons, W, Z), and one scalar field (Higgs) make up the entire visible universe — a quiet symphony of seventeen instruments.</p>
      </GlassCard>
      <GlassCard title="Why Fields, Not Particles?">
        <p>Only the field formulation reconciles quantum mechanics with special relativity. It explains particle creation and annihilation, antimatter, and the deep identity of all electrons in the universe.</p>
      </GlassCard>
    </SectionShell>
  );
}
