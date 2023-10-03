import { ProductFeatchResponse } from "@/types/productResponse";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;
const fatcher = (productId: string): AxiosPromise<ProductFeatchResponse> => {
  return axios.post(API_URL, {
    query: `
      query {
        Product(id: "${productId}") {
          name
          description
          price_in_cents
          category
          image_url
        }
      }
  `});
};



function useProduct(id: string) {
  const { data } = useQuery({
    queryFn: () => fatcher(id),
    queryKey: ['product', id],
    enabled: !!id,
    staleTime: 1000 * 60 * 5
  }
  )

  return { data: data?.data.data?.Product }
}

export default useProduct;