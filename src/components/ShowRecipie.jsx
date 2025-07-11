// src/components/ShowRecipie.jsx
import React, { useContext } from 'react';
import RecipieCard from './RecipieCard';
import { RecipieContext } from '../contexts/recipieContext';
import { Link } from 'react-router-dom';

const ShowRecipie = () => {
  const { recipies } = useContext(RecipieContext);

  if (!recipies.length) {
    return <p className="text-center text-gray-500">No recipes found. Try searching for something!</p>;
  }

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {recipies.map((recipe) => (
        <Link key={recipe.id} to={`/recipie/${recipe.id}`}>
        <RecipieCard key={recipe.id} title={recipe.title} image={recipe.image} action={"add"} recipie={recipe} />
        </Link>
      ))}
    </div>
  );
};

export default ShowRecipie;
