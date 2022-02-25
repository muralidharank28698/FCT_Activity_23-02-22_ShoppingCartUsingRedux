import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./RootReducer";
// import ProductReducer from "./shopping/ShoppingReducer";

// In store we can create a createStore method
const store = createStore(rootReducer, composeWithDevTools());

export default store;
