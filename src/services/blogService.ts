import { connectToDatabase } from "./mongo";

// Interface for blog post data
export interface BlogPost {
  id: string;
  name: string;
  summary: string; // Short summary for cards
  content: string; // Raw Markdown text
  category?: string[];
  tags?: string[];
  slug: string;
  createdAt: string; // ISO date string
  read: string; // ISO date string
}

export interface BlogPostInput {
  name: string;
  summary: string; // Short summary for cards
  content: string; // Raw Markdown text
  category?: string[];
  tags?: string[];
  slug: string;
  createdAt: string; // ISO date string
  read: string;
}

// Service class for blog operations
export class BlogService {
  // Get post by slug
  static async getPostBySlug(slug: string): Promise<BlogPost | null> {
    const { db } = await connectToDatabase();
    const doc = await db.collection("markdowns").findOne({ slug });
    if (!doc) return null;
    return {
      id: doc._id?.toString() || "",
      name: doc.name || doc.title || "Untitled",
      summary: doc.summary || "",
      content: doc.content || "",
      category: doc.category || [],
      tags: doc.tags || [],
      slug: doc.slug,
      createdAt: doc.createdAt || new Date().toISOString(),
      read: doc.read || "",
    };
  }
}
