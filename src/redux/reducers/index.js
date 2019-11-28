import { combineReducers } from "redux";
import cakeReducer from "./cakeReducers";
import iceCreamReducer from "./iceCreamReducers";
import postReduceres from "./postReduceres";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  posts: postReduceres
});

export default rootReducer;
