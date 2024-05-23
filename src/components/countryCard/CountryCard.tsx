import React, {FC} from 'react';
import {CountryType} from "../../api/types/countryType";
import s from './CountryCard.module.scss'


type CountryCardType = {
    country: CountryType
}

export const CountryCard: FC<CountryCardType> = ({country}) => {
    const nameCountry = country.name.official
    const region = country.region
    const flag = country.flags.svg

    return (
        <div className={s.card}>
            <div>
                <img src={flag} alt={'flag country'} className={s.img_card} />
            </div>

            <div>
                <h3>{nameCountry}</h3>
                <div>{region}</div>
            </div>
        </div>
    );
};
