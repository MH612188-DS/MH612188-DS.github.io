import FadeIn from "@/components/ui/FadeIn";
import ResearchCard from "@/components/ui/ResearchCard";
import SectionHeading from "@/components/ui/SectionHeading";

import { researchHighlights } from "@/content/research";

export default function ResearchShowcase() {
  return (
    <section
      id="research-showcase"
      className="bg-slate-950 py-32"
    >
      <div className="mx-auto max-w-7xl px-8">
        <SectionHeading
          badge="Academic Work"
          title="Research Portfolio"
          description="Current and planned research activities, publications and open-source contributions."
        />

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {researchHighlights.map((item, index) => (
            <FadeIn
              key={item.title}
              delay={index * 0.1}
            >
              <ResearchCard {...item} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}