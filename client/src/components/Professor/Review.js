import React from 'react'
import './Review.css'

const Rating = ({review}) => {
    return (
        <div className="review">
            <div className="ratings">
                <div className="label">Quality</div>
                <div className="" style={review.quality > 3.5 ? {background: '#1aa260'} : review.quality > 2 ? {background: '#FBBC05'} : {background: '#EA4335'}}>{review.quality.toFixed(1)}</div>
                <div className="label">Difficulty</div>
                <div className="" style={review.difficulty > 3.5 ? {background: '#1aa260'} : review.difficulty > 2 ? {background: '#FBBC05'} : {background: '#EA4335'}}>{review.difficulty.toFixed(1)}</div>
            </div>
            <div className="message">{review.message}</div>
        </div>
    )
}

export default Rating;