import React from 'react';

const Product = props => {
    return (<div>
        <h2>{props.title}</h2>
        <img src={props.imageURL} alt={props.title}/>
        <p>{props.description}</p>
        <p>Price: ${props.price}</p>
    </div>)}

export default Product;