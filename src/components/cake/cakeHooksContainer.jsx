import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../../redux";

function CakeHooksContainer() {
  const numbOfCakes = useSelector(state => state.cake.numbOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of cakes - {numbOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
}

export default CakeHooksContainer;
