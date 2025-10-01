import { Metadata } from "next";
import SingleBlog from "./detailBlog";

export async function generateMetadata({params} : {params: {slug: string}}): Promise<Metadata>{
    try {
         const { slug } = await params;
         const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${slug}`, {
                next: { revalidate: 10 }
                });
        const post = await res.json();
        console.log("Post data:", post);

    return{
        title:post.data.title,
        description:post.data.penerimaan,
        openGraph:{
            title:post.data.title,
            description:post.data.penerimaan,
        }
    }    
    } catch (error) {
        console.error("Failde to generated metadata:", error);  
        return{
            title:'blog tidak ditemukan',
            description:'halaman blog ini tidak tersedia'
        }
    }
    
}

export default function Page(){
    return (
    <SingleBlog />   
    )
}