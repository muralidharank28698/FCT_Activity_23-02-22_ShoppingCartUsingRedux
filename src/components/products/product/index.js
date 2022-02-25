import React from "react";
import "./Product.css";

const Product = ({ productData }) => {
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
          <button>View Item</button>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;

{
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
}
