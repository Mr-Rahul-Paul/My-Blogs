import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import type { Metadata } from "next";
import { BlogService } from "@/services/blogService";

// --- (1) DATA FETCHING & TYPES ---
// This is a placeholder. Replace it with your actual data fetching logic
// (e.g., from a database, CMS, or local markdown files).

interface BlogPost {
  name: string;
  summary: string;
  content: string; // Raw Markdown text
  slug: string;
  createdAt: string; // ISO date string
  read: string;
}

// Dummy function to simulate fetching blog data
async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  return await BlogService.getPostBySlug(slug);
}

// --- (2) DYNAMIC METADATA ---
// This function generates the page title and description for SEO.

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const blog = await getBlogPostBySlug(params.slug);

  if (!blog) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: blog.name,
    description: blog.summary,
  };
}

// --- (3) THE PAGE COMPONENT ---
// This is the main component that renders the blog post.

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const blog = await getBlogPostBySlug(params.slug);

  // If no blog is found for the slug, show a 404 page.
  if (!blog) {
    notFound();
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-10 mt-10">
      <article>
        {/* Post Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            {blog.name}
          </h1>
          <div className="text-gray-400 text-sm">
            <span>
              {new Date(blog.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="mx-2">•</span>
            <span>{blog.read}</span>
          </div>
        </header>

        {/* Post Content */}
        {/* The `prose` classes provide excellent typography for markdown content */}
        <div
          className="prose prose-invert prose-lg max-w-none 
                      prose-p:text-gray-300 
                      prose-headings:text-white 
                      prose-a:text-purple-400 hover:prose-a:text-purple-300
                      prose-strong:text-gray-200 
                      prose-blockquote:border-l-purple-400
                      prose-code:bg-gray-800 prose-code:p-1 prose-code:rounded-md
                      prose-pre:bg-[#161b22]
                      "
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
          >
            {blog.content}
          </ReactMarkdown>
        </div>
      </article>
    </main>
  );
}
