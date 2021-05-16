import React from 'react';

export function GoodItem(props) {
    const {
        mainId,
        displayName,
        displayDescription,
        displayAssets:[{full_background}],
        price:{regularPrice},
        handleOrder = Function.prototype,
    } = props;


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
          <span className="right" style={{fontSize: '14px', fontWeight: 'bold', marginLeft: '15px'}}>{regularPrice} у.е.</span>
        </div>
      </div>
    )
}