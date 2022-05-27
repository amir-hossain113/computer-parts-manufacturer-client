import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
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

    const handleDelete = id => {
      const proceed = window.confirm('Are you sure to delete this order?');
      if(proceed){
          const url = `http://localhost:5000/order/myOrder/${id}`
          fetch(url, {
              method: 'DELETE'
          })
          .then(res => res.json())
          .then(data => {
              console.log(data);
              const remaining = myOrders.filter(myOrder => myOrder._id !== id);
              setMyOrders(remaining);
              alert('Item deleted successfully');
          })
        }
    }

    const handlePayment = () => {

    }


    return (
        <div>
            <h2 className='text-xl text-teal-900 mt-2'>My Orders: {myOrders.length}</h2>
            <div class="overflow-x-auto mt-4">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            {/* <th>Email</th> */}
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
                            myOrders.map((myOrder, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{myOrder.userName}</td>
                                {/* <td>{myOrder.email}</td> */}
                                <td>{myOrder.address}</td>
                                <td>{myOrder.phone}</td>
                                <td>{myOrder.productName}</td>
                                <td>{myOrder.price}</td>
                                <td>{myOrder.totalOrderQuantity}</td>
                                <td>
                                    {(myOrder.price && !myOrder.paid )&& <Link to={`/dashboard/payment/${myOrder._id}`}><button className="btn btn-xs btn-success">Pay</button></Link>}
                                    {(myOrder.price && !myOrder.paid )&& <button className='btn btn-xs btn-warning mt-4' onClick={() => handleDelete(myOrder._id)}>Delete</button>}
                                    {(myOrder.price && myOrder.paid )&& <span className="text-success">Paid</span>}
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;