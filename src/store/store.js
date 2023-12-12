import { configureStore } from "@reduxjs/toolkit";
import scoreReducer from "./scoreSlice"
import themeReducer from "./themeSlice"

export const store = configureStore({
    reducer:{
        score: scoreReducer,
        theme: themeReducer
    }
})
