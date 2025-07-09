// src/components/RecipieCard.jsx
import React from 'react';

const RecipieCard = ({ title, image }) => {
  return (
    <div className="rounded-lg shadow-md p-4 w-full max-w-sm bg-white hover:shadow-lg transition flex flex-col justify-between">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-md" />
      <h2 className="mt-2 text-lg font-semibold text-gray-800">{title}</h2>
      <button className='bg-red-500 p-2 rounded-lg cursor-pointer'>
        Add to favourites
      </button>
    </div>
  );
};

export default RecipieCard;
