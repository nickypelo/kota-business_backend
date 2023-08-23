import React from "react";
import { Link } from "react-router-dom";
import {FaWindowClose} from 'react-icons/fa';
import '../styles/media.css';

const NavSmall = ({close}) => {
    return(
        <nav className="nav-small">
            <section className="nav-small-header">
                <figure></figure>
                <FaWindowClose classname='close-sidebar' onClick={close} />
            </section>
            <ul>
                <li>
                    <Link to ='/' onClick={close}>Home</Link>
                </li>
                <li>
                    <Link to ='/menu' onClick={close}>Menu</Link>
                </li>
                <li>
                    <Link to = '/contact' onClick={close}>Contact</Link>
                </li>
                <li>
                    <Link to = '/about' onClick={close}>About</Link>
                </li>
            </ul>
            <p>Copyright &copy;</p>
        </nav>
    )
}

export default NavSmall;