import "./cart-dropdown.styles";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.components";
import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles";
const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const navigateToCheckout = () => {
    navigate("/checkout");
  };
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your Cart is Empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={navigateToCheckout}>Go To Checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
