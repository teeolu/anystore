import { INC_CART_QTY, DEC_CART_QTY, ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from "../actions/types";


const initialState = {
  products: [
    {
      id: "1",
      name: 'Red Apple',
      imageUrl: require("../../resources/Images/products/apple.png"),
      kgPrice: 10.12,
      unityPrice: 1.9,
      cartQty: 0
    },
    {
      id: "2",
      name: 'Tomato',
      imageUrl: require("../../resources/Images/products/tomato.png"),
      kgPrice: 9.51,
      unityPrice: 1.25,
      cartQty: 0
    }
  ],
  product: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INC_CART_QTY:
      return { ...state, products: action.payload }
      break;
    case DEC_CART_QTY:
      return { ...state, products: action.payload }
      break;
    default:
      return state;
  }
}