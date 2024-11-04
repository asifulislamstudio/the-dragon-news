import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {

    const {user, logOutUser} = useContext(AuthContext)

    const handleLogOut = () => {
        logOutUser()
        .then(res => toast('log Out Successful'))
        .catch(err => toast('Ther is an problem'))
    }

    const Nav = <>
   <li><Link to="/">HOME</Link></li>
   <li><Link to="/about">ABOUT</Link></li>
   <li><Link to="/career">CAREER</Link></li>
   <li><Link to="/ncursor">NeonCursor</Link></li>
   
   
   </>
    return (
        <div>
             <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm font-semibold dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {Nav}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">asifulislam</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu font-semibold active:bg-lime-400 menu-horizontal px-1">
                        {Nav}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? user.email : ''
                    }
                    {
                        user ? <Link onClick={handleLogOut} className="btn m-4" >Log Out</Link> 
                        
                        : <Link className="btn" to="/login">Login</Link>
                    }
                    
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;