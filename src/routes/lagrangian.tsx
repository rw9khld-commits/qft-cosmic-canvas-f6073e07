import { createFileRoute } from "@tanstack/react-router";
import { SectionShell, GlassCard } from "@/components/SectionShell";

export const Route = createFileRoute("/lagrangian")({
  head: () => ({ meta: [{ title: "Lagrangian — QFT Decoder" }, { name: "description", content: "The Lagrangian density encodes the dynamics of every field." }] }),
  component: Page,
});

function Page() {
  return (
    <SectionShell
      eyebrow="Chapter II · Dynamics"
      title="The Lagrangian"
      italic="A Single Line of Reality"
      description="From one compact expression, all of physics emerges. The Lagrangian is the universe's source code — a generating principle from which equations of motion, conservation laws, and interactions unfold."
    >
      <GlassCard title="The Dirac Lagrangian" eq="ℒ = ψ̄(iγᵘ∂ᵤ − m)ψ">
        <p>This single line describes every electron, every quark, every fermion in the universe. The γᵘ matrices weave spin into spacetime, and the mass term m gives the field its inertia against the Higgs.</p>
      </GlassCard>
      <GlassCard title="The QED Lagrangian" eq="ℒ_QED = ψ̄(iγᵘDᵤ − m)ψ − ¼FᵤᵥFᵘᵛ">
        <p>By replacing the ordinary derivative with the covariant derivative Dᵤ = ∂ᵤ + ieAᵤ, light is born from the demand of local symmetry. Electromagnetism is not added — it is required.</p>
      </GlassCard>
      <GlassCard title="The Principle of Least Action">
        <p>Nature chooses the path that extremizes the action S = ∫ℒ d⁴x. This is the deepest principle in physics — a quiet whisper that the universe is, in a sense, lazy.</p>
      </GlassCard>
    </SectionShell>
  );
}
