/* eslint-disable  */
import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/productReducer";

const AppContext = createContext();

const API = "/api/v1/product";

const AppProvider = ({ children }) => {
  const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    singleProduct: {},
    newArrivalProducts: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;

      dispatch({ type: "PRODUCTS", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url, { withCredentials: true });
      const singleProduct = await res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  const getNewArrivalProducts = async () => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get("/api/v1/newarrivals");
      const newArrivalProducts = await res.data;
      // console.log(newArrivalProducts);
      dispatch({
        type: "SET_NEW_ARRIVAL_PRODUCTS",
        payload: newArrivalProducts,
      });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  const getBestsellers = async () => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get("api/v1/bestsellers");
      const bestsellingProducts = await res.data;

      dispatch({
        type: "SET_BESTSELLERS_PRODUCTS",
        payload: bestsellingProducts,
      });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  useEffect(() => {
    getNewArrivalProducts();
    getBestsellers();
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        getSingleProduct,
        getNewArrivalProducts,
        getBestsellers,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
