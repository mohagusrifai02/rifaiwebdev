"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface Post {
    _id: string;
    title: string;
    slug:string;
    body:string;
    author:string;
    createdAt: string;
}

export default function DetailDashboard () {
    const {slug} = useParams() as {slug:string};
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch(`/api/posts/${slug}`)
        .then((res)=> res.json())
        .then((data)=> {
            if(data.ok) setPost(data.data);
        })
        .finally(()=> setLoading(false))
    }, [slug]);

    if(loading) return <p>Loading ... </p>;
    if(!post) return <p>postingan tidak ditemukan</p>;

    function escapeHTML(str: string) {
        return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    }

    return(
        <>
            <div className="container-detail-dashboard">
                <h1>{post.title}</h1>
                <p>by {post.author} - {new Date(post.createdAt).toLocaleDateString()}</p>
                <p>{escapeHTML(post.body)}</p>
            </div>
        </>
    )
}