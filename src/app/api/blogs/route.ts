import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/services/mongo';

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
export async function POST(req: NextRequest) {
  try {
    const { db } = await connectToDatabase();
    const body = await req.json();
    const { title, content } = body;
    if (!title || !content) {
      return NextResponse.json({ success: false, error: 'Title and content are required.' }, { status: 400 });
    }
    const newBlog = {
      title,
      content,
      createdAt: new Date(),
    };
    const result = await db.collection('blogs').insertOne(newBlog);
    return NextResponse.json({ success: true, blog: { ...newBlog, _id: result.insertedId } });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
} 