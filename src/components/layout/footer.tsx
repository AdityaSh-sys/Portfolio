"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-background py-12 mt-20 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="text-xl font-bold tracking-tighter">
              <span className="text-primary">A</span>
              <span>S</span>
              <span className="text-primary">.</span>
            </Link>
            <p className="text-sm text-muted-foreground text-center md:text-left max-w-sm">
              Building intelligent software for real-world problems. Let&apos;s build something great together.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Aditya Sharma. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Built with <span className="font-medium text-foreground">Next.js</span> &middot; Hosted on <span className="font-medium text-foreground">Vercel</span>
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="absolute -top-6 right-8 md:right-12 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
