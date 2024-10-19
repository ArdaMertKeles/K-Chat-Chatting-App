import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: true,
}

export const isSignSlice = createSlice({
    name: 'signCheck',
    initialState,
    reducers:{
        isSignTrue: (state) => {
            state.value = true
        },
        isSignFalse: (state) => {
            state.value = false
        }
    }
})

export const { isSignTrue, isSignFalse } = isSignSlice.actions

export default isSignSlice.reducer