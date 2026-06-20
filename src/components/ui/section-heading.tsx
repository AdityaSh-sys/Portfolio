"use client";

import { TextReveal, FadeIn } from "@/components/animations/motion";

interface SectionHeadingProps {
  number: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ number, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-16 md:mb-24 relative z-10">
      <FadeIn>
        <div className="inline-flex items-center gap-4 mb-6">
          <span className="text-sm font-mono text-primary bg-primary/10 px-3 py-1 rounded-full">
            {number}
          </span>
          <div className="h-[1px] w-12 bg-primary/30" />
        </div>
      </FadeIn>
      
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
        <TextReveal>{title}</TextReveal>
      </h2>
      
      {subtitle && (
        <FadeIn delay={0.2}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            {subtitle}
          </p>
        </FadeIn>
      )}
    </div>
  );
}
