import React, {useState, useEffect} from "react";
import { useOrders } from "../OrdersContext";
import { Order } from "./Order";
import OrdersApi from "../../../api/orders-api";
import { OrderForm } from "./OrderForm";

export function OrdersList() {
  const { orders, resetStateOfOrderFields, setEditing } = useOrders();

    return (
    <div className='container'>
          
      <div className="table">
        <table>
          {orders?.length !== 0 && 
            <>
              <div className="col">
                <tr className="tr">
                    <td>ФИО</td>
                    <td>телефон</td>
                    <td>дата</td>
                    <td>мастер</td>
                    <td>услуга</td>
                    <td>статус</td>
                </tr>
              </div>
            </>
          }

          {orders?.length === 0 && <p>Заявки отсутствуют</p>}
            {/* Возвращает массив элементов с результатом вызова указанной функции для каждого элемента массива;
            возвращает список заявок, присваивая id в div значения с сервера*/}
            {orders.map(item => ( 
              <div key={item.id} className="col">
                <Order data={item} />
              </div>
            ))}
          
          
          <tr>
            <td id="td-btn">
              <button className="btn" onClick = {() => {
                resetStateOfOrderFields();
                setEditing(false);
                }}>Добавить запись</button>
            </td>
          </tr>
        </table>

      </div>
    </div>
    );
  }

  
  