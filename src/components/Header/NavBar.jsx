import React from 'react';
import { NavLink } from 'react-router';

const NavBar = () => {
    const links = <>
        <NavLink to="/" ><li className='m-2 hover:text-yellow-400'>Home</li></NavLink>
        <NavLink to="/about" ><li className='m-2 hover:text-yellow-400'>About</li></NavLink>
        <NavLink to="/readList" ><li className='m-2 hover:text-yellow-400'>Read List</li></NavLink>
    </>
    return (
        <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className=" text-2xl font-bold text-blue-300">BoiPOka</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn px-5 rounded-3xl bg-green-300">log Out</a>
  </div>
</div>
    );
};

export default NavBar;