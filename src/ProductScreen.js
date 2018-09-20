import React from 'react';
import { connect } from 'react-redux';
import SideBar from './sidebar.js';
import NavBar from './Navigation';
import ProductGrid from './ProductGrid'

let ProductScreen = props => {
    return <div>
        <NavBar/>
        <SideBar/>
        <ProductGrid products={props.products}/>
    </div>
}

let SmartProductScreen = connect(state => state)(ProductScreen)

export default SmartProductScreen;