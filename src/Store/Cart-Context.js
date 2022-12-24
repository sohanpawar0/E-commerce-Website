import React from "react";
//all data store inside of cart-context
const CartContext=React.createContext({
    token:'',
    isLoggedin:false,
    login:(token)=>{},//if i got right token by authancation token
    items: [],
    addItem: (item)=>{},// connect with addtocarthandler (Cart-provider)
    removeItem: (id)=>{}// connect with removefromCartHandler(Cart-provider)
});

export default CartContext;