import React from 'react';
import SmartRemoveFromCart from './removeFromCart';

const CartProduct = props => {
    let updateTotal = (event) => {
        console.log(props);
        console.log(event.target.id);
    }

    return (<div>
        <h2>{props.title}</h2>
        <img src={props.imageURL} alt={props.title}/>
        <p>{props.description}</p>
        <p>Price: ${props.price}</p>
        <input defaultValue="1" type="number" min="1" onChange={updateTotal} id={props.id}></input>
        <SmartRemoveFromCart product={props}/>
        {/* <p>Total: {total}</p> */}
    </div>)}

export default CartProduct;