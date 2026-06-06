import { createFileRoute } from "@tanstack/react-router";
import { SectionShell, GlassCard } from "@/components/SectionShell";

export const Route = createFileRoute("/symmetries")({
  head: () => ({ meta: [{ title: "Symmetries — QFT Decoder" }, { name: "description", content: "Symmetries dictate the laws of physics." }] }),
  component: Page,
});

function Page() {
  return (
    <SectionShell
      eyebrow="Chapter III · Invariance"
      title="The Hidden"
      italic="Symmetries of Nature"
      description="Every conservation law arises from a symmetry. Energy from time, momentum from space, charge from a rotation in an invisible internal dimension. The universe is sculpted by what stays the same."
    >
      <GlassCard title="Noether's Theorem" eq="continuous symmetry  ⟶  conserved current">
        <p>Emmy Noether's 1918 theorem is the single most beautiful result in physics. It connects geometry to dynamics, telling us that every smooth symmetry of the action implies a quantity that nature must preserve.</p>
      </GlassCard>
      <GlassCard title="Gauge Symmetry · U(1), SU(2), SU(3)">
        <p>The three forces of the Standard Model arise from three internal symmetries. Electromagnetism is U(1), the weak force SU(2), and the strong force SU(3). Forces are the price of local symmetry.</p>
      </GlassCard>
      <GlassCard title="Spontaneous Symmetry Breaking">
        <p>The Higgs field permeates space and chooses a non-zero ground state. The symmetry of the laws is hidden by the asymmetry of the vacuum — and mass is born.</p>
      </GlassCard>
    </SectionShell>
  );
}
