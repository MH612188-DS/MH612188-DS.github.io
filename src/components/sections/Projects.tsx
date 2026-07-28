import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/content/projects";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-950 py-32"
    >
      <div className="mx-auto max-w-7xl px-8">
        <SectionHeading
          badge="Portfolio"
          title="Featured Projects"
          description="Selected research and engineering projects spanning robotics, generative AI, and intelligent systems."
        />

        <div className="mt-20 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <FadeIn
              key={project.slug}
              delay={index * 0.1}
            >
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}