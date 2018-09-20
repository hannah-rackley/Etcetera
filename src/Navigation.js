import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const NavBar = (props) => <div className='navbar'>
    <NavLink activeStyle={{fontWeight: 'bold'}} to="/home">Home</NavLink>
    <NavLink activeStyle={{fontWeight: 'bold'}} to="/about">About</NavLink>
    <NavLink activeStyle={{fontWeight: 'bold'}} to="/cart">Cart</NavLink>
    <p>{props.cartItems.length}</p>
</div>

let SmartNavBar = connect(state => ({cartItems: state.cart}))(NavBar);
export default SmartNavBar;