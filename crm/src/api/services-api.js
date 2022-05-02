import { HttpService } from "../services/http-service";

class ServicesApi extends HttpService {
    constructor() {
        super('services');
        // super('users');
    }

    getServices() {
        return this.get();
    }

}

export default new ServicesApi();