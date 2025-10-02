"use client";

import TypingText from "../../components/typingtext";
import About from "./about/page";
import Contact from "./contact/page";
import ProjectsPage from "./projects/page";
import Blog from "./blogs/page";

export default function Home() {
  return (
    <>
      <div className="container-home">
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
