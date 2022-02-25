import { combineReducers } from "redux";
import Shopreducer from "./shopping/ShoppingReducer";

const rootReducer = combineReducers({
  shop: Shopreducer,
});

export default rootReducer;
