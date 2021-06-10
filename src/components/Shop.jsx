import React, { useContext, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';
import { ContextShop } from '../context';
import { Alert } from './Alert';
import { BusketList } from './BusketList';
import { GoodsList } from './GoodsList';
import { Preloader } from './Preloader';
import { ShopCart } from './ShopCart';

export function Shop() {
    const { setGoods, loading, visibleBusket, alertName} = useContext(ContextShop)


    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then(response => response.json())
            .then((data) => {
                setGoods(data.shop);
            })
            .catch((err) => console.error(err))
            //eslint-disable-next-line
    }, []);

    return (
        <div className='container content'>
            <ShopCart />

            {loading ? <Preloader /> : <GoodsList />}

            {visibleBusket ? <BusketList /> : null}
            {alertName && <Alert />}
        </div>
    )
}