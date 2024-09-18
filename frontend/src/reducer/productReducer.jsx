// Function declaration outside of switch statement
const filterFeaturedProducts = (payload) => {
  return Array.isArray(payload)
    ? payload.filter((curEl) => curEl.featured === true)
    : [];
};

const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: true };

    case "PRODUCTS":
      filterFeaturedProducts(action.payload);
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProducts: filterFeaturedProducts(action.payload),
      };

    case "API_ERROR":
      return { ...state, isLoading: false, isError: true };

    case "SET_SINGLE_LOADING":
      return { ...state, isSingleLoading: true };

    case "SET_SINGLE_PRODUCT":
      return {
        ...state,
        isSingleLoading: false,
        singleProduct: action.payload,
      };

    case "SET_SINGLE_ERROR":
      return { ...state, isSingleLoading: false, isError: true };

    case "SET_NEW_ARRIVAL_PRODUCTS":
      return {
        ...state,
        newArrivalProducts: action.payload,
      };

    case "SET_BESTSELLERS_PRODUCTS":
      return {
        ...state,
        bestsellersProducts: action.payload,
      };

    default:
      return state;
  }
};

export default ProductReducer;
