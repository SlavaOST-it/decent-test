import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CountryType} from "../../../api/types/countryType";

const initialState = {
    country: null as CountryType | null
}

const slice = createSlice({
    name: 'country',
    initialState,

    selectors:{
        selectCountry: state => state.country,
    },

    reducers: {
        setCountry(state, action: PayloadAction<{ country: CountryType }>) {
            state.country = action.payload.country
        }
    }
})

export const countryReducer = slice.reducer
export const {setCountry} = slice.actions
export const {selectCountry} = slice.selectors