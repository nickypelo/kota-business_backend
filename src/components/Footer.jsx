import React from "react";
import {Link} from "react-router-dom";
// import { HashLink } from 'react-router-hash-link';
import { FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";
import '../styles/components.css';
import '../styles/media.css';

const Footer = () => {

    const date = new Date()

    return(
        <footer className="footer">
            <section className="company-address">
                <h3>Find us!</h3>
                <address>
                    <p>2 Meadow Road</p>
                    <p>Rosebank</p>
                    <p>4392</p>
                </address>
                <Link to="https://www.instagram.com/kotalicious_cpt/" target="_blank"><FaInstagram className="instagram-icon social"/></Link>
                <Link to="tel:+27746272912" target="-blank"><FaWhatsapp className="whatsapp-icon social"/></Link>
                <Link to="https://tiktok.com" target="_blank"><FaTiktok className="tiktok-icon social"/></Link>
            </section>
            <section className="company-section">
                <figure>
                    <img src="/kotalicious_cpt-20220806-0006.jpg" alt="logo"
                        width="200"
                    />
                </figure>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                </ul>
                <p>Copyright &copy; {date.getFullYear()}</p>
            </section>
        </footer>
    )
}

export default Footer;
