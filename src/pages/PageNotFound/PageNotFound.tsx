import React from 'react';
import {useNavigate} from 'react-router-dom';

import s from './PageNotFound.module.scss'
import {PATH} from "../../utils/routes/routes";


export const PageNotFound = () => {
    const navigate = useNavigate();
    const navigateToMainPage = () => {
        navigate(PATH.allCountries);
    };

    return (
        <div className={s.pageNotFound}>
            <h2>Page Not Found</h2>

            <p className={s.text}>
                страница, на которую вы пытаетесь
                попасть, не существует или была удалена.
            </p>

            <span onClick={navigateToMainPage}> Перейти на Главную страницу</span>
        </div>
    );
};
