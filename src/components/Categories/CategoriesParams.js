import React from 'react';
import { Link } from 'react-router-dom';
import RoomIcon from '@material-ui/icons/Room';
// files
import CategoriesProduct from './CategoriesProduct';
import { electronicLists, bookLists, fashionLists } from '../Home/lists';

const CategoriesParams = ({ electronics, books, fashions }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* top categories navbar */}
      <div className="flex items-center justify-between p-3 bg-gray-800">
        <div className="pl-2">
          <p className="font-bold text-white">Categories: </p>
        </div>

        <div className="flex space-x-5">
          <Link to="/categories/electronics">
            <p className="hover:text-orange-400 text-gray-100 text-sm">
              Electronics
            </p>
          </Link>
          <Link to="/categories/books">
            <p className="hover:text-orange-400 text-gray-100 text-sm">Books</p>
          </Link>
          <Link to="/categories/fashions">
            <p className="hover:text-orange-400 text-gray-100 text-sm">
              Fashions
            </p>
          </Link>
        </div>

        <div className="float-right pr-1">
          <p className="text-gray-100 text-sm">
            <RoomIcon className="text-orange-400" /> Deliver to Indonesia
          </p>
        </div>
      </div>

      {/* items list */}
      <div className="flex flex-col divide-y divide-gray-400 px-4">
        {electronics &&
          electronicLists.map((el) => (
            <CategoriesProduct
              key={el.id}
              product={el}
              image={el.image}
              title={el.title}
              price={el.price}
              rating={el.rating}
            />
          ))}

        {books &&
          bookLists.map((el) => (
            <CategoriesProduct
              key={el.id}
              product={el}
              image={el.image}
              title={el.title}
              price={el.price}
              rating={el.rating}
            />
          ))}

        {fashions &&
          fashionLists.map((el) => (
            <CategoriesProduct
              key={el.id}
              product={el}
              image={el.image}
              title={el.title}
              price={el.price}
              rating={el.rating}
            />
          ))}
      </div>
    </div>
  );
};

export default CategoriesParams;
