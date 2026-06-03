import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Post from "../../../../models/Post";

/**
 * Fungsi bantuan untuk memastikan koneksi ke MongoDB.
 */
async function dbConnect() {
  if (mongoose.connection.readyState >= 1) return;
  if (!process.env.MONGODB_URI) {
    throw new Error("Silakan definisikan MONGODB_URI di environment variables Anda.");
  }
  await mongoose.connect(process.env.MONGODB_URI);
}

export async function POST(req: Request) {
  try {
    await dbConnect();
    const data = await req.json();

    // Mengambil field 'gambar' dari request body
    const { title, slug, author, excerpt, body, tags, gambar, published } = data;

    const newPost = await Post.create({
      title,
      slug,
      author,
      excerpt,
      body,
      tags,
      // Field 'gambar' dari API kita simpan ke 'coverImage' di model (berupa link string)
      coverImage: gambar, 
      published,
      publishedAt: published ? new Date() : null,
    });

    return NextResponse.json({ success: true, data: newPost }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function GET() {
  await dbConnect();
  const posts = await Post.find({}).sort({ createdAt: -1 });
  return NextResponse.json({ success: true, data: posts });
}