import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState : {
      itemList: [],
      totalQuantity: 0,
    },
    reducers: {
      addCart: ( state, action ) => {

        const newItem = action.payload

        const existItem = state.itemList.find((item) => item.id === newItem.id)

        if (existItem) {
          existItem.qty++   
          existItem.totalPrice =Math.round((existItem.totalPrice + newItem.price) * 100) / 100;
        } else {
          state.itemList.push({
            id:newItem.id,
            price:newItem.price,
            qty:1,
            totalPrice:Math.round(newItem.price*100)/100,
            name:newItem.name,
            cover:newItem.cover
          })
          state.totalQuantity++
        }
      },
      removeItem: (state, action) =>{
        const id = action.payload

        const findItem = state.itemList.find((item) => item.id ===id)

        if(findItem.qty ===1){
        state.itemList = state.itemList.filter((item) => item.id !== id)
        state.totalQuantity--
        } else {
          findItem.qty--
          findItem.totalPrice = Math.round((findItem.totalPrice - findItem.price)*100)/100
        }
      }
    },
  })


  export const { 
    addCart,
    removeItem
  } = cartSlice.actions;
  