export const filterByCategory = (category) => {
    return {
      type: 'FILTER_BY_CATEGORY',
      payload: category,
    };
  };

export const selectProduct = (selectedProduct) => {
  return {
    type: 'SELECT_PRODUCT',
    payload: selectedProduct,
  };
};