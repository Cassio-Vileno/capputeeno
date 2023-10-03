import { ProductFetchResponse } from "./products"

export interface ProductFeatchResponse {
  data: {
    Product: ProductFetchResponse[]
  }
}