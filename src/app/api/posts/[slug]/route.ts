import { NextResponse } from "next/server";
import { connectDB } from "../../../../../lib/mongodb";
import Post from "../../../../../models/Post";

export async function GET(req: Request, context: {params: Promise<{slug:string}>}){
    try {
        const { slug } = await context.params;
        await connectDB();
        const post = await Post.findOne({ slug }).lean();
        if(!post) return NextResponse.json({ ok:false, error:'not found'},{status:404});
        return NextResponse.json( {ok:true, data:post})
    } catch (err) {
        console.error(err);
        return NextResponse.json({ ok:false, error:'failed get data'}, {status:500})
    }
}

export async function PATCH(req:Request, context : {params : Promise<{slug:string}>}){
 try {
    const {slug}= await context.params;
    const updates = await req.json();
    await connectDB();

    if(updates.publish && !updates.publishedAt) updates.publishedAt = new Date;

    const post = await Post.findOneAndUpdate({ slug}, updates, {new:true})

    if(!post) return NextResponse.json({ok:false, error:'not found'}, {status:404});
    return NextResponse.json({ok:true, data:post});
 } catch (err) {
    console.error(err);
    return NextResponse.json({ ok:false, error:'failed to update'}, {status:500});    
 }
}

export async function DELETE(req:Request, context: {params: Promise<{slug:string}>}){
    try {
        const {slug} = await context.params;
        await connectDB();
        const deleted = await Post.findOneAndDelete({slug});
        if(!deleted) return NextResponse.json({ ok:false, error:'not found'}, {status:404});
        return NextResponse.json({ok:true, data:deleted});
    } catch (err) {
        console.error(err);
        return NextResponse.json({ok:false, error:'failed to delete'}, {status:500});
    }
}