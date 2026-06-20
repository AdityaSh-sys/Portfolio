import { AnimatedBackground } from "@/components/ui/animated-background";
import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import SkillsSection from "@/components/sections/skills";
import ProjectsSection from "@/components/sections/projects";
import ExperienceSection from "@/components/sections/experience";
import ContactSection from "@/components/sections/contact";
import CertificationsSection from "@/components/sections/certifications";
import GithubStatsSection from "@/components/sections/github-stats";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <div className="flex flex-col gap-24 md:gap-32 pb-24">
        <HeroSection />
        
        <div className="container mx-auto px-4 md:px-6 flex flex-col gap-32 md:gap-40">
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <GithubStatsSection />
          <ExperienceSection />
          <CertificationsSection />
          <ContactSection />
        </div>
      </div>
    </>
  );
}
