import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/review', {
            method: 'GET',
            headers: {
                'content-type' : 'application/json',
                // 'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => setReviews(data))
    })

    return (
        <div>
            <h2 className='text-center text-3xl text-bold text-amber-500'>This is our user reviews</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-10 ml-14 mt-5 mb-10'>
            {
                reviews.map(review => <Review key={review._id} review={review}></Review>)
            }
            </div>
        </div>
    );
};

export default Reviews;