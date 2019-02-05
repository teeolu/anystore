import { types } from "mobx-state-tree";

import { ProductModel } from "../models/prodModel";

export const ShoppingCartStore = types
  .model("ShoppingCartStore", {
    products: types.array(types.reference(ProductModel))
  })
  .actions(self => ({
    addProduct(product) {
      console.log(product)
      const entry = self.products.find(el => el.id === product.id)

      if (!entry) {
        self.products.push(product)
      }
    }
  }))