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
      title="Renormalization"
      italic="The Art of Finite Answers"
      description="Loop diagrams in QFT produce infinities. For decades, this seemed like a fatal flaw — until physicists realized the infinities were not a sickness, but a lesson about scale itself."
    >
      <GlassCard title="The Wilsonian Picture">
        <p>Kenneth Wilson showed that a theory depends on the energy scale at which you observe it. Coupling constants flow with energy, and what we call a fundamental constant is only fundamental at one resolution.</p>
      </GlassCard>
      <GlassCard title="Running Couplings" eq="α(E) → grows · g_s(E) → asymptotic freedom">
        <p>Electromagnetism becomes stronger at high energies. The strong force becomes weaker. Quarks become free inside a proton — a discovery worth the Nobel Prize.</p>
      </GlassCard>
      <GlassCard title="Effective Field Theory">
        <p>We do not need a theory of everything to make predictions. An effective field theory captures the physics at a given scale, and what lies beyond is encoded in tiny, calculable corrections.</p>
      </GlassCard>
    </SectionShell>
  );
}
