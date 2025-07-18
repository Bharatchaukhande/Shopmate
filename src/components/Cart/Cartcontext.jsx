import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = JSON.parse(localStorage.getItem('cartItems'));
    
    return storedCart ? storedCart : [];
    
  });

   // ✅ Initialize from localStorage on first load
  const [loginCheck, setLoginCheck] = useState(() => {
    const stored = localStorage.getItem('islogged');
    return stored ? JSON.parse(stored) : false;
  });

  // ✅ Update localStorage only when loginCheck changes
  useEffect(() => {
    localStorage.setItem('islogged', JSON.stringify(loginCheck));
  }, [loginCheck]);

  const logged = loginCheck; // just use state instead of re-reading localStorage
  console.log(logged)
  


    

      
  // Sync cartItems to localStorage on change
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    if (!item || !item.id) return;

    setCartItems((prevItems) => {
      const itemExists = prevItems.find(i => i.id === item.id);
      if (itemExists) {
        return prevItems.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const increaseQuantity = (id) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems(prevItems =>
      prevItems.flatMap(item => {
        if (item.id === id) {
          if (item.quantity === 1) {
            return [];
          } else {
            return [{ ...item, quantity: item.quantity - 1 }];
          }
        }
        return [item];
      })
    );
  };

  const clearCart = () => setCartItems([]);

   

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      increaseQuantity,
      decreaseQuantity,
      clearCart,
      setLoginCheck,
      loginCheck,
      logged,
      
    }}>
      {children}
    </CartContext.Provider>
  );
};
