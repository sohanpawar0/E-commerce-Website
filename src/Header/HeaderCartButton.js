import React  from 'react'



// import CartIcon from '../Cart/CartIcon'
// import CartContext from '../Store/Cart-Context';
import classes from './HeaderCartButton.module.css';

export default function HeaderCartButton(props) {


   

 
    
//     let quantity=cartctx.items.reduce((curr,item)=>{
//         return curr+item.quantity
//     },0);

//    console.log("cartLength ",cartLength)

return (
    <div>
        <button className={classes.button} onClick={props.onClick}>
        <span>Cart </span>
        {/* <span className={classes.badge}>{quantity}</span> */}
        
         </button>
         
      
    </div>
  )
}
