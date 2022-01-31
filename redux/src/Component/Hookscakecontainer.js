import React from "react";
import {useselector,usedispatch} from "react-redux";
import {buyCake} from '../redux';
 
function Hookscakecontainer(){
    const numOfCakes = useselector(state=>state.numOfCakes)
    const dispatch=usedispatch()
    return(
        <div>
            <h2>Number of cakes</h2>
            <button onClick={()=>dispatch(buyCake())}>Buy cake</button>
        </div>
    )
}
export default Hookscakecontainer;