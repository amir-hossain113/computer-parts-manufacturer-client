import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if(user){
            fetch(`http://localhost:5000/order?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data))
        }
    }, [user])


    return (
        <div>
            <h2></h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>address</th>
                            <th>phone</th>
                            <th>Parts Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Order Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;