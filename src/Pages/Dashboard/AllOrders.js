import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    console.log(allOrders);
    useEffect(() => {
        fetch('http://localhost:5000/order/allOrder', {
            method: 'GET',
            headers: {
                'content-type' : 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => setAllOrders(data))
    }, [])

    return (
        <div>
            <h2 className='text-xl text-teal-900 mt-2'>All Orders: {allOrders?.length}</h2>
            <div className="overflow-x-auto mt-4">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>address</th>
                            <th>phone</th>
                            <th>Parts Name</th>
                            <th>Price</th>
                            <th>Order Quantity</th>
                            <th colSpan={2}>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allOrders?.map((allOrder, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{allOrder.userName}</td>
                                <td>{allOrder.address}</td>
                                <td>{allOrder.phone}</td>
                                <td>{allOrder.productName}</td>
                                <td>{allOrder.price}</td>
                                <td>{allOrder.totalOrderQuantity}</td>
                                <td>
                                    {/* {(!allOrder.paid )&& <Link><button className="btn btn-xs btn-success">Pay</button></Link>} */}
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllOrders;