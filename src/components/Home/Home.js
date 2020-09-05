import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// files
import Category from '../Category/Category';
import TopRated from '../TopRated/TopRated';
import './home.css';
import headerImage from '../../images/header.png';
import bookImage from '../../images/book.svg';
import electronicImage from '../../images/electronic.svg';
import fashionImage from '../../images/fashion.svg';
import { electronicLists, bookLists, fashionLists } from './lists';

// framer-motion
const variants = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  transition: { duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] },
};

const Home = () => {
  return (
    <div className="home flex flex-col">
      {/* banner */}
      <motion.div
        className="home__banner flex flex-col space-y-2 items-center justify-center md:flex-row"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
      >
        <motion.h1
          className="text-white mx-auto tracking-wide"
          whileHover={{ scale: 1.3 }}
        >
          Amazon.com ships worldwide
        </motion.h1>
        <img className="h-64 mx-auto" src={headerImage} alt="Amazon Prime]" />
      </motion.div>

      {/* categories row */}
      <motion.div
        className="flex m-5 flex-col space-y-5 md:flex-row md:space-x-5 md:space-y-0"
        {...variants}
      >
        <Link to="/categories/electronics">
          <Category category="Electronics" image={electronicImage} />
        </Link>

        <Link to="/categories/books">
          <Category category="Books" image={bookImage} />
        </Link>

        <Link to="/categories/fashions">
          <Category category="Fashions" image={fashionImage} />
        </Link>
      </motion.div>

      {/* Top Rated Electronics */}
      <motion.div
        className="flex flex-col m-5 space-y-3 bg-white"
        {...variants}
      >
        <TopRated
          category="Electronics"
          linkTo="electronics"
          lists={electronicLists}
        />
      </motion.div>

      {/* Top Rated Books */}
      <motion.div
        className="flex flex-col m-5 space-y-3 bg-white"
        {...variants}
      >
        <TopRated category="Books" linkTo="books" lists={bookLists} />
      </motion.div>

      {/* Top Rated Fashions */}
      <motion.div
        className="flex flex-col m-5 space-y-3 bg-white"
        {...variants}
      >
        <TopRated category="Fashions" linkTo="fashions" lists={fashionLists} />
      </motion.div>
    </div>
  );
};

export default Home;
