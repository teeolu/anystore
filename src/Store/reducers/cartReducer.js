import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART
} from "../actions/types";

const initialState = {
  cartProducts: [],
  cartProduct: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return { ...state, cartProducts: action.payload }
      break;
    case REMOVE_PRODUCT_FROM_CART:
      return { ...state, cartProduct: action.payload }
      break;
    default:
      return state;
  }
}