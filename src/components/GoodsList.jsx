import React, { useContext } from 'react';
import { ContextShop } from '../context';
import { GoodItem } from './GoodItem';

export function GoodsList() {
    const { goods } = useContext(ContextShop);

    if(!goods.length) {
        return <h3>Ждемссс /(·)(·)\</h3>
    }
    return (
        <div className='stores'>
            {goods.map((e) => <GoodItem key={e.mainId} {...e}/>)}
        </div>
    )
};