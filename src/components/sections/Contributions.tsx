import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import ContributionCard from "@/components/ui/ContributionCard";
import { contributions } from "@/content/contributions";

export default function Contributions() {
  return (
    <section
      id="contributions"
      className="bg-slate-900 py-32"
    >
      <div className="mx-auto max-w-7xl px-8">
        <SectionHeading
          badge="Research Contributions"
          title="Building the Next Generation of Intelligent Prosthetics"
          description="My research combines robotics, generative AI and probabilistic modelling to create adaptive prosthetic control systems."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {contributions.map((item, index) => (
            <FadeIn
              key={item.title}
              delay={index * 0.1}
            >
              <ContributionCard
                title={item.title}
                value={item.value}
                description={item.description}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}