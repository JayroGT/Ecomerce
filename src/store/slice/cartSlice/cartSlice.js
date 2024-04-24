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
          existItem.totalPrice += newItem.price
        } else {
          state.itemList.push({
            id:newItem.id,
            price:newItem.price,
            qty:1,
            totalPrice:newItem.price,
            name:newItem.name,
            cover:newItem.cover
          })
          state.totalQuantity++
        }
      }
    },
  })


  export const { 
    addCart
  } = cartSlice.actions;
  