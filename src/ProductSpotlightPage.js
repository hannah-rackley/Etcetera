import React from 'react';
import SideBar from './sidebar.js';
import NavBar from './Navigation';
import Product from './Product';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

const ProductSpotlightPage = (props) => {
    let product = props.product;
        return (
            <div>
                {/* <Link to={`/home/`}>Go back</Link> */}
                <NavBar/>
                <SideBar/>
                <h1>Hello! This is the page for {props.product.title}</h1>
                <Product {...product}/>
            </div>)
    }

let SmartProductSpotlightPage = connect((state, props) => 
({ product: state.products.find(product => product.id === props.match.params.id) }))(ProductSpotlightPage)

export default SmartProductSpotlightPage;