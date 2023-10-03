"use client";

import { DefaltPageLayout } from "@/components/DefaltPage/styeles";
import { Conatiner, ProductInfo } from "./styles";
import BackButton from "@/components/BackButton";
import useProduct from "@/hooks/useProduct";
import { formatPrice } from "@/utils/formatPrice";
import ShopingBagIcon from "@/components/svg/shopingBagIcon";

function Product({ searchParams }: { searchParams: { id: string } }) {
  const { data } = useProduct(searchParams.id);

  const handleAddToCart = () => {
    let cartItems = localStorage.getItem("cart-items");
    if (cartItems) {
      let cartItemsArray = JSON.parse(cartItems);
      let existingProductIndex = cartItemsArray.findIndex(
        (item: { id: string }) => item.id === searchParams.id
      );

      if (existingProductIndex != -1) {
        cartItemsArray[existingProductIndex].quantity += 1;
      } else
        [cartItemsArray.push({ ...data, id: searchParams.id, quantity: 1 })];

      localStorage.setItem("cart-items", JSON.stringify(cartItemsArray));
    } else {
      const newCart = [
        {
          ...data,
          id: searchParams.id,
          quantity: 1,
        },
      ];
      localStorage.setItem("cart-items", JSON.stringify(newCart));
    }
  };
  return (
    <DefaltPageLayout>
      <Conatiner>
        <BackButton />
        <section>
          <img src={data?.image_url} alt="Foto do produto" />
          <div>
            <ProductInfo>
              <span>{data?.category}</span>
              <h2>{data?.name}</h2>
              <span>{formatPrice(data?.price_in_cents ?? 0)}</span>
              <p>
                *Frete de R$40,00 para todo o Brasil. Grátis para compras acima
                de R$900,00.
              </p>
              <div>
                <h3>Descrição</h3>
                <p>{data?.description}</p>
              </div>
            </ProductInfo>
            <button onClick={handleAddToCart}>
              <ShopingBagIcon />
              Adicionar ao carrinho
            </button>
          </div>
        </section>
      </Conatiner>
    </DefaltPageLayout>
  );
}

export default Product;
