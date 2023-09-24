
import { configureStore } from "@reduxjs/toolkit";
import couterslice from '../features/conterSlice'
export const store = configureStore({
    reducer:{
        addcounterStore:couterslice

    }
})