import { PRODUCT_ITEM } from "./ShoppingTypes";
import vivo from "../../../assets/cartImage/vivo.png";
import oppo from "../../../assets/cartImage/oppo.png";
import redmi from "../../../assets/cartImage/redmi.png";
const initialState = {
  products: [
    {
      id: 1,
      title: "Vivo S1",
      des: "Vivo S1 (Skyline Blue, 4GB RAM, 128GB Storage)",
      price: "14,899",
      image: vivo,
    },
    {
      id: 2,
      title: "Oppo A53",
      des: "Oppo A53 128 GB, 6 GB RAM, Electric Black, Smartphone",
      price: "12,999",
      image: oppo,
    },
    {
      id: 3,
      title: "Redmi Note 11T 5G ",
      des: "Redmi Note 11T 5G (Matte Black 8GB RAM 128GB ROM) | Dimensity 810 5G",
      price: "18,999",
      image: redmi,
    },
  ],
};

const Shopreducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_ITEM:
      return {
        ...state,
        products: state.products,
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
