import {combineReducers, configureStore, ThunkDispatch} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import {countriesApi} from "../api/countriesApi";
import {countryReducer} from "./reducers/countryReducer/countryReducer";
import {SetCountryAT} from "./reducers/countryReducer/CountryActionTypes";
import {appReducer} from "./reducers/appReducer/appReducer";
import {AppReducerActionTypes} from "./reducers/appReducer/appReducer-types";


const rootReducer = combineReducers({
    app: appReducer,
    country: countryReducer,

    // RTK Query
    [countriesApi.reducerPath]: countriesApi.reducer

})

type ReduxActionType = AppReducerActionTypes | SetCountryAT

export const store = configureStore({
    reducer: rootReducer,
    middleware: (gDM) => gDM()
        .concat(countriesApi.middleware)
});

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatchType = ThunkDispatch<RootState, unknown, ReduxActionType>