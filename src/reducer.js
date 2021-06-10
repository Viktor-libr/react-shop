

export const reducer = (state, { type, payload }) => {
    switch (type) {
        case 'SET_GOODS':
            return {
                ...state,
                goods: payload || [],
                loading: false,
            };
        case 'CLOSE_ALERT':
            return {
                ...state,
                alertName: ''
            };
        case 'HANDELE_VISIBLE_BUSKET':
            return {
                ...state,
                visibleBusket: !state.visibleBusket
            };
        case 'DELETE_ORDER':
            return {
                ...state,
                order: state.order.filter((e) => e.id !== payload),
            };
        case 'HANDLE_QUANTITY':
            let newQuantity = null;
            if (payload.plusOrMinus === 'plus') {
                newQuantity = state.order.map((e) => {
                    if (payload.id === e.id) {
                        return {
                            ...e,
                            quantity: e.quantity + 1
                        }
                    } else {
                        return e;
                    }
                });
            } else if (payload.plusOrMinus === 'minus') {
                newQuantity = state.order.map((e) => {
                    if (e.id === payload.id) {
                        return {
                            ...e,
                            quantity: e.quantity > 0 ? e.quantity - 1 : 0
                        }
                    } else {
                        return e;
                    }
                })
            };
            return {
                ...state,
                order: newQuantity
            };
        case 'HANDLE_ORDER':
            const findOrderIndex = state.order.findIndex((e) => e.id === payload.id);
            let newOrder = null;
            if (findOrderIndex < 0) {
                const newItem = {
                    ...payload,
                    quantity: 1,
                };
                newOrder = [...state.order, newItem]
            } else {
                newOrder = state.order.map((e, index) => {
                    if (index === findOrderIndex) {
                        return {
                            ...e,
                            quantity: e.quantity + 1,
                        };
                    } else {
                        return e;
                    }
                })
            }
            return {
                ...state,
                order: newOrder,
                alertName: payload.name
            };
        default: return state;
    }
}