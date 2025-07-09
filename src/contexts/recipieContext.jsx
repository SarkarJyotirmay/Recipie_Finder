import { createContext, useState } from "react";

export const RecipieContext = createContext();

export const RecipieProvider = ({ children }) => {
  const [recipies, setRecipies] = useState([]);
  return (
    <RecipieContext.Provider value={{ recipies, setRecipies }}>
      {children}
    </RecipieContext.Provider>
  );
};


