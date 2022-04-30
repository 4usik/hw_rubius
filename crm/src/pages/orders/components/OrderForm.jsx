import React, { useState } from "react";
import { useOrders } from "../OrdersContext";
import { BuildServiceSelect } from "./Order";
import { BuildMastersSelect } from "./Order";
import OrdersApi from "../../../api/orders-api";
import { useInput } from '../../../hooks';

export function OrderForm() {
  const name = useInput([]);
  const phone = useInput('');
  const [masterId, setMasterId] = useState('');
  const [serviceId, setServiceId] = useState('');
  const visitDate = useInput('');

  const { masters, services } = useOrders();
  const { reloadOrderList } = useOrders();

  function handleForm(event) {
    event.preventDefault();
    var ord = {
      name: name.value,
      phone: phone.value,
      masterId: masterId,
      serviceId: serviceId,
      visitDate: visitDate.value
    }
    OrdersApi.createOrder(ord).then(reloadOrderList());
  }

    return (
      
    <div className='container'>  
      <div class="">
        <form className="add-form" onSubmit={handleForm}>

        <label>
            <span>Фамилия:</span>
            <input {...name} />
          </label>


          <label>
            <span>Номер телефона:</span>
            <input {...phone} id="phone" class="field" type="tel" name="phone" inputmode="tel" placeholder="+7 (___) ___-__-__" />
          </label>

          <label>
            <span>Выберите мастера:</span>
            <select name="master" onChange={e => setMasterId(e.target.value)}>
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
            <select name="service" onChange={e => setServiceId(e.target.value)}>
              <option>Не указана</option>
              {services.map(item => (
                    <BuildServiceSelect data={item}/>
              ))}
              
              

            </select>
          </label>

          <label>
            <span>Дата визита:</span>
            <input type="datetime-local" {...visitDate} />
          </label>
          
          <div>
            <button id="btn-submit" className="add">Записать</button>
          </div>
                      
        </form>
      </div>
    </div>
    );
  }