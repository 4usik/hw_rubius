import { API_PATH } from "../constants";
import { HttpService } from "./http-service";

class ApiService extends HttpService {
    constructor() {
        super(API_PATH);
    }

 /* Возвращает список сотрудников */
    getMasters() {
        return this.get('staff');
    }
/* Возвращает список услуг */
    getServices() {
        return this.get('services');
    }
}

export default new ApiService();