import { BUY_CAKE } from "../actions/types";

const initialState = {
  numbOfCakes: 10
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numbOfCakes: state.numbOfCakes - 1
      };
    default:
      return state;
  }
};

export default cakeReducer;
