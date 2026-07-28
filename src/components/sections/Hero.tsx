import FadeIn from "@/components/ui/FadeIn";
import GridBackground from "@/components/ui/GridBackground";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { profile } from "@/content/profile";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-950"
    >
      <GridBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-8 py-32">
        <FadeIn>
          <Badge className="mb-8 bg-emerald-600 text-white hover:bg-emerald-600">
            ● Research Active
          </Badge>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="text-6xl font-black tracking-tight text-white md:text-8xl">
            {profile.name}
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xl text-slate-300 md:text-3xl">
            <span>{profile.role}</span>
            <span className="text-slate-600">•</span>
            <span>{profile.subtitle}</span>
            <span className="text-slate-600">•</span>
            <span className="text-blue-400">{profile.specialization}</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="mt-8 max-w-3xl text-lg leading-9 text-slate-400 md:text-xl">
            {profile.tagline}
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-12 flex flex-wrap gap-4">
            <a href={profile.resume}>
              <Button size="lg">
                Download CV
              </Button>
            </a>

            <a href="#research">
              <Button variant="outline" size="lg">
                View Research
              </Button>
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="mt-14">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500">
              Research Areas
            </p>

            <div className="flex flex-wrap gap-3">
              {profile.interests.map((interest) => (
                <Badge
                  key={interest}
                  variant="secondary"
                  className="px-4 py-2"
                >
                  {interest}
                </Badge>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="mt-16 inline-flex rounded-full border border-blue-500/30 bg-blue-600/10 px-6 py-3">
            <span className="font-medium text-blue-300">
              Current Focus: {profile.currentFocus}
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}