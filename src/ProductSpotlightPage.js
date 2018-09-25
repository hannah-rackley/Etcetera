import React from 'react';
import SideBar from './sidebar.js';
import NavBar from './Navigation';
import Product from './Product';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

const ProductSpotlightPage = (props) => {
    let products = props.products[0];
    console.log(products);
        return (
            <div>
                {/* <Link to={`/home/`}>Go back</Link> */}
                <NavBar/>
                <SideBar/>
                <h1>Hello! This is the page for {products.title}</h1>
                <Product {...products} key={products.id}/>
            </div>)
    }

let SmartProductSpotlightPage = connect((state, props) => 
({ products: state.products.filter(product => product.id.toString() === props.match.params.id) }))(ProductSpotlightPage)

export default SmartProductSpotlightPage;