import { useContext, useEffect } from "react";
import { ContextShop } from "../context";


function Alert (props) {
    const {alertName, closeAlert} = useContext(ContextShop);
    useEffect(() => {
        const alertTimeOut = setTimeout(closeAlert ,3000)

        return () => {
            clearTimeout(alertTimeOut)
        };
        //eslint-disable-next-line
    }, [alertName])

    return (
        <div id="toast-container">
            <div className="toast">
                {alertName} добавлено в корзину!
            </div>
        </div>
    )
}

export {Alert}