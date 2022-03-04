import React, { useEffect, useState } from "react";
import CartItem from "./cartitem/CartItem";
import { connect } from "react-redux";
import { Button } from "@mui/material";
import "./CartSummary.css";

const Cart = ({ cart }) => {
  // console.log(cart);
  // console.log(typeof cart);
  // console.log(cart.title);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;
    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
      console.log(price);
    });

    setTotalPrice(price);
    setTotalItems(items);
  }, [cart, totalPrice, totalItems, setTotalItems, setTotalPrice]);
  // console.log(price);
  return (
    <div>
      <div>
        {cart.map((cart) => {
          return <CartItem key={cart.id} itemData={cart} />;
        })}
        {/* {cart.map((item) => (
        <CartItem key={item.id} itemData={item} />
      ))} */}
        {/* <CartItem /> */}
      </div>
      <div className="CartSummary">
        <div className="CartSummary-content">
          <h4>cart summary</h4>
          <br />
          <span>Total: ({totalItems})</span>
          <br />
          <br />
          <span>$: {totalPrice}</span>
        </div>
        <div className="CartSummary-button">
          <Button color="success" variant="contained">
            Proceed to Buy
          </Button>
        </div>
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

export default connect(mapStateToProps)(Cart);

// export default Carts;
