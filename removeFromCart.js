import React from 'react';
import { connect } from 'react-redux';

let RemoveFromCart = props => {
    let RemoveItemOnClick = () => props.dispatch({ type: 'REMOVE_FROM_CART', product: props.product });
    return <button onClick={RemoveItemOnClick}>Remove From Cart</button>
}

let SmartRemoveFromCart = connect(state => ({ dispatch: state.dispatch }))(RemoveFromCart)

export default SmartRemoveFromCart;