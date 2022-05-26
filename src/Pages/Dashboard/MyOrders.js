import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const [user] = useAuthState(auth);
    const [email, setEmail] = useState(user?.email);

    useEffect(() => {
        fetch(`http://localhost:5000/order/myOrder/${email}`, {
            method: 'GET',
            headers: {
                'content-type' : 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [user])


    return (
        <div>
            <h2 className='text-xl text-teal-900 mt-2'>My Orders: {myOrders.length}</h2>
            <div class="overflow-x-auto mt-4">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>address</th>
                            <th>phone</th>
                            <th>Parts Name</th>
                            <th>Price</th>
                            <th>Order Quantity</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders.map((myOrder, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{myOrder.userName}</td>
                                <td>{myOrder.email}</td>
                                <td>{myOrder.address}</td>
                                <td>{myOrder.phone}</td>
                                <td>{myOrder.productName}</td>
                                <td>{myOrder.price}</td>
                                <td>{myOrder.totalOrderQuantity}</td>
                                <td>{myOrder.description}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;