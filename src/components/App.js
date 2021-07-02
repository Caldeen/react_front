import React from 'react'
import AddProduct from '../containers/AddProduct'
import DelProduct from '../containers/DelProduct'
import ProductListComp from '../containers/ProductList'
import ShowProductsCont from '../containers/ShowProductsCont'
import UpdateProduct from '../containers/UpdateProduct'
import {NavBar} from './NavBar'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import { Home } from './Home'
import AddOrder from '../containers/AddOrder'
import DelOrder from '../containers/DelOrder'
const App = () => (
    <Router>
    <NavBar></NavBar>
    <div className='App'>
    <Switch>
      <Route
      exact path="/wishlist"
      render={()=>(
        <>
        <ProductListComp/>
        <ShowProductsCont/>
        <hr></hr>
        <AddOrder></AddOrder>
        <hr></hr>
        <DelOrder></DelOrder>
        <hr></hr>
        <DelProduct/>
        <hr></hr>
        <AddProduct></AddProduct>
        <hr></hr>
        <UpdateProduct></UpdateProduct>
        </>
      )}
      />
      <Route exact path='/login' component={Login}></Route>
      <Route exact path='/register' component={Register}></Route>
      <Route exact path='/home' component={Home}></Route>
    </Switch>
    </div>
    </Router> 

)

export default App
