import { combineReducers } from "redux";
import user from "./userReducer";
import products from "./productReducer";
import cart from "./cartReducer";


const rootReducer = combineReducers({
  user,
  products,
  cart
})

export default rootReducer;