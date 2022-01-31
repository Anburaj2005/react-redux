import React from "react";
import { connect } from "react-redux";
import {buyCake} from '../redux'

function Cakecontainer (props) {
  return (
    <div>
      <h2>Number of cakes{props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
};
const mapStateToProps =state =>{
  return {
    numOfCakes: state.numOfCakes
  }
}
const mapdispatchToprops =dispatch =>{
  return{
  buyCake:()=>dispatch(buyCake())
}
}

export default connect(mapdispatchToprops,mapdispatchToprops) (Cakecontainer);