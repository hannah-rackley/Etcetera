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

const removeFromCart = (oldState, action) => {
    return {
        ...oldState, 
        cart: oldState.cart.filter(cartItem => cartItem.id !== action.product.id)
    }
}

const loadProducts = (oldState, action) => {
    return {
        ...oldState, 
        products: action.products, 
    }
}

 const reducerRouter = {
    "ADD_TO_CART": addToCart,
    "REMOVE_FROM_CART": removeFromCart,
    "LOAD_PRODUCTS": loadProducts
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