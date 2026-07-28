import { Project } from "@/types/project";

export const prostheticGrasping: Project = {
  slug: "emg-prosthetic-grasping",

  title: "Generative AI for Biomimetic Prosthetic Hand Grasping",

  category: "Master's Thesis",

  year: "2026",

  status: "In Progress",

  featured: true,

  image: "/projects/prosthetic-grasping.jpg",

  description:
    "Generating biomimetic grasp trajectories directly from EMG signals using conditional generative models.",

  technologies: [
    "PyTorch",
    "ROS2",
    "PyBullet",
    "Diffusion Models",
    "Conditional VAE",
    "Flow Matching",
    "EMG",
  ],

  github: "",

  paper: "",

  demo: "",

  overview:
    "This research investigates how probabilistic generative models can synthesise continuous prosthetic grasp trajectories conditioned on EMG intent.",

  challenge:
    "Current prosthetic systems primarily classify discrete grasp types rather than generating adaptive, human-like motion trajectories.",

  solution:
    "The proposed framework combines EMG intent estimation with conditional generative models operating in a synergy-space representation to generate smooth grasp trajectories.",

  results: [
    "EMG-driven grasp synthesis",
    "Adaptive trajectory generation",
    "Synergy-space modelling",
    "Simulation-based evaluation",
  ],

  architecture:
    "/images/thesis-architecture.png",
};