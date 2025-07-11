import React, { useContext, useEffect } from "react";
import FavouriteRecipieContext from "../contexts/favouriteRecipies";
import { Link } from "react-router-dom";
import RecipieCard from "../components/RecipieCard";

const FavouriteRecipies = () => {
  const { favouriteRecipies, setFavouriteRecipies } = useContext(
    FavouriteRecipieContext
  );
  useEffect(() => {
    console.log(favouriteRecipies, "from fav recipie page");
  }, [favouriteRecipies]);

  if (favouriteRecipies.length === 0) {
    return <p>No recipies added to favourites yet.</p>;
  }

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {favouriteRecipies.map((recipe) => (
        <Link key={recipe.id} to={`/recipie/${recipe.id}`}>
          <RecipieCard
            key={recipe.id}
            title={recipe.title}
            image={recipe.image}
            action={"remove"}
            recipie={recipe}
          />
        </Link>
      ))}
    </div>
  );
};

export default FavouriteRecipies;
