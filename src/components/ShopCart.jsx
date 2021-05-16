import React from 'react';

function ShopCart (props) {
    const {quantity = 0, handleVisibleBusket = Function.prototype} = props;

    return(
        <div className='cart green lighten-4' onClick={handleVisibleBusket}>
            <i className='material-icons'>add_shopping_cart</i>
            {quantity ? <span className='cart-quantity'>{quantity}</span> : null}
        </div>
    )
}

export {ShopCart};