import { Badge } from "@/components/ui/badge";

type Props = {
  title: string;
  status: string;
  year: string;
  description: string;
  tags: string[];
};

export default function ResearchCard({
  title,
  status,
  year,
  description,
  tags,
}: Props) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:border-blue-500 hover:-translate-y-2">
      <div className="flex items-center justify-between">
        <Badge>{status}</Badge>

        <span className="text-sm text-slate-500">
          {year}
        </span>
      </div>

      <h3 className="mt-6 text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-5 leading-7 text-slate-400">
        {description}
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge
            key={tag}
            variant="secondary"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
}