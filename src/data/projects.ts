import type { Project } from "@/types/project";

export const curatedProjects: Record<string, Partial<Project>> = {
  devpost: {
    title: "BLACKOUT",
    tagline: "Connectivity-Spectrum AI — Online, Offline, or Somewhere in Between",
    problem:
      "AI assistants become useless without internet connectivity, leaving users stranded when they need help most — in remote areas, during outages, or on unstable networks.",
    solution:
      "Built an adaptive AI system that seamlessly switches between Gemini 2.0 Flash (online) and a local Ollama model with RAG-augmented knowledge base (offline). Includes auto-detection, sync engine, and self-improving knowledge base through user feedback.",
    techStack: ["Next.js", "FastAPI", "Gemini API", "Ollama", "MongoDB", "RAG", "TypeScript", "Python"],
    category: "ai",
    featured: true,
    liveUrl: "https://blackout-beryl.vercel.app",
  },
  "mindsheild-ai": {
    title: "MindShield AI",
    tagline: "AI-powered mental wellness platform for students in competitive exams",
    problem:
      "Students preparing for high-stakes exams face burnout, anxiety, and mental health challenges with limited access to personalized support systems.",
    solution:
      "Developed a comprehensive wellness platform featuring AI journal analysis, burnout radar, wellness analytics, an AI coach, and exam readiness scoring — all powered by Gemini AI with real-time data visualization.",
    techStack: ["Next.js 15", "TypeScript", "Supabase", "Gemini API", "Tailwind CSS", "Recharts", "Framer Motion"],
    category: "fullstack",
    featured: true,
    liveUrl: "https://mindsheild-ai.vercel.app",
  },
  CookPilot: {
    title: "CookPilot AI",
    tagline: "AI meal planner with smart grocery lists and budget analysis",
    problem:
      "Daily meal planning is time-consuming, often leads to food waste, and rarely accounts for budget constraints, dietary needs, and existing pantry items.",
    solution:
      "Created an AI-powered meal planning assistant with a 6-step wizard that generates personalized meal plans, smart grocery lists with cost estimates, ingredient substitutions, and cooking timelines — all optimized for budget and nutrition.",
    techStack: ["Next.js 15", "TypeScript", "Gemini 2.5 Flash", "Zustand", "Tailwind CSS", "Zod"],
    category: "fullstack",
    featured: true,
  },
  yeppar_visualization_bot: {
    title: "Excel Chatbot",
    tagline: "Natural language interface for spreadsheet data analysis and visualization",
    problem:
      "Non-technical users struggle to extract insights from spreadsheet data, requiring knowledge of formulas, pivot tables, and chart creation.",
    solution:
      "Built a conversational data analysis tool that accepts CSV/Excel uploads and answers natural language queries with auto-generated visualizations (bar, line, pie, scatter charts) and plain-English summaries using Gemini API.",
    techStack: ["Python", "Streamlit", "Gemini API", "Pandas", "Matplotlib", "LangChain"],
    category: "ai",
    featured: true,
  },
  call_bot: {
    title: "AI Call Bot",
    tagline: "Automated voice assistant with sub-2-second response latency",
    problem:
      "Traditional IVR systems frustrate callers with rigid menu trees, while human agents are expensive and inconsistent across high call volumes.",
    solution:
      "Implemented a conversational voice agent using speech-to-text and LLM-based response generation, achieving sub-2-second response latency for real-time customer interactions via telephony integration.",
    techStack: ["Python", "Speech Processing", "NLP", "LLMs", "FastAPI"],
    category: "ai",
    featured: true,
  },
  humanizer: {
    title: "AI Text Humanizer",
    tagline: "Transform AI-generated text into natural, human-sounding content",
    problem:
      "AI-generated content often reads mechanical and is easily flagged by detection tools, creating issues for content creators who use AI as a writing aid.",
    solution:
      "Built a text transformation engine that rewrites AI-generated content to match natural human writing patterns while preserving meaning, tone, and context.",
    techStack: ["Python", "NLP", "LLMs", "FastAPI"],
    category: "ai",
    featured: true,
  },
};

export const projectDisplayOrder = [
  "devpost",
  "mindsheild-ai",
  "CookPilot",
  "yeppar_visualization_bot",
  "call_bot",
  "humanizer",
];
