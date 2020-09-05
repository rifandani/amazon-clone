import React from 'react';

const Footer = () => {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <div className="flex flex-col">
      {/* Back to top */}
      <div
        className="bg-gray-700 p-5 w-full cursor-pointer"
        onClick={scrollToTop}
      >
        <p className="text-white text-center hover:text-orange-400">
          Back to top
        </p>
      </div>

      {/* Links */}
      <div className="bg-gray-800 grid grid-cols-2 gap-x-5 gap-y-8 py-5 md:grid-cols-4">
        {/* Get to know us */}
        <div className="ml-5 space-y-1">
          <h6 className="text-white pb-1">Get to Know Us</h6>
          <p className="text-gray-500">Careers</p>
          <p className="text-gray-500">Blog</p>
          <p className="text-gray-500">About Amazon</p>
        </div>

        {/* Make money with us */}
        <div className="ml-5 space-y-1">
          <h6 className="text-white pb-1">Make Money with Us</h6>
          <p className="text-gray-500">Sell on Amazon</p>
          <p className="text-gray-500">Sell on Amazon Business</p>
          <p className="text-gray-500">Sell Your Apps on Amazon</p>
        </div>

        {/* Amazon Payment Products */}
        <div className="ml-5 space-y-1">
          <h6 className="text-white pb-1">Amazon Payment Products</h6>
          <p className="text-gray-500">Amazon Business Card</p>
          <p className="text-gray-500">Shop with Points</p>
          <p className="text-gray-500">Reload Your Balance</p>
        </div>

        {/* Let Us Help You */}
        <div className="ml-5 space-y-1">
          <h6 className="text-white pb-1">Let Us Help You</h6>
          <p className="text-gray-500">Amazon and COVID-19</p>
          <p className="text-gray-500">Your Accounts</p>
          <p className="text-gray-500">Your Orders</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
