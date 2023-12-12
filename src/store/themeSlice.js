import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: 'theme',
    initialState: { value: "", icon: "" }, 
    reducers: {
        resetTheme: (state) => {
            state.value = ""; // 
        },
        choosenTheme: (state, action) => {
            const {value, icon} = action.payload
            state.value = value; 
            state.icon = icon;
        }
    }
});

export const { resetTheme, choosenTheme } = themeSlice.actions;
export default themeSlice.reducer;
