import { Metadata } from "next";
import SingleBlog from "./detailBlog";
import Image from "next/image";

export async function generateMetadata({params} : {params: {slug: string}}): Promise<Metadata>{
    try {
         const { slug } = params;
         const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${slug}`, {
                next: { revalidate: 10 },
                cache: "no-store"
                });
        const post = await res.json();

    return{
        title:post.data.title,
        description:post.data.body,
        openGraph:{
            title:post.data.title,
            description:post.data.body,
            images: [
                {
                url: post.data.coverImage || `https://www.rifaiwebdev.net/animasi_programming_500kb.jpg`,
                width: 1200,
                height: 630,
                alt: post.data.title,
                },
                ],
            }
        }
    } catch (error) {
        console.error("Failed to generate metadata:", error);  
        return{
            title:'blog tidak ditemukan',
            description:'halaman blog ini tidak tersedia'
        }
    }
    
}

export default async function Page({params} : {params: {slug: string}}){
    const { slug } = params;
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${slug}`, {
           next: { revalidate: 10 },
           cache: "no-store"
           });
    const post = await res.json();

    return (
        <div className="container-single">
            {post.data?.coverImage && (
                <Image 
                    src={post.data.coverImage}
                    alt={post.data.title}
                    width={1000}
                    height={500}
                    style={{ width: '50%', height: 'auto', borderRadius: '20px', marginTop: '100px' }}
                />
            )}
            <SingleBlog />   
        </div>
    )
}