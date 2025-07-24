"use client";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { useTheme } from "@/components/layout/ThemeProvider";
import { ReactNode } from "react";
import { Components } from "react-markdown";

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
          components={
            {
              h1: (props) => (
                <h1 className="text-4xl font-bold my-4" {...props} />
              ),
              h2: (props) => (
                <h2 className="text-3xl font-semibold my-3" {...props} />
              ),
              h3: (props) => (
                <h3 className="text-2xl font-semibold my-2" {...props} />
              ),
              p: (props) => <p className="my-2" {...props} />,
              code: ({
                inline,
                className,
                children,
                ...props
              }: {
                inline?: boolean;
                className?: string;
                children: ReactNode;
              }) =>
                !inline ? (
                  <pre className="bg-gray-900 text-white rounded-lg p-4 overflow-x-auto my-4">
                    <code className={className} {...props}>
                      {children}
                    </code>
                  </pre>
                ) : (
                  <code
                    className="bg-gray-200 text-pink-700 rounded px-2 py-1"
                    {...props}
                  >
                    {children}
                  </code>
                ),
              blockquote: (props) => (
                <blockquote
                  className="border-l-4 border-purple-500 pl-4 italic my-4 bg-purple-100/20"
                  {...props}
                />
              ),
              ul: (props) => <ul className="list-disc ml-6 my-2" {...props} />,
              ol: (props) => (
                <ol className="list-decimal ml-6 my-2" {...props} />
              ),
              li: (props) => <li className="my-1" {...props} />,
              a: (props) => (
                <a
                  className="text-blue-600 underline hover:text-blue-800"
                  target="_blank"
                  rel="noopener noreferrer"
                  {...props}
                />
              ),
            } as Components
          }
        >
          {blog.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
