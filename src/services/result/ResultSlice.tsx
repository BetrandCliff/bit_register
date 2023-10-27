import { createSlice } from "@reduxjs/toolkit";
import { Result } from "./model/result";

const initialState:Result={
    result: 0
}

const resultSlice = createSlice({
    name :"result",
    initialState,
    reducers:{},
    extraReducers(builder) {
        
    },

})