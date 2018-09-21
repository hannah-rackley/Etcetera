import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const SideBar = props => {
    return (
    <div className='navbar'>
        <h1>Product Categories: </h1>
        {props.categories.map(category => { return <NavLink to={`/category/${category.id}`} key={category.id}>{category.title}</NavLink>;
        })}
    </div>)
}

let SmartSideBar = withRouter(connect((state, props) => ({ 
    categories: state.categories,
    location: props.location 
}))(SideBar));

export default SmartSideBar;