"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FadeIn, TextReveal, BlurFade } from "@/components/animations/motion";
import { MagneticButton } from "@/components/ui/magnetic-button";

const ROLES = ["AI Engineer", "Full-Stack Developer", "Product Builder"];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="hero">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col items-start max-w-2xl">
            <FadeIn delay={0.2} className="mb-4">
              <span className="text-xl md:text-2xl font-medium text-muted-foreground">
                Hello,
              </span>
            </FadeIn>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-4 leading-tight">
              <TextReveal delay={0.3}>I&apos;m Aditya</TextReveal>
              <br />
              <TextReveal delay={0.5}>Sharma.</TextReveal>
            </h1>

            <BlurFade delay={0.8} className="h-[40px] md:h-[50px] overflow-hidden mb-6 flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={roleIndex}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "backOut" }}
                  className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary"
                >
                  {ROLES[roleIndex]}
                </motion.div>
              </AnimatePresence>
            </BlurFade>

            <FadeIn delay={1} className="mb-10">
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                Building intelligent software for real-world problems. Specialized in AI systems, RAG architectures, and production-ready full-stack applications.
              </p>
            </FadeIn>

            <FadeIn delay={1.2} className="flex flex-wrap items-center gap-4">
              <MagneticButton onClick={() => scrollToSection("projects")}>
                View Projects <ArrowRight className="w-4 h-4 ml-1" />
              </MagneticButton>
              <MagneticButton variant="secondary" onClick={() => window.open("/resume.pdf", "_blank")}>
                Resume <Download className="w-4 h-4 ml-1" />
              </MagneticButton>
            </FadeIn>

            <FadeIn delay={1.4} className="flex items-center gap-6 mt-12">
              <div className="h-px w-12 bg-border" />
              <div className="flex gap-4">
                <a href="https://github.com/AdityaSh-sys" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-2">
                  <span className="sr-only">GitHub</span>
                  <FaGithub className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/adityaa-s/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-2">
                  <span className="sr-only">LinkedIn</span>
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a href="mailto:adityash.sys@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors p-2">
                  <span className="sr-only">Email</span>
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Portrait Visual */}
          <div className="hidden lg:flex justify-center items-center relative">
            <FadeIn delay={0.5} duration={1.5} className="relative w-full max-w-md aspect-[4/5] z-10">
              <div className="absolute inset-0 rounded-3xl overflow-hidden glass border border-border/50 shadow-2xl z-10">
                {/* Fallback gradient if image fails, but image is required */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20" />
                {/* Add your photo to public/images/portrait.jpg */}
                <Image
                  src="/images/portrait.jpg" 
                  alt="Aditya Sharma"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  onError={(e) => {
                    // Fallback to gradient mesh if image is missing
                    e.currentTarget.style.opacity = '0';
                  }}
                />
              </div>
              
              {/* Decorative Elements */}
              <motion.div 
                className="absolute -top-10 -right-10 w-32 h-32 bg-primary/30 rounded-full blur-3xl -z-10"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl -z-10"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center text-muted-foreground"
      >
        <span className="text-xs tracking-widest uppercase mb-2 font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
