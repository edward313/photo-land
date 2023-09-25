import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [itemAmount, setItemAmount] = useState(0);
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const amount = cart.reduce((a, c) => {
      return a + c.amount;
    }, 0);

    setItemAmount(amount);
  }, [cart]);
  //add to cart
  const addToCart = (item, id) => {
    const itemID = parseInt(id);
    const newItem = { ...item[0], amount: 1 };
    setCart([...cart, newItem]);

    const cartItem = cart.find((item) => {
      return item.id === itemID;
    });

    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === itemID) {
          setAmount(cartItem.amount + 1);
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
    setIsOpen(true);
  };

  //remove from cart

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  const handleInput = (e, id) => {
    console.log(e.target.value);
  };

  return (
    <CartContext.Provider
      value={{
        isOpen,
        setIsOpen,
        addToCart,
        cart,
        removeFromCart,
        itemAmount,
        handleInput,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
