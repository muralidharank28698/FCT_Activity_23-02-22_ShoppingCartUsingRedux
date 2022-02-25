import React from "react";
import "./ProductContainer.css";
import { connect } from "react-redux";
import { buyproduct } from "../redux";

function Product(props) {
  console.log(props);
  console.log(props.title);
  return (
    // <div className="productContainer">
    //   Products
    //   {/* <img src="https://m.media-amazon.com/images/I/51320C1CrsL._SL1000_.jpg" /> */}
    // </div>
    <div></div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyproduct: () => dispatch(buyproduct()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Product);
