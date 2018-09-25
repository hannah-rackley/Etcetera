import React from 'react';
import { connect } from 'react-redux';
import ProductScreen from './ProductScreen';

class Homepage extends React.Component {
    componentDidMount() {
        fetch('http://0.tcp.ngrok.io:18732/product')
            .then(response => {
                return response.json();
            })
            .then(products => {
                this.props.dispatch({ type: 'LOAD_PRODUCTS', products: products })
             });
    }
    render() {
        return (
            <div className="homepage">
                <h1>Et Cetera</h1>
                <ProductScreen {...this.props}/>
            </div>)
    }
}

let SmartHomepage = connect(state => ({ products: state.products }))(Homepage);

export default SmartHomepage;