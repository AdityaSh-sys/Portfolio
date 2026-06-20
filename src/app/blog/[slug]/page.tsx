import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, getPostSlugs } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import { formatDate } from "@/lib/utils";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import remarkGfm from "remark-gfm";

// In Next.js 15, we need to await the params object
type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} | Aditya Sharma`,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.mdx$/, ""),
  }));
}

// Custom components mapping for MDX
const mdxComponents = {
  h1: (props: any) => <h1 className="text-4xl font-bold mt-8 mb-4" {...props} />,
  h2: (props: any) => <h2 className="text-3xl font-bold mt-10 mb-4" {...props} />,
  h3: (props: any) => <h3 className="text-2xl font-bold mt-8 mb-3" {...props} />,
  p: (props: any) => <p className="leading-relaxed mb-6 text-muted-foreground" {...props} />,
  a: (props: any) => <a className="text-primary hover:underline" {...props} />,
  ul: (props: any) => <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2" {...props} />,
  ol: (props: any) => <ol className="list-decimal pl-6 mb-6 text-muted-foreground space-y-2" {...props} />,
  li: (props: any) => <li {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-primary pl-4 italic my-6 text-muted-foreground bg-primary/5 py-2 pr-4 rounded-r-lg" {...props} />
  ),
  code: (props: any) => {
    // Determine if it's a code block or inline code
    const isInline = typeof props.children === 'string' && !props.children.includes('\n');
    if (isInline) {
      return <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground" {...props} />;
    }
    return <code className="block bg-[#1E1E1E] p-4 rounded-lg overflow-x-auto text-sm font-mono text-gray-300 my-6" {...props} />;
  },
  pre: (props: any) => <pre className="my-0" {...props} />,
};

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 md:px-6 pt-32 pb-24 max-w-4xl">
      <Link href="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
        <ArrowLeft className="w-4 h-4" /> Back to Blog
      </Link>

      <header className="mb-12 border-b border-border/50 pb-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          {post.title}
        </h1>
        
        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{post.readingTime}</span>
          </div>
        </div>
      </header>

      <article className="prose prose-neutral dark:prose-invert prose-lg max-w-none">
        <MDXRemote 
          source={post.content} 
          components={mdxComponents}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
            }
          }}
        />
      </article>

      <div className="mt-16 pt-8 border-t border-border/50 flex flex-wrap gap-2">
        {post.tags.map(tag => (
          <span key={tag} className="px-3 py-1 bg-muted rounded-full text-sm">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}
