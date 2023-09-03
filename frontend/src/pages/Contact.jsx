import React, { useContext } from "react";
import { Link } from "react-router-dom";
import '../styles/media.css';

const Contact = () =>{

    return(
        <section className="contact">
            <article className="social-contact">
            <h2>Any Questions?</h2>
            <p>Tap any link below to get in touch with us</p>
            <article className="sort-contact">
                <Link to="https://www.instagram.com/kotalicious_cpt/" target="_blank">Instagram</Link>
                <Link to="tel:+27746272912" target="-blank">Whatsapp</Link>
            </article>
            </article>
        </section>
    )
}

export default Contact;