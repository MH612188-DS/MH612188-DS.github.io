import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0F172A] text-white">
      <div className="max-w-5xl text-center px-6">

        <h1 className="text-6xl font-bold">
          {profile.name}
        </h1>

        <h2 className="mt-6 text-3xl text-blue-400">
          {profile.title}
        </h2>

        <p className="mt-8 text-xl text-gray-300 max-w-3xl mx-auto">
          {profile.tagline}
        </p>

        <div className="mt-12 flex justify-center gap-6">

          <a
            href={profile.github}
            className="rounded-lg bg-blue-600 px-6 py-3 hover:bg-blue-700 transition"
          >
            GitHub
          </a>

          <a
            href={profile.linkedin}
            className="rounded-lg border border-blue-500 px-6 py-3 hover:bg-blue-500 transition"
          >
            LinkedIn
          </a>

        </div>

      </div>
    </section>
  );
}