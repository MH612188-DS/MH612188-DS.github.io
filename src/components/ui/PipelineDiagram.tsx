import { pipeline } from "@/content/pipeline";
import { pipelineIcons } from "@/lib/pipeline-icons";

export default function PipelineDiagram() {
  return (
    <div className="mt-20 overflow-x-auto pb-4">
      <div className="mx-auto flex min-w-max items-center justify-center gap-4 px-6">
        {pipeline.map((step, index) => {
          const Icon =
            pipelineIcons[
              step.icon as keyof typeof pipelineIcons
            ];

          return (
            <div
              key={step.id}
              className="flex items-center"
            >
              <div
                className="
                  group
                  w-64
                  rounded-3xl
                  border
                  border-slate-800
                  bg-slate-900
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-blue-500
                  hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]
                "
              >
                <div
                  className="
                    mb-6
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-slate-800
                    transition-colors
                    group-hover:bg-blue-500
                  "
                >
                  <Icon className="h-7 w-7 text-white" />
                </div>

                <p className="text-sm uppercase tracking-widest text-blue-400">
                  {step.short}
                </p>

                <h3 className="mt-3 text-xl font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {step.description}
                </p>
              </div>

              {index !== pipeline.length - 1 && (
                <div className="mx-4 h-[2px] w-20 bg-slate-700" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}