import React from 'react';
import {connect} from 'redux'
function Cakecontainers(props) {
  return (
    <div className="App">
     <h2>Number of cakes-{props.numOfcake}</h2>
     <button onClick={()=>props.Buy_cakes}>Buy cakes</button>
    </div>
  );
}

const mapStateToprops= (state)=>{
  return{
    numOfcake:state.numOfcake
  }

}
const mapdispatchToprops=(dispatch)=>{
  return{
    buy_cakes:()=>dispatch(buy_cakes())
  }

}
export default connect(
 ( mapStateToprops,
  mapdispatchToprops)
   (Cakecontainers)
