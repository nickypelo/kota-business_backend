import React from "react";
import Nav from "./Nav.jsx";
import NavSmall from "./Nav-small.jsx";
import Cart from "./Cart.jsx";
import { useState } from 'react';
import { Link } from "react-router-dom";
import logo from '/kota-logo.png';
import { FaShoppingCart, FaAsterisk, FaUser } from "react-icons/fa";
import '../styles/components.css';
import '../styles/media.css';

const Header = ({order}) =>{
    
    const [showCart, setShowCart] = useState(true);
    const [showNav, setShowNav] = useState(true);
    const [showUser, setShowUser] = useState(false)
   
    const cartClick = () => {
        console.log(`Cart Activated`);
        setShowCart(!showCart);   
    }

    const navMenuClick = () =>{
        console.log(`Slide Activated`);
        setShowNav(!showNav); 
    }

    const userClick = () =>{

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
                {showCart ?
                <div className="cart-and-noti">
                    {order.length > 0 ? <FaAsterisk className="noti-icon"/> : undefined}
                    <FaShoppingCart onClick={cartClick} className= "cart-icon" />
                </div>
                : <Cart
                    close={cartClick} 
                    orders={order}                    
                />}
                <Link to='/profile'><FaUser className="user-icon " /></Link> 
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
            </section>
            
        </header>            

    )
}

export default Header;