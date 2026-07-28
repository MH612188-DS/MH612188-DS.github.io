export const pipeline = [
  {
    id: 1,
    title: "EMG Signals",
    short: "Input",
    description:
      "Surface electromyography collected from residual forearm muscles.",
    color: "blue",
    icon: "activity",
  },
  {
    id: 2,
    title: "Intent Estimation",
    short: "Recognition",
    description:
      "Estimate the user's intended grasp from EMG features.",
    color: "cyan",
    icon: "brain",
  },
  {
    id: 3,
    title: "Conditional Generator",
    short: "Generation",
    description:
      "Generate multiple grasp trajectories using probabilistic generative models.",
    color: "violet",
    icon: "sparkles",
  },
  {
    id: 4,
    title: "Synergy Space",
    short: "Latent Space",
    description:
      "Represent the hand inside a low-dimensional synergy manifold.",
    color: "emerald",
    icon: "network",
  },
  {
    id: 5,
    title: "Joint Trajectory",
    short: "Planning",
    description:
      "Decode continuous finger trajectories.",
    color: "amber",
    icon: "git-branch",
  },
  {
    id: 6,
    title: "Prosthetic Hand",
    short: "Execution",
    description:
      "Execute adaptive biomimetic grasping.",
    color: "rose",
    icon: "hand",
  },
];