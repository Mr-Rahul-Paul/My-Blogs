import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/services/mongo';
import { BlogService, BlogPostInput } from '@/services/blogService';

// GET: Fetch all blogs
export async function GET() {
  try {
    const { db } = await connectToDatabase();
    const blogs = await db.collection('blogs').find({}).sort({ createdAt: -1 }).toArray();
    return NextResponse.json({ success: true, blogs });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}

// POST: Add a new blog

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Basic validation
    if (!body.title || !body.summary || !body.content) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Prepare input
    const input: BlogPostInput = {
      title: body.title,
      summary: body.summary,
      content: body.content,
      tags: body.tags,
      category: body.category,
    };

    const newPost = await BlogService.createPost(input);

    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    console.error('Error creating blog post:', error);
    return NextResponse.json({ error: 'Failed to create blog post' }, { status: 500 });
  }
} 