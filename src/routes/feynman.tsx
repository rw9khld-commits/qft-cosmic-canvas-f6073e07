import { createFileRoute } from "@tanstack/react-router";
import { SectionShell, GlassCard } from "@/components/SectionShell";
import feynmanImg from "@/assets/feynman-diagram.png.asset.json";

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
      description="Richard Feynman invented a way to draw the unseeable. Every line is a propagator, every vertex a coupling, and every diagram a complex number whose square is a probability of the universe."
    >
      <figure className="glass rounded-3xl overflow-hidden border border-violet/20">
        <img src={feynmanImg.url} alt="Feynman diagram — two electrons exchanging a virtual photon" className="w-full h-auto" loading="lazy" />
        <figcaption className="px-6 py-3 text-xs tracking-[0.25em] uppercase text-muted-foreground border-t border-violet/10">Fig. IV · Møller scattering — two electrons exchange a virtual photon γ</figcaption>
      </figure>

      <GlassCard title="The Vocabulary" eq="line = propagator · vertex = coupling · external leg = real particle">
        <p>Straight lines with arrows carry fermions (matter) through spacetime; the arrow direction distinguishes particle from antiparticle. Wavy lines carry photons; curly lines carry gluons; dashed lines often carry scalars such as the Higgs. At each vertex, the QED coupling constant √α ≈ 0.085 quantifies the chance that history forks.</p>
      </GlassCard>

      <GlassCard title="Virtual Particles & the Off-Shell Realm" eq="E² ≠ p²c² + m²c⁴  (internal lines)">
        <p>External legs satisfy the relativistic mass-shell condition. Internal lines do not: they are mathematical bookkeeping for the field configurations summed over in the path integral. Virtual particles can have any mass, can travel faster than light, can move backwards in time — they are not observed, only integrated over. Their reality is their measurable consequence.</p>
      </GlassCard>

      <GlassCard title="From Pictures to Predictions">
        <p>Each topology translates, by the Feynman rules, into a definite mathematical expression: a product of propagators, vertex factors, and an integral over undetermined internal momenta. Sum every distinct topology that connects the chosen initial and final states; square the resulting amplitude; multiply by phase space — and out comes a cross-section measurable at the LHC to one part in ten thousand.</p>
      </GlassCard>

      <GlassCard title="Perturbation Theory & Loops">
        <p>Each additional vertex contributes a factor of the coupling constant. Tree diagrams (no closed loops) give the leading classical-like answer; one-loop diagrams give the first quantum correction; higher loops give finer corrections still. The anomalous magnetic moment of the electron, computed to five loops, agrees with experiment to twelve decimal places — the most precise match between theory and observation in all of science.</p>
      </GlassCard>

      <GlassCard title="Crossing Symmetry">
        <p>A single diagram, read in different time directions, describes several distinct processes. e⁻ + e⁻ → e⁻ + e⁻ (Møller scattering), e⁻ + e⁺ → e⁻ + e⁺ (Bhabha scattering), and e⁻ + e⁺ → γ + γ (annihilation) are unified by the underlying analytic structure of the amplitude — a deep symmetry of spacetime itself.</p>
      </GlassCard>

      <GlassCard title="Philosophical Coda">
        <p>A Feynman diagram is not a picture of what happens — it is a picture of one term in an infinite calculation of what could happen. <em className="text-gold/90">Nature does not draw diagrams; she sums them.</em></p>
      </GlassCard>
    </SectionShell>
  );
}
