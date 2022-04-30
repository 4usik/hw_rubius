import React, {useEffect, useState, useContext} from 'react';
import { createContext } from 'react';
import OrdersApi from '../../api/orders-api';
import MastersApi from '../../api/masters-api';
import ServicesApi from '../../api/services-api';

export const OrdersContext = createContext(null); /* Передает значение во все вложенные компоненты (в children) */

export function OrdersProvider({ children }) {
    /* Возвращает разметку OrdersContext, передавая во все вложенные компоненты value, по сути createContext(null -> value) */
    const [orders, setOrders] = useState([]); /*  */
    const [search, setSearch] = useState('');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [status, setStatus] = useState('');
    const [masters, setMasters] = useState([]);
    const [services, setServices] = useState([]);
    
    useEffect(() => { /* Выводит элементы, которые соответсвуют полученному значению search */
        OrdersApi.getOrders(search, from, to, status).then(setOrders); /* получает данные о заявках с сервера
        и записывает полученные данные в orders посредством setOrders,
        search получаем из input OrdersFilter */
        MastersApi.getMasters(masters).then(setMasters);
        ServicesApi.getServices(services).then(setServices);
    }, [search, from, to, status]);

    function removeOrder(orderId) {/* создает новый массив, со всеми элементами, прошедшими проверку,
    задаваемую в переданной функции, orderId передается из Order.jsx */
        const filteredOrders = orders.filter(order => order.id !== orderId);
        setOrders(filteredOrders);
        OrdersApi.removeOrder(orderId);
    }

    function reloadOrderList(){
        OrdersApi.getOrders(search, from, to, status).then(setOrders);
    }
    
    return <OrdersContext.Provider  value={{ reloadOrderList, orders, removeOrder, search, setSearch, from, setFrom, to, setTo, status, setStatus, masters, setMasters, services, setServices }}>
        {children} 
    </OrdersContext.Provider>
}

export const useOrders = () => useContext(OrdersContext);/* Передает значения search, setSearch из OrdersFilter в OrdersContext;
orders;
removeOrder из Order.jsx */