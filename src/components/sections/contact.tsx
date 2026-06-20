"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn, BlurFade } from "@/components/animations/motion";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { CopyButton } from "@/components/ui/copy-button";
import { Send, Mail, MapPin, CheckCircle2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 relative z-10">
      <SectionHeading number="06" title="Get In Touch" subtitle="Open to exciting opportunities, freelance projects, and collaborations." />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        {/* Contact Info */}
        <div>
          <FadeIn>
            <h3 className="text-3xl font-bold tracking-tight mb-4">Let&apos;s build something great.</h3>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              I&apos;m currently looking for internships and full-time roles in AI Engineering and Full-Stack Development. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
            </p>
          </FadeIn>

          <div className="space-y-6">
            <BlurFade delay={0.1}>
              <div className="flex items-center justify-between glass p-4 rounded-2xl border border-border/50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Email</p>
                    <a href="mailto:adityash.sys@gmail.com" className="text-foreground hover:text-primary transition-colors font-medium">
                      adityash.sys@gmail.com
                    </a>
                  </div>
                </div>
                <CopyButton textToCopy="adityash.sys@gmail.com" />
              </div>
            </BlurFade>

            <BlurFade delay={0.2}>
              <a href="https://github.com/AdityaSh-sys" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 glass p-4 rounded-2xl border border-border/50 group transition-all hover:border-primary/50">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <FaGithub className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">GitHub</p>
                  <p className="text-foreground font-medium">AdityaSh-sys</p>
                </div>
              </a>
            </BlurFade>

            <BlurFade delay={0.3}>
              <a href="https://www.linkedin.com/in/adityaa-s/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 glass p-4 rounded-2xl border border-border/50 group transition-all hover:border-primary/50">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <FaLinkedin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">LinkedIn</p>
                  <p className="text-foreground font-medium">Aditya Sharma</p>
                </div>
              </a>
            </BlurFade>

            <BlurFade delay={0.4}>
              <div className="flex items-center gap-4 glass p-4 rounded-2xl border border-border/50">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Location</p>
                  <p className="text-foreground font-medium">Jaipur / Delhi, India</p>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>

        {/* Contact Form */}
        <FadeIn delay={0.2}>
          <div className="glass p-8 md:p-10 rounded-3xl border border-border/50 relative overflow-hidden">
            <AnimatePresence mode="wait">
              {submitStatus === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-background/95 backdrop-blur-md text-center p-8"
                >
                  <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-3xl font-bold mb-2">Message Sent!</h4>
                  <p className="text-muted-foreground mb-8">Thanks for reaching out. I&apos;ll get back to you as soon as possible.</p>
                  <MagneticButton variant="secondary" onClick={() => setSubmitStatus("idle")}>
                    Send Another
                  </MagneticButton>
                </motion.div>
              ) : null}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground"
                  placeholder="Opportunity: Software Engineer Role"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground resize-none"
                  placeholder="Hi Aditya, I came across your portfolio and..."
                />
              </div>

              {submitStatus === "error" && (
                <p className="text-destructive text-sm font-medium">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}

              <MagneticButton
                type="submit"
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="w-4 h-4" />
              </MagneticButton>
            </form>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
