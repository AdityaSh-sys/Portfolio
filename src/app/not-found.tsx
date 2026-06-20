"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center pt-20 pb-24 relative overflow-hidden">
      {/* Decorative stars/particles */}
      <div className="absolute inset-0 z-0">
        {mounted && [...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            initial={{ 
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.1
            }}
            animate={{ 
              y: [null, Math.random() * -100],
              opacity: [null, Math.random() * 0.8 + 0.2, 0]
            }}
            transition={{ 
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center">
        <motion.h1 
          className="text-9xl md:text-[12rem] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          404
        </motion.h1>
        
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mt-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Lost in Space
        </motion.h2>
        
        <motion.p 
          className="text-lg text-muted-foreground max-w-md mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          The page you are looking for has drifted into the void. It might have been moved or deleted.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link href="/">
            <MagneticButton>
              <Home className="w-4 h-4" /> Return Home
            </MagneticButton>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
