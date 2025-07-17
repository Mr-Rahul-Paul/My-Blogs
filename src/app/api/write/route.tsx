import { NextResponse } from "next/server";
import { connectToDatabase } from "@/services/mongo";
import { BlogPostInput } from "@/services/blogService";
// import { BlogPostInput } from "@/services/blogService";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.name || !body.summary || !body.content) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    
    const input: BlogPostInput = {
      name: body.name,
      summary: body.summary,
      content: body.content,
      tags: body.tags,
      category: body.category,
    };

    
    const { db } = await connectToDatabase();

    const result = await db.collection("markdowns").insertOne(input);

    return NextResponse.json(
      { ...input, _id: result.insertedId },
      { status: 201 }
    );
  } catch (e) {
    console.error("Error creating blog post:", e);
  }
}
