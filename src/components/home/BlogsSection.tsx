"use client";
import { useState, useEffect } from "react";
import { FiArrowRight, FiCalendar, FiClock } from "react-icons/fi";
import { BlogPost, BlogService } from "@/services/blogService";

const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <article className="group relative bg-gradient-to-br from-[#232427] to-[#1a1b1d] rounded-3xl p-8 hover:from-[#2a2b2e] hover:to-[#232427] transition-all duration-500 hover:shadow-2xl hover:shadow-black/30 cursor-pointer border border-white/5 hover:border-white/10">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative z-10">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-sm rounded-2xl font-medium border border-blue-500/20">
            {post.category}
          </span>
        </div>

        <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-300 transition-colors line-clamp-2 leading-tight">
          {post.title}
        </h3>

        <p className="text-white/60 mb-6 line-clamp-3 leading-relaxed text-lg">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between text-sm text-white/40">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <FiCalendar className="w-4 h-4 text-blue-400" />
              <span>
                {new Date(post.publishDate).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FiClock className="w-4 h-4 text-purple-400" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 group-hover:gap-4 transition-all">
            <span className="text-blue-300 font-semibold">Read More</span>
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <FiArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
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

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const featuredPosts = await BlogService.getFeaturedPosts(4);
        setPosts(featuredPosts);
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
    <section className="relative py-32 bg-gradient-to-b from-[#18191b] to-[#0f1012] text-white overflow-hidden">
      {/* Background decorative elements */}
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
            Explore my latest thoughts on technology, development, and creative
            coding. Each post is crafted to provide value and insights from
            real-world experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <div className="text-center">
          <button className="group inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold text-lg rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105">
            View All Posts
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <FiArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
