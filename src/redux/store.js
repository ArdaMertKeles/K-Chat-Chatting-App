import { configureStore } from "@reduxjs/toolkit";
import signCheckReducer from "../features/signCheck/signCheck";
import forgetPasswordCheckReducer from '../features/signCheck/forgetPasswordCheck'
import listerCheckReducer from '../features/signCheck/chatListerCheck'

export const store = configureStore({
    reducer: {
        signCheck: signCheckReducer,
        forgetPasswordCheck: forgetPasswordCheckReducer,
        listerCheck: listerCheckReducer
    },
})