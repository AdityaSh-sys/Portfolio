"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { certifications } from "@/data/experience";
import { StaggerContainer, StaggerItem } from "@/components/animations/motion";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { ExternalLink, Award, Cloud, Server, Database } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  cloud: Cloud,
  server: Server,
  database: Database,
  default: Award,
};

export default function CertificationsSection() {
  return (
    <section id="certifications" className="scroll-mt-24 relative z-10">
      <SectionHeading number="05" title="Certifications" subtitle="Professional credentials and cloud achievements." />

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert) => {
          const Icon = iconMap[cert.icon] || iconMap.default;

          return (
            <StaggerItem key={cert.id}>
              <SpotlightCard className="h-full flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 tracking-tight">{cert.title}</h3>
                  <p className="text-muted-foreground font-medium">{cert.issuer}</p>
                </div>
                
                <div className="mt-8 flex items-center justify-between border-t border-border/50 pt-4">
                  <span className="text-sm text-muted-foreground font-mono bg-muted/50 px-2 py-1 rounded">
                    {cert.date}
                  </span>
                  
                  {cert.credentialUrl ? (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-primary flex items-center gap-1 hover:underline"
                    >
                      Verify <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <span className="text-sm font-medium text-muted-foreground flex items-center gap-1 opacity-50 cursor-not-allowed" title="Verification link coming soon">
                      Verify <ExternalLink className="w-4 h-4" />
                    </span>
                  )}
                </div>
              </SpotlightCard>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </section>
  );
}
