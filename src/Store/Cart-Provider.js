import React from "react";
import { useState } from "react";
import CartContext from "./Cart-Context";

// const defaultCartState = {
//   items: [],
// };
// const cartReducer = (state, action) => {
//   if (action.type === "ADD") {
//     const existingCartItemIndex = state.items.findIndex(
//       (item) => item.id === action.item.id
//     );
//     const existingCartItem = state.items[existingCartItemIndex];
//       console.log(existingCartItemIndex)
//     let updatedItems;

//     if (existingCartItem) {
//       alert("Item is already added");
//       // return { items: state.items };
//     } else {
//       updatedItems = state.items.concat(action.item);
//       return { items: updatedItems };
//     }
//   }

//   let updatedItems;
//   if (action.type === "REMOVE") {
//     updatedItems = state.items.filter((item) => item.id !== action.id);

//     return { items: updatedItems };
//   }
//   return defaultCartState;
// };
// const CartProvider = (props) => {
//   const [isLoggedin, setIsLoggedin] = useState(false);
//   const [cartState, dispatchCartAction] = useReducer(
//     cartReducer,
//     defaultCartState
//   );
//   const intialToken = localStorage.getItem("token");
//   const [token, setToken] = useState(intialToken);

//   const addItemToCartHandler = (item) => {
//     dispatchCartAction({ type: "ADD", item: item });
//   };

//   const removeItemFromCartHandler = (id) => {
//     dispatchCartAction({ type: "REMOVE", id: id });
//   };

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [token, setToken] = useState(intialToken);

  const addItemToCartHandler = (item) => {
    let hasItem = false;
    //addItemToCartHandler = 1/chack ki item is alredy oncart or not than givr permition to add

    const newItemArray = [...items];
    newItemArray.forEach((element, index) => {
      if (item.id === element.id) {
        hasItem = true;
        // newItemArray[index].quantity=Number(newItemArray[index].quantity)+Number(item.quantity);
        alert("Item already added");
      }
    });

    if (hasItem === false) updateItems([...items, item]);//spred operator to add new item
    else updateItems(newItemArray);
  };


  const removeItemFromCartHandler = (id) => {
    let newItemArray = [...items];
    console.log("id", id);
    const index=newItemArray.findIndex((element) => {
       return element.id==id;

        // console.log("eleid",element.id)
       
      }
    );
    newItemArray.splice(index, 1);
    console.log("newItem",newItemArray,index)
    updateItems(newItemArray);
  };

  const intialToken = localStorage.getItem("token");
  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.getItem("token");

    setIsLoggedin(true);
  };
  const cartContext = {
    items: items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    token: userIsLoggedIn,
    isLoggedin: isLoggedin,
    login: loginHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
