"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function NavbarPage(){
    const [isOpen, setIsOpen] = useState(false);

    const menuOpen = ()=>{
        setIsOpen(!isOpen);
    }

    const menuClose = ()=>{
        setIsOpen(false);
    }

    return(
        <>
            <nav>
                <div className="title">
                    <h4>RifaiWebDev</h4>
                    <FontAwesomeIcon icon={isOpen ? faTimes:faBars} className="ikon" onClick={menuOpen}/>
                </div>
                <ul className={`list ${isOpen ? 'open':''}`} onClick={menuClose}>
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <Link href='/about'>About</Link>
                    </li>
                    <li>
                        <Link href='/projects'>Projects</Link>
                    </li>
                    <li>
                        <Link href='/blogs'>Blogs</Link>
                    </li>
                    <li>
                        <Link href='/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}