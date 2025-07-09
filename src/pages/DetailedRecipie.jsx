// src/pages/DetailedRecipie.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DetailedRecipie = () => {
  const { id } = useParams(); // get recipe id from URL
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchRecipeDetails = async () => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${import.meta.env.VITE_SPOONACULAR_API_KEY}`
      );
      setRecipe(response.data);
    } catch (error) {
      console.error("Error fetching recipe details:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipeDetails();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading recipe details...</p>;
  if (!recipe) return <p className="text-center mt-10 text-red-500">Recipe not found.</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full max-h-96 object-cover rounded-lg mb-4" />
      <p dangerouslySetInnerHTML={{ __html: recipe.summary }} className="text-gray-700 mb-4" />
      
      <h2 className="text-xl font-semibold mt-6 mb-2">Ingredients</h2>
      <ul className="list-disc list-inside">
        {recipe.extendedIngredients.map((item) => (
          <li key={item.id}>{item.original}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Instructions</h2>
      <p dangerouslySetInnerHTML={{ __html: recipe.instructions || 'No instructions provided.' }} className="text-gray-700" />
    </div>
  );
};

export default DetailedRecipie;
