import React from "react";
import '../styles/pages.css';


const About = () =>{
    return (
        <section className="about">
            <article className="info">
                <h3>About Us</h3>
                <p>
                    The idea was derived from noticing that the varsity surroundings did not share the delicacy known throughout Gauteng, especially Pretoria and Johannesburg, as Kota aka sphatlo aka Skhambane. This told me that yeah, business will be booming like oppenheimer in the 40s.
                </p>
                <figure>
                    <img src="/levi.webp" alt="CEO" width='350px' height='350' />
                    <figcaption><em>The smiling founder</em> ~ Levi</figcaption>
                </figure>
            </article>
        </section>
    )
}

export default About;