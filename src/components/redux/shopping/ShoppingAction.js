import { PRODUCT_ITEM } from "./ShoppingTypes";
import { ADD_TO_CART } from "./ShoppingTypes";
import { REMOVE_FROM_CART } from "./ShoppingTypes";
import { ADJUST_QTY } from "./ShoppingTypes";
import { LOAD_CURRENT_ITEM } from "./ShoppingTypes";

// this is action type...
export const products = (item) => {
  return {
    type: PRODUCT_ITEM,
    payload: item,
  };
};

export const addToCart = (itemId) => {
  return {
    type: ADD_TO_CART,
    payload: {
      id: itemId,
    },
  };
};
export const removeFromCart = (itemId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      id: itemId,
    },
  };
};

export const adjustQty = (itemId, value) => {
  return {
    type: ADJUST_QTY,
    payload: {
      id: itemId,
      qty: value,
    },
  };
};
export const loadCurrentItem = (item, value) => {
  return {
    type: LOAD_CURRENT_ITEM,
    payload: item,
  };
};
