import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
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
            <div className="headerContainer_AddToCart_Count">1</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
