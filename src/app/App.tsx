import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {ListCountries} from "../pages";
import {PATH} from "../utils/routes/routes";
import s from './App.module.scss'


function App() {

    return (
        <div className={s.app}>
            <Routes>
                <Route path={'/'} element={<Navigate to={PATH.allCountries}/>}/>
                <Route path={PATH.allCountries} element={<ListCountries/>}/>
                <Route path={PATH.page404} element={''}/>
                <Route path={"*"} element={<Navigate to={PATH.page404}/>}/>
            </Routes>
        </div>
    );
}

export default App;
