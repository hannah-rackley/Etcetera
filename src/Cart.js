import React from 'react';
import { connect } from 'react-redux';
import SideBar from './sidebar.js';
import NavBar from './Navigation';
import CartProductGrid from './CartProductGrid'

let getTotal = (items) => {
    let total = 0;
    items.map(item => total += (item.price));
    return total;
}

const Cart = props => {
    let CartItems = props.cart;
    // total = getTotal(CartItems)
    if (CartItems.length > 0) {
        return <div>
            <NavBar>
            </NavBar>
            <SideBar>
            </SideBar>
            <CartProductGrid products={CartItems}/>
            {/* <p>Total: ${total}</p> */}
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