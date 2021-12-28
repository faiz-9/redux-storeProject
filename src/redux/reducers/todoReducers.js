const initialState = {
  products: [],
};

export const todoReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ALL_PRODUCTS":
      console.log(action.payload);
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
};

export const singleProduct = (state = {}, action) => {
  switch (action.type) {
    case "SELECTED_PRODUCT":
      return {
        ...state,
        ...action.payload,
      };

    case "REMOVE_PRODUCT":
      return {};

    default:
      return state;
  }
};
