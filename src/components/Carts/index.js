import React from "react";
import CartItem from "./cartitem/CartItem";
import { connect } from "react-redux";

const Cart = ({ cart }) => {
  // console.log(cart);
  // console.log(typeof cart);
  // console.log(cart.title);
  return (
    <div>
      {cart.map((cart) => {
        return <CartItem key={cart.id} itemData={cart} />;
      })}
      {/* {cart.map((item) => (
        <CartItem key={item.id} itemData={item} />
      ))} */}
      {/* <CartItem /> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);

// export default Carts;
