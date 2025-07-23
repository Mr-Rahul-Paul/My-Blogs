/* eslint-disable @typescript-eslint/no-explicit-any */
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BlogService } from "@/services/blogService";
import BlogContent from "@/components/BlogContent";

// --- (1) DATA FETCHING & TYPES ---
interface BlogPost {
  name: string;
  summary: string;
  content: string;
  slug: string;
  createdAt: string;
  read: string;
}

async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  return await BlogService.getPostBySlug(slug);
}

// --- (2) DYNAMIC METADATA ---
// HACK: Apply 'any' to the props to bypass the type error for generateMetadata.

// ohh so the metadata of the page , say name , slug and other parameter are being
// defined by the incoming object from the db so the generate meta data sets the heading
//   and all that from this fucntion by reading the object?

// ans ---- YES

// GETS CALLLED AUTOMATICALLY BY NEXT JS
export async function generateMetadata({ params }: any): Promise<Metadata> {
  const resolvedParams = await params;
  const blog = await getBlogPostBySlug(resolvedParams.slug);

  if (!blog) {
    return {
      title: "does not exist",
    };
  }

  return {
    title: blog.name,
    description: blog.summary,
  };
}

// --- (3) THE PAGE COMPONENT ---
// HACK: Apply 'any' to the props to bypass the type error for the page component.
export default async function BlogPostPage({ params }: any) {
  const resolvedParams = await params;
  const blog = await getBlogPostBySlug(resolvedParams.slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-10 ">
      <div className="flex flex-col gap-4 mt-10">
        <BlogContent blog={blog} />
      </div>
    </main>
  );
}
