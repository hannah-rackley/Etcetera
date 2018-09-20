import React from 'react';
import { connect } from 'react-redux';
import SideBar from './sidebar.js';
import NavBar from './Navigation';
import ProductGrid from './ProductGrid'


const CategoryPage = props => {
    let filteredProducts = props.products.filter(product => product.categoryId === props.category.id.toString());
    return (
        <div>
            <NavBar/>
            <SideBar/>
            <h1>Hello! This is the page for {props.category.title}</h1>
            <ProductGrid products={filteredProducts}/>
        </div>)
}

let SmartCategoryPage = connect((state, props) => 
({ category: state.categories.find((category) => category.slug === props.match.params.slug), 
    products: state.products
}))(CategoryPage)

export default SmartCategoryPage;