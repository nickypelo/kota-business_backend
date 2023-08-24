import React from "react";
import '../styles/components.css';
import '../styles/media.css';

const Quote = () =>{
    return(
        <article className="ceo-quote">
            <p><q>Succumb to peer pressure and get you something for those taste buds!</q>
            </p>
            <figure>
                <img src="/founder.jpg" alt="ceo-picture" 
                width="350" height="440"
                />
                <figcaption>Levi the Man</figcaption>
            </figure>
        </article>
    )
}

export default Quote;