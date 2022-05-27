import React from 'react';
import starIcon from '../../assets/images/icon/icons8-star.gif';

const Review = ({review}) => {
    const {rating, description} = review;

    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Rating: {rating}<img src={starIcon} alt="" className='w-4 h-4' /> </h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;