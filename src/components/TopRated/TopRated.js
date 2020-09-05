import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
// material-ui
import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
// toastify
import { toast } from 'react-toastify';
// files
import { ProductContext } from '../../contexts/ProductState';
import UserContext from '../../contexts/UserContext';

const TopRated = ({ category, linkTo, lists }) => {
  const { addProduct } = useContext(ProductContext);
  const { user } = useContext(UserContext);

  const history = useHistory();

  function handleClick(el) {
    toast.success('Product added to the 🛒!', {
      position: 'bottom-left',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    addProduct(el);
  }

  return (
    <>
      {/* title row */}
      <div className="flex justify-between mt-3 ml-5">
        <div className="">
          <h2 className="tracking-wide font-semibold text-lg text-center">
            Top Rated in {category}
          </h2>
        </div>
        <div className="p-2 mx-3 text-orange-500">
          <Link to={`/categories/${linkTo}`}>
            See more <MoreHorizIcon className="text-orange-500" />
          </Link>
        </div>
      </div>

      {/* Grid List */}
      <div className="flex flex-no-wrap justify-around overflow-hidden p-5">
        <GridList className="">
          {lists.map((el) => (
            <GridListTile key={el.id}>
              <img src={el.image} alt={el.title} className="object-contain" />

              <GridListTileBar
                title={el.title}
                actionIcon={
                  <IconButton
                    aria-label={`star ${el.title}`}
                    onClick={
                      user
                        ? () => handleClick(el)
                        : () => history.push('/login')
                    }
                  >
                    {user ? (
                      <AddShoppingCartIcon className="text-white hover:text-orange-400" />
                    ) : (
                      <VpnKeyIcon className="text-white hover:text-orange-400" />
                    )}
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </>
  );
};

export default TopRated;
