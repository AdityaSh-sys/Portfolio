import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Badge } from "@/components/ui/badge";
import { getCuratedProjects } from "@/lib/github";
import { ExternalLink, Calendar } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { formatDate } from "@/lib/utils";

export default async function ProjectsSection() {
  const projects = await getCuratedProjects();

  return (
    <section id="projects" className="scroll-mt-24">
      <SectionHeading number="03" title="Featured Projects" subtitle="A selection of my best work, integrating AI with full-stack development." />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <SpotlightCard key={project.slug} glass className="group flex flex-col justify-between overflow-hidden h-full">
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-3 text-muted-foreground">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    <span className="sr-only">GitHub Repo</span>
                    <FaGithub className="w-5 h-5" />
                  </a>
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      <span className="sr-only">Live Demo</span>
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-foreground font-medium mb-6">{project.tagline}</p>

              <div className="space-y-4 mb-8 flex-grow text-muted-foreground text-sm">
                <div>
                  <strong className="text-foreground block mb-1">The Problem</strong>
                  {project.problem}
                </div>
                <div>
                  <strong className="text-foreground block mb-1">The Solution</strong>
                  {project.solution}
                </div>
              </div>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="outline" className="bg-background/50">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                {project.updatedAt && (
                  <div className="flex items-center gap-2 text-xs text-muted-foreground border-t border-border/50 pt-4">
                    <Calendar className="w-3 h-3" />
                    <span>Updated {formatDate(project.updatedAt)}</span>
                  </div>
                )}
              </div>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}
