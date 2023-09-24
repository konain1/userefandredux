

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : 10
}


const couterslice = createSlice({

    name:'coutersliceRed',
    initialState,
    reducers:{
        addcounter:(state,action)=>{
            state.value = action.payload;
        }
    }
})

export default couterslice.reducer
export const {addcounter} = couterslice.actions