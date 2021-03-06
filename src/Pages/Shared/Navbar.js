import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Navbar = () => {

    const [user, loading, error] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
    }

    const menuItems = <>
        <li className=" text-pink-700"><Link to="/">Home</Link></li>
        <li className=" text-pink-700"><Link to="/blogs">Blogs</Link></li>
        <li className=" text-pink-700"><Link to="/myPortfolio">MyPortfolio</Link></li>
        <li className=" text-pink-700">{user? <Link to="/manageProduct">ManageProducts</Link> : ''}</li>
        {
            user && <li className=" text-pink-700"><Link to="/dashboard">Dashboard</Link></li>
        }
        <li>{user? <button onClick={logout} className="btn btn-ghost mt-2 mr-6">Sign Out</button> : <Link to="/login">Login</Link>}</li>
        <li className="text text-purple-900">{user? <small>{user.displayName} <br /> {user.email}</small> : ''}</li>
    </>

    return (
        <div className="navbar bg-accent px-10">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabindex="0" className="btn btn-ghost lg:hidden">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                    />
                    </svg>
                </label>
                <ul
                    tabindex="0"
                    className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                    {menuItems}
                </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-bold text-orange-700 text-xl">Computer Parts Manufacturer</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="lg:hidden navbar-end">
            <label tabindex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                    />
                    </svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;
