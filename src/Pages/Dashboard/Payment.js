import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51K2LfNABJCIzge0kqR6WBBIQLD77v0o5mbF1m7fzjuPJYv1ChodsOzuM5Afljx2aHYYRyQaPBYMIeNGQbFQu8DTq00N6pkdp63');

const Payment = () => {
    const {id} = useParams();
    const url = `http://localhost:5000/order/${id}`;

    const {data: order, isLoading} = useQuery(['myOrder', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12 bg-sky-200">
                    <div class="card-body">
                        <p className='text-warning font-bold'>Hello, {order.userName}</p>
                        <h2 class="card-title">Please Pay for {order.productName}</h2>
                        <p className='text-orange-600'>Please pay: ${order.price}</p>
                    </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body bg-purple-100">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;