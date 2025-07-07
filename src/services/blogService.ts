// Interface for blog post data
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishDate: string;
  slug: string;
  featuredImage?: string;
  author?: string;
  tags?: string[];
}

// Mock data - replace with actual database fetch
const mockBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Scalable React Applications with TypeScript",
    excerpt: "Learn how to structure large React applications using TypeScript, proper state management, and modern architectural patterns that scale with your team.",
    category: "Development",
    readTime: "8 min read",
    publishDate: "2024-01-15",
    slug: "building-scalable-react-applications",
    tags: ["React", "TypeScript", "Architecture"]
  },
  {
    id: "2",
    title: "The Art of Code Review: Best Practices for Teams",
    excerpt: "Discover effective code review strategies that improve code quality, foster collaboration, and accelerate team learning in modern development environments.",
    category: "Team Work",
    readTime: "6 min read",
    publishDate: "2024-01-12",
    slug: "art-of-code-review",
    tags: ["Code Review", "Team Work", "Best Practices"]
  },
  {
    id: "3",
    title: "Mastering CSS Grid: A Complete Guide",
    excerpt: "From basic concepts to advanced layouts, explore CSS Grid's powerful features and learn how to create complex, responsive designs with ease.",
    category: "CSS",
    readTime: "12 min read",
    publishDate: "2024-01-10",
    slug: "mastering-css-grid",
    tags: ["CSS", "Grid", "Layout"]
  },
  {
    id: "4",
    title: "Performance Optimization in Next.js Applications",
    excerpt: "Optimize your Next.js applications for speed and user experience with proven techniques for image optimization, code splitting, and caching strategies.",
    category: "Performance",
    readTime: "10 min read",
    publishDate: "2024-01-08",
    slug: "nextjs-performance-optimization",
    tags: ["Next.js", "Performance", "Optimization"]
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
    return mockBlogPosts.filter(post => post.category === category);
  }

  // Search posts
  static async searchPosts(query: string): Promise<BlogPost[]> {
    // TODO: Replace with actual database fetch
    // Example: return await fetch(`/api/posts/search?q=${query}`).then(res => res.json());
    
    await new Promise(resolve => setTimeout(resolve, 100));
    const lowercaseQuery = query.toLowerCase();
    return mockBlogPosts.filter(post => 
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.excerpt.toLowerCase().includes(lowercaseQuery) ||
      post.tags?.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    );
  }
} 