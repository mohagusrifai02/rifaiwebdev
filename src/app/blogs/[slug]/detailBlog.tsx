"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface Post {
    _id: string;
    title: string;
    slug:string;
    body:string;
    author:string;
    createdAt: string;
    coverImage: string;
}



export default function SingleBlog () {
    const {slug} = useParams() as {slug:string};
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch(`/api/posts/${slug}`)
        .then((res)=> res.json())
        .then((data)=> {
            if(data.success) setPost(data.data);
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
            <div className="container-single">
                <Link href='/blogs' className="link-kembali">&laquo;Kembali</Link>
                {post.coverImage && (
                    <Image 
                        src={post.coverImage}
                        alt={post.title}
                        width={1000}
                        height={500}
                        priority
                        style={{ width: '100%', height: 'auto', borderRadius: '20px', marginBottom: '20px' }}
                    />
                )}
                <h1>{post.title}</h1>
                <p>by {post.author} - {new Date(post.createdAt).toLocaleDateString()}</p>
                <p style={{ whiteSpace: "pre-wrap" }} dangerouslySetInnerHTML={{ __html: escapeHTML(post.body).replace(/\n/g, "<br />") }} />
            </div>
        </>
    )
}