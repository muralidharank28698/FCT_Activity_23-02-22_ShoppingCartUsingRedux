import React from "react";
import "./Product.css";
import { Button } from "@mui/material";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

import {
  addToCart,
  loadCurrentItem,
} from "../../redux/shopping/ShoppingAction";

const Product = ({ productData, addToCart, loadCurrentItem }) => {
  // console.log(productData);
  return (
    <div className="contianer">
      <div className="container_image">
        <img src={productData.image} alt="Vivo" />
      </div>
      <hr />
      <div className="container_description">
        <div className="container_description_content">
          <h2>{productData.title}</h2>
          <p>{productData.des}</p>
          <h3>₹ {productData.price}</h3>

          <Link to={`/product/${productData.id}`}>
            {/* <button onClick={() => loadCurrentItem(productData)}>
              View Item
            </button> */}
            <Button
              onClick={() => loadCurrentItem(productData)}
              color="success"
              variant="contained"
            >
              View Item
            </Button>
          </Link>

          <Button
            onClick={() => addToCart(productData.id)}
            color="primary"
            variant="contained"
          >
            Add To Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  // console.log(state);
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Product);

// {
/* <div className="contianer">
<div className="products">
  <div className="product_Container">
    <div className="product_Container_image">
      <img src={productData.image} alt="oppo" />
    </div>
    <hr></hr>
    <div className="product_Container_content">
      <h2>{productData.title}</h2>
      <p>{productData.des}</p>
      <p>₹{productData.price}</p>
      <button>View Item</button>
      <button>Add to Cart</button>
    </div>
  </div>
</div>
</div> */
// }
