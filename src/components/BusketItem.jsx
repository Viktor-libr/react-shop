function BusketItem(props) {
    const { name,
            quantity,
            prise,
            id,
            deleteOrder = Function.prototype,
            handleQuantity = Function.prototype } = props;
            
    return (
        <li className="collection-item item-collection">
            {name}:
            <span className='item-collection-arrow'>
                <i className="material-icons close-busket" onClick={() => handleQuantity(id, "minus")}>
                    arrow_back</i>
                <i className="collection-arrow">{quantity}</i> <i className="material-icons close-busket" onClick={() => handleQuantity(id, "plus")}>
                    arrow_forward</i>
            </span>
            : {prise * quantity}
            <span className="secondary-content close-busket">
                <i className="material-icons close-busket" onClick={() => deleteOrder(id)}>
                    delete_forever</i>
            </span>
        </li>
    )
};

export { BusketItem };