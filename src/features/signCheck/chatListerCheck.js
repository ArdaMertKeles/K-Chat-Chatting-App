import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: true,
}

export const isListSlice = createSlice({
    name: 'listerCheck',
    initialState,
    reducers:{
        isListTrue: (state) => {
            state.value = true
        },
        isListFalse: (state) => {
            state.value = false
        }
    }
})

export const { isListTrue, isListFalse } = isListSlice.actions

export default isListSlice.reducer