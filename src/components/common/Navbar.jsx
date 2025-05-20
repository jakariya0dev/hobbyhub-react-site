import React, {use} from 'react';
import {Link} from "react-router";
import {AuthContext} from "./../../providers/AuthProvider.jsx";
import LoaderDotted from "./LoaderDotted.jsx";
import {getAuth, signOut } from "firebase/auth";
import app from "../../../config.firebase.js";
import {toast} from "react-toastify";
import Button from "daisyui/components/button/index.js";

const Navbar = () => {

    const links = <>
        <li>
            <Link to="/about" className="hover:text-blue-600">
                About Us
            </Link>
        </li>
        <li>
            <Link to="/groups" className="hover:text-blue-600">
                Find Groups
            </Link>
        </li>
        <li>
            <Link to="/create" className="hover:text-blue-600">
                Create a Group
            </Link>
        </li>
        <li>
            <Link to="/contact" className="hover:text-blue-600">
                Contact
            </Link>
        </li>
    </>;

    const { user, setUser, isLoading } = use(AuthContext);

    const handleLogout = () => {
        const auth = getAuth(app);
        signOut(auth)
            .then(() => {
                toast.success("Logout successful");
                setUser(null);
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    return (
        <nav>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            { links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        { links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        isLoading ? <LoaderDotted/> : (
                        user ?
                            <>
                                <Link to="/" title={user.displayName}>
                                    <img
                                        src={user.photoURL}
                                        alt={user.displayName}
                                        title={user.displayName}
                                        className="w-10 h-10 border-2 border-amber-500 rounded-full"
                                    />

                                </Link>
                                <button onClick={handleLogout} className="btn">Logout</button>
                            </> : <Link to='/login' className="btn">Login</Link>
                        )
                    }

                </div>
            </div>
        </nav>
    );
};

export default Navbar;