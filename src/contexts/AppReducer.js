export default (state, { type, payload }) => {
  switch (type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        basket: [...state.basket, payload],
      };

    case 'DELETE_PRODUCT':
      return {
        ...state,
        basket: state.basket.filter((product) => product.id !== payload),
      };

    default:
      return state;
  }
};
