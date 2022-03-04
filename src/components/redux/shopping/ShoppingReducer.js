import { PRODUCT_ITEM } from "./ShoppingTypes";
import { ADD_TO_CART } from "./ShoppingTypes";
import { REMOVE_FROM_CART } from "./ShoppingTypes";
import { ADJUST_QTY } from "./ShoppingTypes";
import { LOAD_CURRENT_ITEM } from "./ShoppingTypes";

import vivo from "../../../assets/cartImage/vivo.png";
import oppo from "../../../assets/cartImage/oppo.png";
import redmi from "../../../assets/cartImage/redmi.png";
import poco from "../../../assets/cartImage/poco.png";
import { act } from "react-dom/test-utils";

const initialState = {
  products: [
    {
      id: 1,
      title: "Vivo S1",
      des: "Vivo S1 (Skyline Blue, 4GB RAM, 128GB Storage)",
      price: "14,899",
      image: vivo,
      Memory: "1000 GB",
    },
    {
      id: 2,
      title: "Oppo A53",
      des: "Oppo A53 128 GB, 6 GB RAM, Electric Black, Smartphone",
      price: "12,999",
      image: oppo,
      Memory: "1000 GB",
    },
    {
      id: 3,
      title: "Redmi Note 11T 5G ",
      des: "Redmi Note 11T 5G (Matte Black 8GB RAM 128GB ROM) | Dimensity 810 5G",
      price: "18,999",
      image: redmi,
      Memory: "1000 GB",
    },
    {
      id: 4,
      title: "POCO M4 Pro ",
      des: "POCO M4 Pro (Cool Blue, 64 GB)  (6 GB RAM)",
      price: "14,999",
      image: poco,
      Memory: "800 GB",
    },
  ],
  cart: [],
  currentItem: null,
};

const Shopreducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_ITEM:
      return {
        ...state,
        products: state.products,
      };
    case ADD_TO_CART:
      const item = state.products.find((prod) => prod.id === action.payload.id);
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [
              ...state.cart,
              {
                ...item,
                qty: 1,
              },
            ],
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case ADJUST_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};
export default Shopreducer;

// previous trying...

// import { BUY_PRODUCT } from "./ShoppingTypes";

// // Need to know yourself...
// // reducer is a function...

// // In reducer first we need to create a initial state that is an object...
// // let create an object...
// const initialState = {
//   products: [
//     {
//       id: 1,
//       title: "vivo",
//       price: 20000,
//       image: "https://m.media-amazon.com/images/I/51320C1CrsL._SL1000_.jpg",
//     },
//     {
//       id: 1,
//       title: "oppo",
//       price: 40000,
//       image:
//         "https://image.oppo.com/content/dam/oppo/pk/mkt/homepage/top/f17-pro/F17-pro-navigation-blue-v2.png",
//     },
//   ],
// };

// // define reducer function...
// const Shopreducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_PRODUCT:
//       return {
//         ...state,
//         products: state.products,
//       };
//     default:
//       return state;
//   }
// };
// export default Shopreducer;
