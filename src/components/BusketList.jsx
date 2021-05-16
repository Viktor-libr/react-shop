import React from 'react';
import { BusketItem } from './BusketItem';

function BusketList(props) {
    const { order, handleVisibleBusket, deleteOrder = Function.prototype, handleQuantity = Function.prototype } = props;
    const summaryPrise = order.reduce((sum, el) => {
        return sum + el.prise * el.quantity;
    }, 0);

    return (
        <ul className="collection busket-list">
            <li className="collection-item active">Корзина
                <span className="secondary-content close-busket" onClick={handleVisibleBusket}>
                    <i className="material-icons">clear</i>
                </span>
            </li>

            {order.length ? order.map((e) => (
                <BusketItem key={e.id} {...e} handleQuantity={handleQuantity} deleteOrder={deleteOrder} />)
            ) :
                <li className="collection-item">Корзина пуста</li>}

            <li className="collection summary-prise">Сума: <span className='sum-prise-total'>{summaryPrise}</span></li>
        </ul>
    )
};

export { BusketList };