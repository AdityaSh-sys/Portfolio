import type { Metadata, Viewport } from "next";
import { fontSans, fontMono } from "@/lib/fonts";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { cn } from "@/lib/utils";
import CustomCursor from "@/components/cursor/custom-cursor";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import LoadingScreen from "@/components/layout/loading-screen";
import ReadingProgress from "@/components/layout/reading-progress";
import CommandPalette from "@/components/command-palette/command-palette";
import { EasterEgg } from "@/components/ui/easter-egg";

export const metadata: Metadata = {
  title: "Aditya Sharma | AI Engineer & Full-Stack Developer",
  description: "Portfolio of Aditya Sharma, an AI Engineer and Full-Stack Developer building intelligent software.",
  keywords: ["Aditya Sharma", "AI Engineer", "Machine Learning", "Full Stack Developer", "Portfolio", "Next.js"],
  authors: [{ name: "Aditya Sharma" }],
  creator: "Aditya Sharma",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://heyaditya.tech",
    title: "Aditya Sharma | AI Engineer & Full-Stack Developer",
    description: "Building intelligent software for real-world problems.",
    siteName: "Aditya Sharma Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Sharma | AI Engineer & Full-Stack Developer",
    description: "Building intelligent software for real-world problems.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0b" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontMono.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <SmoothScrollProvider>
            <LoadingScreen />
            <CustomCursor />
            <ReadingProgress />
            <CommandPalette />
            <EasterEgg />
            <Navbar />
            <main className="relative flex flex-col min-h-screen">
              {children}
            </main>
            <Footer />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
