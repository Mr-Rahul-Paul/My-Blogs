// Interface for blog post data
export interface BlogPost {
  id: string;
  title: string;
  summary: string;      // Short summary for cards
  content: string;      // Raw Markdown text
  category?: string[];
  tags?: string[];
  slug: string;
  createdAt: string;    // ISO date string
  read: string;    // ISO date string
}

export interface BlogPostInput {
  title: string;
  summary: string;
  content: string;
  tags?: string[];
  category?: string[];
}

// Mock data - replace with actual database fetch
const mockBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Scalable React Applications with TypeScript",
    summary: "Learn how to structure large React applications using TypeScript, proper state management, and modern architectural patterns that scale with your team.",
    content: "# Building Scalable React Applications\nThis is a sample markdown content.",
    category: ["development"],
    slug: "building-scalable-react-applications",
    createdAt: "2024-01-15T00:00:00.000Z",
    read: "10 min read"
  },
  {
    id: "2",
    title: "The Art of Code Review: Best Practices for Teams",
    summary: "Discover effective code review strategies that improve code quality, foster collaboration, and accelerate team learning in modern development environments.",
    content: "# The Art of Code Review\nThis is a sample markdown content.",
    category: ["coding"],
    slug: "art-of-code-review",
    createdAt: "2024-01-12T00:00:00.000Z",
    read: "10 min read"
  },
  {
    id: "3",
    title: "Mastering CSS Grid: A Complete Guide",
    summary: "From basic concepts to advanced layouts, explore CSS Grid's powerful features and learn how to create complex, responsive designs with ease.",
    content: "# Mastering CSS Grid\nThis is a sample markdown content.",
    tags: ["CSS", "Grid", "Layout"],
    slug: "mastering-css-grid",
    createdAt: "2024-01-10T00:00:00.000Z",
    read: "10 min read"
  },
  {
    id: "4",
    title: "Performance Optimization in Next.js Applications",
    summary: "Optimize your Next.js applications for speed and user experience with proven techniques for image optimization, code splitting, and caching strategies.",
    content: "# Performance Optimization in Next.js\nThis is a sample markdown content.",
    tags: ["Next.js", "Performance", "Optimization"],
    slug: "nextjs-performance-optimization",
    createdAt: "2024-01-08T00:00:00.000Z",
    read: "10 min read"
  }
];

// Service class for blog operations
export class BlogService {
  // Get all blog posts
  static async getAllPosts(): Promise<BlogPost[]> {
    // TODO: Replace with actual database fetch
    // Example: return await fetch('/api/posts').then(res => res.json());
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100));
    return mockBlogPosts;
  }

  // Get featured/pinned posts (for homepage)
  static async getFeaturedPosts(limit: number = 4): Promise<BlogPost[]> {
    // TODO: Replace with actual database fetch
    // Example: return await fetch(`/api/posts/featured?limit=${limit}`).then(res => res.json());
    
    await new Promise(resolve => setTimeout(resolve, 100));
    return mockBlogPosts.slice(0, limit);
  }

  // Get post by slug
  static async getPostBySlug(slug: string): Promise<BlogPost | null> {
    // TODO: Replace with actual database fetch
    // Example: return await fetch(`/api/posts/${slug}`).then(res => res.json());
    
    await new Promise(resolve => setTimeout(resolve, 100));
    return mockBlogPosts.find(post => post.slug === slug) || null;
  }

  // Get posts by category
  static async getPostsByCategory(category: string): Promise<BlogPost[]> {
    // TODO: Replace with actual database fetch
    // Example: return await fetch(`/api/posts/category/${category}`).then(res => res.json());
    
    await new Promise(resolve => setTimeout(resolve, 100));
    return mockBlogPosts.filter(post => post.tags?.includes(category));
  }

  // Search posts
  static async searchPosts(query: string): Promise<BlogPost[]> {
    // TODO: Replace with actual database fetch
    // Example: return await fetch(`/api/posts/search?q=${query}`).then(res => res.json());
    
    await new Promise(resolve => setTimeout(resolve, 100));
    const lowercaseQuery = query.toLowerCase();
    return mockBlogPosts.filter(post => 
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.summary.toLowerCase().includes(lowercaseQuery) ||
      post.tags?.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    );
  }

  // Create a new blog post
  static async createPost(input: BlogPostInput): Promise<BlogPost> {
    const now = new Date().toISOString();
    const slug = input.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    const newPost: BlogPost = {
      id: (mockBlogPosts.length + 1).toString(),
      title: input.title,
      summary: input.summary,
      content: input.content,
      tags: input.tags,
      slug,
      createdAt: now,
      read: "10 min read"
    };

    mockBlogPosts.push(newPost);
    return newPost;
  }
} 