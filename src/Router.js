import { HashRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';
import SmartProductScreen from './ProductScreen.js'
import CategoryScreen from './CategoryScreen.js'
import About from './About'
import SmartCart from './Cart'
import ProductSpotlightPage from './ProductSpotlightPage'

const Router = props => {
    return (
       <HashRouter>
           <div>
               <Switch>
                   <Route exact path='/home' component={SmartProductScreen} />
                   <Route path='/about' component={About}/>
                   <Route path='/cart' component={SmartCart}/>
                   <Route exact path='/category/:id' component={CategoryScreen} />
                   <Route exact path='/product/:id' component={ProductSpotlightPage} />
               </Switch>
           </div>
       </HashRouter>
    )
}

let SmartRouter = connect(state => state)(Router);

export default SmartRouter;