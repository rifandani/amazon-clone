import React, { createContext, useReducer } from 'react';
// files
import AppReducer from './AppReducer';

// product initial state
const initialState = {
  basket: [],
};

// create product context to consume
export const ProductContext = createContext(initialState);

// Product Context Provider
export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function addProduct(product) {
    dispatch({
      type: 'ADD_PRODUCT',
      payload: product,
    });
  }

  function deleteProduct(productId) {
    dispatch({
      type: 'DELETE_PRODUCT',
      payload: productId,
    });
  }

  return (
    <ProductContext.Provider
      value={{
        basket: state.basket,
        user: state.user,
        addProduct,
        deleteProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
