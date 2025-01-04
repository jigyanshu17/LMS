import { combineReducers } from "@reduxjs/toolkit"
import authReducer from "../features/authslice.js"
import { authApi } from "@/features/api/authApi"


const rootReducer = combineReducers({
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer
})

export default rootReducer