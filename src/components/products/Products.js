import React from "react";

import { connect } from "react-redux";
import Product from "./product";

const Products = ({ products }) => {
  // console.log(products);
  return (
    <div>
      {products.map((prod) => {
        return <Product key={prod.id} productData={prod} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);
