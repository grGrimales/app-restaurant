import { createStore, combineReducers } from "redux";
import ProductsReducer from "./reducers/Products.reducer";

const RootReducer = combineReducers({
  products: ProductsReducer,
});

export default createStore(RootReducer);
