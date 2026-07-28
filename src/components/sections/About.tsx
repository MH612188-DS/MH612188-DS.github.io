export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-32"
    >
      <div className="max-w-6xl mx-auto px-8">

        <h2 className="text-5xl font-bold mb-12">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-16">

          <div>

            <p className="text-slate-300 text-lg leading-9">
              I'm a Robotics & AI Engineer focused on robot learning,
              Generative AI, computer vision and intelligent robotic systems.
              My current research explores diffusion models and generative
              approaches for EMG-driven prosthetic hand grasp generation.
            </p>

            <p className="mt-8 text-slate-300 text-lg leading-9">
              Beyond research, I enjoy building production-grade AI systems,
              RAG architectures, autonomous robotics software and scalable
              machine learning applications.
            </p>

          </div>

          <div className="space-y-5">

            <Skill text="PyTorch" />
            <Skill text="ROS2" />
            <Skill text="Computer Vision" />
            <Skill text="Deep Learning" />
            <Skill text="LLMs" />
            <Skill text="Generative AI" />
            <Skill text="Diffusion Models" />
            <Skill text="Robot Learning" />

          </div>

        </div>

      </div>
    </section>
  );
}

function Skill({ text }: { text: string }) {
  return (
    <div className="rounded-lg bg-slate-800 px-6 py-4 border border-slate-700">
      {text}
    </div>
  );
}