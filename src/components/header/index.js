import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

const Header = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });
    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <div className="headerContainer">
      <div className="headerContainer_title">
        <Link to="/" className="headerContainer_title_topic">
          <h1>
            <span>S</span>hopping Cart
          </h1>
        </Link>
      </div>
      <div className="headerContainer_AddToCart">
        <Link to="/Carts">
          <div className="headerContainer_AddToCart_cart">
            <h2>cart</h2>
            <img
              src={require("../../assets/cartImage/cart.png")}
              alt="vivo"
            ></img>
            <div className="headerContainer_AddToCart_Count">{cartCount}</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Header);
