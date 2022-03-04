import React, { useState } from "react";
import "./CartItem.css";
import { Button } from "@mui/material";

import { connect } from "react-redux";
import { removeFromCart, adjustQty } from "../../redux/shopping/ShoppingAction";

function CartItem({ itemData, removeFromCart, adjustQty }) {
  // console.log(itemData);
  // console.log(itemdata.title);
  const [input, setInput] = useState(itemData.qty);

  const onChangeHandler = (e) => {
    // console.log(e.target.value);
    setInput(e.target.value);
    adjustQty(itemData.id, e.target.value);
  };

  return (
    // <div className="">
    //   <div className="">
    //     <img src={itemData.image} alt="Vivo" />
    //   </div>
    //   <div className="">
    //     <div className="">
    //       <h2>{itemData.title}</h2>
    //       <p>{itemData.des}</p>
    //       <h3>₹{itemData.price}</h3>
    //       <p>Quantity: {itemData.qty}</p>
    //       {/* <button onClick={() => addToCart(itemData.id)}>Add to Cart</button> */}
    //     </div>
    //   </div>
    // </div>
    <div className="contianer">
      <div className="container_image">
        <img src={itemData.image} alt="Vivo" />
      </div>
      <hr />
      <div className="container_description">
        <div className="container_description_content">
          <h2>{itemData.title}</h2>
          <p>{itemData.des}</p>
          <input
            type="number"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
          <h3>₹ {itemData.price}</h3>

          {/* <Link to={`/product/${itemData.id}`}>
            <button onClick={() => loadCurrentItem(itemData)}>View Item</button>
          </Link> */}
          {/* <button onClick={() => removeFromCart(itemData.id)}>Remove</button> */}

          <Button
            onClick={() => removeFromCart(itemData.id)}
            color="warning"
            variant="contained"
          >
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    adjustQty: (id, value) => dispatch(adjustQty(id, value)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
