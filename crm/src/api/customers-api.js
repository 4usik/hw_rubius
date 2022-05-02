// import { API_PATH } from "../constants";
import { HttpService } from "../services/http-service";

class CustomersApi extends HttpService {
    constructor() {
        super('customers');
    }

 /* Возвращает список клиентов */
    getCustomers() {
        return this.get();
    }

 /* Отправляет данные клиента */
    createCustomer(customerData) {
        return this.post('customers', customerData);
    }

//  /* Редактирует данные клиента */
//  createCustomer(customerData) {
//     return this.post('customers', customerData);
// }

}

export default new CustomersApi();