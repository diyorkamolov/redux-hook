// src/store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import productReducers from './reducers/productReducers';

const rootReducer = combineReducers({
  products: productReducers
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
