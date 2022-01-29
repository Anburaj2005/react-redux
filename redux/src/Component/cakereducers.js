import { Buy_cake } from "../caketype";

const intialstate={
    numOfCakes:10,

}
const Cakereducer=(state=intialstate,action)=>{
    switch (action.type) {
case Buy_cake:return {
    ...state,
    numOfCakes : state.numOfCakes-1,
}
    
default: return state      
}
}
export default Cakereducer;