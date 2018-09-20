import { HashRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';
import SmartProductGrid from './ProductGrid.js'
import CategoryPage from './CategoryPage.js'

let About = props => <h1>ABOUT</h1>

const Router = props => {
    return (
       <HashRouter>
           <div>
               <Switch>
                   <Route exact path='/home' component={SmartProductGrid} />
                   <Route path='/about' component={About}/>
                   {/* <Route path='/category/:id' component={Category}/> */}
                   {/* <Route path='/cart' component={Cart}/> */}
                   <Route exact path='/category/:slug' component={CategoryPage} />
               </Switch>
           </div>
       </HashRouter>
    )
}

let SmartRouter = connect(state => state)(Router);

export default SmartRouter;