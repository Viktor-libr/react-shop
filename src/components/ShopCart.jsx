import React, { useContext } from 'react';
import { ContextShop } from '../context';

function ShopCart (props) {
    const {order, handleVisibleBusket } = useContext(ContextShop);
    const quantity = order.length;

    return(
        <div className='cart green lighten-4' onClick={handleVisibleBusket}>
            <i className='material-icons'>add_shopping_cart</i>
            {quantity ? <span className='cart-quantity'>{quantity}</span> : null}
        </div>
    )
}

export {ShopCart};