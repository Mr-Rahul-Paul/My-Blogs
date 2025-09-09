"use client";
import { useState, useEffect } from "react";
import { FiArrowRight, FiCalendar, FiClock } from "react-icons/fi";
import { BlogPost } from "@/services/blogService";
import { useTheme } from "@/components/layout/ThemeProvider";

import Link from "next/link";

const BlogCard = ({ post }: { post: BlogPost }) => {
  const { theme } = useTheme();
  const border = theme === "light" ? "!border-black" : "!border-white";
  return (
    <article
      className={`${border} mx-auto max-w-4xl items-center hover:backdrop-blur-lg border-2 rounded-3xl p-2 mt-4 font-semibold z-30`}
    >
      {/* Subtle gradient overlay */}
      <div className="relative z-10 p-3">
        <div className="mb-6">
          <span
            className={`${border} inline-block px-4 py-2  text-sm rounded-2xl font-bold border-2`}
          >
            {post.category}
          </span>
        </div>

        <h3 className="text-3xl font-extrabold mb-4 group-hover:text-blue-300 transition-colors line-clamp-2 leading-tight z-30 drop-shadow-lg">
          {post.name}
        </h3>

        <p className=" mb-6 line-clamp-3 leading-relaxed text-md">
          {post.summary}
        </p>

        <div className="flex items-center justify-between text-base ">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <FiCalendar className="w-5 h-5 text-blue-600" />
              <span suppressHydrationWarning>
                {post.createdAt
                  ? new Date(post.createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  : ""}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FiClock className="w-5 h-5 text-purple-600" />
              <span>{post.read}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 group-hover:gap-4 transition-all z-30">
            <span className=" font-semibold">Read Here</span>
            <div
              className={`w-8 h-8 border-2 ${border} rounded-full flex items-center justify-center`}
            >
              <FiArrowRight className="w-4 h-4  group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

const BlogsSection = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { theme } = useTheme();
  const border =
    theme === "light"
      ? "!border-black  !text-black"
      : "!border-white border-2 !text-white";

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/blogs");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setPosts(data.slice(0, 4)); // Show only 4 featured posts
      } catch (err) {
        setError("Failed to load blog posts");
        console.error("Error fetching posts:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <section className="relative py-32 bg-gradient-to-b from-[#18191b] to-[#0f1012] text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-sans font-bold text-[clamp(2.5rem,8vw,5rem)] leading-none mb-6">
              Latest Blog Posts
            </h2>
            <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              Loading posts...
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="relative py-32 bg-gradient-to-b from-[#18191b] to-[#0f1012] text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-sans font-bold text-[clamp(2.5rem,8vw,5rem)] leading-none mb-6">
              Latest Blog Posts
            </h2>
            <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              {error}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="blogs-section"
      className="relative py-32 bg-gradient-to-b overflow-hidden"
    >
      {/* Green gradient at the top blending into the background */}
      <div
        className="absolute left-0 top-0 w-full h-12 pointer-events-none z-20"
        style={{
          background:
            "linear-gradient(to bottom, rgba(34,197,94,0.15) 0%, rgba(34,197,94,0.05) 70%, rgba(0,0,0,0) 100%)",
        }}
      />
      {/* Green gradient at the bottom blending into the background */}
      <div className="absolute left-0 bottom-0 w-full h-32 pointer-events-none z-20" />
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-sans font-bold text-[clamp(2.5rem,8vw,5rem)] leading-none mb-6 underline underline-offset-9">
            Latest Blogs
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-16 rounded-xl">
          {posts.map((post, idx) => {
            const isLastOdd =
              posts.length % 2 === 1 && idx === posts.length - 1;
            return (
              <Link
                key={post.id || `post-${idx}`}
                href={`/Blogs/${post.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className={isLastOdd ? "md:col-span-2 block" : "block"}
                style={{ textDecoration: "none" }}
              >
                <BlogCard post={post} />
              </Link>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            href="/Blogs"
            className={`${border} border-3 inline-flex items-center gap-3 px-10 py-4 font-bold text-lg rounded-2xl  hover:shadow-2xl hover:shadow-purple-500`}
          >
            View All Posts
            <div className="w-6 h-6 rounded-full flex items-center justify-center">
              <FiArrowRight className="w-5 h-5 " />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
