import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "../Cart/Cart";
import Header from "../Header/Header";
import Header2 from "../Header/Header2";
import Product from "../Products/Product";
import CartProvider from "../Store/Cart-Provider";
import { cartActions } from "../Store/CartSlice";

const ProductPage = () => {
  // const [showCart, setShowCart] = useState(false);
 const cart= useSelector(state=>state.cart.showCart)
 const dispatch= useDispatch()


  const showCartHandler = () => {
    // setShowCart(true);
    dispatch(cartActions.showCart())
  };
  const hideCartHandler = () => {
    // setShowCart(false);
    dispatch(cartActions.hideCart())
  };
  return (
    <>
      <CartProvider>
        <Header onShowCart={showCartHandler} />
        <Header2 />
        <Product />
        {cart && <Cart onClose={hideCartHandler} />}
      </CartProvider>
    </>
  );
};

export default ProductPage;
