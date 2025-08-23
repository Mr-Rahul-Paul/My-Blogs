'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BlogPost } from "@/services/blogService";
import { useTheme } from "@/components/layout/ThemeProvider";
import Link from "next/link";
import ClientDate from "@/components/ui/ClientDate";

export default function Page() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blogs");
        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const { theme } = useTheme();
  const border = theme === "light" ? "!border-black" : "!border-white";

  return (
    <section className="relative min-h-screen max-w-full z-10 overflow-hidden ">
      <div className="mt-20 gap-8 grid-cols-1 md:grid-cols-2 flex flex-col md:flex-row items-center justify-center">
        <div className="text-4xl font-bold max-w-lg">
          <h1>Blogs</h1>
          <p className="text-lg mt-2 ">
            Welcome to my blog space! I&apos;m excited to share my insights and
            what I&apos;ve learned so far. Here you&apos;ll find posts about my
            academic experiences, projects I&apos;ve worked on, and tips that
            helped me along the way.
          </p>
        </div>
        <div className="rounded-full p-[6px] border-[5px] shadow-lg border-white">
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
      <div
        className={`my-6 border-b-2 ${border} max-w-2xl w-full mx-auto`}
      ></div>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900 -mt-12j0"></div>
        </div>
      ) : (
      <div className="grid grid-cols-1 gap-6 max-w-2xl mx-auto">
        {blogs.map((blog: BlogPost) => (
          // You should wrap the card in a link to the blog post
          // e.g., <a href={`/blog/${blog.slug}`} key={blog.slug}>
          <Link key={blog.slug} href={`/Blogs/${blog.slug}`}>
            <div
              className={`block border-2 ${border} rounded-xl p-6 cursor-pointer`}
            >
              {/* METADATA: Date and Read Time */}
              <div className="flex justify-between items-center text-sm mb-4">
                <span>
                  <ClientDate dateString={blog.createdAt} />
                </span>
                <span>{blog.read}</span>
              </div>

              {/* MAIN CONTENT */}
              <div>
                <h2 className="text-2xl font-bold ">{blog.name}</h2>
                <p className=" mt-2">{blog.summary}</p>
              </div>

              {/* TAGS */}
              {blog.tags && blog.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-purple-900/50 text-xs font-medium px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Link>
          // </a>
          ))}
        </div>
      )}
    </section>
  );
}
