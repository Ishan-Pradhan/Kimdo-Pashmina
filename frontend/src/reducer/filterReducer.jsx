const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS": {
      const priceArr = Array.isArray(action.payload)
        ? action.payload.map((curEl) => curEl.price)
        : [];
      const maxPrice = Math.max(...priceArr);

      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters: { ...state.filters, maxPrice, price: maxPrice },
      };
    }

    case "UPDATE_FILTERS_VALUE": {
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };
    }

    case "FILTER_PRODUCTS": {
      const { all_products } = state;
      let tempFilterProduct = [...all_products];

      const { text, generalCategory, price } = state.filters;

      if (text) {
        tempFilterProduct = tempFilterProduct.filter((curEl) => {
          return curEl.productName.toLowerCase().includes(text.toLowerCase());
        });
      }

      if (generalCategory !== "All") {
        tempFilterProduct = tempFilterProduct.filter((curEl) => {
          return curEl.generalCategory === generalCategory;
        });
      }

      if (price === 0) {
        tempFilterProduct = tempFilterProduct.filter(
          (curEl) => curEl.price === price
        );
      } else {
        tempFilterProduct = tempFilterProduct.filter(
          (curEl) => curEl.price <= price
        );
      }

      return {
        ...state,
        filter_products: tempFilterProduct,
      };
    }

    default:
      return { ...state };
  }
};

export default filterReducer;
