import React, {useEffect, useState, useContext} from 'react';
import { createContext } from 'react';
import OrdersApi from '../../api/orders-api';

export const OrdersContext = createContext(null); /* Передает значение во все вложенные компоненты (в children) */

export function OrdersProvider({ children }) {
    /* Возвращает разметку OrdersContext, передавая во все вложенные компоненты value, по сути createContext(null -> value) */
    const [orders, setOrders] = useState([]); /*  */
    const [search, setSearch] = useState(''); 

    useEffect(() => { /* Выводит элементы, которые соответсвуют полученному значению search */
        OrdersApi.getOrders(search).then(setOrders); /* получает данные о заявках с сервера
        и записывает полученные данные в orders посредством setOrders,
        search получаем из input OrderFilter */
    }, [search]);

    function removeOrder(orderId) {/* создает новый массив, со всеми элементами, прошедшими проверку,
    задаваемую в переданной функции, orderId передается из Order.jsx */
        const filteredOrders = orders.filter(order => order.id !== orderId);
        setOrders(filteredOrders);
    }
    
    return <OrdersContext.Provider  value={{ orders, removeOrder, search, setSearch }}>
        {children} 
    </OrdersContext.Provider>
}

export const useOrders = () => useContext(OrdersContext);/* Передает значения search, setSearch из input в OrdersContext;
orders;
removeOrder из Order.jsx */