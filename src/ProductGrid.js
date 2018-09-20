import React from 'react';
import { connect } from 'react-redux';
import SideBar from './sidebar.js';
import NavBar from './Navigation';
import Product from './Product'

let ProductGrid = props => {
    return <div>
        <NavBar/>
        <SideBar/>
        {props.products.map(product => {
            return <Product {...product} key={product.id}/> })
    })}
    </div>
}

let SmartProductGrid = connect(state => state)(ProductGrid)

export default SmartProductGrid;