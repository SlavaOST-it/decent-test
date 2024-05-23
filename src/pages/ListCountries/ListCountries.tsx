import React from 'react';
import {useGetAllCountriesQuery} from "../../api/countriesApi";
import {CountryCard} from "../../components";
import s from './ListCountries.module.scss'


export const ListCountries = () => {

    const {data, isLoading} = useGetAllCountriesQuery({})

    const currentCountries = data?.filter((c, index) => index <= 20)

    return (
        <div className={s.listCountries}>
            <h1>Страны мира</h1>

            <div className={s.cardsContainer}>
                {currentCountries?.map(((c,index) => (
                    <CountryCard country={c} key={index}/>
                )))}
            </div>
        </div>
    );
};
