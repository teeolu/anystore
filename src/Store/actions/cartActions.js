import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from "./types";

// {
//   id: types.identifier,
//   name: types.string,
//   imageUrl: types.number,
//   unityPrice: types.number,
//   kgPrice: types.number,
//   cartQty: 0,
//   inCart: false,
// }

export const addProductToCart = (product) => {
  console.log(product)
  // const entry = fullProduct.find(el => el.id === product.id)

  // if (!entry) {
  //   const newProduct = { ...product, inCart: true }
  //   const newFullProduct = fullProduct.push(newProduct)

  //   return {
  //     type: ADD_PRODUCT_TO_CART,
  //     payload: newFullProduct
  //   }
  // }

  return {
    type: ADD_PRODUCT_TO_CART,
    payload: product
  }
}

// export const addToCart = (product) => {
//   store.shoppingCartStore.addProduct(product);
//   self.inCart = true;
//   self.incCartQty();
// }

export const removeFromCart = (fullProduct, product) => {
  // store.shoppingCartStore.removeProduct(self);
  // self.inCart = false;
  // self.cartQty = 0;
  console.log(product)
  const entry = fullProduct.find(el => el.id === product.id)


  if (entry) {
    const entryIndex = fullProduct.indexOf(entry);

    if (entryIndex !== -1) {
      const newFullProduct = fullProduct.splice(entryIndex, 1)
      return {
        type: REMOVE_PRODUCT_FROM_CART,
        payload: newFullProduct
      }
    }
  }

  return {
    type: REMOVE_PRODUCT_FROM_CART,
    payload: {
      product,
      inCart: false
    }
  }
}