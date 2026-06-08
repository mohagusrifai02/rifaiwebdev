import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Project from "../../../../models/Project";

async function dbConnect(){
    if(mongoose.connection.readyState >= 1) return;
    if(!process.env.MONGODB_URI){
        throw new Error("Silakan definisikan MONGODB_URI di environment variables Anda.");
    }
    await mongoose.connect(process.env.MONGODB_URI);
}

export async function POST(req: Request) {
    try {
        await dbConnect();
        const data = await req.json();
        const { name, tautan, gambar} = data;
        const newProject = await Project.create({
            name,
            tautan,
            image: gambar,
        });

        return NextResponse.json({ success: true, data: newProject }, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}

export async function GET() {
    await dbConnect(); // cite: 1
    const projects = await Project.find({}).sort({ createdAt: "desc"}); // cite: 1
    return NextResponse.json({ success: true, data: projects });
}