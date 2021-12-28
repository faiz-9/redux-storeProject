import { combineReducers } from "redux";
import { todoReducers, singleProduct } from "./todoReducers";

const rootReducer = combineReducers({
  todoReducers: todoReducers,
  singleProduct: singleProduct,
});

export default rootReducer;
