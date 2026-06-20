"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

interface CopyButtonProps {
  textToCopy: string;
  className?: string;
  label?: string;
}

export function CopyButton({ textToCopy, className, label }: CopyButtonProps) {
  const [hasCopied, setHasCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setHasCopied(true);
      setTimeout(() => setHasCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <button
      onClick={copyToClipboard}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 group",
        className
      )}
      aria-label={hasCopied ? "Copied" : "Copy to clipboard"}
    >
      {label && <span>{label}</span>}
      <div className="relative h-4 w-4">
        <Check
          className={cn(
            "absolute inset-0 h-4 w-4 text-green-500 transition-all",
            hasCopied ? "scale-100 opacity-100" : "scale-0 opacity-0"
          )}
        />
        <Copy
          className={cn(
            "absolute inset-0 h-4 w-4 transition-all group-hover:text-primary",
            hasCopied ? "scale-0 opacity-0" : "scale-100 opacity-100"
          )}
        />
      </div>
    </button>
  );
}
