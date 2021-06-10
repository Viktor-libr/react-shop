import { createContext, useReducer } from "react";
import {reducer} from './reducer'

export const ContextShop = createContext();

const initialState = {
        goods: [],
        loading: false,
        order: [],
        visibleBusket: false,
        alertName: '',
    }

export const ContextProvider = ({children}) => { 

    const [value, dispatch] = useReducer(reducer, initialState);
    
    value.closeAlert = () => {
        dispatch({type:'CLOSE_ALERT'})
    };
    value.handleVisibleBusket = () => {
        dispatch({type: 'HANDELE_VISIBLE_BUSKET'})
    };
    value.deleteOrder = (id) => {
        dispatch({type: 'DELETE_ORDER', payload: id})
    };
    value.handleOrder = (clientOrder) => {
        dispatch({type: 'HANDLE_ORDER', payload: clientOrder})
    };
    value.handleQuantity = (id, plusOrMinus) => {
        dispatch({type: 'HANDLE_QUANTITY', payload: {id, plusOrMinus}})
    };
    value.setGoods = (data) => {
        dispatch({type: 'SET_GOODS', payload: data})
    };

    return (
        <ContextShop.Provider value = {value}>
            {children}
        </ContextShop.Provider>
    )
}