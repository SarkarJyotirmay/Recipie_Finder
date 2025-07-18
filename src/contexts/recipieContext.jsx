import { createContext, useState } from "react";

export const RecipieContext = createContext();

export const RecipieProvider = ({ children }) => {
  const [recipies, setRecipies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  return (
    <RecipieContext.Provider value={{ recipies, setRecipies }}>
      {children}
    </RecipieContext.Provider>
  );
};


