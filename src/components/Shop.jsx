import React, { useEffect, useState } from 'react';
import { API_KEY, API_URL } from '../config';
import { Alert } from './Alert';
import { BusketList } from './BusketList';
import { GoodsList } from './GoodsList';
import { Preloader } from './Preloader';
import { ShopCart } from './ShopCart';

export function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [visibleBusket, setVisibleBusket] = useState(false);
    const [alertName, setAlertName] = useState('');

    const closeAlert = () => {
        setAlertName('');
    };
    const handleVisibleBusket = () => {
        setVisibleBusket(!visibleBusket);
    };
    const deleteOrder = (id) => {
        setOrder(order.filter((e) => e.id !== id))
    };
    const handleQuantity = (id, plusOrMinus = '') => {
        if (plusOrMinus === "plus") {
            const newQuantity = order.map((e) => {
                if(id === e.id) {
                    return {
                        ...e,
                        quantity: e.quantity + 1
                    }
                } else {
                    return e;
                }
            })
            setOrder(newQuantity)
        } else if (plusOrMinus === "minus") {
            const newQuantity = order.map((e) => {
                if(id === e.id) {
                    return {
                        ...e,
                        quantity: e.quantity > 0 ? e.quantity - 1 : 0
                    }
                } else {
                    return e;
                }
            })
            setOrder(newQuantity);
        }
    };
    const handleOrder = (clientOrder) => {
        const findOrderIndex = order.findIndex((e) => (
            e.id === clientOrder.id
        ));
        if (findOrderIndex < 0) {
            const newItem = {
                ...clientOrder,
                quantity: 1,
            };
            setOrder([...order, newItem]);
        } else {
            const newOrder = order.map((e, index) => {
                if (index === findOrderIndex) {
                    return {
                        ...e,
                        quantity: e.quantity + 1,
                    };
                } else {
                    return e;
                }
            })
            setOrder(newOrder);
        }
        setAlertName(clientOrder.name)
    };
    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then(response => response.json())
            .then((data) => {
                data.shop && setGoods(data.shop);
                setLoading(false);
            })
            .catch((err) => console.error(err))
    }, []);

    return (
        <div className='container content'>
            <ShopCart quantity={order.length}
                      handleVisibleBusket={handleVisibleBusket} />

            {loading ? <Preloader /> : <GoodsList handleOrder={handleOrder}
                                                  goods={goods} />}

            {visibleBusket ? <BusketList handleQuantity={handleQuantity}
                                         deleteOrder={deleteOrder}
                                         handleVisibleBusket={handleVisibleBusket}
                                         order={order} /> : null}
            {alertName && <Alert closeAlert = {closeAlert}
                                 name = {alertName} />}
        </div>
    )
}