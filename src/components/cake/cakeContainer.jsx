import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../../redux/actions/cakeActions";

function CakeContainer(props) {
  return (
    <div>
      <h2>Number of cakes - {props.numbOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    numbOfCakes: state.cake.numbOfCakes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
