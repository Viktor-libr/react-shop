import { useEffect } from "react";


function Alert (props) {
    const {name = '', closeAlert = Function.prototype} = props;
    useEffect(() => {
        const alertTimeOut = setTimeout(closeAlert ,3000)

        return () => {
            clearTimeout(alertTimeOut)
        };
        //eslint-disable-next-line
    }, [name])

    return (
        <div id="toast-container">
            <div className="toast">
                {name} добавлено в корзину!
            </div>
        </div>
    )
}

export {Alert}