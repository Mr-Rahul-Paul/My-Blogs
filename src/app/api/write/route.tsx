import { NextResponse } from "next/server";
import { connectToDatabase } from "@/services/mongo";
import { BlogPostInput } from "@/services/blogService";

export async function POST(request: Request) {
  try {
    // Authentication: Expect Authorization: Bearer <INTERNAL_API_SECRET>
    const authHeader = request.headers.get("auth-code");
    if (!authHeader) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    // const configuredSecret = process.env.INTERNAL_API_SECRET;

    // if (!configuredSecret) {
    //   console.error(
    //     "INTERNAL_API_SECRET is not configured. Rejecting request."
    //   );
    //   return NextResponse.json(
    //     { error: "Server misconfiguration" },
    //     { status: 500 }
    //   );
    // }

    // if (!authHeader || !authHeader.startsWith("Bearer ")) {
    //   return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    // }

    // const token = authHeader.slice("Bearer ".length).trim();
    if (authHeader !== process.env.INTERNAL_API_SECRET) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

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
      slug: body.slug,
      createdAt: body.createdAt,
      read: body.read,
    };

    const { db } = await connectToDatabase();

    const result = await db.collection("markdowns").insertOne(input);

    return NextResponse.json(
      { ...input, _id: result.insertedId },
      { status: 201 }
    );
  } catch (e) {
    console.error("Error creating blog post:", e);
    return NextResponse.json(
      { error: "Failed to create blog post" },
      { status: 500 }
    );
  }
}
