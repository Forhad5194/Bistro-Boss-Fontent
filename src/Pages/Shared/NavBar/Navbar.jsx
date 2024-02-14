import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { PiShoppingCartBold } from "react-icons/pi";



const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {

        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navlist = <>
        <NavLink>HOME </NavLink>
        <NavLink>CONTACT US  </NavLink>
        <NavLink>DASHBOARD</NavLink>
        <NavLink><Link to="/menu">OUR MENU</Link></NavLink>
        <NavLink><Link to="/Order/soup">OUR SHOP</Link></NavLink>
        <NavLink><Link to="/testPages">testPages</Link></NavLink>
        <NavLink><Link to="/">

            <div className="flex justify-center items-center gap-3">
            <PiShoppingCartBold className="w-[20px] h-[30px]" />
                <div className="badge badge-secondar">
                    +0

                </div>
            </div>




         

        </Link></NavLink>





        {
            user ? <>
                <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
                <span>{user?.name}</span>


            </> : <>
                <NavLink><Link to="/Login">LogIn</Link></NavLink>
            </>
        }

    </>






    return (
        <div className="navbar fixed z-30 bg-opacity-10 max-w-screen-xl mx-auto bg-black">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navlist}
                    </ul>
                </div>
                <div className="cursor-pointer text-white">
                    <h2 className="font-black text-xl">BISTRO BOSS </h2>
                    <p className=" font-bold text-xl">Restaurant</p>
                </div>
            </div>
            <div className="navbar-end  hidden lg:flex">
                <ul className="menu menu-horizontal text-white  text-xs font-normal gap-5 px-1">
                    {navlist}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;