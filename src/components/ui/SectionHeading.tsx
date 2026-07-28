import { Badge } from "@/components/ui/badge";
import FadeIn from "./FadeIn";

type SectionHeadingProps = {
  badge?: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  badge,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <FadeIn>
    <div className="mb-16 max-w-4xl">
      {badge && (
        <Badge className="mb-4">
          {badge}
        </Badge>
      )}

      <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-slate-400">
          {description}
        </p>
      )}
    </div>
    </FadeIn>
  );
}