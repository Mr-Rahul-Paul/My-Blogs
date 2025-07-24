import { NextResponse } from "next/server";
import { connectToDatabase } from "@/services/mongo";

// GET: Fetch all blogs
export async function GET() {
  try {
    const { db } = await connectToDatabase();
    const markdowns = await db.collection("markdowns").find({}).toArray();
    return NextResponse.json(markdowns, { status: 200 });
  } catch (error) {
    console.error("Error fetching markdowns:", error);
    return NextResponse.json(
      { error: "Failed to fetch markdowns" },
      { status: 500 }
    );
  }
}
