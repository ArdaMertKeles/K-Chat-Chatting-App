import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: true,
}

export const isForgetSlice = createSlice({
    name: 'forgetPasswordCheck',
    initialState,
    reducers:{
        isForgetTrue: (state) => {
            state.value = true
        },
        isForgetFalse: (state) => {
            state.value = false
        }
    }
})

export const { isForgetTrue, isForgetFalse } = isForgetSlice.actions

export default isForgetSlice.reducer