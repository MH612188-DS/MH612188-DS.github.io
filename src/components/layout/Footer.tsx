import { socials } from "@/content/socials";
import FadeIn from "@/components/ui/FadeIn";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="border-t border-slate-800 bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-8 py-16">
        <FadeIn>
          <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
            {/* Left */}

            <div>
              <h3 className="text-2xl font-bold tracking-tight text-white">
                Muhammad Haris
              </h3>

              <p className="mt-3 max-w-md text-slate-400">
                Robotics Engineer • AI Researcher • Generative AI
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Building intelligent robotic systems through Generative AI,
                Robot Learning and Human-Robot Interaction.
              </p>
            </div>

            {/* Right */}

            <div className="flex items-center gap-4">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="
                      rounded-xl
                      border
                      border-slate-800
                      bg-slate-900
                      p-3
                      text-slate-400
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-blue-500
                      hover:bg-slate-800
                      hover:text-blue-400
                    "
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </FadeIn>

        <div className="my-10 h-px bg-slate-800" />

        <FadeIn delay={0.2}>
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">
            <p>
              © {new Date().getFullYear()} Muhammad Haris. All rights reserved.
            </p>

            <p>
              Built with Next.js • React • TypeScript • Tailwind CSS
            </p>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}