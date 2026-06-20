export interface TimelineEntry {
  id: string;
  date: string;
  title: string;
  organization: string;
  location: string;
  description: string[];
  tags: string[];
  type: "education" | "internship" | "freelance" | "certification" | "hackathon";
  link?: string;
}

export const experienceData: TimelineEntry[] = [
  {
    id: "ai-ml-intern",
    date: "Apr 2026 — Present",
    title: "AI & Machine Learning Intern",
    organization: "Jagatmitra Foundation & ICVAST Globe LLP",
    location: "Delhi, India (Remote)",
    description: [
      "Architected a Medical RAG Chatbot with Pinecone vector databases, semantic search, and LLMs — reducing information retrieval time by 40%.",
      "Designed predictive healthcare models (Cardiovascular Risk, Hypoglycemia) achieving ROC-AUC of 0.7206 for the Lipid-Driven Cardiac Risk Model.",
      "Deployed scalable ML models via FastAPI and Streamlit, maintaining continuous integration across 15+ successful merges.",
    ],
    tags: ["RAG", "Pinecone", "FastAPI", "LLMs", "Healthcare AI"],
    type: "internship",
  },
  {
    id: "data-annotator",
    date: "Jan 2026 — Present",
    title: "Freelance Data Annotator",
    organization: "Alignerr",
    location: "Remote, USA",
    description: [
      "Validated over 5,000 data points for GenAI model training, improving dataset consistency and mitigating labeling errors in production workflows (RLHF).",
      "Enhanced labeling accuracy by 25% through systematic quality audits.",
    ],
    tags: ["RLHF", "GenAI", "Data Quality", "Annotation"],
    type: "freelance",
  },
  {
    id: "ml-intern-yeppar",
    date: "Jun 2025 — Jul 2025",
    title: "Machine Learning Intern",
    organization: "Yeppar",
    location: "Jaipur, Rajasthan",
    description: [
      "Developed NLP interfaces and analytical workflows using LangChain and LLMs, decreasing manual data processing time by 60%.",
      "Built real-time Streamlit dashboards with semantic search, supporting 200+ daily queries.",
    ],
    tags: ["LangChain", "NLP", "Streamlit", "Data Visualization"],
    type: "internship",
  },
  {
    id: "education",
    date: "2023 — 2027",
    title: "B.Tech in Computer Science Engineering (AI & Data Science)",
    organization: "Poornima University",
    location: "Jaipur, Rajasthan",
    description: [
      "Final-year student specializing in AI & Data Science with a CGPA of 7.85.",
      "Focus areas: Machine Learning, Deep Learning, NLP, Computer Vision, and RAG systems.",
    ],
    tags: ["AI & Data Science", "Computer Science", "CGPA: 7.85"],
    type: "education",
  },
];

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  icon: string;
}

export const certifications: Certification[] = [
  {
    id: "oracle-ai",
    title: "Oracle Cloud Infrastructure AI Foundations Associate",
    issuer: "Oracle",
    date: "2024",
    icon: "cloud",
  },
  {
    id: "gcp",
    title: "GCP Cloud Practitioner",
    issuer: "Google Cloud",
    date: "2024",
    icon: "server",
  },
  {
    id: "mongodb",
    title: "MongoDB Developer Fundamentals",
    issuer: "MongoDB",
    date: "2024",
    icon: "database",
  },
];
