import React, { useContext, useEffect, useState } from "react";
import { Search } from "lucide-react";
import axios from "axios";
import { RecipieContext } from "../contexts/recipieContext";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const {recipies, setRecipies} = useContext(RecipieContext)

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(searchQuery);
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?query=${searchQuery}&apiKey=${
        import.meta.env.VITE_SPOONACULAR_API_KEY
      }`
    );
    console.log(response.data);
    setRecipies(response.data.results)
  };

  useEffect(()=>{
    console.log(recipies);
    
  }, [recipies])

  return (
    <form
      action=""
      className="flex items-center w-[90%] max-w-xl mx-auto mt-8 bg-white border border-gray-300 rounded-full shadow-sm overflow-hidden"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search recipes..."
        className="flex-grow px-5 py-2 text-gray-700 bg-gray-100 focus:outline-none focus:bg-white"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button
        type="submit"
        className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-r-full transition-all"
      >
        <Search className="w-5 h-5" />
      </button>
    </form>
  );
};

export default SearchBar;
