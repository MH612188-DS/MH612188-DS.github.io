import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types/project";

type Props = {
  project: Project;
};

export default function ProjectHero({ project }: Props) {
  return (
    <section className="border-b border-slate-800 pb-16">
      <Badge>{project.category}</Badge>

      <h1 className="mt-6 text-5xl font-black leading-tight md:text-6xl">
        {project.title}
      </h1>

      <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-400">
        {project.overview}
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        {project.technologies.map((tech) => (
          <Badge key={tech} variant="secondary">
            {tech}
          </Badge>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap gap-8 text-sm text-slate-500">
        <div>
          <span className="font-semibold text-slate-300">Year</span>
          <br />
          {project.year}
        </div>

        <div>
          <span className="font-semibold text-slate-300">Status</span>
          <br />
          {project.status}
        </div>
      </div>
    </section>
  );
}