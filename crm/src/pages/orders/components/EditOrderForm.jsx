// import React, { useState, useEffect } from "react";
// import { useOrders } from "../OrdersContext";
// import { BuildServiceSelect } from "./Order";
// import { BuildMastersSelect } from "./Order";
// import { useInput } from '../../../hooks';
// import OrdersApi from "../../../api/orders-api";

// export function EditOrderForm(props) { /** возвращает разметку формы с заполненными полями */
//   const [order, setOrder] = useState(props.currentOrder);

//   const handleInputChange = event => {
//     const { name, phone, masterId, serviceId, visitDate,} = event.target;
//      setOrder ({
//        name: [surName.value, firstName.value],
//        phone: phone.value,
//        masterId: masterId,
//        serviceId: serviceId,
//        visitDate: visitDate.value});
//   }


  

//   const  handleSubmit = event => { /** сохраняет изменения в заявке */
//     event.preventDefault();
//     if (!order.visitDate || !order.customer.firstName || !order.customer.surName || !order.master || !order.service}
    
//     // OrdersApi.createOrder(ord).then(reloadOrderList());

    
//   }

//   return (
//   <div className='container'>  
//       <div class="">
//         <form className="change-form" onSubmit={handleForm}>

//           <label>
//             <span>Фамилия:</span>
//             <input type="text" name="surName" />
//           </label>


          
//           <div>
//             <button id="btn-submit" className="add">Записать</button>
//             <button id="close-btn" className="close">Отменить</button>
//           </div>
                      
//         </form>
//       </div>
//     </div>
//   );

// }
  
