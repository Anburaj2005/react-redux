import { ActionTypes } from "../contents/actionTypes"

const initialState = {
    products: [{
        id: 1,
        title: "Name",
        category: "Software"
    }],
};

export const productReducer = (state, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state;
        default:
            return state;
    }
};