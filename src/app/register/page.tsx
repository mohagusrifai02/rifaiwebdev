"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleSubmit = async(e: React.FormEvent)=>{
        e.preventDefault();

        const res = await fetch("api/auth/register", {
            method:"POST",
            headers:{ "Content-Type": "application/json"},
            body: JSON.stringify({email, password}),
        });

        if(res.ok){
            router.push("/login");
        }
    };

    return (
        <form action="" onSubmit={handleSubmit}>
            <h2>Register</h2>
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
            <button type="submit">Daftar</button>
        </form>
    )
}