function cartReducer(state, action) {
  if (action.type === "ADD_TO_CART") {
    let { product } = action.payload;

    let existingProduct = state.cart.find(
      (curItem) => curItem._id === product._id
    );

    if (existingProduct) {
      return state;
    } else {
      let cartProduct;

      cartProduct = {
        _id: product._id,
        name: product.productName,
        productImg: product.productImg,
        size: product.size,
        price: product.price,
        discount: product.discount,
        max: product.stock,
        quantity: 1,
      };

      return { ...state, cart: [...state.cart, cartProduct] };
    }
  }

  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter((curEl) => curEl._id != action.payload);
    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === "SET_DECREMENT") {
    let updatedProduct = state.cart.map((curEl) => {
      if (curEl._id === action.payload) {
        let decQuantity = curEl.quantity - 1;

        if (decQuantity <= 1) {
          decQuantity = 1;
        }

        return {
          ...curEl,
          quantity: decQuantity,
        };
      } else {
        return curEl;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  if (action.type === "SET_INCREMENT") {
    let updatedProduct = state.cart.map((curEl) => {
      if (curEl._id === action.payload) {
        let IncQuantity = curEl.quantity + 1;

        if (IncQuantity >= curEl.max) {
          IncQuantity = curEl.max;
        }

        return {
          ...curEl,
          quantity: IncQuantity,
        };
      } else {
        return curEl;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  if (action.type === "CART_TOTAL_ITEM") {
    let updatedItemVal = state.cart.length;

    return {
      ...state,
      total_item: updatedItemVal,
    };
  }

  if (action.type === "CART_TOTAL_PRICE") {
    let updatedTotalPrice = state.cart.reduce((total, item) => {
      const price = item.discount
        ? item.price - (item.price * item.discount) / 100
        : item.price;

      return total + item.quantity * price;
    }, 0);

    return {
      ...state,
      total_price: updatedTotalPrice,
    };
  }
  return state;
}

export default cartReducer;
