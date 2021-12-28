export const getAllProducts = (products) => {
  return {
    type: "ALL_PRODUCTS",
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: "SELECTED_PRODUCT",
    payload: product,
  };
};

export const remove = () => {
  return {
    type: "REMOVE_PRODUCT",
  };
};
