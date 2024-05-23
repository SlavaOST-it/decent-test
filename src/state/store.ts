import {combineReducers, configureStore} from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk'
import {setupListeners} from "@reduxjs/toolkit/query";
import {countriesApi} from "../api/countriesApi";


const rootReducer = combineReducers({
    // RTK Query
    [countriesApi.reducerPath]: countriesApi.reducer

})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (gDM) => gDM()
        .concat(countriesApi.middleware)
});

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch