// src/actions/productActions.js
import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    SET_PAGE
  } from './types';
  
  export const fetchProducts = (page = 1, limit = 5) => {
    return async (dispatch) => {
      dispatch({ type: FETCH_PRODUCTS_REQUEST });
  
      try {
        const response = await fetch(`https://fakestoreapi.com/products?limit=${limit}&page=${page}`);
        const data = await response.json();
  
        dispatch({
          type: FETCH_PRODUCTS_SUCCESS,
          payload: { products: data, currentPage: page }
        });
      } catch (error) {
        dispatch({
          type: FETCH_PRODUCTS_FAILURE,
          payload: { error: error.message }
        });
      }
    };
  };
  
  export const setPage = (page) => {
    return {
      type: SET_PAGE,
      payload: page
    };
  };
  