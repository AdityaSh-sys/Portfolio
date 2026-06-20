import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";
import { Search, Clock } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Aditya Sharma",
  description: "Writing about AI, web development, and software engineering.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="container mx-auto px-4 md:px-6 pt-32 pb-24 min-h-screen">
      <SectionHeading number="BLOG" title="Writing" subtitle="Thoughts, tutorials, and insights on software engineering." />

      {posts.length === 0 ? (
        <div className="glass p-12 rounded-3xl text-center border border-border/50 max-w-2xl mx-auto">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <span className="text-2xl">✍️</span>
          </div>
          <h3 className="text-2xl font-bold mb-4">Coming Soon</h3>
          <p className="text-muted-foreground mb-8">
            I&apos;m currently setting up my blog infrastructure and writing my first few posts. Check back later for articles on AI engineering, Next.js, and system design.
          </p>
          <Link href="/" className="text-primary hover:underline font-medium">
            &larr; Back to Home
          </Link>
        </div>
      ) : (
        <div className="space-y-8">
          {/* Search Placeholder - full implementation would be a client component */}
          <div className="relative max-w-md mb-12">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search posts..." 
              className="w-full bg-background border border-border rounded-full pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <SpotlightCard className="h-full flex flex-col group cursor-pointer">
                  <div className="mb-4">
                    <Badge variant="secondary" className="mb-4">
                      {post.category}
                    </Badge>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                  
                  <div className="mt-auto pt-6 flex items-center justify-between text-sm text-muted-foreground border-t border-border/50">
                    <span>{formatDate(post.date)}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readingTime}
                    </span>
                  </div>
                </SpotlightCard>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
