import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
    mode: "dark"
};

export const globalSlice = createSlice ({
    name: "global",
    initialState, 
    reducers:{
        setMode: (state) => {
            
        }
    }
})