import React from "react";
import {useselector,usedispatch} from "react-redux";
import { Buy_cakes } from "./cakeactions";
 
fuunction Hookscakecontainer(){
    const numOf cakes= useselector(state=>state.numOf cakes)
    const dispatch=usedispatch()
    return(
        <div>
            <h2>Number of cakes</h2>
            <button onClick={()=>dispatch(buycake())}>Buy cake</button>
        </div>
    )
}
export default Hookscakecontainer