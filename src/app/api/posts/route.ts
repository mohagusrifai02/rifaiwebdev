import { NextResponse } from "next/server";
import { connectDB } from "../../../../lib/mongodb";
import Post from "../../../../models/Post";

export async function GET(req: Request){
    try {
        await connectDB();
        const { searchParams } = new URL(req.url);
        const tag = searchParams.get("tag");
        const publishedOnly = searchParams.get('publish') === "true";

        const filter: any = {};
        if(tag) filter.tags = tag;
        if(publishedOnly) filter.published = true;

        const posts = await Post.find(filter).sort({ publishedAt: -1, createdAt: -1 }).limit(50).lean();
        return NextResponse.json({ ok: true, data: posts });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ ok: false, error: "Failed to fetch posts" }, { status: 500 });
    }
}

export async function POST(req: Request){
    try {
        const body = await req.json();
        if(!body.title || !body.slug || !body.body) {
            return NextResponse.json({ ok:false, error:'failed to fetch post'},{ status:500})
        }

        await connectDB();

        if(body.published && !body.publishedAt){
            body.publishedAtt = new Date();
        }

        const post = await Post.create(body);
        return NextResponse.json({ ok:true, data:post}, { status:201});
    } catch (err:any) {
        console.error(err);
        const message = err?.code === 11000 ? 'Slug already exists' : 'failed to create post';

        return NextResponse.json({ ok:false, error:message }, { status:500 });
    }
}