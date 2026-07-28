import { notFound } from "next/navigation";
import { projects } from "@/content/projects";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-5xl px-8 py-24">

        <p className="text-blue-400 uppercase tracking-widest">
          {project.category}
        </p>

        <h1 className="mt-4 text-5xl font-black">
          {project.title}
        </h1>

        <p className="mt-8 text-xl leading-9 text-slate-300">
          {project.overview}
        </p>

        <div className="mt-12 flex flex-wrap gap-3">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-slate-800 px-4 py-2 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <section className="mt-20 space-y-12">

          <div>
            <h2 className="text-3xl font-bold">Challenge</h2>

            <p className="mt-6 text-slate-400 leading-8">
              {project.challenge}
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">Solution</h2>

            <p className="mt-6 text-slate-400 leading-8">
              {project.solution}
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">Key Results</h2>

            <ul className="mt-6 list-disc space-y-3 pl-6 text-slate-400">
              {project.results.map((result) => (
                <li key={result}>{result}</li>
              ))}
            </ul>
          </div>

        </section>

      </div>
    </main>
  );
}