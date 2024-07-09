import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    SET_PAGE
  } from '../actions/types';
  
  const initialState = {
    products: [],
    loading: false,
    error: '',
    currentPage: 1
  };
  
  const productReducers = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_PRODUCTS_REQUEST:
        return {
          ...state,
          loading: true,
          error: ''
        };
      case FETCH_PRODUCTS_SUCCESS:
        return {
          ...state,
          loading: false,
          products: action.payload.products,
          currentPage: action.payload.currentPage,
          error: ''
        };
      case FETCH_PRODUCTS_FAILURE:
        return {
          ...state,
          loading: false,
          products: [],
          error: action.payload.error
        };
      case SET_PAGE:
        return {
          ...state,
          currentPage: action.payload
        };
      default:
        return state;
    }
  };
  
  export default productReducers;
  