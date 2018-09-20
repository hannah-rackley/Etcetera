import React from 'react';
import { connect } from 'react-redux';
import SideBar from './sidebar.js';
import NavBar from './Navigation';
import ProductGrid from './ProductGrid'


const Cart = props => {
    let CartItems = props.cart;
    if (CartItems.length > 0) {
        return <div>
            <NavBar>
            </NavBar>
            <SideBar>
            </SideBar>
            <ProductGrid products={CartItems}/>
        </div>
    } else {
        return <div>
            <NavBar>
            </NavBar>
            <SideBar>
            </SideBar>
            <h1>Your cart is empty :(</h1>
    </div>
    }
}

let SmartCart = connect(state => state)(Cart);

export default SmartCart;