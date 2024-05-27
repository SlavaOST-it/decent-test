import React from 'react';
import {Alert, Spin} from 'antd';
import {useSelector} from "react-redux";
import {Navigate, Route, Routes} from 'react-router-dom';

import s from './App.module.scss'

import {PATH} from "../utils/routes/routes";
import {AppStatus} from "../common/types/commonTypes";
import {selectErrorApp, selectStatusApp} from "../state/reducers/appReducer/appReducer";

import {ListCountries, PageNotFound, CountryInfo} from "../pages";



function App() {
    const appStatus = useSelector(selectStatusApp)
    const errorApp = useSelector(selectErrorApp)

    return (
        <div className={s.app}>
            <Routes>
                <Route path={'/'} element={<Navigate to={PATH.allCountries}/>}/>
                <Route path={PATH.allCountries} element={<ListCountries/>}/>
                <Route path={`${PATH.country_info}/:nameCountry`} element={<CountryInfo/>}/>
                <Route path={PATH.page404} element={<PageNotFound/>}/>
                <Route path={"*"} element={<Navigate to={PATH.page404}/>}/>
            </Routes>

            <Spin
                size={'large'}
                fullscreen={true}
                spinning={appStatus === AppStatus.LOADING}
            />

            <div className={s.alert}>
                {errorApp &&
                    <Alert
                        message="Error"
                        description={errorApp}
                        type="error"
                        showIcon
                        banner={true}
                    />
                }
            </div>
        </div>
    );
}

export default App;
