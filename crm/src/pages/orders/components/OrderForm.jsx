import React, { useState } from "react";
import { useOrders } from "../OrdersContext";
import { BuildServiceSelect, BuildMastersSelect } from "./Order";
import OrdersApi from "../../../api/orders-api";
import { useInput } from '../../../hooks';
import ordersApi from "../../../api/orders-api";

export function OrderForm() {
  //const firstName = useInput([]);
  //const surName = useInput([]);
 // const [firstName, setFirstName] = useState('');
  //const [surName, setSurName] = useState('');
  //const [phone, setPhone] = useState('');
  //const [visitDate, setVisitDate] = useState('');
  //const [masterId, setMasterId] = useState('');
  //const [serviceId, setServiceId] = useState('');
  

  const { masters, services, currentOrder, customerNumber, customerFirstName, 
    customerSurName, orderVisitDate, orderMasterId, orderServiceId, editing } = useOrders();
  const { reloadOrderList, setCurrentOrder, setCustomerNubmer, setCustomerSurName,
     setCustomerFirstName, setOrderVisitDate, setOrderMasterId, setOrderServiceId, setEditing, resetStateOfOrderFields } = useOrders();
  
  const finishStatusEnum = { SUCCESS: 'Success', FAILED: 'Failed ' };

  function patchOrder(){
    var patchOrd = {
      customerId: currentOrder.customer.id,  
      masterId: orderMasterId,
      serviceId: orderServiceId,
      visitDate: orderVisitDate,
      status: currentOrder.status,
      finishStatus : finishStatusEnum.SUCCESS
    }
    ordersApi.patchOrder(currentOrder.id, patchOrd).then(reloadOrderList());
    setEditing(false);
    resetStateOfOrderFields();
  }

  function createOrder(){
    var ordForCreation = {
      name: customerFirstName + customerSurName,
      phone: customerNumber,
      masterId: orderMasterId,
      serviceId: orderServiceId,
      visitDate: orderVisitDate
    }
    OrdersApi.createOrder(ordForCreation).then(reloadOrderList());
    resetStateOfOrderFields();
  }

  function handleForm(event) {
    event.preventDefault();
    if (editing){
      patchOrder();
    }
    else {
      createOrder();
    }
  }

    return (
      
    <div className='container'>  
      <div class="">
        <form className="add-form" onSubmit={handleForm}>

        <label>
            <span>Фамилия:</span>
            <input value = {customerSurName} onChange={e => setCustomerSurName(e.target.value)} required/>
        </label>

        <label>
            <span>Имя:</span>
            <input value = {customerFirstName} onChange={e => setCustomerFirstName(e.target.value)} required/>
        </label>

          <label>
            <span>Номер телефона:</span>
            <input value = {customerNumber} onChange={e => setCustomerNubmer(e.target.value)} id="phone" class="field" type="tel" name="phone" inputmode="tel" required placeholder="+7 (___) ___-__-__" />
           
          </label>

          <label>
            <span>Выберите мастера:</span>
            <select value = {orderMasterId} onChange={e => setOrderMasterId(e.target.value)}>
              <option>Не выбран</option>
              <>
                {masters.map(item => (
                  <BuildMastersSelect data={item}/>
                ))}
              </>
              
              
            </select>
          </label>

          <label>
            <span>Выберите услугу:</span>
            <select value = {orderServiceId} onChange={e => {setOrderServiceId(e.target.value)}}>
              <option>Не указана</option>
              {services.map(item => (
                    <BuildServiceSelect data={item}/>
              ))}
              
              

            </select>
          </label>

          <label>
            <span>Дата визита:</span>
            <input type="datetime-local" value={orderVisitDate} onChange = {e => {setOrderVisitDate(e.target.value)}} required />
          </label>
          
          <div>
            <button id="btn-submit" className="add">Записать</button>
          </div>
                      
        </form>
      </div>
    </div>
    );
  }
