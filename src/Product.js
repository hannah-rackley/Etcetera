import React from 'react';
import SmartAddToCart from './addToCart';
import { Link } from 'react-router-dom';

const Product = props => {
    return (<div>
        <Link to={`/product/${props.id}`}>{props.title}</Link>
        <img src={props.imageURL} alt={props.title}/>
        <p>{props.description}</p>
        <p>Price: ${props.price}</p>
        <SmartAddToCart product={props}/>
    </div>)}

export default Product;