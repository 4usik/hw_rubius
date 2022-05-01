// import { API_PATH } from "../constants";
import { HttpService } from "../services/http-service";

class OrdersApi extends HttpService {
    constructor() {
        super('orders');
    }

 /* Возвращает список заявок */
    getOrders(search = '', from='', to='', status='') {
        return this.get('?' +  `search=${search}` + `&from=${from}` + `&to=${to}` + `&status=${status}`);
    }

 /* Отправляет заявку */
    createOrder(orderData) {
        return this.post('', orderData);
    }

    removeOrder(id){
        return this.delete(id);
    }

    patchOrder(id) {
        return this.patch(id);
    }

//  /* Редактирует заявку */
//  createOrder(orderData) {
//     return this.post('orders', orderData);
// }

}

export default new OrdersApi();