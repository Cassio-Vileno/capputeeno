import { ProductProps } from "./products"

export interface ProductsFeatchResponse {
  data: {
    allProducts: ProductProps[]
  }
}