import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Purchase = () => {
    const {productId} = useParams();
    const [product, setProduct] = useState({});
    const { register, handleSubmit } = useForm();
    const [user, loading, error] = useAuthState(auth);
    

    useEffect(() => {
        fetch(`http://localhost:5000/product/${productId}`)
        .then(res => res.json())
        .then(data => {
            setProduct(data)
        })
    }, [productId])

    const onSubmit = data => console.log(data);

    return (
        <div className='mb-10'>
            <h2 className='text-center text-2xl mt-5'>Purchase Your Product</h2>
            <div className='px-20'>
                <div className='lg:flex border-2 border-orange-200 mt-10 justify-center items-center px-10 mb-10'>
                    <div className=''>
                        <img className='w-screen' src={product.img} alt="" />
                    </div>
                    <div className='lg:px-10 py-10'>
                        <h2 className='text-accent text-xl'><b className='text-orange-700'>Name: </b>{product.name}</h2><br />
                        <p><b className='text-orange-700'>Description: </b>{product.description}</p><br />
                        <p><b className='text-lime-600'>Price: </b>${product.price}</p>
                        <p><b className='text-cyan-700'>Minimum Order Qty: </b>{product.minimumQuantity}</p>
                        <p><b className='text-cyan-700'>Available Qty: </b>{product.availableQuantity}</p>
                    </div>
                </div>
            </div>

           <div className='w-full modal-box mx-auto bg-amber-100'>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div class="form-control w-full mb-3">
                        {/* <label class="label">
                            <span class="label-text">Name</span>
                        </label> */}
                        <input 
                            type="text" 
                            value={user?.displayName}
                            disabled 
                            class="input input-bordered w-full" 
                            {...register("userName")} />
                    </div>

                    <div class="form-control w-full mb-3">
                        <input 
                            type="email" 
                            value={user?.email}
                            disabled 
                            class="input input-bordered w-full" 
                            {...register("email")} />
                    </div>

                    <div class="form-control w-full mb-3">
                        <input 
                            type="text" 
                            placeholder="Enter Your Address" 
                            class="input input-bordered w-full" 
                            {...register("address")} />
                    </div>

                    <div class="form-control w-full mb-3">
                        <input 
                            type="text" 
                            placeholder="Enter Your Phone Number" 
                            class="input input-bordered w-full" 
                            {...register("phone")} />
                    </div>

                    <div class="form-control w-full mb-3">
                        <input 
                            type="text" 
                            value={product.name}
                            disabled
                            class="input input-bordered w-full" 
                            {...register("name")} />
                    </div>

                    <div class="form-control w-full mb-3">
                        <textarea 
                            type="text" 
                            value={product.description}
                            disabled
                            class="input input-bordered w-full" 
                            {...register("description")} />
                    </div> 

                    <div class="form-control w-full mb-3">
                        <input 
                            type="number" 
                            value={product.price}
                            disabled
                            class="input input-bordered w-full" 
                            {...register("price")} />
                    </div>

                    <div class="form-control w-full mb-3">
                        <input 
                            type="number" 
                            value={product.minimumQuantity}
                            disabled
                            class="input input-bordered w-full" 
                            {...register("minimumQuantity")} />
                    </div>

                    <div class="form-control w-full mb-3">
                        <input 
                            type="number" 
                            value={product.availableQuantity}
                            disabled
                            class="input input-bordered w-full" 
                            {...register("availableQuantity")} />
                    </div> 

                    <div class="form-control w-full mb-3">
                        <input 
                            type="number" 
                            placeholder="Enter the number of quantity" 
                            class="input input-bordered w-full" 
                            {...register("totalQuantity")} />
                    </div>

                    <input className='btn btn-success w-2/12  mx-w-xs' type="submit" value="Submit" />
                </form>
           </div>

        </div>
    );
};

export default Purchase;