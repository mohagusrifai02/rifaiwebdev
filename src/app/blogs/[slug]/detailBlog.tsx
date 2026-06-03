"use client";

import { useState } from "react";
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


export default function SingleBlog ({ initialPost }: { initialPost: Post }) {
    const [post] = useState<Post>(initialPost);
    const [loading] = useState(false);

    if(!post) return <p>postingan tidak ditemukan</p>;

    function escapeHTML(str: string) {
        return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    }    

    return(
        <>
            <div className="container-single" style={{ marginTop: '100px' }}>
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