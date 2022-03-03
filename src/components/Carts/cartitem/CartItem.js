import React from "react";
// import "./CartItem.css";

function CartItem({ itemData }) {
  // console.log(itemData);
  // console.log(itemdata.title);
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
          <h3>₹ {itemData.price}</h3>
          Qty:
          <input
            style={{
              width: "120px",
              height: "40px",
              borderRadius: "30%",
              textAlign: "center",
              marginTop: "30px",
              marginLeft: "20px",
            }}
            type="text"
            name="qty"
            value={itemData.qty}
          />
          {/* <Link to={`/product/${itemData.id}`}>
            <button onClick={() => loadCurrentItem(itemData)}>View Item</button>
          </Link> */}
          <button>Remove</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
