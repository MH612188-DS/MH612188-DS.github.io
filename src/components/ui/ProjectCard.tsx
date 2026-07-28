import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types/project";

type Props = {
  project: Project;
};

export default function ProjectCard({
  project,
}: Props) {
  return (
    <div
      className="
        group
        overflow-hidden
        rounded-2xl
        border
        border-slate-800
        bg-slate-900
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-blue-500
        hover:shadow-2xl
        hover:shadow-blue-500/10
      "
    >
      <div className="p-8">

        <div className="flex items-center justify-between">

          <Badge>
            {project.category}
          </Badge>

          <span className="text-sm text-slate-500">
            {project.year}
          </span>

        </div>

        <div className="mt-4">

          <Badge variant="secondary">
            {project.status}
          </Badge>

        </div>

        <h3 className="mt-6 text-2xl font-bold text-white">
          {project.title}
        </h3>

        <p className="mt-5 leading-8 text-slate-400">
          {project.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-2">

          {project.technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
            >
              {tech}
            </Badge>
          ))}

        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="
            mt-8
            inline-flex
            font-semibold
            text-blue-400
            transition-colors
            group-hover:text-blue-300
          "
        >
          View Project →
        </Link>

      </div>
    </div>
  );
}