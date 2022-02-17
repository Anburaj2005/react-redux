import './App.css';
import React from 'react';
import{Browserouter as Route,Router,Switch} from "react-router-dom";
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetails from './containers/ProductDetails';

function App() {
  return (
    
    <div className="App">
      <Router>
<Header/>  
<Switch> 
<Route Path="/"  exact component={ProductListing}/>
<Route Path="/product/:productId"  exact component={ProductDetails}/>
<Route >404 not found</Route>
</Switch>
</Router>
 </div>
 
  );
}

export default App;

