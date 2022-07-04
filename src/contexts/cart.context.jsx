import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  decrementItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartTotal: 0,
  setCartTotal: () => {},
});

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((item) => {
      if (item.id === productToAdd.id)
        return { ...item, quantity: item.quantity + 1 };
      else return item;
    });
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const decrementCartItem = (cartItems, product) => {
  const existingCartItem = cartItems.find((item) => item.id === product.id);
  if (existingCartItem.quantity === 1)
    return cartItems.filter((cartItem) => cartItem.id != existingCartItem.id);
  return cartItems.map((item) => {
    if (item.id === product.id) return { ...item, quantity: item.quantity - 1 };
    else return item;
  });
};

const clearCartItem = (cartItems, item) => {
  return cartItems.filter((cartItem) => cartItem.id != item.id);
};
export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (cartSum, cartItem) => cartSum + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (cartSum, cartItem) => cartSum + cartItem.price * cartItem.quantity,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const decrementItemFromCart = (product) => {
    setCartItems(decrementCartItem(cartItems, product));
  };

  const clearItemFromCart = (item) => {
    setCartItems(clearCartItem(cartItems, item));
  };
  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
    setCartCount,
    decrementItemFromCart,
    clearItemFromCart,
    cartTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
