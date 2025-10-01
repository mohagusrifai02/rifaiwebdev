"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Post{
    _id:string;
    title:string;
    slug:string;
    body:string;
    author:string;
    createdAt: string;
}

export default function Blog(){
    const [posts, setPosts]= useState<Post[]>([]);
    const [loading, setLoading]= useState(true);

    useEffect(()=>{
        fetch('/api/posts')
        .then((res)=> res.json())
        .then((data)=>{
            if(data.ok) setPosts(data.data);
        })
        .finally(()=> setLoading(false));
    },[]);

    if(loading) return <p>loading...</p>

    return(
        <>
            <div className="container-blog">
                <div className="cards-projects">
                    <h3>My Projects</h3>
                    <ul>
                        <li>
                            <Image 
                                src="/akuntansi.png"
                                width={100}
                                height={100}
                                alt="akuntansi"
                                className="img"
                            />
                            <p>
                                Sistem akuntansi berbasis web, pengelolaan keuangan berdasarkan standar akuntansi yang berlaku
                            </p>
                        </li>
                        <li>
                            <Image 
                                src="/bmy.png"
                                width={100}
                                height={100}
                                alt="bmy"
                                className="img"
                            />
                            <p>
                                Sistem pencatatan donasi untuk lembaga nonprofit, tidak berdasarkan regulasi akuntansi
                            </p>
                        </li>
                        <li>
                            <Image 
                                src="/alqiroah.png"
                                width={100}
                                height={100}
                                alt="alqiroah"
                                className="img"
                            />
                            <p>
                                Portal berita untuk media jurnalistik
                            </p>
                        </li>
                        <li>
                            <Image 
                                src="/alishlah-next.png"
                                width={100}
                                height={100}
                                alt="alishlah"
                                className="img"
                            />
                            <p>
                                website company profile untuk berbagai instansi atau UMKM, disertai pengelolaan CMS
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="cards-blog">
                    <h2>All Course</h2>
                    <ul className="cards">
                        {posts.map((post)=>(
                            <li key={post._id}>
                                <h3>{post.title}</h3>
                                <p>by {post.author} - {''} 
                                    {new Date(post.createdAt).toLocaleDateString("id-ID", {
                                        day:"2-digit",
                                        month:"long",
                                        year:"numeric"
                                    })}
                                </p>
                                <span><Link href={`blogs/${post.slug}`}>Read more ...</Link></span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}