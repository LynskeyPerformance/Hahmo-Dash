//creating function that allows us to change the mode from dark to light 
import { createSlice } from "@reduxjs/toolkit"; 
const initialState = {
    mode: "dark"
};

export const globalSlice = createSlice ({
    name: "global",
    initialState, 
    reducers: {
        //function that changes the 'global (everywhere)' state 
        setMode: (state) => {
             state.mode = state.mode === 'light' ? 'dark' : 'light'; 
        }
    }
})

export const { setMode } = globalSlice.actions; 
export default globalSlice.reducer; 