import { PRODUCT_ITEM } from "./ShoppingTypes";

// this is action type...
export const products = (item) => {
  return {
    type: PRODUCT_ITEM,
    payload: item,
  };
};
