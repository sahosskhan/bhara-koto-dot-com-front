import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
          <div className="navbar shadow">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
      <i className="fa-solid fa-bars"></i>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content text-2xl rounded-box z-[1] mt-3 w-52 p-2 shadow">
<NavLink to={"/"}><li className='hover:bg-red-500 hover:text-white hover:duration-500 rounded-btn' ><a>Home</a></li></NavLink>
        <NavLink><li className='hover:bg-red-500 hover:text-white hover:duration-500 rounded-btn'><a>Community</a></li></NavLink>
        <NavLink><li className='hover:bg-red-500 hover:text-white hover:duration-500 rounded-btn'><a>Blog</a></li></NavLink>
        <NavLink><li className='hover:bg-red-500 hover:text-white hover:duration-500 rounded-btn'><a>About</a></li></NavLink>
        <NavLink><li className='hover:bg-red-500 hover:text-white hover:duration-500 rounded-btn'><a>Support</a></li></NavLink>
      </ul>
    </div>
    <img className='h-12 p-1 ' src="/logo.png" alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-xl ">
    <NavLink to={"/"}><li className='hover:bg-red-500 hover:text-white hover:duration-500 rounded-btn' ><a>Home</a></li></NavLink>
        <NavLink><li className='hover:bg-red-500 hover:text-white hover:duration-500 rounded-btn'><a>Community</a></li></NavLink>
        <NavLink><li className='hover:bg-red-500 hover:text-white hover:duration-500 rounded-btn'><a>Blog</a></li></NavLink>
        <NavLink><li className='hover:bg-red-500 hover:text-white hover:duration-500 rounded-btn'><a>About</a></li></NavLink>
        <NavLink><li className='hover:bg-red-500 hover:text-white hover:duration-500 rounded-btn'><a>Support</a></li></NavLink>

    </ul>
  </div>
  <div className="navbar-end">
  <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://i.ibb.co.com/pns9QqL/image.png" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 text-xl shadow">
        <li className='hover:bg-red-500 hover:text-white hover:duration-500 rounded-btn' ><a>Profile</a></li>
        <li className='hover:bg-red-500 hover:text-white hover:duration-500 rounded-btn' ><a>Register</a></li>
        <li className='hover:bg-red-500 hover:text-white hover:duration-500 rounded-btn' ><a>Login</a></li>
      </ul>
  </div>
  </div>
</div>  
        </div>
    );
};

export default Navbar;