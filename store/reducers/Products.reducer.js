import { PRODUCTS } from "../../data/produts";
import { ALLPRODUCTS } from "../actions/products.action";

const initialState = {
  products: PRODUCTS,
};

const ProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALLPRODUCTS:
      return {
        ...state,
        products: state.products,
      };

    default:
      return state;
  }
};

export default ProductsReducer;
