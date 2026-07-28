import { Badge } from "@/components/ui/badge";

type Props = {
  title: string;
  percentage: number;
  skills: string[];
};

export default function SkillCard({
  title,
  percentage,
  skills,
}: Props) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-white">
          {title}
        </h3>

        <span className="text-blue-400 font-semibold">
          {percentage}%
        </span>
      </div>

      <div className="mt-6 h-2 overflow-hidden rounded-full bg-slate-800">
        <div
          className="h-full rounded-full bg-blue-500 transition-all duration-700"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {skills.map((skill) => (
          <Badge key={skill} variant="secondary">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}