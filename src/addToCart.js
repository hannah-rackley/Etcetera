import React from 'react';
import { connect } from 'react-redux';

let AddToCart = props => {
    let addItemOnClick = () => props.dispatch({ type: 'ADD_TO_CART', product: props.product });
    return <button onClick={addItemOnClick}>Add to Cart</button>
}

let SmartAddToCart = connect(state => ({ dispatch: state.dispatch }))(AddToCart)

export default SmartAddToCart;