"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faNodeJs, faReact, faJs } from "@fortawesome/free-brands-svg-icons"
import { faDatabase } from "@fortawesome/free-solid-svg-icons/faDatabase"
import { faMobileScreen, faWebAwesome, faGauge } from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"

export default function ProjectsPage(){
    return(
        <>
            <div className="container-projects">
                <ul className="cards-ongoing">
                    <motion.li
                    initial= {{opacity:0, scale:0.8}}
                    whileInView = {{ opacity:1, scale:1 }}
                    transition = {{ duration:0.6}}
                    viewport= {{ amount:0.4, once:false}}
                    >
                        <h3>2</h3>
                        <p>Diterima klien</p>
                        <span></span>
                    </motion.li>
                    <motion.li
                    initial= {{opacity:0, scale:0.8}}
                    whileInView = {{ opacity:1, scale:1 }}
                    transition = {{ duration:0.6}}
                    viewport= {{ amount:0.4, once:false}}
                    >
                        <h3>1</h3>
                        <p>Project on proses</p>
                        <span></span>
                    </motion.li>
                    <motion.li
                    initial= {{opacity:0, scale:0.8}}
                    whileInView = {{ opacity:1, scale:1 }}
                    transition = {{ duration:0.6}}
                    viewport= {{ amount:0.4, once:false}}
                    >
                        <h3>1</h3>
                        <p>Kepuasan pelanggan</p>
                        <span></span>
                    </motion.li>
                </ul>
                <ul className="cards-skill">
                    <motion.li
                    initial={{ opacity:0, x:-50 }}
                    whileInView={{ opacity:1, x:0 }}
                    transition={{ duration:0.6 }}
                    viewport={{ amount:0.4, once:false }}
                    >
                        <span>My Skill</span>
                        <h2>Mengapa anda harus hire saya untuk proyek anda?</h2>
                        <p>Karena saya berpengalaman dalam membuat landing page, web app, dan mobile app</p>
                        <div className="ikon">
                            <p style={{marginBottom:'5px'}}>Berpengalaman di :</p>
                            <FontAwesomeIcon icon={faJs} style={{color:'orange'}}/>
                            <FontAwesomeIcon icon={faNodeJs} style={{color:'green'}} />
                            <FontAwesomeIcon icon={faReact} style={{color:'aqua'}}/>
                            <FontAwesomeIcon icon={faDatabase} style={{color:'darkgreen'}}/>
                        </div>
                        <button>
                            <p>Contact Me</p>
                            <a href="https://wa.me/6289516589293?text=Halo%20saya%20tertarik%20dengan%20produk%20Anda" target="_blank">Yuk Chatan</a>
                        </button>
                    </motion.li>
                    <li>
                        <motion.div 
                        initial={{ opacity:0, x:-50 }}
                        whileInView={{ opacity:1, x:0 }}
                        transition={{ duration:0.6 }}
                        viewport={{ amount:0.4, once:false }}
                        className="card-web">
                            <div className="web1">
                                <h3 style={{color:'rgb(13, 168, 13)'}}><FontAwesomeIcon icon={faWebAwesome}/> &nbsp; Web Desain</h3>
                                <p>landing page untuk mempromisikan sebuah instansi atau umkm atau disebut brosur online</p>
                            </div>
                            <div className="web2">
                                <h3 style={{color:'rgb(13, 168, 13)'}}><FontAwesomeIcon icon={faGauge}/>&nbsp; Web aplikasi</h3>
                                <p>Sistem administrasi berbasis web, agar bisa dikelola secara online</p>
                            </div>
                        </motion.div>
                        <div className="card-mobile">
                            <motion.div 
                            initial={{ opacity:0, x:-50 }}
                            whileInView={{ opacity:1, x:0 }}
                            transition={{ duration:0.6 }}
                            viewport={{ amount:0.4, once:false }}
                            className="web3">
                                <h3 style={{color:'rgb(13, 168, 13)'}}><FontAwesomeIcon icon={faMobileScreen}/>&nbsp;Mobile app</h3>
                                <p>Sistem administrasi berbasis hybrid, bisa secara offline maupun online yang khusus untk perangkat mobile</p>
                            </motion.div>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}