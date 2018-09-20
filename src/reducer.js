const addToCart = (oldState, action) => {
    let cartItemIds = oldState.cart.map(cartItem => cartItem.id)
    if (cartItemIds.includes(action.product.id)) {
        alert('This item is already in your cart!');
        return {...oldState}
    } else {
        return {
            ...oldState, 
            cart: oldState.cart.concat([action.product])
        }
    }
}

 const reducerRouter = {
    "ADD_TO_CART": addToCart,
}

const reducer = (oldState, action) => {
    let actionType = reducerRouter[action.type];
    if (actionType) {
        return actionType(oldState, action);
    } else {
        return oldState;
    }
}

export default reducer;