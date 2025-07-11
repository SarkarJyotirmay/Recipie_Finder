// src/components/RecipieCard.jsx
import React, { useContext } from "react";
import FavouriteRecipieContext from "../contexts/favouriteRecipies";
import { toast } from "react-toastify";

const RecipieCard = ({ title, image, action, recipie }) => {
  const { setFavouriteRecipies } = useContext(FavouriteRecipieContext);

  function handleAddToFav(e, recipie) {
    e.preventDefault();
    e.stopPropagation();
    console.log("Recipie to be added in favourites", recipie);
    setFavouriteRecipies((prev) => [...prev, recipie]);
    toast.success("Recipe added to favourites.");
  }

  function handlleRemoveFromFav(e, recipie) {
    e.preventDefault();
    e.stopPropagation();
    console.log("Remove from fav", recipie);
    setFavouriteRecipies((prev) =>
      prev.filter((item) => item.id !== recipie.id)
    );
    toast.error("Recipe removed from favourites.");
  }

  return (
    <div className="bg-gray-100 rounded-2xl shadow-md p-4 w-full max-w-sm h-[400px] flex flex-col justify-between hover:shadow-xl hover:scale-[1.02] transition duration-300 ease-in-out">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-md"
      />

      <div className="flex-1 mt-3">
        <h2 className="text-lg font-bold text-gray-800 line-clamp-2">
          {title}
        </h2>
      </div>

      {action === "add" ? (
        <button
          onClick={(e) => handleAddToFav(e, recipie)}
          className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-200"
        >
          Add to favourites
        </button>
      ) : (
        <button
          onClick={(e) => handlleRemoveFromFav(e, recipie)}
          className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-200"
        >
          Remove from favourites
        </button>
      )}
    </div>
  );
};

export default RecipieCard;
