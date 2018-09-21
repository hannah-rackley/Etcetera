import React from 'react';
import CartProduct from './CartProduct'


let CartProductGrid = props => {
    return (
    <div>
        {props.products.map(product => {
            return <CartProduct {...product} products={props.products} key={product.id}/> })}
    </div>)
}

export default CartProductGrid;