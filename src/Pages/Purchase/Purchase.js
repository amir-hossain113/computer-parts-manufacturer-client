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
            if(data){
                toast.success('Your order added successfully');
            }
            else{
                toast.error('Sorry your order failed to add!!')
            }
        })
       
    }
    




    return (
        <div className='mb-10'>
            <Link to={`/viewDetail/${product._id}`}><button className='btn btn-warning mt-5 ml-5'>View Details</button></Link>
            <h2 className='text-center text-2xl mt-5'>Purchase Your Product</h2>
           
           <div className='w-full lg:px-40 px-10 py-20 mx-auto'>
                <form onSubmit={handleOrder} className='grid grid-cols-1 gap-3 justify-items-center mt-2 border-2 px-10 py-10 lg:p-20 border-orange-700'>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input 
                                value={user?.displayName} 
                                name="name"
                                disabled
                                className="input input-bordered w-full" />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input 
                                type="email" 
                                value={user?.email} 
                                disabled
                                className="input input-bordered w-full"  />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input 
                                type="text" 
                                name="address"
                                placeholder='Your Address' 
                                className="input input-bordered w-full" required />
                           
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input 
                                type="text" 
                                name="phone"
                                placeholder='Your Phone'
                                className="input input-bordered w-full" required/>
                           
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Parts Name</span>
                            </label>
                            <input 
                                type="text" 
                                value={product.name} 
                                disabled
                                className="input input-bordered w-full"  />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea 
                                type="text" 
                                value={product.description} 
                                disabled
                                className="input input-bordered w-full"  />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input 
                                type="text" 
                                value={product.price} 
                                disabled
                                className="input input-bordered w-full" />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Minimum Order Quantity</span>
                            </label>
                            <input 
                                type="text" 
                                value={product.minimumQuantity} 
                                disabled
                                className="input input-bordered w-full"  />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input 
                                type="text" 
                                value={product.availableQuantity} 
                                disabled
                                className="input input-bordered w-full"  />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Total Order Quantity</span>
                            </label>
                            <input
                            type="number"
                            name="quantity"
                            id="quantity"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            className="input input-bordered w-full"
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