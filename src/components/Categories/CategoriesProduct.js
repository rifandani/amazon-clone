import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
// toastify
import { toast } from 'react-toastify';
// files
import { ProductContext } from '../../contexts/ProductState';
import UserContext from '../../contexts/UserContext';

const CategoriesProduct = ({ product, image, title, price, rating }) => {
  const history = useHistory();

  const { user } = useContext(UserContext);
  const { addProduct } = useContext(ProductContext);

  function handleClick(product) {
    toast.success('🚀 Product added to the basket!', {
      position: 'bottom-left',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    addProduct(product);
  }

  return (
    <div className="w-full flex py-3">
      {/* image */}
      <div className="mb-3 mr-16 w-1/6">
        <img className="" src={image} alt={title} />
      </div>

      {/* info */}
      <div className="w-5/6">
        <p className="text-justify leading-normal">{title}</p>

        <div className="mb-2 w-1/2">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span className="text-xs" role="img" aria-label="star" key={i}>
                ⭐
              </span>
            ))}
        </div>

        <Link to="/categories/electronics">
          <p className="w-1/2 text-orange-500 mb-1 hover:underline">
            Electronics
          </p>
        </Link>

        <p className="mb-3">
          <small className="align-top">$ </small>
          <strong>{price}</strong>
        </p>

        <button
          className="w-32 p-2 border-2 border-orange-500 bg-orange-300 hover:bg-orange-400 hover:text-white"
          onClick={
            user ? () => handleClick(product) : () => history.push('/login')
          }
        >
          {user ? 'Add to basket' : 'Please login'}
        </button>
      </div>
    </div>
  );
};

export default CategoriesProduct;
