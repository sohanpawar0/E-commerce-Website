import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../Store/Cart-Context";
// import classes from './ProductItem.module.css'

export default function ProductItem(props) {
  const cartCtx = useContext(CartContext);

  const addItemToCart = (event) => {
    event.preventDefault();

    const data = {
      key: props.id,
      title: props.title,
      price: props.price,
      id:props.id,
      _id: props._id,
      url: props.url,
      quantity: props.quantity,
    };

    // cartCtx.addItem(data);

    fetch(
      "https://crudcrud.com/api/bdd31eec10cc416790c0a6e88827f671/carttestgmailcom",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
         // if (data.id == props.id) {
        //   alert("Item already added");
        //   return data;
        // }
        cartCtx.addItem(data);// got data from cartContext to bucket (cart and crud-crud)
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <form onSubmit={addItemToCart}>
      <div>
        <Link to="/productdetails/:productName">
          <h2>{props.title}</h2>
          <div>
            <img src={props.url} alt="img"></img>
          </div>
        </Link>
        <div>${props.price}</div>
        <button>Add to Cart</button>
      </div>
    </form>
  );
}
