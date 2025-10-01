import { useEffect, useState } from "react";

interface TypingTextProps {
    text:string;
    speed?:number;
    loop?:boolean;
}

const TypingText: React.FC<TypingTextProps> = ({ text, speed = 100, loop=true}) =>{
    const [dispayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            if(index < text.length) {
                setDisplayedText((prev)=> prev + text[index]);
                setIndex((prev)=> prev + 1);
            } else{
                clearInterval(interval);
                if(loop){
                    setTimeout(()=>{
                        setDisplayedText('');
                        setIndex(0);
                    }, 1000);
                }
            }
        }, speed);

        return()=> clearInterval(interval);
    }, [index, text, speed, loop]);

    return (
        <p>
            {dispayedText}
            <span className="cursor">|</span>
            <style jsx>
                {
                    `
                    .cursor{
                    animation: blink 1s step-end infinite;
                    }
                    @keyframes blink{
                    from, to{
                        opacity:0;
                        }
                    50%{
                        opacity:1;
                        }
                    }
                    `
                }
            </style>
        </p>
    );
};

export default TypingText;