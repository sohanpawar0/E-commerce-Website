import { createSlice } from "@reduxjs/toolkit";

const initialCartState={
    showCart:false
}

const cartSlice=createSlice({
    name:"cart",
    initialState: initialCartState,
    reducers:{
        showCart(state){
            console.log("open")
            state.showCart=true
        },
        hideCart(state){
            console.log("close")
            state.showCart=false
        }
    }
})

export const cartActions=cartSlice.actions

export default cartSlice.reducer;