import { experiences } from "@/content/experience";
import FadeIn from "@/components/ui/FadeIn";

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-950 py-32 text-white"
    >
      <div className="max-w-6xl mx-auto px-8">

        <h2 className="text-5xl font-bold mb-20">
          Experience
        </h2>

        <div className="space-y-12">

          {experiences.map((exp, index) => (
            <FadeIn
              key={exp.title}
              delay={index * 0.15}
          >
            <div
              key={exp.title}
              className="border-l-4 border-blue-500 pl-8"
            >
              <span className="text-blue-400 text-sm uppercase">
                {exp.period}
              </span>

              <h3 className="text-2xl font-bold mt-2">
                {exp.title}
              </h3>

              <h4 className="text-slate-400 mt-1">
                {exp.organization}
              </h4>

              <p className="mt-4 text-slate-300 leading-8">
                {exp.description}
              </p>
            </div>
            </FadeIn>
          ))}

        </div>

      </div>
    </section>
  );
}