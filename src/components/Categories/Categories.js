import React from 'react';
import { useParams } from 'react-router-dom';
// files
import CategoriesParams from './CategoriesParams';

const Categories = () => {
  const { slug } = useParams();

  if (slug === 'books') return <CategoriesParams books={true} />;
  if (slug === 'fashions') return <CategoriesParams fashions={true} />;

  return <CategoriesParams electronics={true} />;
};

export default Categories;
