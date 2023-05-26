import logo from '../../assets/logo/logo.svg';
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from '../../context/AuthProvider';
import { FaPowerOff } from 'react-icons/fa';


const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.error(error));
    };

    const navItems = <>
        <li ><NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "default")}
        > Home </NavLink> </li>

        <li> <NavLink to="/allToys"
            className={({ isActive }) => (isActive ? "active" : "default")}>All Toys</NavLink> </li>

        {user && (
            <><li> <NavLink
                to="/myToys"
                className={({ isActive }) => (isActive ? "active" : "default")}>My Toys</NavLink> </li>

                <li> <NavLink
                    to="/addToys"
                    className={({ isActive }) => (isActive ? "active" : "default")}>Add a Toy</NavLink> </li></>
        )}


        <li> <NavLink
            to="/blogs"
            className={({ isActive }) => (isActive ? "active" : "default")}>Blogs</NavLink> </li>
    </>;

    return (
        <div className="navbar bg-[#D3E3FD] hover:bg-[#b1cdfb] rounded h-20 px-5 md:px-28 fixed top-0 left-0 right-0 z-50">
            
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-title dropdown-content mt-3 p-2 shadow bg-[#EFFBF8] rounded-box w-32 font-semibold">
                        {navItems}
                    </ul>
                </div>

                <Link to="/" className="btn btn-ghost normal-case text-xl md:text-3xl font-lobster gap-2 text-[#130F49]">
                    <img className='md:w-12' src={logo} alt="" />
                    <h1>Toy Galaxy</h1>
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold">
                    {navItems}
                </ul>
            </div>

            <div className="navbar-end">
                {user && (
                    <div className="avatar online md:mr-3">
                        <div className="md:w-10 w-8 rounded-full">
                            <img
                                src={user.photoURL ? user.photoURL : ""}
                                title={user.displayName ? user.displayName : ""}
                            />
                        </div>
                    </div>
                )}

                <>
                    {user ? (
                        <button
                            title="Log out"
                            onClick={handleLogOut}
                            className="md:text-2xl text-xl text-[#130F49] pl-2 md:px-3"
                        >
                            <FaPowerOff />
                        </button>
                    ) : (
                        <Link to="/login">
                            <button className="btn btn-outline border-[#130F49] text-[#130F49]">Login</button>
                        </Link>
                    )}
                </>
            </div>
        </div>
    );
};

export default NavBar;