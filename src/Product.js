import React from 'react';
import SmartAddToCart from './addToCart';

const Product = props => {
    return (<div>
        <h2>{props.title}</h2>
        <img src={props.imageURL} alt={props.title}/>
        <p>{props.description}</p>
        <p>Price: ${props.price}</p>
        <SmartAddToCart product={props}/>
    </div>)}

export default Product;