import React from 'react';
import { toast } from 'react-toastify';

const AddReview = () => {

    const handleReview = event => {
        event.preventDefault();

        const review = {
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
                <div class="form-control w-full">
                    <label class="label">
                        <span class="label-text">Rating (1-5)</span>
                    </label>
                    <input
                        type="number"
                        name="rating"
                        min="1"
                        max="5"
                        placeholder="add rating"
                        class="input input-bordered w-full"
                        required
                    />
                </div>
               
                <div class="form-control w-full">
                    <label class="label">
                        <span class="label-text">Description</span>
                    </label>
                    <textarea
                        type="text"
                        name="description"
                        placeholder="add description"
                        class="input input-bordered w-full"
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