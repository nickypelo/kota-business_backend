import React from "react";
import '../styles/media.css';
import '../styles/components.css';

const Reviews = () => {
    const pics = [
        {
            id: 1,
            picture: "/review_1.jpg",
            caption: 'client 1'
        },
        {
            id: 2,
            picture: "/review_2.jpg",
            caption: 'client 2'
        },
        {
            id: 3,
            picture: "/review_3.jpg",
            caption: 'client 3'
        },
        {
            id: 4,
            picture: "/review_5.jpg",
            caption: 'client 4'
        }
    ]
    return (
        <section className="reviews">
            {pics.map((review)=>(
                <figure className="feedback" key={review.id}>
                    <img src={review.picture} alt="review" />
                    <figcaption>{review.caption}</figcaption>
                </figure>
               
            ))}
        </section>
    )
}

export default Reviews;