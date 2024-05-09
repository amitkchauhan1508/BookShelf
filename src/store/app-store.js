import React, {createContext, useContext, useState} from 'react';

const AppContext = createContext();

export const useAppStore = () => useContext(AppContext);

export const AppProvider = ({children}) => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = item => {
    if (!wishlist.some(wishlistItem => wishlistItem.id === item.id)) {
      setWishlist([...wishlist, item]);
    }
  };

  const removeFromWishlist = itemId => {
    setWishlist(wishlist.filter(item => item.id !== itemId));
  };

  return (
    <AppContext.Provider value={{wishlist, addToWishlist, removeFromWishlist}}>
      {children}
    </AppContext.Provider>
  );
};
