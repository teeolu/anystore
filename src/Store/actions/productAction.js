import { INC_CART_QTY, DEC_CART_QTY } from "./types";



export const incCartQty = (products) => {

  return {
    type: INC_CART_QTY,
    payload: products
  }
}

export const decCartQty = (products) => {

  return {
    type: DEC_CART_QTY,
    payload: products
  }
}

// export const addToCart = (product) => {
//   store.shoppingCartStore.addProduct(product);
//   self.inCart = true;
//   self.incCartQty();
// }