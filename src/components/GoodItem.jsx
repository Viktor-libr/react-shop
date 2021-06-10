import React, { useContext } from 'react';
import { ContextShop } from '../context';

export function GoodItem(props) {
    const {
        mainId,
        displayName,
        displayDescription,
        displayAssets:[{full_background}],
        price:{regularPrice},
    } = props;

    const {handleOrder} = useContext(ContextShop);


    return (
        <div className="card" id={mainId}>
        <div className={"card-image"}>
          <img src={full_background} alt={displayName} />
        </div>
        <div className="card-content">
          <span className="card-title">{displayName}</span>
          <p>{displayDescription}</p>
        </div>
        <div className="card-action-my">
          <button className="btn" onClick={() => handleOrder({prise:regularPrice, name:displayName, id:mainId})}>Купить</button>
          <span className="right" style={{fontSize: '14px', fontWeight: 'bold'}}>{regularPrice} у.е.</span>
        </div>
      </div>
    )
}
