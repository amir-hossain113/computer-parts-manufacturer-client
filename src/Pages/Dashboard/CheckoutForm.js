import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({order}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('')

    const {_id, price, email, userName} = order;

    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json',
                'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({price})
        })
        .then(res => res.json())
        .then(data => {
            if(data?.clientSecret){
                setClientSecret(data.clientSecret);
            }
        })
    }, [price])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(!stripe || !elements){
            return;
        }

        const card = elements.getElement(CardElement);

        if(card === null){
            return
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        setCardError(error?.message || '');
        setSuccess('');
        setProcessing(true);

        const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: userName,
                  email: email
                },
              },
            },
          );

          if(intentError){
              setCardError(intentError?.message);
              setProcessing(false);
          }
          else{
              setCardError('')
              setTransactionId(paymentIntent.id);
            //   console.log(paymentIntent);
              setSuccess('Congrats!! your payment is completed.');

              //store payment on db
              const payment = {
                  myOrder: _id,
                  transactionId: paymentIntent.id
              }

              fetch(`http://localhost:5000/order/${_id}`, {
                  method: 'PATCH',
                  headers: {
                      'content-type' : 'application/json',
                      'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
                  },
                  body: JSON.stringify(payment)
              })
              .then(res => res.json())
              .then(data => {
                  setProcessing(false);
                  console.log(data);
              })
          }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                    <CardElement
                        options={{
                        style: {
                            base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                            },
                            invalid: {
                            color: '#9e2146',
                            },
                        },
                        }}
                    />
                    <button className='btn btn-error btn-sm mt-4' type="submit" disabled={!stripe || !clientSecret}>
                        Pay
                    </button>
            </form>
            {
                cardError && <p className='text-red-600'>{cardError}</p>
            }
            {
                success && <div className='text- text-cyan-700'>
                    <p>{success}</p>
                    <p>Your Transaction Id: <span className='text-purple-800 font-bold'>{transactionId}</span></p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;