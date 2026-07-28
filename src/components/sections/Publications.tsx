import { publications } from "@/content/publications";
import { Badge } from "@/components/ui/badge";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";

export default function Publications() {
  return (
    <section
      id="publications"
      className="bg-slate-900 py-32 text-white"
    >
      <div className="max-w-6xl mx-auto px-8">

      <SectionHeading
          badge="Research Output"
          title="Publications & Academic Work"
          description="Current and planned research contributions in robotics, AI and prosthetic intelligence."
      />

        <div className="space-y-8">

          {publications.map((paper, index) => (
            <FadeIn
              key={paper.title}
              delay={index * 0.15}
          >
            <div
              key={paper.title}
              className="rounded-xl border border-slate-700 bg-slate-950 p-8"
            >
              <div className="flex justify-between items-start flex-wrap gap-4">

                <div>
                  <h3 className="text-2xl font-semibold">
                    {paper.title}
                  </h3>

                  <p className="text-slate-400 mt-2">
                    {paper.type}
                  </p>

                  <p className="text-slate-500">
                    {paper.venue}
                  </p>
                </div>

                <Badge>
                  {paper.status}
                </Badge>

              </div>

              <p className="mt-6 text-slate-300 leading-8">
                {paper.abstract}
              </p>

              <div className="mt-6 text-sm text-slate-500">
                {paper.year}
              </div>

            </div>
            </FadeIn>
          ))}

        </div>

      </div>
    </section>
  );
}