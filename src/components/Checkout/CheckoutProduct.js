import React from 'react';
// toastify
import { toast } from 'react-toastify';

const CheckoutProduct = ({
  id,
  title,
  price,
  rating,
  image,
  deleteProduct,
}) => {
  function handleClick(id) {
    toast.error('Product removed from the 🛒!', {
      position: 'bottom-left',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    deleteProduct(id);
  }

  return (
    <div className="mb-2 md:flex md:space-x-3 md:items-center md:justify-start">
      {/* image */}
      <div className="mb-3 md:w-1/3 md:flex-shrink">
        <img className="md:object-contain" src={image} alt={title} />
      </div>

      {/* info */}
      <div className="md:2/3">
        <p className="text-justify mb-3 leading-normal">{title}</p>

        <p className="mb-3">
          <small>$ </small>
          <strong>{price}</strong>
        </p>

        <div className="mb-3 md:1/2">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span role="img" aria-label="star" key={i}>
                ⭐
              </span>
            ))}
        </div>

        <button
          className="w-full p-2 border-2 border-orange-500 bg-orange-300"
          onClick={() => handleClick(id)}
        >
          Remove from basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
