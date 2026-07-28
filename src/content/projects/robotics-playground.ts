import type { Project } from "@/types/project";

export const roboticsPlayground: Project = {
  slug: "robotics-playground",

  title: "Robotics Playground",

  category: "Simulation",

  year: "2025",

  status: "Active",

  featured: true,

  image: "/projects/robotics-playground.jpg",

  description:
    "A robotics simulation framework featuring path planning, kinematics, trajectory generation and visualisation.",

  technologies: [
    "Python",
    "NumPy",
    "Matplotlib",
    "Motion Planning",
    "Simulation",
  ],

  github: "",

  paper: "",

  demo: "",

  overview:
    "A collection of robotics algorithms implemented from scratch for education, experimentation and research.",

  challenge:
    "Understanding robotics algorithms requires interactive simulation and visual feedback.",

  solution:
    "Developed reusable simulation modules with animation support and modular planning components.",

  results: [
    "Trajectory generation",
    "Robot path planning",
    "Animation framework",
    "Educational toolkit",
  ],

  architecture: "/images/robotics-playground.png",
};