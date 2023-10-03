import { ProductsFeatchResponse } from "@/types/productsResponse";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { useFilter } from "./useFilter";
import { mountQuery } from "@/utils/graphqlFilters";
import { useDeferredValue } from "react";

export function useProducts() {
  const fatcher = (query: string): AxiosPromise<ProductsFeatchResponse> => {
    return axios.post(API_URL, { query });
  };

  const { type, priority, search } = useFilter();
  const searchDeferred = useDeferredValue(search);
  const query = mountQuery(type, priority);
  const { data } = useQuery({
    queryFn: () => fatcher(query),
    queryKey: ["products", type, priority],
    staleTime: 1000 * 60,
  });

  const API_URL = process.env.NEXT_PUBLIC_API_URL as string;
  const products = data?.data?.data?.allProducts;
  const FilterProducts = products?.filter((product) =>
    product.name.toLowerCase().includes(searchDeferred.toLowerCase())
  );

  return {
    data: FilterProducts,
  };
}
