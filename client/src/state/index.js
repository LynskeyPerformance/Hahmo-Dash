//creating function that allows us to change the mode from dark to light 
import { createSlice } from "@reduxjs/toolkit"; 
const initialState = {
    mode: "dark",
    userId: "63701cc1f03239b7f700000e"
};

// this is the redux toolkit 
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