"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn, BlurFade } from "@/components/animations/motion";
import { Code, Cpu, GitMerge } from "lucide-react";

export default function AboutSection() {
  const stats = [
    { label: "Projects Built", value: "15+", icon: Code },
    { label: "AI Models Deployed", value: "5+", icon: Cpu },
    { label: "Successful Merges", value: "100+", icon: GitMerge },
  ];

  return (
    <section id="about" className="scroll-mt-24">
      <SectionHeading number="01" title="About Me" subtitle="A brief look into my background and philosophy." />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        {/* Narrative Text */}
        <div className="lg:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed">
          <FadeIn>
            <p>
              I am a final-year Computer Science student specializing in <strong className="text-foreground">AI & Data Science</strong> at Poornima University. My passion lies at the intersection of complex machine learning systems and elegant product engineering.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p>
              I don&apos;t just build isolated models or experiments; I enjoy architecting <strong className="text-foreground">complete, production-ready solutions</strong>. From designing scalable Retrieval-Augmented Generation (RAG) pipelines and predictive healthcare models to building the interactive Next.js and Streamlit interfaces that bring them to life.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p>
              Whether I&apos;m integrating voice processing for an AI Call Bot or reducing data processing times by 60% with NLP interfaces, my goal is always to build software that solves practical business problems and delivers seamless user experiences.
            </p>
          </FadeIn>
        </div>

        {/* Stats & Quick Info */}
        <div className="lg:col-span-5 w-full">
          <BlurFade delay={0.3} className="glass p-8 rounded-3xl border border-border/50 h-full flex flex-col justify-center gap-8 relative overflow-hidden">
            {/* Decorative background glow */}
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-primary/20 blur-3xl rounded-full pointer-events-none" />
            
            {stats.map((stat, i) => (
              <div key={i} className="flex items-center gap-6 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-foreground mb-1">{stat.value}</h4>
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                </div>
              </div>
            ))}
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
