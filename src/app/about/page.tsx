import Image from "next/image"
import { motion } from "framer-motion"

export default function About(){

    return(
        <>
            <div className="container-about">
                <div className="cards">
                    <motion.div
                    initial={{ opacity:0, y:50 }}
                    whileInView={{ opacity:1, y:0 }}
                    transition={{ duration:0.6 }}
                    viewport={{ amount:0.4, once:false }}
                    className="card gambar">
                        <Image 
                            src='/aguspemuda.png'
                            alt="agus"
                            className="img"
                            width={100}
                            height={100}
                        />
                        <div className="overlay"></div>
                    </motion.div>
                    <motion.div
                    initial= {{opacity:0, scale:0.8}}
                    whileInView = {{ opacity:1, scale:1 }}
                    transition = {{ duration:0.6}}
                    viewport= {{ amount:0.4, once:false}}
                    className="card deskripsi">
                        <div className="title">
                            <h2>About Me</h2>
                        </div>
                        <ul>
                            <li>Saya membuka berbagai jasa yang berkaitan dengan software, yaitu:</li>
                            <li>1. Pembuatan Landing Page dan WebApp</li>
                            <li>2. Penjualan berbagai jenis WebApp</li>
                            <li>3. Kelas belajar web design dan Pemrograman</li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </>
    )
}