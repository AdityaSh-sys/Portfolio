"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { experienceData } from "@/data/experience";
import { FadeIn } from "@/components/animations/motion";
import { Badge } from "@/components/ui/badge";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="experience" className="scroll-mt-24 relative z-10">
      <SectionHeading number="04" title="Experience & Education" subtitle="My professional journey and academic background." />

      <div ref={containerRef} className="relative mx-auto max-w-4xl">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border/50 -translate-x-1/2">
          <motion.div
            className="absolute top-0 w-full bg-primary origin-top"
            style={{ scaleY, height: "100%" }}
          />
        </div>

        <div className="space-y-16">
          {experienceData.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={item.id} className="relative flex flex-col md:flex-row items-start md:items-center w-full">
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-background border-2 border-primary -translate-x-1/2 flex items-center justify-center z-10 shadow-[0_0_0_4px_var(--color-background)]">
                  {item.type === "education" ? (
                    <GraduationCap className="w-3.5 h-3.5 text-primary" />
                  ) : (
                    <Briefcase className="w-3.5 h-3.5 text-primary" />
                  )}
                </div>

                {/* Content */}
                <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? "md:pr-16 md:text-right" : "md:pl-16 md:ml-auto"}`}>
                  <FadeIn delay={0.2}>
                    <div className="glass p-6 md:p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-colors">
                      <div className={`flex flex-col ${isEven ? "md:items-end" : "md:items-start"} mb-4`}>
                        <span className="text-sm font-mono text-primary mb-2 inline-block bg-primary/10 px-2 py-1 rounded">
                          {item.date}
                        </span>
                        <h3 className="text-xl md:text-2xl font-bold mb-1">{item.title}</h3>
                        <div className="text-muted-foreground font-medium">
                          {item.organization} &bull; <span className="text-sm">{item.location}</span>
                        </div>
                      </div>

                      <ul className={`space-y-3 mb-6 ${isEven ? "md:text-right" : "text-left"}`}>
                        {item.description.map((desc, i) => (
                          <li key={i} className="text-muted-foreground leading-relaxed text-sm">
                            {desc}
                          </li>
                        ))}
                      </ul>

                      <div className={`flex flex-wrap gap-2 ${isEven ? "md:justify-end" : "justify-start"}`}>
                        {item.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </FadeIn>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
