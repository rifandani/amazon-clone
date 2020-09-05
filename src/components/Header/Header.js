import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
// files
import './header.css';
import { ProductContext } from '../../contexts/ProductState';
import UserContext from '../../contexts/UserContext';
import { auth } from '../../config/firebase';

const Header = () => {
  const { basket } = useContext(ProductContext);
  const { user } = useContext(UserContext);

  function logout() {
    if (user) {
      auth.signOut();

      toast.dark('Logged out ⛔', {
        position: 'bottom-left',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  return (
    <nav className="header">
      {/* Logo Link */}
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon Logo"
          className="header__logo"
        />
      </Link>

      {/* Search Bar */}
      <div className="header__search">
        <input
          type="text"
          className="header__searchInput p-2 outline-none focus:shadow-outline focus:bg-orange-100"
        />
        <SearchIcon className="header__searchIcon cursor-pointer" />
      </div>

      {/* 3 Links nav */}
      <div className="header__nav">
        {user ? (
          <>
            <div className="header__link cursor-pointer" onClick={logout}>
              <div className="header__option">
                <span className="header__optionLineOne">
                  Hello, {user?.displayName}
                </span>
                <span className="header__optionLineTwo hover:underline">
                  Logout
                </span>
              </div>
            </div>

            <Link className="header__link" to="/edit-profile">
              <div className="header__option">
                <span className="header__optionLineOne">Account</span>
                <span className="header__optionLineTwo hover:underline">
                  Edit Profile
                </span>
              </div>
            </Link>
          </>
        ) : (
          <Link className="header__link" to="/login">
            <div className="header__option">
              <span className="header__optionLineOne">Hello, User</span>
              <span className="header__optionLineTwo hover:underline">
                Login
              </span>
            </div>
          </Link>
        )}

        {/* Checkout */}
        <Link className="header__link" to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon className="hover:text-orange-300" />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
