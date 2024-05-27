import React, {useEffect} from 'react';
import {useSelector} from "react-redux";

import s from './CountryInfo.module.scss'

import {useAppDispatch} from "../../utils/hooks/hooks";
import {selectCountry, setCountry} from "../../state/reducers/countryReducer/countryReducer";


export const CountryInfo = () => {
    const dispatch = useAppDispatch();
    const country = useSelector(selectCountry);

    useEffect(() => {
        const savedCountry = localStorage.getItem('savedCountry');
        if (country === null && savedCountry) {
            const parsedCountry = JSON.parse(savedCountry);
            dispatch(setCountry({country: parsedCountry}));
        }
    }, []);

    return (
        <div className={s.countryInfo}>
            <h3>Название страны: {country?.name.official}</h3>

            <img src={country?.flags.png} alt={'flag country'}/>

            <h3>Регион: {country?.region}</h3>
            <h3>Столица: {country?.capital[0]}</h3>

        </div>
    );
};
