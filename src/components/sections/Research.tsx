import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import { Badge } from "@/components/ui/badge";
import PipelineDiagram from "@/components/ui/PipelineDiagram";

export default function Research() {
  return (
    <section
      id="research"
      className="bg-slate-950 py-32 text-white"
    >
      <div className="mx-auto max-w-7xl px-8">
        <SectionHeading
          badge="Current Research"
          title="Generative AI for Biomimetic Prosthetic Hand Grasping"
          description="My research investigates generative models that transform EMG signals into natural prosthetic grasp trajectories, combining robot learning, probabilistic modelling and deep generative AI."
        />

        {/* Problem • Approach • Goal */}

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          <FadeIn>
            <div className="h-full rounded-2xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500">
              <Badge className="mb-6">Problem</Badge>

              <h3 className="text-2xl font-bold">
                Human-Level Grasp Generation
              </h3>

              <p className="mt-6 leading-8 text-slate-400">
                Current prosthetic controllers classify intentions but cannot
                generate continuous, natural grasp trajectories that adapt to
                new users and varying grasp conditions.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="h-full rounded-2xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500">
              <Badge className="mb-6">Approach</Badge>

              <h3 className="text-2xl font-bold">
                Conditional Generative Models
              </h3>

              <p className="mt-6 leading-8 text-slate-400">
                Investigating diffusion models, conditional VAEs,
                flow matching, robot learning and synergy-space
                representations to generate complete grasp
                trajectories directly from EMG signals.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.30}>
            <div className="h-full rounded-2xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500">
              <Badge className="mb-6">Goal</Badge>

              <h3 className="text-2xl font-bold">
                Adaptive Prosthetic Intelligence
              </h3>

              <p className="mt-6 leading-8 text-slate-400">
                Develop prosthetic controllers capable of generating
                realistic, personalised and biomimetic grasp
                trajectories that generalise across unseen users.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Research Pipeline */}

        <FadeIn delay={0.45}>
          <div className="mt-32">
            <SectionHeading
              badge="Research Pipeline"
              title="EMG to Biomimetic Grasp Generation"
              description="A conceptual overview of the proposed generative prosthetic control pipeline."
            />

            <PipelineDiagram />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}