import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => <div className='navbar'>
    <NavLink activeStyle={{fontWeight: 'bold'}} to="/home">Home</NavLink>
    <NavLink activeStyle={{fontWeight: 'bold'}} to="/about">About</NavLink>
    <NavLink activeStyle={{fontWeight: 'bold'}} to="/cart">Cart</NavLink>
</div>

export default NavBar;