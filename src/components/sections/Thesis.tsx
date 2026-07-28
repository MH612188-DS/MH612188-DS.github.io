import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function Thesis() {
  return (
    <section
      id="thesis"
      className="bg-slate-900 py-32 text-white"
    >
      <div className="max-w-7xl mx-auto px-8">

        <Badge className="mb-6">
          Master's Thesis
        </Badge>

        <h2 className="text-5xl font-bold">
          Generative AI for Biomimetic Prosthetic Hand Grasping
        </h2>

        <p className="mt-8 text-xl text-slate-300 max-w-4xl leading-9">
          Developing a generative framework capable of producing
          natural prosthetic grasp trajectories directly from
          electromyographic (EMG) signals using diffusion models,
          probabilistic motion generation and robot learning.
        </p>

        <Separator className="my-16" />

        <div className="grid md:grid-cols-5 gap-8 text-center">

          <Stage
            title="EMG"
            description="Residual muscle activity"
          />

          <Stage
            title="Intent"
            description="Gesture recognition"
          />

          <Stage
            title="Generator"
            description="Diffusion model"
          />

          <Stage
            title="Trajectory"
            description="Joint angles"
          />

          <Stage
            title="Robot"
            description="Prosthetic grasp"
          />

        </div>

      </div>
    </section>
  );
}

function Stage({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-950 p-8">

      <div className="text-2xl font-bold text-blue-400">
        {title}
      </div>

      <p className="mt-4 text-slate-400">
        {description}
      </p>

    </div>
  );
}