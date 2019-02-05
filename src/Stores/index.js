import { types } from "mobx-state-tree";

import { AuthStore } from "./authStore";
import { ShoppingCartStore } from "./ShoppingCart";
import { ProductModel } from "../models/prodModel";
import { ProductsStore } from "./Products";


const authStore = AuthStore.create();

const shoppingCartStore = ShoppingCartStore.create({ products: [] })

const productsStore = ProductsStore.create({
  data: [
    ProductModel.create({
      id: "1",
      name: 'Red Apple',
      imageUrl: require("../resources/Images/products/apple.png"),
      kgPrice: 10.12,
      unityPrice: 1.9,
    }),
    ProductModel.create({
      id: "2",
      name: 'Tomato',
      imageUrl: require("../resources/Images/products/tomato.png"),
      kgPrice: 9.51,
      unityPrice: 1.25,
    }),
  ],
});


export const store = {
  authStore,
  shoppingCartStore,
  productsStore
}

window.MobxStore = store;