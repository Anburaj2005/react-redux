import './App.css';
import React from 'react';
import {Provider}from "react-redux" 
import Cakecontainer from './Component/Cakecontainer';
import store from './redux/store'
import Hookscakecontainer from './Component/Hookscakecontainer';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <Cakecontainer/>
<Hookscakecontainer/>
    </div>
  </Provider>
  );
}

export default App;

