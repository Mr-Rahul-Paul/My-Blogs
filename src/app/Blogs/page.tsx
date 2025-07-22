"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BlogPost } from "@/services/blogService";

export default function Page() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch("/api/blogs");
      const data = await res.json();
      setBlogs(data);
      console.log(data);
    };
    fetchBlogs();
  }, []);

  return (
    <section className="relative min-h-screen bg-gray-950 max-w-full z-10 overflow-hidden text-white">
      <div className="mt-20 gap-8 grid-cols-1 md:grid-cols-2 flex flex-col md:flex-row items-center justify-center">
        <div className="text-4xl font-bold max-w-lg">
          <h1>Blogs</h1>
          <p className="text-lg mt-2 text-gray-300">
            Welcome to my blog space! I&apos;m excited to share my insights and
            what I&apos;ve learned so far. Here you&apos;ll find posts about my
            academic experiences, projects I&apos;ve worked on, and tips that
            helped me along the way.
          </p>
        </div>
        <div className="rounded-full p-[5px] border-[5px] border-gray-800 bg-gray-900 shadow-lg">
          <Image
            src="/profile.png"
            alt="Profile"
            height={200}
            width={200}
            className="rounded-full object-cover shadow-lg"
          />
        </div>
      </div>
      {/* Line */}
      <div className="my-6 border-b-2 border-gray-800 max-w-2xl w-full mx-auto"></div>
      <div className="grid grid-cols-1 gap-6 max-w-xl mx-auto">
        {blogs.map((blog: BlogPost) => (
          // You should wrap the card in a link to the blog post
          // e.g., <a href={`/blog/${blog.slug}`} key={blog.slug}>
          <div
            key={blog.slug}
            className="block bg-[#161b22] border border-gray-800 rounded-xl p-6"
          >
            {/* METADATA: Date and Read Time */}
            <div className="flex justify-between items-center text-sm text-gray-400 mb-4">
              <span>
                {new Date(blog.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span>{blog.read}</span>
            </div>

            {/* MAIN CONTENT */}
            <div>
              <h2 className="text-xl font-bold text-gray-100">{blog.name}</h2>
              <p className="text-gray-300 mt-2">{blog.summary}</p>
            </div>

            {/* TAGS */}
            {blog.tags && blog.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-purple-900/50 text-purple-300 text-xs font-medium px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          // </a>
        ))}
      </div>
    </section>
  );
}
