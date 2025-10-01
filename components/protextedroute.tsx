"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface ProtextedRouteProps {
    children : React.ReactNode;
}

const ProtextedRoute = ({children}:ProtextedRouteProps)=>{
    const router = useRouter();

    useEffect(()=> {
        const token = localStorage.getItem('token');
        if(!token){
            router.replace('/');
        }
    }, [router]);

    return <>{children}</>
};

export default ProtextedRoute;