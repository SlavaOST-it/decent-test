import React, {FC} from 'react';
import {Link} from "react-router-dom";

import s from './CountryCard.module.scss'

import {PATH} from "../../utils/routes/routes";
import {CountryType} from "../../api/types/countryType";
import {useAppDispatch} from "../../utils/hooks/hooks";
import {setCountry} from "../../state/reducers/countryReducer/countryReducer";


type CountryCardType = {
    country: CountryType
}

export const CountryCard: FC<CountryCardType> = ({country}) => {
    const dispatch = useAppDispatch()

    const nameCountry = country.name.official
    const commonName = country.name.common
    const region = country.region
    const flag = country.flags.svg

    const showInfoCountry = (country: CountryType) => {
        dispatch(setCountry({country}))
        localStorage.setItem('savedCountry', JSON.stringify(country));
    }

    return (
        <Link to={`${PATH.country_info}/${commonName}`}>
            <div className={s.card}
                 onClick={() => showInfoCountry(country)}
            >
                <div>
                    <img src={flag} alt={'flag country'} className={s.img_card}/>
                </div>

                <div>
                    <h3>{nameCountry}</h3>
                    <span>{region}</span>
                </div>
            </div>
        </Link>
    );
};
