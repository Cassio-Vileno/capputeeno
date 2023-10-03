import { useRouter } from "next/navigation";
import { Card } from "./styles";
import { formatPrice } from "@/utils/formatPrice";

interface ProductCardProps {
  image_url: string;
  title: string;
  price: number;
  id: string;
}

function ProductCard(props: ProductCardProps) {
  const price = formatPrice(props.price);
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/product?id=" + props?.id);
  };

  return (
    <Card onClick={handleNavigate}>
      <img src={props.image_url} alt="Imagem do produto" />
      <div>
        <h3>{props.title}</h3>
        <div />
        <p>{price}</p>
      </div>
    </Card>
  );
}

export default ProductCard;
