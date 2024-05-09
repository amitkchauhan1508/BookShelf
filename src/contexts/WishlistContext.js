import React, {createContext, useContext, useState} from 'react';

const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({children}) => {
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = bookId => {
    if (wishlist.includes(bookId)) {
      setWishlist(wishlist.filter(id => id !== bookId));
    } else {
      setWishlist([...wishlist, bookId]);
    }
  };

  return (
    <WishlistContext.Provider value={{wishlist, toggleWishlist}}>
      {children}
    </WishlistContext.Provider>
  );
};
