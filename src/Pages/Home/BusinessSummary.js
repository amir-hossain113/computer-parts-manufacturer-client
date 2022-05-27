import React from 'react';
import customer from '../../assets/images/icon/customer.png';
import revenue from '../../assets/images/icon/revenue.png';
import reviews from '../../assets/images/icon/review.png';
import parts from '../../assets/images/icon/parts.png';


const BusinessSummary = () => {
    return (
        <div className='my-20 mt-32'>
            <div>
                <h2 className='text-center text-5xl text-sky-300 font-bold mb-20'>MILLIONS BUSINESS TRUST US <br /> <span className='text-xl text-center text-black'>TRY TO UNDERSTAND USER EXPECTATION</span></h2>
            </div>
            <div className='lg:flex justify-center items-center gap-16 mt-20'>
                <div class="card lg:w-52 bg-base-100">
                    <figure>
                        <img className="" src={customer} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-4xl font-bold">100+</h2>
                        <p className="text-orange-400">Customer</p>
                    </div>
                </div>

                <div class="card lg:w-52 bg-base-100">
                    <figure>
                        <img className="" src={revenue} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-4xl font-bold">120M+</h2>
                        <p className="text-orange-400">Annual Revenue</p>
                    </div>
                </div>

                <div class="card lg:w-52 bg-base-100">
                    <figure>
                        <img className="" src={reviews} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-4xl font-bold">33K+</h2>
                        <p className="text-orange-400">Reviews</p>
                    </div>
                </div>

                <div class="card lg:w-52 bg-base-100">
                    <figure>
                        <img className="" src={parts} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-4xl font-bold">50+</h2>
                        <p className="text-orange-400">Parts</p>
                    </div>
                </div>
            </div>

            <div className='lg:mx-48'>
                <div class="w-full bg-base-100 shadow-xl">
                    <div class= "flex justify-center items-center px-10 py-10">
                        <div className=''>
                            <h2 class="card-title text-2xl text-fuchsia-400">Have any question about us or get a product request?</h2>
                            <p className='text-xl'>Don't hesitate, feel free to contact us</p>
                        </div>
                        <div class="card-actions justify-end w-full">
                            <button class="btn btn-success">Request for quote</button>
                            <button class="btn btn-error">Contact us</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;