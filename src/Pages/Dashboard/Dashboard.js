import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';


const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    
    return (
        <div className="drawer drawer-mobile h-full pb-20">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-3xl font-bold text-emerald-600 mt-5'>Dashboard</h2>
                <Outlet></Outlet>
            
            </div> 
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label> 
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {
                        (user && !admin) && <>
                            <li><Link to="/dashboard">My Orders</Link></li>
                            <li><Link to="/dashboard/addReview">Add Review</Link></li>
                            <li><Link to="/dashboard/myProfile">My Profile</Link></li>
                        </>
                    }
                    {
                        admin && <>
                            <li><Link to="/dashboard/myProfile">My Profile</Link></li>
                            <li><Link to="/dashboard/users">ALL Users</Link></li>                    
                            <li><Link to="/dashboard/addProduct">Add Product</Link></li>                    
                            <li><Link to="/dashboard/allOrders">All Orders</Link></li> 
                        </>
                    }                   
                </ul>
            
            </div>
        </div>
    );
};

export default Dashboard;