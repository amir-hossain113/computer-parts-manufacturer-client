import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const ViewDetail = () => {
    const {productId} = useParams();
    const [product, setProduct] = useState({});
    const [user] = useAuthState(auth);

    useEffect(() => {
        fetch(`http://localhost:5000/product/${productId}`)
        .then(res => res.json())
        .then(data => {
            setProduct(data)
        })
    }, [productId]);
    return (
        <div>
            <h2 className='text-center text-2xl mt-5'>Details of your Product</h2>
            <div className='px-20'>
                <div>
                    <h2 className='text-xl'>Name: <span className='text-xl text-emerald-600'>{user?.displayName}</span></h2>
                    <p>Email: <span className='text- text-amber-500'>{user?.email}</span></p>
                </div>
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
                        <Link to={`/product/${product._id}`}><button className='btn btn-success mt-5'>Back to Purchase</button></Link>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default ViewDetail;