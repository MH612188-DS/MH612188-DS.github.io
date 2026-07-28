import { dashboard } from "@/content/dashboard";
import MetricCard from "@/components/ui/MetricCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/badge";

export default function Dashboard() {
  return (
    <section
      id="dashboard"
      className="bg-slate-900 py-32"
    >
      <div className="max-w-7xl mx-auto px-8">

        <SectionHeading
          badge="Research Dashboard"
          title="Current Research Snapshot"
          description="A quick overview of my research focus, interests and current work."
        />

        <div className="mb-16">

          <Badge className="bg-green-600">
            {dashboard.status}
          </Badge>

          <h3 className="text-3xl font-bold text-white mt-6">
            {dashboard.focus}
          </h3>

        </div>

        <div className="flex flex-wrap gap-3 mb-16">

          {dashboard.researchAreas.map((area) => (
            <Badge
              key={area}
              variant="secondary"
            >
              {area}
            </Badge>
          ))}

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {dashboard.metrics.map((metric) => (
            <MetricCard
              key={metric.label}
              value={metric.value}
              label={metric.label}
            />
          ))}

        </div>

      </div>
    </section>
  );
}