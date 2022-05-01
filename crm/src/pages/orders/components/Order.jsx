import { OmitProps } from "antd/lib/transfer/ListBody";
import React from "react";
import { useMasters, useOrders } from "../OrdersContext";

export function Order({data}) { /* возвращает строку с данными заявки */
    const { id, visitDate, status, customer, master, service } = data;
    const { removeOrder, HandleChange } = useOrders();

    return (

        <tr className="tr">
            <td>{customer.surName} {customer.firstName}</td>
            { customer.phone && <td>{customer.phone}</td> || <td>-</td>}
            { visitDate && <td>{visitDate}</td> || <td>-</td>}
            {master && <td>{master.surName} {master.firstName}</td> || <td>Не выбран</td>}
            {service && <td>{service.name}</td> || <td>Не указана</td>}
            {status && <td>{status}</td> || <td>Не указана</td>}
            <td><button className='order__remove' onClick={() => {
                let answer = window.confirm('Удалить заявку?');
                if (answer) {removeOrder(id)}}}>Удалить</button></td>
            <td><button className='order__change' onClick={() => {
            HandleChange(id)}}>Редактировать</button></td>
        </tr>
        
    
    );
}

export function BuildMastersSelect({ data }) {
    // const {master} = useMasters();
    //const { master } = data;

    return (
      <option value={data.id}>{data.surName} {data.firstName}</option>
    );
}


export function BuildServiceSelect({ data }) {

  return (
    <option value={data.id}>{data.name}</option>
  );
}