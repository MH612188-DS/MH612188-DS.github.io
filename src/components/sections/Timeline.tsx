import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import TimelineCard from "@/components/ui/TimelineCard";
import { timeline } from "@/content/timeline";

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="bg-slate-950 py-32"
    >
      <div className="mx-auto max-w-5xl px-8">
        <SectionHeading
          badge="Journey"
          title="My Research & Engineering Timeline"
          description="The progression from engineering foundations to AI research and intelligent robotics."
        />

        <div className="relative mt-20 space-y-10">
          <div className="absolute left-2 top-0 h-full w-[2px] bg-slate-800" />

          {timeline.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.15}>
              <TimelineCard {...item} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}