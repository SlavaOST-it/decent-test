import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {CountryType} from "./types/countryType";


export const countriesApi = createApi({
    reducerPath: "countriesApi",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_BASE_URL,
        method: 'GET',
    }),

    endpoints: (build) => ({
        getAllCountries: build.query<CountryType[], {}>({
            query: () => ({
                url: 'all'
            })
        }),
    })
});

export const {
    useGetAllCountriesQuery,
} = countriesApi
