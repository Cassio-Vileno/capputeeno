"use client";

import { useProducts } from "@/hooks/useProducts";
import ProductCard from "../ProductCard/Index";
import { ListContainer } from "./styles";

function ProductsList() {
  const { data } = useProducts();

  return (
    <ListContainer>
      {data &&
        data.map((product) => (
          <ProductCard
            key={product.id}
            image_url={product.image_url}
            price={product.price_in_cents}
            title={product.name}
            id={product.id}
          />
        ))}
    </ListContainer>
  );
}

export default ProductsList;
