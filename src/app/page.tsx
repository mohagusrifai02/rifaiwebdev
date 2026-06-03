"use client";

import { motion } from "framer-motion";
import TypingText from "../../components/typingtext";
import About from "./about/page";
import Contact from "./contact/page";
import ProjectsPage from "./projects/page";
import Blog from "./blogs/page";

export default function Home() {
  return (
    <>
      <div className="container-home">
        {/* Animated Background Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 40, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: "-10%",
            left: "-5%",
            width: "450px",
            height: "450px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, transparent 70%)",
            filter: "blur(60px)",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            bottom: "-15%",
            right: "-5%",
            width: "550px",
            height: "550px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%)",
            filter: "blur(80px)",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />

        <div className="title">
          <h4>Hello Everyone, I am Agus rifai</h4>
          <h1 style={{color:'rgb(13, 168, 13)'}}>
            <TypingText text="I'm a Web Developer, experience in Next.js" speed={80}/>
          </h1>
          <button>
            <span className="text">Getting Started</span>
            <span className="panel">Lets Go !</span>
          </button>
        </div>
      </div>
      <About />
      <ProjectsPage />
      <Blog />
      <Contact/>
    </>
  );
}
