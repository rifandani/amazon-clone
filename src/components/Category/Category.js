import React from 'react';

const Category = ({ category, image }) => {
  return (
    <div className="bg-white flex flex-col">
      <h2 className="mx-auto my-3 tracking-wide font-semibold text-lg hover:text-orange-400">
        {category}
      </h2>

      <img
        className="object-contain w-full h-56 my-3"
        src={image}
        alt={category}
      />
    </div>
  );
};

export default Category;
