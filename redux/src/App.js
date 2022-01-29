import './App.css';
import React from 'react';
import {Provider}from "react-redux" 
import Cakecontainers from './Component/cakecontainers';
import store from './redux/store'
function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <Cakecontainers/>

    </div>
  
    </Provider>
  );
}

export default App;

