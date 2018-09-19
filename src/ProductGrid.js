import React from 'react';
import { connect } from 'react-redux';

let ProductGrid = props => {
    return <div>
        {props.products.map(product => {
        return <div key={product.id}>
                <img src={product.imageURL}/>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
            </div>
    })}
    </div>
}

let SmartProductGrid = connect(state => state)(ProductGrid)

export default SmartProductGrid;