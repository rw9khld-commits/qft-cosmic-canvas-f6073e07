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
      italic="Currents"
      description="Beyond the standard curriculum lie deeper currents: topological effects, non-perturbative phenomena, and the geometries that connect field theory to the foundations of mathematics."
    >
      <GlassCard title="Anomalies">
        <p>A symmetry of the classical action that fails to survive quantization. Anomalies are not mistakes — they are the universe's way of remembering its quantum origin.</p>
      </GlassCard>
      <GlassCard title="Instantons and Solitons">
        <p>Solutions to the classical equations that no perturbation theory can see. Instantons tunnel between vacua. Solitons carry topological charge that cannot be undone.</p>
      </GlassCard>
      <GlassCard title="Conformal & Topological Field Theories">
        <p>Theories without a scale, theories without a metric. They reveal that quantum field theory is, in its heart, a branch of geometry.</p>
      </GlassCard>
    </SectionShell>
  );
}
