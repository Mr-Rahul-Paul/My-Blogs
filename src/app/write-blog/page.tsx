"use client";
import { useState, useEffect } from "react";
import ClientDate from "@/components/ui/ClientDate";

interface Blog {
  _id: string;
  title: string;
  content: string;
  createdAt?: string;
}

export default function WriteBlogPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [blogs, setBlogs] = useState<Blog[]>([]);

  // Fetch blogs on mount
  useEffect(() => {
    fetchBlogs();
  }, []);

  async function fetchBlogs() {
    const res = await fetch("/api/blogs");
    const data = await res.json();
    if (data.success) setBlogs(data.blogs);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    const res = await fetch("/api/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });
    const data = await res.json();
    setLoading(false);
    if (data.success) {
      setMessage("Blog posted!");
      setTitle("");
      setContent("");
      fetchBlogs();
    } else {
      setMessage(data.error || "Error posting blog");
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Write a Blog</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-8">
        <input
          className="border p-2 rounded"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          className="border p-2 rounded min-h-[120px]"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Posting..." : "Post Blog"}
        </button>
        {message && <div className="mt-2 text-center">{message}</div>}
      </form>
      <h2 className="text-2xl font-semibold mb-2">Blogs</h2>
      <div className="flex flex-col gap-4">
        {blogs.length === 0 && <div>No blogs yet.</div>}
        {blogs.map((blog) => (
          <div key={blog._id} className="border rounded p-4">
            <div className="font-bold text-lg">{blog.title}</div>
            <div className="text-red-700 whitespace-pre-line ">
              {blog.content}
            </div>
            <div className="text-xs text-gray-500 mt-2">
              <ClientDate dateString={blog.createdAt} type="datetime" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
