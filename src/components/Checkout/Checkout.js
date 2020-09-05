import React, { useContext } from 'react';
import { toast } from 'react-toastify';
// files
import './checkout.css';
import { ProductContext } from '../../contexts/ProductState';
import CheckoutProduct from './CheckoutProduct';

const Checkout = () => {
  const { basket, deleteProduct } = useContext(ProductContext);

  function checkout() {
    toast.success('Thanks for coming... I will update the app soon 🚀', {
      position: 'bottom-left',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return (
    <div className="checkout block bg-white min-h-screen">
      <img
        className="checkout__ad w-full mb-3"
        src="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/PayCode/FinalAssets/Desktop/English/AmazonExports_FIAT_OnSite_Concepts_R3_DesktopStripe_1500x120_v1.png"
        alt="Amazon ads"
      />

      {basket?.length === 0 ? (
        <div className="text-center">
          <h1>Your basket is empty</h1>
          <p>
            Add product to the basket by clicking 'Add to basket' button on the
            homepage
          </p>
        </div>
      ) : (
        <div className="p-3 mb-3 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
          {/* shopping basket product */}
          <div className="w-full p-3 md:w-3/4">
            {basket.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
                deleteProduct={deleteProduct}
              />
            ))}
          </div>

          {/* total sum of product */}
          <div className="w-full p-3 text-center border-2 rounded-md bg-gray-200 md:w-1/4 md:h-32 md:items-center">
            <p className="my-3">
              Subtotal ({basket?.length} {basket?.length > 1 ? 'items' : 'item'}
              ):{' '}
              <strong>
                $ {basket.reduce((sum, { price }) => sum + price, 0)}
              </strong>
            </p>

            <button
              className="w-full mx-auto p-2 border-2 border-orange-500 bg-orange-300"
              onClick={checkout}
            >
              Proceed to checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
