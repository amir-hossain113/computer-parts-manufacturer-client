import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';


const Purchase = () => {
    const {productId} = useParams();
    const [product, setProduct] = useState({});
    const [user] = useAuthState(auth);
    const [error, setError] = useState(false);
    const [quantity, setQuantity] = useState(product?.quantity)
    

    useEffect(() => {
        fetch(`http://localhost:5000/product/${productId}`)
        .then(res => res.json())
        .then(data => {
            setProduct(data)
        })
    }, [productId]);

    useEffect(() => {
        if (
          Number(quantity) < product.minimumQuantity ||
          Number(quantity) > product.availableQuantity
        ) {
          setError(true);
        } else {
          setError(false);
        }
      }, [quantity, product?.minimumQuantity, product?.availableQuantity]);


    const handleOrder = event => {
        event.preventDefault();

        const order = {
            userName: user.displayName,
            email: user.email,
            address: event.target.address.value,
            phone: event.target.phone.value,
            productName: product.name,
            description: product.description,
            price: Number((product.price)* Number(quantity)),
            totalOrderQuantity: Number(event.target.quantity.value)
        }
        

        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            if(data.success){
                toast('Your order is added successfully');
            }
        })
       
    }
    




    return (
        <div className='mb-10'>
            <Link to={`/viewDetail/${product._id}`}><button className='btn btn-warning mt-5 ml-5'>View Details</button></Link>
            <h2 className='text-center text-2xl mt-5'>Purchase Your Product</h2>
            {/* <div className='px-20'>
                <div className='lg:flex border-2 border-orange-200 mt-10 justify-center items-center px-10 mb-10'>
                    <div className=''>
                        <img className='w-screen' src={product.img} alt="" />
                    </div>
                    <div className='lg:px-10 py-10'>
                        <h2 className='text-accent text-xl'><b className='text-orange-700'>Name: </b>{product.name}</h2><br />
                        <p><b className='text-orange-700'>Description: </b>{product.description}</p><br />
                        <p><b className='text-lime-600'>Price: </b>${product.price} (per unit)</p>
                        <p><b className='text-cyan-700'>Minimum Order Qty: </b>{product.minimumQuantity}</p>
                        <p><b className='text-cyan-700'>Available Qty: </b>{product.availableQuantity}</p>
                    </div>
                </div>
            </div> */}

           <div className='w-full lg:px-40 px-10 py-20 mx-auto'>
                <form onSubmit={handleOrder} className='grid grid-cols-1 gap-3 justify-items-center mt-2 border-2 px-10 py-10 lg:p-20 border-orange-700'>

                        <div class="form-control w-full">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input 
                                value={user?.displayName} 
                                name="name"
                                disabled
                                class="input input-bordered w-full" />
                        </div>

                        <div class="form-control w-full">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input 
                                type="email" 
                                value={user?.email} 
                                disabled
                                class="input input-bordered w-full"  />
                        </div>

                        <div class="form-control w-full">
                            <label class="label">
                                <span class="label-text">Address</span>
                            </label>
                            <input 
                                type="text" 
                                name="address"
                                placeholder='Your Address' 
                                class="input input-bordered w-full" required />
                           
                        </div>

                        <div class="form-control w-full">
                            <label class="label">
                                <span class="label-text">Phone</span>
                            </label>
                            <input 
                                type="text" 
                                name="phone"
                                placeholder='Your Phone'
                                class="input input-bordered w-full" required/>
                           
                        </div>

                        <div class="form-control w-full">
                            <label class="label">
                                <span class="label-text">Parts Name</span>
                            </label>
                            <input 
                                type="text" 
                                value={product.name} 
                                disabled
                                class="input input-bordered w-full"  />
                        </div>

                        <div class="form-control w-full">
                            <label class="label">
                                <span class="label-text">Description</span>
                            </label>
                            <textarea 
                                type="text" 
                                value={product.description} 
                                disabled
                                class="input input-bordered w-full"  />
                        </div>

                        <div class="form-control w-full">
                            <label class="label">
                                <span class="label-text">Price</span>
                            </label>
                            <input 
                                type="text" 
                                value={product.price} 
                                disabled
                                class="input input-bordered w-full" />
                        </div>

                        <div class="form-control w-full">
                            <label class="label">
                                <span class="label-text">Minimum Order Quantity</span>
                            </label>
                            <input 
                                type="text" 
                                value={product.minimumQuantity} 
                                disabled
                                class="input input-bordered w-full"  />
                        </div>

                        <div class="form-control w-full">
                            <label class="label">
                                <span class="label-text">Available Quantity</span>
                            </label>
                            <input 
                                type="text" 
                                value={product.availableQuantity} 
                                disabled
                                class="input input-bordered w-full"  />
                        </div>

                        <div class="form-control w-full">
                            <label class="label">
                                <span class="label-text">Total Order Quantity</span>
                            </label>
                            <input
                            type="number"
                            name="quantity"
                            id="quantity"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            class="input input-bordered w-full"
                            required
                            />
                        </div>

                        {error && <p className='text-red-500'>Sorry you can't order less than {product.minimumQuantity} units & more than {product.availableQuantity} units</p>}

                        <input
                            className="btn btn-success w-full mx-w-xs"
                            disabled={error}
                            type="submit"
                            value="Add Order"
                        />
                            
                </form>
            </div>

        </div>
    );
};

export default Purchase;