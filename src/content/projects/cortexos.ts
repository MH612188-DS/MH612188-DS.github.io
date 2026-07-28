import type { Project } from "@/types/project";

export const cortexOS: Project = {
  slug: "cortexos",

  title: "CortexOS",

  category: "AI Platform",

  year: "2025",

  status: "Active",

  featured: true,

  image: "/projects/cortexos.jpg",

  description:
    "A modular Retrieval-Augmented Generation (RAG) platform for building intelligent AI knowledge systems.",

  technologies: [
    "Python",
    "LangChain",
    "LlamaIndex",
    "FAISS",
    "Docker",
  ],

  github: "",

  paper: "",

  demo: "",

  overview:
    "CortexOS is a modular AI platform designed around clean architecture principles for building scalable RAG applications.",

  challenge:
    "Modern AI assistants often struggle with knowledge management, scalability and maintainability.",

  solution:
    "A modular architecture combining vector databases, retrieval pipelines, LLM orchestration and extensible components.",

  results: [
    "Modular RAG architecture",
    "Vector search integration",
    "Extensible plugin system",
    "Production-ready codebase",
  ],

  architecture: "/images/cortexos-architecture.png",
};