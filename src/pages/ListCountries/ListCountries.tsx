import React, {useEffect, useState} from 'react';
import {Pagination, PaginationProps} from "antd";

import s from './ListCountries.module.scss'

import {CountryCard} from "../../components";
import {useAppDispatch} from "../../utils/hooks/hooks";
import {AppStatus} from "../../common/types/commonTypes";
import {useGetAllCountriesQuery} from "../../api/countriesApi";
import {setAppError, setAppStatus} from "../../state/reducers/appReducer/appReducer";


export const ListCountries = () => {
    const dispatch = useAppDispatch();
    const {data, isLoading, error} = useGetAllCountriesQuery({})


    // ===== Pagination ===== //
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 15;
    const currentCountries = data?.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    const totalPages = data?.length || 0;

    const onChangePagination: PaginationProps['onChange'] = (page) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        if (error) {
            if ('message' in error) {
                const errMsg = error.message ? error.message : 'Unknown error';
                dispatch(setAppError({error: errMsg}));
            } else {
                dispatch(setAppError({error: 'Unknown error'}));
            }
        }
    }, [dispatch, error]);

    useEffect(() => {
        if (isLoading) {
            dispatch(setAppStatus({status: AppStatus.LOADING}))
        } else (
            dispatch(setAppStatus({status: AppStatus.IDLE}))
        )
    }, [dispatch, isLoading]);


    return (
        <div className={s.listCountries}>
            <h1>Страны мира</h1>

            <div className={s.cardsContainer}>
                {currentCountries?.map(((c, index) => (
                    <CountryCard country={c} key={index}/>
                )))}
            </div>

            <Pagination current={currentPage}
                        pageSize={pageSize}
                        total={totalPages}
                        onChange={onChangePagination}
                        showSizeChanger={false}
            />
        </div>
    );
};
