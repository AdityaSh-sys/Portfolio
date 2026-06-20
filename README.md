# Aditya Sharma - Personal Portfolio

A premium, production-ready portfolio built with Next.js 15, Tailwind CSS v4, and Framer Motion. Designed to showcase my work as an AI Engineer and Full-Stack Developer.

## Features

- ⚡️ **Next.js 15 App Router** - Utilizing the latest React features and Server Components.
- 🎨 **Tailwind CSS v4** - Custom CSS-first theme configuration for dark/light mode.
- 🪄 **Framer Motion** - Smooth page transitions, scroll animations, and interactive elements.
- 🐙 **GitHub API Integration** - Live statistics and dynamic project fetching with ISR caching.
- 📝 **MDX Blog** - Markdown-based blog with custom syntax highlighting and reading time.
- 🚀 **Premium UI/UX** - Custom cursor, command palette, reading progress, and cinematic loading screen.
- 📧 **Resend Integration** - Functional contact form.

## Tech Stack

- **Framework:** Next.js 15 (React 19)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Typography:** Geist (Next Font)
- **Deployment:** Vercel

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/AdityaSh-sys/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Copy `.env.example` to `.env.local` and add your keys:
   ```bash
   cp .env.example .env.local
   ```
   - `NEXT_PUBLIC_GITHUB_USERNAME`: Your GitHub username (e.g., `AdityaSh-sys`)
   - `NEXT_PUBLIC_PORTRAIT_URL`: Public URL for your portrait image, such as a Vercel Blob URL
   - `NEXT_PUBLIC_BLOB_URL` or `NEXT_PUBLIC_PROFILE_IMAGE_URL`: Optional aliases accepted by the hero section
   - `GITHUB_TOKEN`: A GitHub Personal Access Token (for higher rate limits)
   - `RESEND_API_KEY`: API key from Resend for the contact form

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

- **Data:** Edit `src/data/projects.ts` and `src/data/experience.ts` to update the content.
- **Theme:** Modify `src/app/globals.css` to change colors, fonts, and the Tailwind v4 theme variables.
- **Blog:** Add `.mdx` files to `content/blog/` to create new blog posts.

## License

MIT License. Developed by Aditya Sharma.
