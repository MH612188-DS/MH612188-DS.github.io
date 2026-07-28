export interface Project {
  slug: string;

  title: string;

  category: string;

  year: string;

  status: string;

  featured: boolean;

  description: string;

  technologies: string[];

  github?: string;

  paper?: string;

  demo?: string;

  image: string;

  overview: string;

  challenge: string;

  solution: string;

  results: string[];

  architecture?: string;
}