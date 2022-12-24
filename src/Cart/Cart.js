import React, { useContext } from "react";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";
import { useEffect } from "react";
import { useState } from "react";
import { useCallback } from "react";
import CartContext from "../Store/Cart-Context";

const Cart = (props) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const cartcntx = useContext(CartContext);
  const length = products.length;
  
  const purchaseItemHandler = () => {
    alert("Thanks for shopping item will be delivered soon.....");
   
  };

  let total = 0;

  products.forEach((item) => {
    total = total + Number(item.price) * Number(item.quantity);
  });
  total = `$ ${total.toFixed(2)}`;

  useEffect(() => {
    getProductData();
  }, []);

  const getProductData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://crudcrud.com/api/bdd31eec10cc416790c0a6e88827f671/carttestgmailcom"
      );
      if (!response.ok) {
        throw new Error("Something went wrong....");
      }

      const data = await response.json();
      setProducts(data);
    } catch (err) {
      console.log(err.message);
    }

    setIsLoading(false);
  }, []);
  console.log("cartitem",cartcntx.items)

//   const removeItemHandler=(item)=>{
//     if(item.length>1){
//     cartcntx.addItem({...item,quantity:-1})
//     }
//     else
//     cartcntx.removeItem(item)
// }

  return (
    <Modal onClose={props.onClose}>
      <div>
        <button onClick={props.onClose}>Close</button>
      </div>
      {products.map((item) => (
        <CartItem
          key={item.id}
          title={item.title}
          _id={item._id}
          price={item.price}
          url={item.url}
          id={item.id}
          quantity={item.quantity}
           />
      ))}
      <div>
        <products>Total Amount: {total}</products>
        
      </div>

      {<button onClick={purchaseItemHandler}>Purchase</button>}
    </Modal>
  );
};

export default Cart;
