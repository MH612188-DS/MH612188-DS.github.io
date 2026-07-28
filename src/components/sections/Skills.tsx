import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillCard from "@/components/ui/SkillCard";

import { skillGroups } from "@/content/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-900 py-32"
    >
      <div className="mx-auto max-w-7xl px-8">
        <SectionHeading
          badge="Technical Expertise"
          title="Research & Engineering Skills"
          description="A combination of robotics, AI research and software engineering used to build intelligent robotic systems."
        />

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          {skillGroups.map((group, index) => (
            <FadeIn
              key={group.title}
              delay={index * 0.1}
            >
              <SkillCard {...group} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}