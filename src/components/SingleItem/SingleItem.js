import React from "react";
import { connect } from "react-redux";
import "./SingleItem.css";
// import Button from "@material-ui/core/Button";
import { Button } from "@mui/material";
import { addToCart } from "../../components/redux/shopping/ShoppingAction";

const SingleItem = ({ currentItem, addToCart }) => {
  console.log(currentItem);
  return (
    // <
    <div className="singleProductContainer">
      <div className="singleProductContainer-image">
        <img src={currentItem.image} alt={currentItem.title} />
      </div>
      <hr />
      <div className="singleProductContainerContent">
        {/* <div className="">
          <h2>{itemData.title}</h2>
          <p>{itemData.des}</p>
          <h3>₹{itemData.price}</h3>
          <p>Quantity: {itemData.qty}</p>
        </div> */}
        <table>
          <tr>
            <th>Product Name:</th>
            <td>
              <h2>{currentItem.title}</h2>
            </td>
          </tr>
          <tr>
            <th>Description:</th>
            <td>
              <p>{currentItem.des}</p>
            </td>
          </tr>
          <tr>
            <th>Price:</th>
            <td>
              <p>₹ {currentItem.price}</p>
            </td>
          </tr>
          <tr>
            <th>Memory:</th>
            <td>
              <p>{currentItem.Memory}</p>
            </td>
          </tr>
          <tr>
            <th></th>
            <td style={{ float: "right" }}>
              {/* <button>Add To Cart</button> */}
              <Button
                onClick={() => addToCart(currentItem.id)}
                // onClick={() => addToCart(currentItem.id)}
                color="secondary"
                variant="contained"
              >
                Add To Cart
              </Button>
            </td>
          </tr>
          {/* <tr>
            <th></th>
            <td>
              <button>Remove from cart</button>
            </td>
          </tr> */}
        </table>
        {/* <table
          style={{
            borderWidth: "1px",
            borderColor: "red",
            borderStyle: "solid",
          }}
        >
          <tr>
            <th>
              <h4>Product Name:</h4>
            </th>
            <td>{currentItem.title}</td>
          </tr>
          <tr>
            <th>
              <h4>Product Des:</h4>
            </th>
            <td>{itemData.des}</td>
          </tr>
          <tr>
            <th>
              <h4>Product Price:</h4>
            </th>
            <td>{itemData.price}</td>
          </tr>
          <tr>
            <th>
              <h4>Quantity:</h4>
            </th>
            <td>{itemData.qty}</td>
          </tr>
        </table> */}
        {/* <table>
          <thead>
            <tr>
              <th>Product Name:</th>
              <td>{itemData.title}</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Product Des:</th>
              <td>{itemData.des}</td>
            </tr>
            <tr>
              <th>Product price:</th>
              <td>{itemData.price}</td>
            </tr>
            <tr>
              <th>Quantity</th>
              <td>{itemData.qty}</td>
            </tr>
           
          </tbody>
        </table> */}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    currentItem: state.shop.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);
