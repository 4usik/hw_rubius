import React from "react";
// import { useEffect, useState } from "react";
// import CustomersApi from "../../../api/customers-api";
// import OrdersApi from "../../../api/orders-api";

function handleForm(event) {
  event.preventDefault();
  // CustomersApi.creatCustomer({ surName, firstName, phone });
  // OrdersApi.creatOrder({ customer, visitDate, master, service });
}

export function OrderForm() {
    return (
    <div className='container'>  
      <div class="">
        <form className="add-form" onSubmit={handleForm}>

        <label>
            <span>Фамилия:</span>
            <input class="field" type="text" name="surName" />
          </label>

          <label>
            <span>Имя:</span>
            <input class="field" type="text" name="firstName" />
          </label>

          <label>
            <span>Номер телефона:</span>
            <input id="phone" class="field" type="tel" name="phone" inputmode="tel" placeholder="+7 (___) ___-__-__" />
          </label>

          <label>
            <span>Выберите мастера:</span>
            <select name="master">
              <option value="">Не выбран</option>
            </select>
          </label>

          <label>
            <span>Выберите услугу:</span>
            <select name="service">
              <option value="">Не выбран</option>
            </select>
          </label>

          <label>
            <span>Дата визита:</span>
            <input type="date" name="visitDate" />
          </label>
          
          <div>
            <button id="btn-submit" className="add">Записать</button>
          </div>
                      
        </form>
      </div>
    </div>
    );
  }
  