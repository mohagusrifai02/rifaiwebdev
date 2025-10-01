import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons"

export default function Contact(){

    return(
        <>
            <div className="container-contact">
                <div className="cards">
                    <div className="card maps">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15844.744614995263!2d109.1908572177179!3d-6.868283892905547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fc7e0e690e10d%3A0xb29d010cf5c55d3c!2sKramat%2C%20Tegal%20Regency%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1758703633274!5m2!1sen!2sid" 
                            className="lokasi"
                            allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                    <div className="card deskripsi">
                        <div className="title">
                            <h2>Contact Me</h2>
                        </div>
                        <ul>
                            <li>Informasi kontak saya</li>
                            <li>
                                <FontAwesomeIcon icon={faWhatsapp} />
                                <span>Whatsapp</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faFacebook}/>
                                <span>Facebook</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faYoutube}/>
                                <span>Youtube</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <footer>
                    <span>Copyright 2025, moh agus rifai allright reserved</span>
                </footer>
            </div>
        </>
    )
}