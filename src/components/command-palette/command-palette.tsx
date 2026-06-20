"use client";

import { useEffect, useState, useCallback } from "react";
import { Command } from "cmdk";
import { Search, Monitor, Moon, Sun, Home, User, Briefcase, FileText, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const { setTheme } = useTheme();
  const router = useRouter();

  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = useCallback((command: () => void) => {
    setOpen(false);
    command();
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm flex items-center justify-center p-4 pt-[10vh]">
      <Command
        className="w-full max-w-2xl bg-card border border-border rounded-xl shadow-2xl overflow-hidden flex flex-col"
        onKeyDown={(e) => {
          if (e.key === "Escape") setOpen(false);
        }}
      >
        <div className="flex items-center px-4 border-b border-border" cmdk-input-wrapper="">
          <Search className="w-5 h-5 text-muted-foreground mr-2 shrink-0" />
          <Command.Input
            autoFocus
            placeholder="Type a command or search..."
            className="flex-1 bg-transparent py-4 outline-none placeholder:text-muted-foreground"
          />
          <kbd className="hidden sm:inline-flex h-6 items-center gap-1 rounded border border-border bg-muted px-2 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">ESC</span>
          </kbd>
        </div>

        <Command.List className="max-h-[60vh] overflow-y-auto p-2 scroll-smooth">
          <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
            No results found.
          </Command.Empty>

          <Command.Group heading="Navigation" className="px-2 py-1 text-xs font-medium text-muted-foreground">
            <Command.Item onSelect={() => runCommand(() => router.push("/"))} className="cmdk-item">
              <Home className="w-4 h-4 mr-2" /> Home
            </Command.Item>
            <Command.Item onSelect={() => runCommand(() => router.push("/#about"))} className="cmdk-item">
              <User className="w-4 h-4 mr-2" /> About Me
            </Command.Item>
            <Command.Item onSelect={() => runCommand(() => router.push("/#projects"))} className="cmdk-item">
              <Briefcase className="w-4 h-4 mr-2" /> Projects
            </Command.Item>
            <Command.Item onSelect={() => runCommand(() => router.push("/#experience"))} className="cmdk-item">
              <FileText className="w-4 h-4 mr-2" /> Experience & Education
            </Command.Item>
            <Command.Item onSelect={() => runCommand(() => router.push("/#contact"))} className="cmdk-item">
              <Mail className="w-4 h-4 mr-2" /> Contact
            </Command.Item>
          </Command.Group>

          <Command.Group heading="Socials" className="px-2 py-1 mt-4 text-xs font-medium text-muted-foreground">
            <Command.Item onSelect={() => runCommand(() => window.open("https://github.com/AdityaSh-sys", "_blank"))} className="cmdk-item">
              <FaGithub className="w-4 h-4 mr-2" /> GitHub
            </Command.Item>
            <Command.Item onSelect={() => runCommand(() => window.open("https://www.linkedin.com/in/adityaa-s/", "_blank"))} className="cmdk-item">
              <FaLinkedin className="w-4 h-4 mr-2" /> LinkedIn
            </Command.Item>
          </Command.Group>

          <Command.Group heading="Theme" className="px-2 py-1 mt-4 text-xs font-medium text-muted-foreground">
            <Command.Item onSelect={() => runCommand(() => setTheme("light"))} className="cmdk-item">
              <Sun className="w-4 h-4 mr-2" /> Light Theme
            </Command.Item>
            <Command.Item onSelect={() => runCommand(() => setTheme("dark"))} className="cmdk-item">
              <Moon className="w-4 h-4 mr-2" /> Dark Theme
            </Command.Item>
            <Command.Item onSelect={() => runCommand(() => setTheme("system"))} className="cmdk-item">
              <Monitor className="w-4 h-4 mr-2" /> System Theme
            </Command.Item>
          </Command.Group>
        </Command.List>
      </Command>

      {/* Global CSS for CMDK items */}
      <style dangerouslySetInnerHTML={{ __html: `
        .cmdk-item {
          display: flex;
          align-items: center;
          padding: 0.5rem 0.5rem;
          margin-bottom: 0.25rem;
          border-radius: 0.375rem;
          font-size: 0.875rem;
          color: var(--color-foreground);
          cursor: pointer;
        }
        .cmdk-item[data-selected="true"] {
          background-color: var(--color-accent);
          color: var(--color-accent-foreground);
        }
      `}} />
    </div>
  );
}
