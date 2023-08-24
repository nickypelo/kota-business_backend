import React from "react";
import Reviews from '../components/Reviews.jsx';
import Quote from '../components/Quote.jsx';
import { FaRunning } from "react-icons/fa";
import '../styles/pages.css';
import '../styles/media.css';

const Content = () => {
    return(
        <main className="content">
            <figure className='poster'>
                <section className="poster-text">
                    <p>BRINGING SPHATLO EKAPA </p> 
                    <p> It's just worth it  ..<FaRunning/></p>
                </section>
            </figure>
            <section className="special">
                <section className="text">
                    <p>Check out our page every Tuesday and Thursday to find out what new deals are waiting for you!</p>
                    <p>Don't miss out. </p>
                    <p className="hashtag">#forgetthedietandeatakota</p>
                </section>
                <figure>
                    <img src="/discount_2.jpg" alt="" width="350"/>
                </figure>
            </section>
            <h3>Word of Mouth</h3>
            <Reviews />
            <Quote />
        </main>
    )
}

export default Content;