import useLocalStorege from "@/hooks/useLocalStorage";
import CartIcon from "../svg/CartIcon";
import { CartCont, Conatiner } from "./styles";

function CartControl() {
  const { updateLocalStorege, value } = useLocalStorege("cart-items", []);

  return (
    <Conatiner>
      <CartIcon />
      {value.length > 0 && <CartCont>{value.length}</CartCont>}
    </Conatiner>
  );
}

export default CartControl;
