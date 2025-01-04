import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./rootRedcuer";
import { authApi } from "@/features/api/authApi";


export const appstore = configureStore({  
    reducer: rootReducer,
    middleware: (defaultMiddleware) => defaultMiddleware().concat(authApi.middleware),
    });  