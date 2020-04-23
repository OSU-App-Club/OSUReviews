import React from 'react';
import './professor.css';
import Review from './Review';

const Professor = (props) => {

    const reviews = [
        {
            "id": 1,
            "message": "This professor is pretty good",
            "quality": 5.0,
            "difficulty": 3.4,
            "date": "04/20/2020",
            "likes": 0
        },
        {
            "id": 2,
            "message": "He made his class way too hard",
            "quality": 2.0,
            "difficulty": 5.0,
            "date": "04/10/2020",
            "likes": 2
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
                        <Review key={review.id} review={review} />
                    )
                })
            }
            </div>
        </div>
    )
}

export default Professor;