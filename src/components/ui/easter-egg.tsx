"use client";

import { useEffect, useState } from "react";
import confetti from "canvas-confetti";

const KONAMI_CODE = [
  "ArrowUp", "ArrowUp", 
  "ArrowDown", "ArrowDown", 
  "ArrowLeft", "ArrowRight", 
  "ArrowLeft", "ArrowRight", 
  "b", "a"
];

export function EasterEgg() {
  const [inputSequence, setInputSequence] = useState<string[]>([]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key === "B" || e.key === "A" ? e.key.toLowerCase() : e.key;
      
      setInputSequence((prev) => {
        const newSequence = [...prev, key];
        if (newSequence.length > KONAMI_CODE.length) {
          newSequence.shift();
        }
        return newSequence;
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (inputSequence.join(",") === KONAMI_CODE.join(",")) {
      triggerEasterEgg();
      setInputSequence([]); // Reset
    }
  }, [inputSequence]);

  const triggerEasterEgg = () => {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 999 };

    const interval: any = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: Math.random(), y: Math.random() - 0.2 },
      });
    }, 250);

    console.log("%c🚀 30 LIVES ADDED! You found the secret.", "color: #3B82F6; font-size: 20px; font-weight: bold;");
  };

  return null;
}
