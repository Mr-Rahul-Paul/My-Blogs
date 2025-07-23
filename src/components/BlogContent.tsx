"use client";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { useTheme } from "@/components/layout/ThemeProvider";

interface BlogPost {
  name: string;
  summary: string;
  content: string;
  slug: string;
  createdAt: string;
  read: string;
}

export default function BlogContent({ blog }: { blog: BlogPost }) {
  const { theme } = useTheme();
  const proseClass =
    theme === "dark"
      ? "prose prose-lg prose-invert max-w-none"
      : "prose prose-lg max-w-none";
  const headerClass = "text-4xl md:text-5xl font-bold mb-3";
  const metaClass = "text-sm";
  return (
    <article>
      {/* Post Header */}
      <header className="mb-8">
        <h1 className={headerClass}>{blog.name}</h1>
        <div className={metaClass}>
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
      <div className={proseClass}>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
        >
          {blog.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
