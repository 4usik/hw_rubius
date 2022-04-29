// import { API_PATH } from "../constants";
import { HttpService } from "../services/http-service";

class OrdersApi extends HttpService {
    constructor() {
        super('orders');
    }

 /* Возвращает список заявок */
    getOrders() {
        return this.get();
    }

 /* Отправляет заявку */
    createOrder(orderData) {
        return this.post('orders', orderData);
    }

//  /* Редактирует заявку */
//  createOrder(orderData) {
//     return this.post('orders', orderData);
// }

}

export default new OrdersApi();