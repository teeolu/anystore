import { types } from "mobx-state-tree";
import { ProductModel } from "../models/prodModel";

export const ProductsStore = types
  .model("ProductsStore", {
    data: types.array(ProductModel)
  })


