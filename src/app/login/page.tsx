"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage(){
    const [email, setEmail] = useState("");
    const [password, setPassword]= useState("");
    const router = useRouter();

    const handleSubmit = async(e:React.FormEvent)=>{
        e.preventDefault();

        const res = await fetch("api/auth/login", {
            method:"POST",
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify({email, password}),
        });

        const data = await res.json();
        if(res.ok){
            localStorage.setItem("token", data.token);
            router.push("/dashboard");
        }
    };

    return(
        <form action="" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input 
                type="email"
                placeholder="Email"
                value = {email}
                onChange={(e)=> setEmail(e.target.value)}
                required />
            <input 
                type="password" name="" id="" 
                placeholder="Kata sandi"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                required/>
            <button type="submit">Login</button>
        </form>
    )
}