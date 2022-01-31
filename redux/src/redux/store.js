import {createstore } from 'redux'


import cakeReducer from './Cake/cakeReducer'

const store=createstore(cakeReducer)
export default store;