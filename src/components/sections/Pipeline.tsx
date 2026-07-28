import { pipeline } from "@/content/pipeline";
import PipelineNode from "@/components/ui/PipelineNode";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Pipeline() {
  return (
    <section
      className="bg-slate-950 py-32"
      id="pipeline"
    >
      <div className="max-w-7xl mx-auto px-8">

        <SectionHeading
          badge="Research Pipeline"
          title="From Muscle Signals to Intelligent Prosthetic Motion"
          description="Overview of the proposed EMG-driven generative grasp synthesis framework."
        />

        <div className="grid lg:grid-cols-3 gap-8">

          {pipeline.map((step) => (
            <PipelineNode
              key={step.title}
              title={step.title}
              description={step.description}
            />
          ))}

        </div>

      </div>
    </section>
  );
}