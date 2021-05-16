import React from 'react';
import { GoodItem } from './GoodItem';

export function GoodsList(props) {
    const { goods, handleOrder = Function.prototype } = props;
    return (
        <div className='stores'>
            {goods.map((e) => <GoodItem key={e.mainId} {...e} handleOrder={handleOrder}/>)}
        </div>
    )
};