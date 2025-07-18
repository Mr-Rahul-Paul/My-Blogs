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
    <section className="relative min-h-screen bg-cover bg-center max-w-full  z-10 overflow-hidden">
      <div className="mt-20 gap-8 grid-cols-1 md:grid-cols-2 flex flex-col md:flex-row items-center justify-center">
        <div className="text-4xl font-bold max-w-lg">
          <h1>Blogs</h1>
          <p className="text-lg mt-2 text-gray-700">
            Welcome to my blog space! I&apos;m excited to share my
            insightsI&apos;ve learned so far. Here you&apos;ll find posts about
            my academic experiences, projects I&apos;ve worked on, and tips that
            helped me along the way.
          </p>
        </div>
        <div
          className="rounded-full p-[5px] border-[5px] border-white/85"
          // wrap in a div and added hover animation
        >
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
      <div className="my-6 border-b-2 border-gray-700 max-w-2xl w-full mx-auto"></div>
      <div className="grid grid-cols-1 gap-4 max-w-xl mx-auto">
        {blogs.map((blog: BlogPost) => (
          <div
            key={blog.id}
            className="grid grid-cols-1 flex-col justify-center items-center border-3 p-3 rounded-3xl"
          >
            <div className="text-left text-2xl font-bold">
              <h1>{blog.name}</h1>
            </div>
            <br />
            <div className="text-left text-md text-gray-500">
              <h1>no summary</h1>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
