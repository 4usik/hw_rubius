import React from "react";
import { useOrders } from "../OrdersContext";

export function Order({data}) { /* возвращает строку с данными заявки */
    const { id, visitDate, status, customer, master, service } = data;
    const { removeOrder } = useOrders();
    return (

        <tr className="tr">
            <td>{customer.surName} {customer.firstName}</td>
            <td>{customer.phone}</td>
            <td>{visitDate}</td>
            <td>{master.surName} {master.firstName}</td>
            <td>{service.name}</td>
            <td>{status}</td>
            <td><button className='order__remove' onClick={() => removeOrder(id)} >Удалить</button></td>
        </tr>
        
    
    );
}
