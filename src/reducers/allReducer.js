import { combineReducers } from "redux";
import Products from "./products";
const allReducer = combineReducers({
  products: Products
});

export default allReducer;
