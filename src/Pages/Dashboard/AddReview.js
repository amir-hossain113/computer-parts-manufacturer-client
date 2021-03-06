import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {

    const [user] = useAuthState(auth);

    const handleReview = event => {
        event.preventDefault();

        const review = {
            userName: user.displayName,
            rating: Number(event.target.rating.value),
            description: event.target.description.value 
        }
    
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                toast.success('Your review added successfully');
            }
            else{
                toast.error('Sorry your review failed to add!!');
            }
        })
    }

    return (
        <div className="px-10 py-10">
            <form onSubmit={handleReview} className="grid grid-cols-1 gap-3 justify-items-center mt-2 border-2 px-10 py-5 lg:p-20 border-orange-700">
                <h2 className="text-center text-2xl mb-4">Add Review</h2>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                    value={user.displayName}
                        className="input input-bordered w-full"
                        disabled
                    />
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Rating (1-5)</span>
                    </label>
                    <input
                        type="number"
                        name="rating"
                        min="1"
                        max="5"
                        placeholder="add rating"
                        className="input input-bordered w-full"
                        required
                    />
                </div>
               
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea
                        type="text"
                        name="description"
                        placeholder="add description"
                        className="input input-bordered w-full"
                        required
                    />
                </div>
                <input
                    className="btn btn-success w-full mx-w-xs"
                    type="submit"
                    value="Submit Review"
                />
            </form>
        </div>
    );
};

export default AddReview;