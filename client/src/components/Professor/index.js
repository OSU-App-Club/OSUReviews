import React from 'react';
import './professor.css';

const Professor = (props) => {

    const reviews = [
        {
            "message": "This professor is pretty good",
            "rating": 5,
            "difficulty": 5,
            "date": "04/20/2020"
        },
        {
            "message": "He made his class way too hard",
            "rating": 2,
            "difficulty": 5,
            "date": "04/10/2020"
        }
    ]


    return (
        <div>
            <h2>Professor: John Travolta</h2>
            <p><span class="bold">Rating:</span> 3.5 / 5</p>
            <p><span class="bold">Difficulty:</span> 5 / 5</p>
            <p>Based on 2 reviews</p>
            <p><span class="bold">Reviews:</span></p>
            <div class="reviews">
            {
                reviews.map(review => {
                    return (
                        <div class="review">
                            <p>{review.message}</p>
                            <p><span class="bold">Rating:</span> {review.rating} / 5</p>
                            <p><span class="bold">Difficulty:</span> {review.difficulty} / 5</p>
                            <span class="review-date"> 
                                <p>{review.date}</p>
                            </span>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Professor;