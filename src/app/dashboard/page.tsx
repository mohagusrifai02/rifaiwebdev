"use client";

import ProtextedRoute from "../../../components/protextedroute"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

interface Post{
    _id:string;
    title:string;
    slug:string;
    body:string;
    author:string;
    createdAt:string;
}

export default function DashboardPage(){
    const router = useRouter();
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [title, settitle] = useState("");
    const [slug, setSlug] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor]= useState("");

    useEffect(()=>{
        fetch('/api/posts')
        .then((res)=> res.json())
        .then((data)=> {
            if(data.ok) setPosts(data.data);
        })
        .finally(()=>setLoading(false));
    },[]);

    if(loading) return <p>Loading ... </p>;

    async function handleCreate(e:React.FormEvent){
        e.preventDefault();
        const res = await fetch("/api/posts", {
            method:"POST",
            headers:{ "Content-Type":"application/json"},
            body:JSON.stringify({title,slug, body, author}),
        });
        const data = await res.json();

        if(data.ok){
            setPosts([data.data, ...posts]);
            settitle('');
            setBody('');
            setSlug('');
            setAuthor('');
        } else{
            alert("error: "+ data.error);
        }
    }

    async function handleDelete(slug:string){
        if(!confirm("yakin hapus post ini?")) return ;
        const res = await fetch(`/api/posts/${slug}`, {"method":"DELETE"});
        const data = await res.json();
        if(data.ok){
            setPosts(posts.filter((p)=> p.slug !== slug));
        } else{
            alert("Error hapus : "+data.error);
        }
    }

    const handleLogout = ()=>{
    localStorage.removeItem("token");
        router.replace('/');
    }

    return (
        <ProtextedRoute>
            <div className="container-dashboard">
                <div className="title-dashboard">
                    <h3>Daftar Blog</h3>
                    <div className="button-logout">
                        <FontAwesomeIcon icon={faPlus} />
                        <FontAwesomeIcon icon={faRightFromBracket} onClick={handleLogout}/>
                    </div>
                </div>
                <form action="" onSubmit={handleCreate}>
                    <ul>
                        <li>
                            <input 
                            type="text" name="" id="" 
                            placeholder="Judul"
                            value={title}
                            onChange={(e)=> settitle(e.target.value)}
                            required
                            />
                        </li>
                        <li>
                            <input 
                            type="text" name="" id=""
                            value={slug}
                            onChange={(e)=> setSlug(e.target.value)} />
                        </li>
                        <li>
                            <input 
                            type="text" name="" id="" 
                            placeholder="Author"
                            value={author}
                            onChange={(e)=> setAuthor(e.target.value)}
                            />        
                        </li>
                        <li>
                            <textarea name="" id=""
                            value={body}
                            onChange={(e)=> setBody(e.target.value)}
                            required></textarea>
                        </li>
                        <li>
                            <button type="submit">Buat Post</button>
                        </li>
                    </ul>
                </form>
                <table border={2} cellPadding={10} cellSpacing={0}>
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Judul</th>
                        <th>author</th>
                        <th colSpan={3}>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {posts.map((post)=>(
                        <tr key={post._id}>
                            <td>1</td>
                            <td>{post.title}</td>
                            <td>{post.author}</td>
                            <td>
                                <Link href={`/dashboard/${post.slug}`}>Detail</Link>
                            </td>
                            <td>
                                <Link href={`dashboard/${post.slug}/edit`}>Edit</Link>
                            </td>
                            <td>
                                <span onClick={()=> handleDelete(post.slug)}>Delete</span>
                            </td>
                        </tr>
                    ))}
                    {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam officiis unde, mollitia amet eos officia suscipit, sequi corrupti nemo eligendi at cum? Delectus quis officiis possimus. Voluptas officiis, cupiditate rem mollitia dolorem aliquam ex magnam, soluta incidunt sunt maiores, quo quae nesciunt minima aspernatur quas. Omnis odio necessitatibus nostrum architecto! */}
                    </tbody>
                </table>
            </div>
        </ProtextedRoute>
    )
}