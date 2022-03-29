import { useContext } from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import CartContext from "../../../store/cart-context";
import "./HeaderCartButton.css";

export default function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className="cart-button" onClick={props.onShowCart}>
      <span>
        <ShoppingBasketIcon />
      </span>
      <span>{numberOfCartItems}</span>
      <span></span>
    </button>
  );
}
