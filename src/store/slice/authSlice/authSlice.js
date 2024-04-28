import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState : {
        isLoggIn: false,
        userLog: []
    },
    reducers: {
        login : (state, action) => {
            const person = action.payload
            state.isLoggIn = true;
            state.userLog.push({
                email: person.email,
                
            })
        },
        logout(state){
            state.isLoggIn = false;
        }
    },
  })


  export const { 
    login,
    logout

  } = authSlice.actions;
  