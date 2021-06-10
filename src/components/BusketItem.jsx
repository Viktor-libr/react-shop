import {useContext} from 'react';
import {ContextShop} from '../context';

function BusketItem(props) {
    const { name,
            quantity,
            prise,
            id } = props;
            
            const {deleteOrder, handleQuantity} = useContext(ContextShop)
            
    return (
        <li className="collection-item item-collection">
            {name}:
                <i className="material-icons close-busket" onClick={() => handleQuantity(id, "minus")}>
                remove</i>
                <i className="collection-arrow">{quantity}</i> <i className="material-icons close-busket" onClick={() => handleQuantity(id, "plus")}>
                add</i>
            : {prise * quantity}
            <span className="secondary-content close-busket delete-busket-item">
                <i className="material-icons close-busket close-busket-item" onClick={() => deleteOrder(id)}>
                    delete_forever</i>
            </span>
        </li>
    )
};

export { BusketItem };