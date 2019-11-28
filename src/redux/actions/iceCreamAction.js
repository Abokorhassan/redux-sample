import { BUY_ICECREAM } from "../actions/types";

export const buyIceCream = () => {
  console.log("fetching");
  return {
    type: BUY_ICECREAM
  };
};
