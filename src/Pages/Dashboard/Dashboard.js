import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const Dashboard = () => {
    
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h2 className='text-3xl font-bold text-emerald-600 mt-5'>Dashboard</h2>
                <Outlet></Outlet>
            
            </div> 
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label> 
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    <li><Link to="/dashboard">My Orders</Link></li>
                    <li><Link to="/dashboard/addReview">Add Review</Link></li>
                    <li><Link to="/dashboard/myProfile">My Profile</Link></li>
                    {/* <li><Link to="/dashboard/addReview">Add Review</Link></li> */}
                </ul>
            
            </div>
        </div>
    );
};

export default Dashboard;