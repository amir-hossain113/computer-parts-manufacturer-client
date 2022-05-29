import React from 'react';
import starIcon from '../../assets/images/icon/icons8-star.gif';

const Review = ({review}) => {
    const {userName, rating, description} = review;

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className='text-xl text-rose-700'>{userName}</h2>
                    <h2 className="card-title text-green-700">Rating: <span className='text text-amber-700'>{rating}</span><img src={starIcon} alt="" className='w-4 h-4' /> </h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;