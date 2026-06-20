"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Badge } from "@/components/ui/badge";
import { StaggerContainer, StaggerItem } from "@/components/animations/motion";
import { BrainCircuit, Server, Layout, Terminal } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "AI Engineering & Data Science",
      icon: BrainCircuit,
      skills: ["Python", "Machine Learning", "Deep Learning", "LLM Applications", "RAG Systems", "Prompt Engineering", "Data Analysis", "PyTorch", "LangChain", "Pinecone"],
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: ["FastAPI", "REST APIs", "SQL", "MongoDB", "PostgreSQL", "Node.js"],
    },
    {
      title: "Frontend Engineering",
      icon: Layout,
      skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Streamlit", "Framer Motion", "Zustand"],
    },
    {
      title: "Tools & Deployment",
      icon: Terminal,
      skills: ["Docker", "Git & GitHub", "Vercel", "Railway", "Linux", "GCP"],
    },
  ];

  return (
    <section id="skills" className="scroll-mt-24">
      <SectionHeading number="02" title="Capabilities" subtitle="Technologies and frameworks I use to build complete products." />

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, i) => (
          <StaggerItem key={i}>
            <SpotlightCard className="h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm font-medium">
                    {skill}
                  </Badge>
                ))}
              </div>
            </SpotlightCard>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
