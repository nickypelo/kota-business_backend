import React from "react";
import Nav from "./Nav.jsx";
import NavSmall from "./Nav-small.jsx";
import Cart from "./Cart.jsx";
import { useState } from 'react';
import { Link } from "react-router-dom";
import logo from '/kotalicious_cpt-20220806-0006.jpg';
import { FaShoppingCart, FaYinYang, FaAsterisk} from "react-icons/fa";
import '../styles/components.css';
import '../styles/media.css';

const Header = ({order}) =>{
    
    const [showCart, setShowCart] = useState(true);
    const [showNav, setShowNav] = useState(true);
   
    const cartClick = () => {
        console.log(`Cart Activated`);
        setShowCart(!showCart);   
    }

    const navMenuClick = () =>{
        console.log(`Slide Activated`);
        setShowNav(!showNav); 
    }

    return(
        <header className="header">
            <figure className="logo-placeholder" >
                <Link to='/'><img src={logo} className="logo-image"
                alt="company_logo"
                /></Link>
            </figure>
            <Nav />
            <section className="header-icons">
                {showNav ?
                <div onClick={navMenuClick} className="cart-icon menu-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                : <NavSmall 
                    close={navMenuClick}
                />
                }
                {showCart ?
                <div className="cart-and-noti">
                    {order.length > 0 ? <FaAsterisk className="noti-icon"/> : undefined}
                    <FaShoppingCart onClick={cartClick} className= "cart-icon" />
                </div>
                : <Cart
                    close={cartClick} 
                    orders={order}                    
                />}
            </section>
            
        </header>            

    )
}

export default Header;