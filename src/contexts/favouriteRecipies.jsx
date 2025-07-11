import { createContext, useState } from "react";

const FavouriteRecipieContext = createContext();

export const FavouriteRecipieProvider = ({ children }) => {
  const [favouriteRecipies, setFavouriteRecipies] = useState([]);
  return (
    <FavouriteRecipieContext.Provider
      value={{favouriteRecipies, setFavouriteRecipies }}
    >
      {children}
    </FavouriteRecipieContext.Provider>
  );
};

export default FavouriteRecipieContext;
