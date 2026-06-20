export interface Project {
  slug: string;
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  techStack: string[];
  category: "ai" | "fullstack" | "ml" | "data";
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  image?: string;
  updatedAt?: string;
}
